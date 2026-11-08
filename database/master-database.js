/**
 * ============================================================================
 * StudySphere / QuickQuiz 2.0 — Master Database Engine (Version 2.0 Turbo)
 * File: database/master-database.js
 * Description: Universal central nexus & syllabus aggregator engine.
 *              Standardizes data across 7 comprehensive exam modules:
 *              - Rajyaseva Prelims, Mains, and 26 Optionals
 *              - Combined Group B Prelims and Mains (Paper 1 & Paper 2)
 *              - Combined Group C Prelims and Mains (Paper 1 & Paper 2)
 *              Extracts nested chapters, subtopics, micro-concepts (chips),
 *              and compiles laser-targeted AI context payloads.
 * ============================================================================
 */

// Resilient imports supporting both standard naming conventions (.js / .data.js) and named/default exports
import * as rajyasevaPrelimsModule from './rajyaseva-prelims.js';
import * as rajyasevaMainsModule from './rajyaseva-mains.js';
import * as rajyasevaOptionalsModule from './rajyaseva-optionals.js';
import * as groupBPrelimsModule from './groupB-prelims.js';
import * as groupBMainsModule from './groupB-mains.js';
import * as groupCPrelimsModule from './groupC-prelims.js';
import * as groupCMainsModule from './groupC-mains.js';

// Resolve possible export variations (named vs default exports)
const resolveModuleData = (mod) => {
    if (!mod) return null;
    return mod.default || mod.data || mod[Object.keys(mod)[0]] || null;
};

const rawData = {
    rajyasevaPrelims: resolveModuleData(rajyasevaPrelimsModule),
    rajyasevaMains: resolveModuleData(rajyasevaMainsModule),
    rajyasevaOptionals: resolveModuleData(rajyasevaOptionalsModule),
    groupBPrelims: resolveModuleData(groupBPrelimsModule),
    groupBMains: resolveModuleData(groupBMainsModule),
    groupCPrelims: resolveModuleData(groupCPrelimsModule),
    groupCMains: resolveModuleData(groupCMainsModule)
};

/**
 * Universal helper to resolve human-readable titles safely
 */
function resolveTitle(item, fallback = 'उपलब्ध नाही') {
    if (!item) return fallback;
    if (typeof item === 'string') return item.trim();
    return (item.nameMr || item.name || item.nameEn || item.titleMr || item.title || item.id || fallback).trim();
}

/**
 * Recursive unwrapper to drill through nested duplicate chapter wrappers
 * (Handles structures like: subject.chapters[0].chapters[0].chapters, units, topics)
 */
function unwrapChapters(rawContainer) {
    if (!rawContainer) return [];
    let list = [];

    if (Array.isArray(rawContainer.chapters)) list = rawContainer.chapters;
    else if (Array.isArray(rawContainer.units)) list = rawContainer.units;
    else if (Array.isArray(rawContainer.topics)) list = rawContainer.topics;
    else if (Array.isArray(rawContainer.points)) list = rawContainer.points;
    else if (Array.isArray(rawContainer)) list = rawContainer;

    // Detect if the array contains a wrapper object that holds another chapters or units array
    if (list.length === 1 && list[0]) {
        if (Array.isArray(list[0].chapters) && list[0].chapters.length > 0) {
            return unwrapChapters(list[0].chapters);
        }
        if (Array.isArray(list[0].units) && list[0].units.length > 0) {
            return unwrapChapters(list[0].units);
        }
    }

    // Check if items are wrapper objects lacking direct topic content
    if (list.length > 0 && list[0] && Array.isArray(list[0].chapters) && !list[0].topics && !list[0].subtopics) {
        const flattened = [];
        list.forEach(item => {
            if (Array.isArray(item.chapters)) flattened.push(...item.chapters);
            else flattened.push(item);
        });
        if (flattened.length > 0) return unwrapChapters(flattened);
    }

    return list;
}

/**
 * Unpacks subtopics and semantic chips from a chapter with defensive property resolution
 */
