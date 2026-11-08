/**
 * ============================================================================
 * StudySphere — Firebase Google Auth & Cloud Data Sync Engine (Version 2.0)
 * File: assets/js/firebase-sync-engine.js
 * Description: Real-time 2-Way Cloud Backup for Quiz History, Vault Questions,
 *              Study Notes, Completed Chapters, Scores, and Streaks using
 *              Firebase Realtime Database. Zero window.confirm/alert.
 * ============================================================================
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getDatabase, 
  ref, 
  set, 
  get, 
  child 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// 1. Official Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmfNSxEHXL02TzeUz7fPs0b_HMp1d9pYE",
  authDomain: "quickquizmpsc.firebaseapp.com",
  databaseURL: "https://quickquizmpsc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quickquizmpsc",
  storageBucket: "quickquizmpsc.firebasestorage.app",
  messagingSenderId: "208947332745",
  appId: "1:208947332745:web:589570654dcf4f13232858",
  measurementId: "G-2S4MMLX2RK"
};

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const provider = new GoogleAuthProvider();

export const FirebaseSyncEngine = (() => {
  'use strict';

  let currentUser = null;
  let isSyncing = false;

  /**
   * --------------------------------------------------------------------------
   * 1. GOOGLE SIGN IN (1-Click Popup Handshake)
   * --------------------------------------------------------------------------
   */
  async function signInWithGoogle() {
    try {
      showToast("Google खात्याशी संपर्क जोडत आहे...", "info");
      const result = await signInWithPopup(auth, provider);
      currentUser = result.user;

      const profilePayload = {
        uid: currentUser.uid,
        displayName: currentUser.displayName || "MPSC Aspirant",
        email: currentUser.email || "",
        photoURL: currentUser.photoURL || "",
        lastLogin: new Date().toISOString()
      };

      localStorage.setItem('qq_firebase_user', JSON.stringify(profilePayload));
      
      // Update UI across all pages
      updateUserInterfaceState(profilePayload);
      
      // Perform initial 2-Way Sync
      await pullFromCloudAndRestore(currentUser.uid);
      await pushDeviceDataToCloud(currentUser.uid);

      showToast(`स्वागत आहे, ${profilePayload.displayName}! क्लाऊड बॅकअप सक्रिय झाला.`);
      window.dispatchEvent(new CustomEvent('qq-auth-changed', { detail: profilePayload }));
    } catch (error) {
      console.error("[Firebase Auth Error]", error);
      if (error.code === 'auth/popup-closed-by-user') {
        showToast("Google साइन-इन रद्द केले गेले.", "warning");
      } else {
        showToast("Google संपर्क अयशस्वी. कृपया इंटरनेट तपासा.", "error");
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * 2. SIGN OUT
   * --------------------------------------------------------------------------
   */
  async function logout() {
    try {
      await signOut(auth);
      currentUser = null;
      localStorage.removeItem('qq_firebase_user');
      updateUserInterfaceState(null);
      showToast("Google खात्यावरून यशस्वीरीत्या लॉगआउट झाले.");
      window.dispatchEvent(new CustomEvent('qq-auth-changed', { detail: null }));
    } catch (err) {
      console.error("[Firebase Logout Error]", err);
      showToast("लॉगआउट करताना त्रुटी आली.", "error");
    }
  }

  /**
   * --------------------------------------------------------------------------
   * 3. PUSH LOCAL STORAGE DATA TO FIREBASE (Accurate Schema Mapping)
   * --------------------------------------------------------------------------
   */
  async function pushDeviceDataToCloud(uid = null) {
    const targetUid = uid || currentUser?.uid;
    if (!targetUid || isSyncing) return;

    isSyncing = true;
    try {
      // Ingest authentic active keys used across StudySphere
      const quizHistory = JSON.parse(localStorage.getItem('qq_quiz_history') || '[]');
      const completedChapters = JSON.parse(localStorage.getItem('qq_completed_chapters') || '{}');
      const quizScores = JSON.parse(localStorage.getItem('qq_quiz_scores') || '{}');
      const vaultQuestions = JSON.parse(localStorage.getItem('qq_vault_questions') || '{}');
      const vaultData = JSON.parse(localStorage.getItem('qq_vault_data') || '{}');
      const vaultNotes = JSON.parse(localStorage.getItem('qq_vault_notes') || '{}');

      const syncPayload = {
        quizHistory: Array.isArray(quizHistory) ? quizHistory.slice(-200) : [], // retain up to 200 sessions
        completedChapters: completedChapters,
        quizScores: quizScores,
        vaultQuestions: vaultQuestions,
        vaultData: vaultData,
        vaultNotes: vaultNotes,
        lastSyncedAt: new Date().toISOString()
      };

      await set(ref(database, `users/${targetUid}/studyData`), syncPayload);
      console.log("[FirebaseSyncEngine] 2-Way Backup Synced to Cloud Successfully.");
      showToast("अभ्यास नोंदी क्लाऊडवर सुरक्षित जतन झाल्या!");
    } catch (err) {
      console.warn("[Firebase Backup Warning]", err);
    } finally {
      isSyncing = false;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * 4. PULL CLOUD DATA AND RESTORE TO DEVICE (Smart Merge)
   * --------------------------------------------------------------------------
   */
  async function pullFromCloudAndRestore(uid) {
    if (!uid) return;

    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `users/${uid}/studyData`));

      if (snapshot.exists()) {
        const cloud = snapshot.val();
        
        // 1. Merge Quiz History
        if (Array.isArray(cloud.quizHistory) && cloud.quizHistory.length > 0) {
          const localHistory = JSON.parse(localStorage.getItem('qq_quiz_history') || '[]');
          const combinedHistory = [...cloud.quizHistory, ...localHistory];
          
          // Deduplicate by timestamp or exam/subject/ch combination
          const uniqueHistory = Array.from(new Map(combinedHistory.map(h => [
            h.completedAt || `${h.examId}_${h.subjectId}_${h.chapterIndex}`, h
          ])).values());

          localStorage.setItem('qq_quiz_history', JSON.stringify(uniqueHistory.slice(-250)));
        }

        // 2. Merge Completed Chapters
        if (cloud.completedChapters && typeof cloud.completedChapters === 'object') {
          const localComp = JSON.parse(localStorage.getItem('qq_completed_chapters') || '{}');
          const mergedComp = { ...cloud.completedChapters, ...localComp };
          localStorage.setItem('qq_completed_chapters', JSON.stringify(mergedComp));
        }

        // 3. Merge Scores
        if (cloud.quizScores && typeof cloud.quizScores === 'object') {
          const localScores = JSON.parse(localStorage.getItem('qq_quiz_scores') || '{}');
          const mergedScores = { ...cloud.quizScores, ...localScores };
          localStorage.setItem('qq_quiz_scores', JSON.stringify(mergedScores));
        }

        // 4. Merge Starred Questions Vault
        if (cloud.vaultQuestions && typeof cloud.vaultQuestions === 'object') {
          const localQ = JSON.parse(localStorage.getItem('qq_vault_questions') || '{}');
          const mergedQ = { ...cloud.vaultQuestions, ...localQ };
          localStorage.setItem('qq_vault_questions', JSON.stringify(mergedQ));
        }

        // 5. Merge Saved Notes Vault
        if (cloud.vaultData && typeof cloud.vaultData === 'object') {
          const localVD = JSON.parse(localStorage.getItem('qq_vault_data') || '{}');
          const mergedVD = { ...cloud.vaultData, ...localVD };
          localStorage.setItem('qq_vault_data', JSON.stringify(mergedVD));
        }

        if (cloud.vaultNotes && typeof cloud.vaultNotes === 'object') {
          const localVN = JSON.parse(localStorage.getItem('qq_vault_notes') || '{}');
          const mergedVN = { ...cloud.vaultNotes, ...localVN };
          localStorage.setItem('qq_vault_notes', JSON.stringify(mergedVN));
        }

        console.log("[FirebaseSyncEngine] Local state updated from cloud data.");
      }
    } catch (err) {
      console.warn("[Firebase Restore Warning]", err);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * 5. UI STATE SYNCHRONIZER (HOME, DRAWER & DASHBOARD)
   * --------------------------------------------------------------------------
   */
  function updateUserInterfaceState(userProfile) {
    // 1. Home Page Card Label
    const homeLabel = document.getElementById('homeGoogleSyncSubtext');
    if (homeLabel) {
      homeLabel.textContent = userProfile ? (userProfile.displayName || "Google Synced") : "Sync records";
    }

    // 2. Navigation Drawer Sync Button & Label
    const drawerLabel = document.getElementById('drawerGoogleUserLabel');
    const drawerDot = document.getElementById('drawerGoogleStatusDot');
    const drawerBtn = document.getElementById('btnDrawerGoogleSync');

    if (drawerLabel && drawerDot) {
      if (userProfile) {
        drawerLabel.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400 font-bold truncate">${userProfile.displayName}</span>`;
        drawerDot.className = "w-2 h-2 rounded-full bg-emerald-500 shadow-sm shrink-0";
        if (drawerBtn) drawerBtn.title = `Logged in as ${userProfile.email}. Click to sync now.`;
      } else {
        drawerLabel.textContent = "Connect Google Account";
        drawerDot.className = "w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0";
        if (drawerBtn) drawerBtn.title = "Connect Google Account";
      }
    }

    // 3. Dashboard UI Sync if present on active page
    if (typeof window.syncGoogleProfileStatusUI === 'function') {
      window.syncGoogleProfileStatusUI();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * 6. INITIALIZATION & OBSERVER
   * --------------------------------------------------------------------------
   */
  function init() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser = user;
        const profile = {
          uid: user.uid,
          displayName: user.displayName || "Aspirant",
          email: user.email || "",
          photoURL: user.photoURL || "",
          lastActive: new Date().toISOString()
        };
        localStorage.setItem('qq_firebase_user', JSON.stringify(profile));
        updateUserInterfaceState(profile);
      } else {
        const cached = localStorage.getItem('qq_firebase_user');
        if (cached) {
          try {
            updateUserInterfaceState(JSON.parse(cached));
          } catch (e) {
            updateUserInterfaceState(null);
          }
        } else {
          updateUserInterfaceState(null);
        }
      }
    });
  }

  /**
   * Unified Toast Utility
   */
  function showToast(msg, type = "success") {
    if (typeof window.showToast === 'function') {
      window.showToast(msg, type);
      return;
    }

    const toast = document.getElementById('toastNotification');
    const text = document.getElementById('toastMessage');
    if (!toast || !text) return;

    text.textContent = msg;
    toast.classList.remove('translate-y-10', 'translate-y-12', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-10', 'opacity-0');
    }, 2800);
  }

  return {
    init,
    signInWithGoogle,
    logout,
    pushDeviceDataToCloud,
    pullFromCloudAndRestore
  };
})();

// Global window attachment for seamless accessibility
if (typeof window !== 'undefined') {
  window.FirebaseSyncEngine = FirebaseSyncEngine;

  window.triggerGoogleAuthAction = function() {
    const cached = localStorage.getItem('qq_firebase_user');
    if (cached) {
      // Sync immediately on tap without blocking window.confirm()
      FirebaseSyncEngine.pushDeviceDataToCloud();
    } else {
      FirebaseSyncEngine.signInWithGoogle();
    }
  };

  window.connectGoogleAccount = window.triggerGoogleAuthAction;
  window.logoutGoogleAccount = FirebaseSyncEngine.logout;
}

// Auto-run on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    FirebaseSyncEngine.init();
  });
}

export default FirebaseSyncEngine;
