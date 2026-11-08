/**
 * ============================================================================
 * StudySphere — Universal Platform Common Controller & Utilities (Version 2.0)
 * File: assets/js/common.js
 * Description: Unified controller for modals (API Key, Policies, Feedback, 
 *              Donation, Install), theme toggler, PWA install prompts, and
 *              global toast utilities. Strictly zero emojis, 100% FontAwesome.
 * ============================================================================
 */

export const StudySphereCommon = (() => {
  'use strict';

  let deferredPwaPrompt = null;

  /**
   * 1. INITIALIZATION ON DOM READY
   */
  function init() {
    initTheme();
    setupPwaInstallListener();
    attachGlobalModalKeyboardGuards();
    attachBFCacheCleanup();
  }

  /**
   * 2. THEME SWITCHER & PERSISTENCE
   */
  function initTheme() {
    const savedTheme = localStorage.getItem('qq_theme') || 'light';
    applyTheme(savedTheme);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('qq_theme', newTheme);
    applyTheme(newTheme);
  }

  function applyTheme(theme) {
    const icons = document.querySelectorAll('#themeIcon, #btnThemeToggle i');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      icons.forEach(icon => {
        if (icon) icon.className = "fa-solid fa-sun text-amber-400";
      });
    } else {
      document.documentElement.classList.remove('dark');
      icons.forEach(icon => {
        if (icon) icon.className = "fa-solid fa-moon";
      });
    }
  }

  /**
   * 3. NAVIGATION DRAWER CONTROLLERS
   */
  function toggleDrawer() {
    const drawer = document.getElementById('sideMenuDrawer');
    if (!drawer) return;
    const isClosed = drawer.classList.contains('hidden');
    if (isClosed) {
      drawer.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      drawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  function closeDrawer() {
    const drawer = document.getElementById('sideMenuDrawer');
    if (drawer) {
      drawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  /**
   * 4. GENERIC ACCESSIBLE MODAL OPEN/CLOSE
   */
  function openModal(id) {
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove('hidden');
      el.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    }
  }

  function closeModal(id) {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('hidden');
      el.classList.remove('flex');
    }
    // Only remove overflow-hidden if no other modal is currently active
    const activeModals = document.querySelectorAll('[role="dialog"]:not(.hidden), .fixed.inset-0.flex:not(.hidden)');
    if (activeModals.length === 0) {
      document.body.classList.remove('overflow-hidden');
    }
  }

  /**
   * 5. API KEY GATEWAY MODAL BRIDGE (MULTI-ID RESILIENT)
   */
  function openApiKeyModal() {
    if (window.GatekeeperEngine && typeof window.GatekeeperEngine.openModal === 'function') {
      window.GatekeeperEngine.openModal();
    } else {
      const modal = document.getElementById('apiKeyModal') || 
                    document.getElementById('apiKeySetupModal') || 
                    document.getElementById('apiKeyGatewayModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
      }
    }
  }

  function closeApiKeyModal() {
    if (window.GatekeeperEngine && typeof window.GatekeeperEngine.closeModal === 'function') {
      window.GatekeeperEngine.closeModal();
    } else {
      const modal = document.getElementById('apiKeyModal') || 
                    document.getElementById('apiKeySetupModal') || 
                    document.getElementById('apiKeyGatewayModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
      }
    }
  }

  /**
   * 6. POLICIES & INFORMATION MODAL WITH DIRECT VIEW ROUTING
   * @param {'about'|'privacy'|'terms'|'storage'|'sitemap'} viewId
   */
  function openPolicy(viewId = 'about') {
    const views = ['about', 'privacy', 'terms', 'storage', 'sitemap'];
    const titleMap = {
      about: "StudySphere बद्दल (About Platform)",
      privacy: "गोपनीयता धोरण (Privacy Policy)",
      terms: "नियम, अटी व डिस्क्लेमर (Terms & Disclaimer)",
      storage: "स्थानिक साठवणूक धोरण (Storage Policy)",
      sitemap: "साइटमॅप (Site Navigation Map)"
    };

    views.forEach(v => {
      const el = document.getElementById(`policyView_${v}`);
      if (el) el.classList.toggle('hidden', v !== viewId);
    });

    const titleEl = document.getElementById('policyModalTitle');
    if (titleEl) {
      titleEl.textContent = titleMap[viewId] || titleMap.about;
    }

    openModal('policiesModal');
  }

  function closePolicy() {
    closeModal('policiesModal');
  }

  /**
   * 7. USER FEEDBACK MODAL & PERSISTENT SUBMISSION
   */
  function openFeedbackModal() {
    const banner = document.getElementById('fbSuccessBanner');
    const err = document.getElementById('fbErrorText');
    if (banner) banner.classList.add('hidden');
    if (err) err.classList.add('hidden');
    openModal('feedbackModal');
  }

  function closeFeedbackModal() {
    closeModal('feedbackModal');
  }

  async function submitFeedback(event) {
    if (event && event.preventDefault) event.preventDefault();

    const nameInp = document.getElementById('fbStudentName');
    const topicInp = document.getElementById('fbTopicName');
    const msgInp = document.getElementById('fbMessage');
    const errEl = document.getElementById('fbErrorText');
    const successBanner = document.getElementById('fbSuccessBanner');
    const btnSubmit = document.getElementById('btnSubmitFeedback');
    const btnText = document.getElementById('btnFeedbackText');

    const msg = (msgInp?.value || "").trim();
    if (msg.length < 5) {
      if (errEl) errEl.classList.remove('hidden');
      return;
    }
    if (errEl) errEl.classList.add('hidden');

    if (btnSubmit) btnSubmit.disabled = true;
    if (btnText) btnText.textContent = "नोंद पाठवत आहे...";

    const feedbackPayload = {
      timestamp: new Date().toISOString(),
      studentName: nameInp?.value?.trim() || "Anonymous Aspirant",
      topicContext: topicInp?.value?.trim() || "General Practice",
      message: msg,
      platform: "StudySphere Web"
    };

    try {
      // 1. Offline & Local Storage Persistence
      const localFeedback = JSON.parse(localStorage.getItem('qq_pending_feedback') || '[]');
      localFeedback.push(feedbackPayload);
      localStorage.setItem('qq_pending_feedback', JSON.stringify(localFeedback.slice(-30)));

      // 2. Network Post Attempt
      const GAS_URL = "https://script.google.com/macros/s/AKfycby9vN_6V63C70D22yVn1d3-QfFkG0p8y1Z9b8u/exec";
      fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackPayload)
      }).catch(() => {});

      if (successBanner) successBanner.classList.remove('hidden');
      if (msgInp) msgInp.value = "";

      showToast("अभिप्राय यशस्वीरीत्या नोंदवला गेला. धन्यवाद!");
      setTimeout(() => {
        closeFeedbackModal();
        if (btnSubmit) btnSubmit.disabled = false;
        if (btnText) btnText.textContent = "Submit Feedback";
      }, 1500);

    } catch (e) {
      showToast("अभिप्राय साठवला गेला.");
      closeFeedbackModal();
      if (btnSubmit) btnSubmit.disabled = false;
    }
  }

  /**
   * 8. DONATION & CONTRIBUTION MODAL CONTROLLERS
   */
  function openDonationModal(amount = 100) {
    setDonationAmount(amount);
    openModal('donationModal');
  }

  function closeDonationModal() {
    closeModal('donationModal');
  }

  function setDonationAmount(amt) {
    const inp = document.getElementById('donationCustomAmount');
    const tierTag = document.getElementById('donationTierTag');
    const qrImg = document.getElementById('desktopLiveQrImage');

    if (inp) inp.value = amt;
    
    if (tierTag) {
      tierTag.textContent = amt <= 50 ? "विद्यार्थी समर्थक" : 
                            amt <= 100 ? "सक्रिय अभ्यासक" : 
                            amt <= 500 ? "प्लॅटफॉर्म पॅट्रॉन" : "प्रायोजक";
    }

    if (qrImg) {
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=130x130&margin=0&data=upi%3A%2F%2Fpay%3Fpa%3Dvikram.joshi9089%40oksbi%26pn%3DStudySphere%26am%3D${amt}%26cu%3DINR%26tn%3DStudySphere%2520Contribution`;
      qrImg.src = qrUrl;
    }

    // Highlight active chip
    const chips = document.querySelectorAll('.donation-chip');
    chips.forEach(c => {
      const isMatch = c.textContent.trim() === `₹${amt}`;
      c.className = isMatch
        ? "donation-chip min-h-[34px] px-1 py-1 rounded-xl border-2 border-amber-500 bg-amber-500/15 text-xs font-black text-amber-600 dark:text-amber-400 transition-all cursor-pointer btn-spring flex items-center justify-center text-center"
        : "donation-chip min-h-[34px] px-1 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-amber-500 transition-all cursor-pointer btn-spring flex items-center justify-center text-center";
    });
  }

  function onDonationCustomInput() {
    const inp = document.getElementById('donationCustomAmount');
    const val = parseInt(inp?.value, 10) || 100;
    const err = document.getElementById('donationAmountError');

    if (val < 10 || val > 50000) {
      if (err) err.classList.remove('hidden');
    } else {
      if (err) err.classList.add('hidden');
      setDonationAmount(val);
    }
  }

  function triggerMobileUpiPay() {
    const amt = document.getElementById('donationCustomAmount')?.value || 100;
    const upiUri = `upi://pay?pa=vikram.joshi9089@oksbi&pn=StudySphere&am=${amt}&cu=INR&tn=StudySphere%20Contribution`;
    window.location.href = upiUri;
  }

  function closeThankYouModal() {
    closeModal('thankYouModal');
  }

  /**
   * 9. PWA INSTALL CONTROLLERS
   */
  function setupPwaInstallListener() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPwaPrompt = e;
      window.deferredPrompt = e;
    });

    window.addEventListener('appinstalled', () => {
      deferredPwaPrompt = null;
      window.deferredPrompt = null;
      closeModal('installModal');
      showToast("StudySphere ॲप यशस्वीरीत्या इन्स्टॉल झाले!");
    });
  }

  function triggerPWAInstall() {
    if (deferredPwaPrompt) {
      deferredPwaPrompt.prompt();
      deferredPwaPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          showToast("इन्स्टॉलेशन स्वीकारले.");
        }
        deferredPwaPrompt = null;
        window.deferredPrompt = null;
      });
    } else {
      openModal('installModal');
    }
  }

  /**
   * 10. NATIVE WEB SHARE API
   */
  async function share() {
    const shareData = {
      title: "StudySphere | MPSC सराव व्यासपीठ",
      text: "महाराष्ट्र लोकसेवा आयोगाच्या राज्यसेवा, संयुक्त गट-ब व गट-क परीक्षांसाठी १००% मोफत व जाहिरातमुक्त सराव व्यासपीठ.",
      url: window.location.origin + window.location.pathname
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') copyLinkFallback(shareData.url);
      }
    } else {
      copyLinkFallback(shareData.url);
    }
  }

  function copyLinkFallback(url) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast("वेबसाइट लिंक कॉपी झाली!");
      }).catch(() => {
        showToast("लिंक कॉपी करू शकलो नाही.", true);
      });
    } else {
      showToast("वेबसाईट: " + url);
    }
  }

  /**
   * 11. ESCAPE KEY GLOBAL LISTENER
   */
  function attachGlobalModalKeyboardGuards() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modals = [
          'policiesModal', 
          'donationModal', 
          'feedbackModal', 
          'installModal', 
          'thankYouModal', 
          'apiKeyModal', 
          'apiKeySetupModal', 
          'apiKeyGatewayModal'
        ];
        modals.forEach(mId => closeModal(mId));
        closeDrawer();
      }
    });
  }

  /**
   * 12. BFCACHE & GHOST MODAL RECOVERY
   */
  function attachBFCacheCleanup() {
    window.addEventListener('pageshow', () => {
      const modals = [
        'policiesModal', 
        'donationModal', 
        'feedbackModal', 
        'installModal', 
        'thankYouModal', 
        'apiKeyModal', 
        'apiKeySetupModal', 
        'apiKeyGatewayModal'
      ];
      modals.forEach(mId => closeModal(mId));
      closeDrawer();
      document.body.classList.remove('overflow-hidden');
    });
  }

  /**
   * 13. UNIFIED TOAST UTILITY
   */
  let toastTimer;
  function showToast(message, isError = false) {
    const toast = document.getElementById('toastNotification');
    const label = document.getElementById('toastMessage');
    if (!toast || !label) return;

    label.textContent = message;
    toast.classList.remove('translate-y-10', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-10', 'opacity-0');
    }, 2800);
  }

  return {
    init,
    toggleTheme,
    toggleDrawer,
    closeDrawer,
    openModal,
    closeModal,
    openApiKeyModal,
    closeApiKeyModal,
    openPolicy,
    closePolicy,
    openFeedbackModal,
    closeFeedbackModal,
    submitFeedback,
    openDonationModal,
    closeDonationModal,
    setDonationAmount,
    onDonationCustomInput,
    triggerMobileUpiPay,
    closeThankYouModal,
    triggerPWAInstall,
    share,
    showToast
  };
})();

// Attach to window for seamless HTML accessibility
if (typeof window !== 'undefined') {
  window.StudySphereCommon = StudySphereCommon;
  window.toggleTheme = StudySphereCommon.toggleTheme;
  window.toggleSideDrawer = StudySphereCommon.toggleDrawer;
  window.triggerShareWebsite = StudySphereCommon.share;
  window.openModal = StudySphereCommon.openModal;
  window.closeModal = StudySphereCommon.closeModal;
  window.openApiKeyModalDirect = StudySphereCommon.openApiKeyModal;
}

// Auto-run on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    StudySphereCommon.init();
  });
}

export default StudySphereCommon;