function extractSubtopicsWithChips(chapterObj) {
    if (!chapterObj || typeof chapterObj === 'string') return [];
    const results = [];

    if (Array.isArray(chapterObj.topics) && chapterObj.topics.length > 0) {
        chapterObj.topics.forEach(t => {
            const topicName = t.nameMr || t.name || t.nameEn || t.titleMr || t.title || '';
            const topicSources = Array.isArray(t.sources) ? t.sources : (Array.isArray(t.referenceBooks) ? t.referenceBooks : []);

            if (Array.isArray(t.subtopics) && t.subtopics.length > 0) {
                t.subtopics.forEach(st => {
                    if (typeof st === 'string') {
                        results.push({
                            topic: topicName,
                            title: st.trim(),
                            chips: [],
                            sources: topicSources
                        });
                    } else if (st && typeof st === 'object') {
                        const subTitle = st.titleMr || st.nameMr || st.name || st.title || st.titleEn || st.nameEn || 'घटक';
                        results.push({
                            id: st.id || 'NA',
                            topic: topicName,
                            title: subTitle.trim(),
                            titleEn: st.titleEn || st.nameEn || 'NA',
                            chips: Array.isArray(st.chips) ? st.chips : [],
                            sources: topicSources
                        });
                    }
                });
            } else if (topicName) {
                results.push({
                    topic: topicName,
                    title: topicName.trim(),
                    chips: Array.isArray(t.chips) ? t.chips : [],
                    sources: topicSources
                });
            }
        });
        if (results.length > 0) return results;
    }

    if (Array.isArray(chapterObj.subtopics)) {
        return chapterObj.subtopics.map(s => {
            if (typeof s === 'string') return { topic: '', title: s.trim(), chips: [], sources: [] };
            const subTitle = s.titleMr || s.nameMr || s.name || s.title || s.titleEn || s.nameEn || 'घटक';
            return {
                id: s.id || 'NA',
                topic: '',
                title: subTitle.trim(),
                titleEn: s.titleEn || s.nameEn || 'NA',
                chips: Array.isArray(s.chips) ? s.chips : [],
                sources: []
            };
        });
    }

    return [];
}

/**
 * Main MPSC Master Engine Facade
 */
