
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TeacherFaq() {
    const { t } = useTranslation();
    const [openAccordion, setOpenAccordion] = useState(null);
    const handleAccordionClick = (idx) => {
        setOpenAccordion(openAccordion === idx ? null : idx);
    };

    // FAQ data for each section with translation keys
    const gettingStartedFaqs = [
        {
            question: t("teacherfaq.gettingStarted.q1.question"),
            answer: (
                <>
                    {t("teacherfaq.gettingStarted.q1.answer.part1")}{" "}
                    <span className="text-link-style">{t("teacherfaq.gettingStarted.q1.answer.register")}</span>{" "}
                    {t("teacherfaq.gettingStarted.q1.answer.part2")}{" "}
                    <span className="text-link-style">{t("teacherfaq.gettingStarted.q1.answer.editProfile")}</span>{" "}
                    {t("teacherfaq.gettingStarted.q1.answer.part3")}
                </>
            ),
        },
        {
            question: t("teacherfaq.gettingStarted.q2.question"),
            answer: (
                <>
                    {t("teacherfaq.gettingStarted.q2.answer.part1")}{" "}
                    <span className="font-semibold">{t("teacherfaq.gettingStarted.q2.answer.duration")}</span>.
                </>
            ),
        },
        {
            question: t("teacherfaq.gettingStarted.q3.question"),
            answer: (
                <>
                    {t("teacherfaq.gettingStarted.q3.answer")}
                </>
            ),
        },
        {
            question: t("teacherfaq.gettingStarted.q4.question"),
            answer: (
                <>
                    {t("teacherfaq.gettingStarted.q4.answer")}
                </>
            ),
        },
        {
            question: t("teacherfaq.gettingStarted.q5.question"),
            answer: (
                <>
                    {t("teacherfaq.gettingStarted.q5.answer.part1")}{" "}
                    <span className="text-link-style">{t("teacherfaq.gettingStarted.q5.answer.studentsPage")}</span>{" "}
                    {t("teacherfaq.gettingStarted.q5.answer.part2")}{" "}
                    <span className="font-semibold">{t("teacherfaq.gettingStarted.q5.answer.duration")}</span>.
                </>
            ),
        },
        {
            question: t("teacherfaq.gettingStarted.q6.question"),
            answer: (
                <>
                    {t("teacherfaq.gettingStarted.q6.answer.part1")}{" "}
                    <span className="text-link-style">{t("teacherfaq.gettingStarted.q6.answer.tipsPage")}</span>{" "}
                    {t("teacherfaq.gettingStarted.q6.answer.part2")}
                </>
            ),
        },
        {
            question: t("teacherfaq.gettingStarted.q7.question"),
            answer: (
                <>
                    {t("teacherfaq.gettingStarted.q7.answer")}
                </>
            ),
        },
    ];

    const lessonsTeachingFaqs = [
        {
            question: t("teacherfaq.lessonsTeaching.q1.question"),
            answer: (
                <>
                    {t("teacherfaq.lessonsTeaching.q1.answer")}
                </>
            ),
        },
        {
            question: t("teacherfaq.lessonsTeaching.q2.question"),
            answer: (
                <>
                    {t("teacherfaq.lessonsTeaching.q2.answer.part1")}{" "}
                    <span className="text-link-style">{t("teacherfaq.lessonsTeaching.q2.answer.editProfile")}</span>{" "}
                    {t("teacherfaq.lessonsTeaching.q2.answer.part2")}
                </>
            ),
        },
        {
            question: t("teacherfaq.lessonsTeaching.q3.question"),
            answer: (
                <>
                    {t("teacherfaq.lessonsTeaching.q3.answer")}
                </>
            ),
        },
        {
            question: t("teacherfaq.lessonsTeaching.q4.question"),
            answer: (
                <>
                    {t("teacherfaq.lessonsTeaching.q4.answer")}
                </>
            ),
        },
    ];

    const connectingStudentsFaqs = [
        {
            question: t("teacherfaq.connectingStudents.q1.question"),
            answer: (
                <>
                    {t("teacherfaq.connectingStudents.q1.answer.part1")}{" "}
                    <span className="text-link-style">{t("teacherfaq.connectingStudents.q1.answer.contactUs")}</span>{" "}
                    {t("teacherfaq.connectingStudents.q1.answer.part2")}
                </>
            ),
        },
        {
            question: t("teacherfaq.connectingStudents.q2.question"),
            answer: (
                <>
                    {t("teacherfaq.connectingStudents.q2.answer.part1")}{" "}
                    <span className="text-link-style">{t("teacherfaq.connectingStudents.q2.answer.contactUs")}</span>{" "}
                    {t("teacherfaq.connectingStudents.q2.answer.part2")}
                </>
            ),
        },
        {
            question: t("teacherfaq.connectingStudents.q3.question"),
            answer: (
                <>
                    {t("teacherfaq.connectingStudents.q3.answer.part1")}{" "}
                    <span className="text-link-style">{t("teacherfaq.connectingStudents.q3.answer.contactUs")}</span>{" "}
                    {t("teacherfaq.connectingStudents.q3.answer.part2")}
                </>
            ),
        },
        {
            question: t("teacherfaq.connectingStudents.q4.question"),
            answer: (
                <>
                    {t("teacherfaq.connectingStudents.q4.answer")}
                </>
            ),
        },
    ];

    const paymentsFeesFaqs = [
        {
            question: t("teacherfaq.paymentsFees.q1.question"),
            answer: (
                <>
                    {t("teacherfaq.paymentsFees.q1.answer.part1")}{" "}
                    <span className="font-semibold">{t("teacherfaq.paymentsFees.q1.answer.freeForTeachers")}</span>.
                </>
            ),
        },
        {
            question: t("teacherfaq.paymentsFees.q2.question"),
            answer: (
                <>
                    {t("teacherfaq.paymentsFees.q2.answer.part1")}{" "}
                    <span className="font-semibold">{t("teacherfaq.paymentsFees.q2.answer.paymentMethod")}</span>{" "}
                    {t("teacherfaq.paymentsFees.q2.answer.part2")}
                </>
            ),
        },
    ];

    const rulesSupportAccountFaqs = [
        {
            question: t("teacherfaq.rulesSupportAccount.q1.question"),
            answer: (
                <>
                    {t("teacherfaq.rulesSupportAccount.q1.answer.part1")}{" "}
                    <span className="text-link-style">{t("teacherfaq.rulesSupportAccount.q1.answer.editProfile")}</span>{" "}
                    {t("teacherfaq.rulesSupportAccount.q1.answer.part2")}
                </>
            ),
        },
        {
            question: t("teacherfaq.rulesSupportAccount.q2.question"),
            answer: (
                <>
                    {t("teacherfaq.rulesSupportAccount.q2.answer.part1")}{" "}
                    <span className="text-link-style">{t("teacherfaq.rulesSupportAccount.q2.answer.contactUs")}</span>{" "}
                    {t("teacherfaq.rulesSupportAccount.q2.answer.part2")}
                </>
            ),
        },
    ];

    // Unique index offset for each section
    const offset1 = 0;
    const offset2 = gettingStartedFaqs.length;
    const offset3 = offset2 + lessonsTeachingFaqs.length;
    const offset4 = offset3 + connectingStudentsFaqs.length;
    const offset5 = offset4 + paymentsFeesFaqs.length;

    return (
        <>
            <section className="bg-gray-100 py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <img
                        src="image/f1.png"
                        alt={t("teacherfaq.hero.imageAlt")}
                        className="w-full max-w-5xl mx-auto rounded-lg shadow-lg mb-8 object-cover h-auto"
                        style={{ maxHeight: 350 }}
                    />
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                        {t("teacherfaq.hero.title")}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        {t("teacherfaq.hero.description")}
                    </p>
                    <a
                        href="#cta-final"
                        className="bg-brand-green text-white font-semibold px-6 py-3 sm:px-8 sm:py-3 rounded-lg shadow-md hover-bg-brand-green-dark transition duration-150 text-lg"
                    >
                        {t("teacherfaq.hero.ctaButton")}
                    </a>
                </div>
            </section>
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {/* Getting Started & Profile */}
                    <div id="faq-section-getting-started" className="p-4 sm:p-6 bg-white rounded-xl shadow-lg">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-5 brand-green border-b-2 border-brand-green-light pb-3">
                            {t("teacherfaq.gettingStarted.title")}
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            {t("teacherfaq.gettingStarted.description")}
                        </p>
                        <div className="space-y-3 sm:space-y-4">
                            {gettingStartedFaqs.map((faq, idx) => (
                                <div key={idx} className={`accordion-item border border-gray-200 rounded-lg${openAccordion === idx + offset1 ? " open" : ""}`}>
                                    <button
                                        className="accordion-button w-full flex justify-between items-center text-left p-3 sm:p-4 focus:outline-none"
                                        onClick={() => handleAccordionClick(idx + offset1)}
                                        aria-expanded={openAccordion === idx + offset1}
                                        aria-controls={`faq-content-${idx + offset1}`}
                                    >
                                        <span className="text-md sm:text-lg font-medium text-gray-700">
                                            {faq.question}
                                        </span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div id={`faq-content-${idx + offset1}`} className={`accordion-content px-3 sm:px-4 text-gray-600 leading-relaxed text-sm sm:text-base${openAccordion === idx + offset1 ? '' : ' hidden'}`}>
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Lessons & Teaching */}
                    <div id="faq-section-lessons-teaching" className="mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-5 brand-green border-b-2 border-brand-green-light pb-3">
                            {t("teacherfaq.lessonsTeaching.title")}
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            {t("teacherfaq.lessonsTeaching.description")}
                        </p>
                        <div className="space-y-3 sm:space-y-4">
                            {lessonsTeachingFaqs.map((faq, idx) => (
                                <div key={idx} className={`accordion-item border border-gray-200 rounded-lg${openAccordion === idx + offset2 ? " open" : ""}`}>
                                    <button
                                        className="accordion-button w-full flex justify-between items-center text-left p-3 sm:p-4 focus:outline-none"
                                        onClick={() => handleAccordionClick(idx + offset2)}
                                        aria-expanded={openAccordion === idx + offset2}
                                        aria-controls={`faq-content-${idx + offset2}`}
                                    >
                                        <span className="text-md sm:text-lg font-medium text-gray-700">
                                            {faq.question}
                                        </span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div id={`faq-content-${idx + offset2}`} className={`accordion-content px-3 sm:px-4 text-gray-600 leading-relaxed text-sm sm:text-base${openAccordion === idx + offset2 ? '' : ' hidden'}`}>
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Connecting with Students */}
                    <div id="faq-section-connecting-students" className="mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-5 brand-green border-b-2 border-brand-green-light pb-3">
                            {t("teacherfaq.connectingStudents.title")}
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            {t("teacherfaq.connectingStudents.description")}
                        </p>
                        <div className="space-y-3 sm:space-y-4">
                            {connectingStudentsFaqs.map((faq, idx) => (
                                <div key={idx} className={`accordion-item border border-gray-200 rounded-lg${openAccordion === idx + offset3 ? " open" : ""}`}>
                                    <button
                                        className="accordion-button w-full flex justify-between items-center text-left p-3 sm:p-4 focus:outline-none"
                                        onClick={() => handleAccordionClick(idx + offset3)}
                                        aria-expanded={openAccordion === idx + offset3}
                                        aria-controls={`faq-content-${idx + offset3}`}
                                    >
                                        <span className="text-md sm:text-lg font-medium text-gray-700">
                                            {faq.question}
                                        </span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div id={`faq-content-${idx + offset3}`} className={`accordion-content px-3 sm:px-4 text-gray-600 leading-relaxed text-sm sm:text-base${openAccordion === idx + offset3 ? '' : ' hidden'}`}>
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Payments & Fees */}
                    <div id="faq-section-payments-fees" className="mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-5 brand-green border-b-2 border-brand-green-light pb-3">
                            {t("teacherfaq.paymentsFees.title")}
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            {t("teacherfaq.paymentsFees.description")}
                        </p>
                        <div className="space-y-3 sm:space-y-4">
                            {paymentsFeesFaqs.map((faq, idx) => (
                                <div key={idx} className={`accordion-item border border-gray-200 rounded-lg${openAccordion === idx + offset4 ? " open" : ""}`}>
                                    <button
                                        className="accordion-button w-full flex justify-between items-center text-left p-3 sm:p-4 focus:outline-none"
                                        onClick={() => handleAccordionClick(idx + offset4)}
                                        aria-expanded={openAccordion === idx + offset4}
                                        aria-controls={`faq-content-${idx + offset4}`}
                                    >
                                        <span className="text-md sm:text-lg font-medium text-gray-700">
                                            {faq.question}
                                        </span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div id={`faq-content-${idx + offset4}`} className={`accordion-content px-3 sm:px-4 text-gray-600 leading-relaxed text-sm sm:text-base${openAccordion === idx + offset4 ? '' : ' hidden'}`}>
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Platform Rules, Support & Account Management */}
                    <div id="faq-section-rules-support-account" className="mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-5 brand-green border-b-2 border-brand-green-light pb-3">
                            {t("teacherfaq.rulesSupportAccount.title")}
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            {t("teacherfaq.rulesSupportAccount.description")}
                        </p>
                        <div className="space-y-3 sm:space-y-4">
                            {rulesSupportAccountFaqs.map((faq, idx) => (
                                <div key={idx} className={`accordion-item border border-gray-200 rounded-lg${openAccordion === idx + offset5 ? " open" : ""}`}>
                                    <button
                                        className="accordion-button w-full flex justify-between items-center text-left p-3 sm:p-4 focus:outline-none"
                                        onClick={() => handleAccordionClick(idx + offset5)}
                                        aria-expanded={openAccordion === idx + offset5}
                                        aria-controls={`faq-content-${idx + offset5}`}
                                    >
                                        <span className="text-md sm:text-lg font-medium text-gray-700">
                                            {faq.question}
                                        </span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div id={`faq-content-${idx + offset5}`} className={`accordion-content px-3 sm:px-4 text-gray-600 leading-relaxed text-sm sm:text-base${openAccordion === idx + offset5 ? '' : ' hidden'}`}>
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <section id="cta-final" className="mt-12 sm:mt-16 py-10 sm:py-12 bg-gray-50 rounded-xl shadow-lg">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                            {t("teacherfaq.cta.title")}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            {t("teacherfaq.cta.description")}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="#"
                                className="bg-brand-green text-white font-semibold px-6 py-3 sm:px-8 sm:py-3 rounded-lg shadow-md hover-bg-brand-green-dark transition duration-150 text-lg"
                            >
                                {t("teacherfaq.cta.registerButton")}
                            </a>
                            <a
                                href="contact.html"
                                target="_blank"
                                className="bg-gray-200 text-gray-700 font-semibold px-6 py-3 sm:px-8 sm:py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-150 text-lg"
                            >
                                {t("teacherfaq.cta.contactButton")}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