export const mpscMasterEngine = {
    raw: rawData,

    /**
     * Step 1: Available Exams
     */
    getExams() {
        return [
            { id: "rajyaseva", nameMr: "राज्यसेवा (Rajyaseva / Civil Services)", icon: "fa-solid fa-landmark" },
            { id: "group_b", nameMr: "संयुक्त गट-ब (Combined Group B)", icon: "fa-solid fa-shield-halved" },
            { id: "group_c", nameMr: "संयुक्त गट-क (Combined Group C)", icon: "fa-solid fa-briefcase" }
        ];
    },

    /**
     * Step 2: Available Stages for an Exam
     */
    getStages(examId) {
        if (!examId) return [];
        const stages = [
            { id: "prelims", nameMr: "पूर्व परीक्षा (Prelims)" },
            { id: "mains", nameMr: "मुख्य परीक्षा (Mains)" }
        ];
        if (examId === "rajyaseva") {
            stages.push({ id: "optionals", nameMr: "वैकल्पिक विषय (26 Optionals)" });
        }
        return stages;
    },

    /**
     * Step 3: Available Papers (or Optionals subjects list in step 3)
     */
    getPapers(examId, stageId) {
        if (!examId || !stageId) return [];

        // Optionals: Returns the list of 26 subjects
        if (stageId === 'optionals') {
            const optData = rawData.rajyasevaOptionals;
            const subjects = (optData && (optData.subjects || optData.optionals)) || [];
            return subjects.map((sub, idx) => ({
                id: sub.id !== undefined ? String(sub.id) : `opt_${idx}`,
                nameMr: sub.nameMr || sub.name || resolveTitle(sub),
                nameEn: sub.nameEn || '',
                code: sub.code || 'OPT',
                isOptionalSubject: true
            }));
        }

        // Group B / Group C Prelims: Single Combined Paper
        if ((examId === 'group_b' || examId === 'group_c') && stageId === 'prelims') {
            return [
                {
                    id: "combined_prelims_p1",
                    nameMr: "संयुक्त पूर्व परीक्षा (एकच संयुक्त पेपर)",
                    nameEn: "Combined Prelims Single Paper (100 Marks)",
                    totalMarks: 100,
                    isSinglePaper: true
                }
            ];
        }

        // Multi-paper stages
        let papersList = [];
        if (examId === 'rajyaseva' && stageId === 'prelims') papersList = rawData.rajyasevaPrelims?.papers || [];
        else if (examId === 'rajyaseva' && stageId === 'mains') papersList = rawData.rajyasevaMains?.papers || [];
        else if (examId === 'group_b' && stageId === 'mains') papersList = rawData.groupBMains?.papers || [];
        else if (examId === 'group_c' && stageId === 'mains') papersList = rawData.groupCMains?.papers || [];

        return papersList.map((p, idx) => ({
            id: p.id !== undefined ? String(p.id) : `paper_${idx + 1}`,
            nameMr: p.nameMr || p.name || p.title || `Paper ${p.paperNumber || idx + 1}`,
            nameEn: p.nameEn || '',
            marks: p.marks || p.totalMarks || 'NA',
            paperNumber: p.paperNumber || idx + 1
        }));
    },

    /**
     * Step 4: Available Subjects for selected Paper
     * (With flexible paper ID matching: paper_1, paper1, p1)
     */
    getSubjects(examId, stageId, paperId) {
        if (!examId || !stageId) return [];

        // Optionals: Paper 1 and Paper 2 of chosen optional subject
        if (stageId === 'optionals') {
            if (!paperId) return [];
            const optData = rawData.rajyasevaOptionals;
            const subjects = (optData && (optData.subjects || optData.optionals)) || [];
            const optSubject = subjects.find((s, idx) => (s.id !== undefined ? String(s.id) === String(paperId) : `opt_${idx}` === String(paperId)));
            if (!optSubject) return [];

            const list = [];
            if (optSubject.paper1) {
                list.push({
                    id: "paper1",
                    nameMr: optSubject.paper1.titleMr || optSubject.paper1.nameMr || "पेपर १ (Paper 1)",
                    nameEn: optSubject.paper1.titleEn || optSubject.paper1.nameEn || "Paper 1",
                    raw: optSubject.paper1
                });
            }
            if (optSubject.paper2) {
                list.push({
                    id: "paper2",
                    nameMr: optSubject.paper2.titleMr || optSubject.paper2.nameMr || "पेपर २ (Paper 2)",
                    nameEn: optSubject.paper2.titleEn || optSubject.paper2.nameEn || "Paper 2",
                    raw: optSubject.paper2
                });
            }
            return list;
        }

        // Group B / Group C Prelims: Directly from subjects array
        if ((examId === 'group_b' || examId === 'group_c') && stageId === 'prelims') {
            const source = examId === 'group_b' ? rawData.groupBPrelims : rawData.groupCPrelims;
            const subs = source?.subjects || [];
            return subs.map((s, idx) => ({
                id: s.id !== undefined ? String(s.id) : `sub_${idx}`,
                nameMr: s.nameMr || s.name || resolveTitle(s),
                nameEn: s.nameEn || '',
                code: s.code || 'NA',
                raw: s
            }));
        }

        // Multi-paper stages (Rajyaseva Pre/Mains, Group B/C Mains)
        if (!paperId) return [];
        let papersList = [];
        if (examId === 'rajyaseva' && stageId === 'prelims') papersList = rawData.rajyasevaPrelims?.papers || [];
        else if (examId === 'rajyaseva' && stageId === 'mains') papersList = rawData.rajyasevaMains?.papers || [];
        else if (examId === 'group_b' && stageId === 'mains') papersList = rawData.groupBMains?.papers || [];
        else if (examId === 'group_c' && stageId === 'mains') papersList = rawData.groupCMains?.papers || [];

        const cleanRequestedPaperId = String(paperId).toLowerCase().replace(/[^a-z0-9]/g, '');

        // Resilient paper matching (handles paper_1 vs paper1 vs p1)
        const pObj = papersList.find((p, idx) => {
            const currentId = (p.id !== undefined ? String(p.id) : `paper_${idx + 1}`).toLowerCase().replace(/[^a-z0-9]/g, '');
            return currentId === cleanRequestedPaperId || currentId.includes(cleanRequestedPaperId) || cleanRequestedPaperId.includes(currentId);
        });

        if (!pObj || !pObj.subjects) return [];

        return pObj.subjects.map((s, idx) => ({
            id: s.id !== undefined ? String(s.id) : `sub_${idx}`,
            nameMr: s.nameMr || s.name || resolveTitle(s),
            nameEn: s.nameEn || '',
            code: s.code || 'NA',
            raw: s
        }));
    },

    /**
     * Resolves the full subject object with metrics, theme, reference sources
     */
    getSubjectDetails(examId, stageId, paperId, subjectId) {
        const subjects = this.getSubjects(examId, stageId, paperId);
        const cleanSubId = String(subjectId).toLowerCase().replace(/[^a-z0-9]/g, '');

        const sub = subjects.find(s => {
            const thisId = String(s.id || s.code || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            return thisId === cleanSubId || thisId.includes(cleanSubId) || cleanSubId.includes(thisId);
        });

        if (!sub || !sub.raw) return null;

        const raw = sub.raw;
        const refSources = Array.isArray(raw.referenceSources) ? raw.referenceSources : (Array.isArray(raw.referenceBooks) ? raw.referenceBooks : []);

        return {
            id: sub.id,
            code: raw.code || 'NA',
            nameMr: raw.nameMr || raw.name || resolveTitle(raw),
            nameEn: raw.nameEn || 'NA',
            officialScope: raw.officialScope || 'NA',
            isMaharashtraReference: Boolean(raw.isMaharashtraReference),
            theme: raw.theme || { primaryColor: "#2563eb", bgColor: "#eff6ff", iconClass: "ri-book-open-line" },
            metrics: {
                totalChapters: raw.metrics?.totalChapters || unwrapChapters(raw).length || 'NA',
                totalEstimatedHours: raw.metrics?.totalEstimatedHours ? `${raw.metrics.totalEstimatedHours} तास` : 'NA',
                weightage: raw.metrics?.weightageRange || (raw.metrics?.avgQuestionsInMains ? `${raw.metrics.avgQuestionsInMains} प्रश्न / ${raw.metrics.targetMarks || ''} गुण` : 'NA'),
                targetMarks: raw.metrics?.targetMarks || 'NA'
            },
            subjectTags: Array.isArray(raw.subjectTags) ? raw.subjectTags : [],
            referenceSources: refSources,
            referenceBooks: refSources,
            filterCategory: raw.filterCategory || 'NA',
            rawObject: raw
        };
    },

    /**
     * Step 5: Unwrapped, Fully Standardized Chapters with Subtopics and Chips
     */
    getChapters(examId, stageId, paperId, subjectId) {
        const subDetails = this.getSubjectDetails(examId, stageId, paperId, subjectId);
        if (!subDetails || !subDetails.rawObject) return [];

        const rawChapters = unwrapChapters(subDetails.rawObject);
        return rawChapters.map((ch, idx) => {
            const isObj = typeof ch === 'object' && ch !== null;
            return {
                index: idx,
                id: isObj ? (ch.id || `chap_${idx + 1}`) : `chap_${idx + 1}`,
                code: isObj ? (ch.code || 'NA') : 'NA',
                section: isObj ? (ch.section || 'NA') : 'NA',
                nameMr: isObj ? (ch.nameMr || ch.name || resolveTitle(ch)) : String(ch),
                nameEn: isObj ? (ch.nameEn || 'NA') : 'NA',
                category: isObj ? (ch.category || 'NA') : 'NA',
                difficulty: isObj ? (ch.difficulty || 'NA') : 'NA',
                priority: isObj ? (ch.priority || 'NA') : 'NA',
                isMaharashtraReference: isObj ? Boolean(ch.isMaharashtraReference || subDetails.isMaharashtraReference) : false,
                estimatedHours: isObj ? (ch.estimatedHours ? `${ch.estimatedHours} तास` : 'NA') : 'NA',
                metaDescriptionMr: isObj ? (ch.metaDescriptionMr || ch.metaDescriptionEn || 'NA') : 'NA',
                metaDescriptionEn: isObj ? (ch.metaDescriptionEn || 'NA') : 'NA',
                tags: (isObj && Array.isArray(ch.tags)) ? ch.tags : [],
                searchKeywords: (isObj && Array.isArray(ch.searchKeywords)) ? ch.searchKeywords : [],
                subtopics: isObj ? extractSubtopicsWithChips(ch) : [],
                rawChapter: ch
            };
        });
    },

    /**
     * ========================================================================
     * AI PROMPT INJECTION PAYLOAD BUILDER
     * ========================================================================
     * Generates a clean, validated syllabus payload for Gemini AI queries.
     * Prevents hallucinations by strictly feeding authentic micro-chips and sources.
     */
    getAIContextPayload(examId, stageId, paperId, subjectId, chapterIndex = null) {
        const sub = this.getSubjectDetails(examId, stageId, paperId, subjectId);
        const allChapters = this.getChapters(examId, stageId, paperId, subjectId);
        const selected = chapterIndex !== null && allChapters[chapterIndex] ? allChapters[chapterIndex] : null;

        // Flatten chips safely so prompt generators receive a clean array of strings
        const flatChips = [];
        if (selected && Array.isArray(selected.subtopics)) {
            selected.subtopics.forEach(st => {
                if (Array.isArray(st.chips)) {
                    st.chips.forEach(c => {
                        if (c && !flatChips.includes(c)) flatChips.push(c);
                    });
                }
                if (st.title && !flatChips.includes(st.title)) {
                    flatChips.push(st.title);
                }
            });
        }

        let refBooks = sub?.referenceSources || sub?.referenceBooks || [];
        if (!Array.isArray(refBooks) || refBooks.length === 0) {
            refBooks = ["MPSC विहित अधिकृत संदर्भग्रंथ (Master Booklist 2026)", "NCERT व बालभारती पाठ्यपुस्तके"];
        }

        return {
            targetExam: examId,
            examStage: stageId,
            paperIdentifier: paperId,
            subject: {
                id: sub?.id,
                nameMr: sub?.nameMr || 'सामान्य अध्ययन',
                nameEn: sub?.nameEn || 'General Studies',
                officialScope: sub?.officialScope || 'MPSC Syllabus',
                referenceSources: refBooks,
                referenceBooks: refBooks,
                subjectTags: sub?.subjectTags || [],
                isMaharashtraReference: Boolean(sub?.isMaharashtraReference || selected?.isMaharashtraReference)
            },
            chapter: selected ? {
                id: selected.id,
                code: selected.code,
                nameMr: selected.nameMr,
                nameEn: selected.nameEn,
                scopeSummary: selected.metaDescriptionMr,
                difficulty: selected.difficulty || 'MEDIUM',
                priority: selected.priority || 'HIGH',
                isMaharashtraReference: Boolean(selected.isMaharashtraReference),
                tags: selected.tags || [],
                chips: flatChips,
                syllabusSubtopics: flatChips,
                rawSubtopics: selected.subtopics
            } : null,
            totalChaptersCount: allChapters.length,
            promptReadyInstruction: selected 
                ? `You are an elite MPSC expert tutor. Using only verified academic references, generate comprehensive exam notes and 10 multiple-choice questions for Chapter: "${selected.nameMr}" (${selected.nameEn}). Cover all concepts from conceptChips.` 
                : `Provide an overarching syllabus breakdown and priority study roadmap for MPSC subject: "${sub?.nameMr}".`
        };
    },

    /**
     * Search across all available subjects and chapters
     */
    searchSyllabus(keyword = '') {
        const query = keyword.trim().toLowerCase();
        if (!query) return [];

        const results = [];
        const exams = ['rajyaseva', 'group_b', 'group_c'];

        exams.forEach(examId => {
            const stages = this.getStages(examId);
            stages.forEach(stg => {
                const papers = this.getPapers(examId, stg.id);
                papers.forEach(p => {
                    const subjects = this.getSubjects(examId, stg.id, p.id);
                    subjects.forEach(sub => {
                        const chapters = this.getChapters(examId, stg.id, p.id, sub.id);
                        chapters.forEach(ch => {
                            const nameMatch = (ch.nameMr && ch.nameMr.toLowerCase().includes(query)) ||
                                              (ch.nameEn && ch.nameEn.toLowerCase().includes(query));
                            const tagMatch = ch.tags && ch.tags.some(t => t.toLowerCase().includes(query));
                            const chipMatch = ch.subtopics && ch.subtopics.some(st => 
                                (st.title && st.title.toLowerCase().includes(query)) ||
                                (st.chips && st.chips.some(c => c.toLowerCase().includes(query)))
                            );

                            if (nameMatch || tagMatch || chipMatch) {
                                results.push({
                                    examId,
                                    stageId: stg.id,
                                    paperId: p.id,
                                    subjectId: sub.id,
                                    chapterIndex: ch.index,
                                    chapterNameMr: ch.nameMr,
                                    chapterNameEn: ch.nameEn,
                                    subjectNameMr: sub.nameMr
                                });
                            }
                        });
                    });
                });
            });
        });

        return results;
    }
};

export default mpscMasterEngine;