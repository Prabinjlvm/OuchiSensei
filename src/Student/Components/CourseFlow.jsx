import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CourseFlow() {
  const { t } = useTranslation();
  // Add state for open FAQ
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ data
  const faqData = [
    {
      question: t("courseflow.faq_1_q"),
      answer: (
        <p className="text-gray-600">
          {t("courseflow.faq_1_a")}
        </p>
      ),
    },
    {
      question: t("courseflow.faq_2_q"),
      answer: (
        <p className="text-gray-600">
          {t("courseflow.faq_2_a_1")}<a
            href="https://dinfo.work/contact"
            className="text-orange-600 hover:underline font-semibold"
          >
            {t("courseflow.faq_2_a_link")}
          </a>{t("courseflow.faq_2_a_2")}
        </p>
      ),
    },
    {
      question: t("courseflow.faq_3_q"),
      answer: (
        <p className="text-gray-600">
          {t("courseflow.faq_3_a")}
        </p>
      ),
    },
    {
      question: t("courseflow.faq_4_q"),
      answer: (
        <p className="text-gray-600">
          {t("courseflow.faq_4_a")}
        </p>
      ),
    },
    {
      question: t("courseflow.faq_5_q"),
      answer: (
        <p className="text-gray-600">
          {t("courseflow.faq_5_a_1")}<a
            href="kiyaku.html"
            className="text-orange-600 hover:underline font-semibold"
          >
            {t("courseflow.faq_5_a_link")}
          </a>{t("courseflow.faq_5_a_2")}
        </p>
      ),
    },
  ];

  return (
    <div className="course-flow-root">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <header className="text-center my-8 md:my-12">
          <h1 className="text-3xl md:text-4xl font-bold header-main-title">
            {t("courseflow.header_title")}
          </h1>
          <p className="mt-4 text-gray-500 f16 al_left">
            {t("courseflow.header_desc_1")}<br />{t("courseflow.header_desc_2")}
          </p>
        </header>
        <section
          id="hero"
          className="text-center py-10 md:py-16 hero-gradient text-white rounded-xl shadow-2xl mb-12 md:mb-16"
        >
          <div className="px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("courseflow.hero_title")}
            </h2>
            <p className="text-base md:text-lg mb-8">
              {t("courseflow.hero_subtitle")}
            </p>
            <a
              href="https://dinfo.work/search"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-150 hover:scale-105"
            >
              {t("courseflow.hero_btn")}
            </a>
            <img
              src="image/head.png"
              alt={t("courseflow.hero_img_alt")}
              className="mt-8 mx-auto rounded-lg shadow-xl w-full max-w-md md:max-w-lg"
            />
          </div>
        </section>
        <section
          id="important-notice"
          className="my-12 md:my-16 p-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 rounded-md shadow-md"
        >
          <h3 className="text-xl font-semibold mb-3 text-yellow-800">
            {t("courseflow.notice_title")}
          </h3>
          <p className="mb-2">
            {t("courseflow.notice_desc_1")}
          </p>
          <p className="mb-4">
            {t("courseflow.notice_desc_2")}
          </p>
          <p>
            {t("courseflow.notice_desc_3")}
            <br />
            <a
              href="faq.html"
              className="font-semibold text-yellow-800 hover:underline"
            >
              {t("courseflow.notice_faq")}
            </a>{" | "}
            <a
              href="kiyaku.html"
              className="font-semibold text-yellow-800 hover:underline"
            >
              {t("courseflow.notice_terms")}
            </a>
          </p>
        </section>
        <section id="steps" className="my-12 md:my-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center section-title mb-10 md:mb-12">
            {t("courseflow.steps_title")}
          </h2>
          <div className="space-y-8 md:space-y-10">
            {/* Step 1 */}
            <article className="step-item flex flex-col md:flex-row items-start p-6 bg-white rounded-xl shadow-lg">
              <img
                src="image/ii1.png"
                alt={t("courseflow.step_1_img_alt")}
                className="w-16 h-16 md:w-20 md:h-20 mr-0 md:mr-6 mb-4 md:mb-0 rounded-full bg-green-100 p-2 object-contain flex-shrink-0"
              />
              <div className="flex-grow al_left">
                <h3 className="text-xl font-semibold step-title mb-2">
                  {t("courseflow.step_1_title")}
                </h3>
                <p className="text-gray-700 mb-1">
                  {t("courseflow.step_1_desc_1")}<a
                    href="https://dinfo.work/search"
                    className="text-orange-600 hover:underline font-semibold"
                  >
                    {t("courseflow.step_1_link")}
                  </a>{t("courseflow.step_1_desc_2")}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                  <li>
                    <strong>{t("courseflow.step_1_point")}</strong> {t("courseflow.step_1_point_desc")}
                  </li>
                  <li>
                    <strong>{t("courseflow.step_1_hint")}</strong> {t("courseflow.step_1_hint_desc")}
                  </li>
                </ul>
              </div>
            </article>
            {/* Step 2 */}
            <article className="step-item flex flex-col md:flex-row items-start p-6 bg-white rounded-xl shadow-lg">
              <img
                src="image/si2.png"
                alt={t("courseflow.step_2_img_alt")}
                className="w-16 h-16 md:w-20 md:h-20 mr-0 md:mr-6 mb-4 md:mb-0 rounded-full bg-green-100 p-2 object-contain flex-shrink-0"
              />
              <div className="flex-grow al_left">
                <h3 className="text-xl font-semibold step-title mb-2">
                  {t("courseflow.step_2_title")}
                </h3>
                <p className="text-gray-700 mb-1">
                  {t("courseflow.step_2_desc")}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                  <li>
                    <strong>{t("courseflow.step_2_point")}</strong> {t("courseflow.step_2_point_desc")}
                  </li>
                  <li>
                    <strong>{t("courseflow.step_2_action")}</strong> {t("courseflow.step_2_action_desc")}
                  </li>
                </ul>
              </div>
            </article>
            {/* Step 3 */}
            <article className="step-item flex flex-col md:flex-row items-start p-6 bg-white rounded-xl shadow-lg">
              <img
                src="image/si3.png"
                alt={t("courseflow.step_3_img_alt")}
                className="w-16 h-16 md:w-20 md:h-20 mr-0 md:mr-6 mb-4 md:mb-0 rounded-full bg-green-100 p-2 object-contain flex-shrink-0"
              />
              <div className="flex-grow al_left">
                <h3 className="text-xl font-semibold step-title mb-2">
                  {t("courseflow.step_3_title")}
                </h3>
                <p className="text-gray-700 mb-1">
                  {t("courseflow.step_3_desc")}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                  <li>
                    <strong>{t("courseflow.step_3_first")}</strong> {t("courseflow.step_3_first_desc")}
                  </li>
                  <li>
                    <strong>{t("courseflow.step_3_registered")}</strong> {t("courseflow.step_3_registered_desc")}
                  </li>
                  <li>
                    <strong>{t("courseflow.step_3_note")}</strong> {t("courseflow.step_3_note_desc_1")}<code className="bg-gray-200 px-1 rounded text-xs">hello-sensei.com</code>{t("courseflow.step_3_note_desc_2")}
                  </li>
                </ul>
              </div>
            </article>
            {/* Step 4 */}
            <article className="step-item flex flex-col md:flex-row items-start p-6 bg-white rounded-xl shadow-lg">
              <img
                src="image/si4.png"
                alt={t("courseflow.step_4_img_alt")}
                className="w-16 h-16 md:w-20 md:h-20 mr-0 md:mr-6 mb-4 md:mb-0 rounded-full bg-green-100 p-2 object-contain flex-shrink-0"
              />
              <div className="flex-grow al_left">
                <h3 className="text-xl font-semibold step-title mb-2">
                  {t("courseflow.step_4_title")}
                </h3>
                <p className="text-gray-700 mb-1">
                  {t("courseflow.step_4_desc")}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                  <li>
                    <strong>{t("courseflow.step_4_payment")}</strong>
                    <ul className="list-circle list-inside pl-4">
                      <li>{t("courseflow.step_4_payment_stripe")}</li>
                    </ul>
                  </li>
                  <li>
                    <strong>{t("courseflow.step_4_confirm")}</strong> {t("courseflow.step_4_confirm_desc_1")}<a
                      href="https://dinfo.work/user/login"
                      className="text-orange-600 hover:underline font-semibold"
                    >
                      {t("courseflow.step_4_confirm_link")}
                    </a>{t("courseflow.step_4_confirm_desc_2")}
                  </li>
                </ul>
              </div>
            </article>
            {/* Step 5 */}
            <article className="step-item flex flex-col md:flex-row items-start p-6 bg-white rounded-xl shadow-lg">
              <img
                src="image/si5.png"
                alt={t("courseflow.step_5_img_alt")}
                className="w-16 h-16 md:w-20 md:h-20 mr-0 md:mr-6 mb-4 md:mb-0 rounded-full bg-green-100 p-2 object-contain flex-shrink-0"
              />
              <div className="flex-grow al_left">
                <h3 className="text-xl font-semibold step-title mb-2">
                  {t("courseflow.step_5_title")}
                </h3>
                <p className="text-gray-700 mb-1">
                  {t("courseflow.step_5_desc")}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                  <li>
                    <strong>{t("courseflow.step_5_point")}</strong>
                    <ul className="list-circle list-inside pl-4">
                      <li><a
                        href="https://dinfo.work/node/817"
                        className="text-orange-600 hover:underline font-semibold"
                      >
                        {t("courseflow.step_5_point_sample")}
                      </a>{t("courseflow.step_5_point_sample_desc")}</li>
                      <li>{t("courseflow.step_5_point_subject")}</li>
                      <li>{t("courseflow.step_5_point_language")}</li>
                    </ul>
                  </li>
                  <li>
                    <strong>{t("courseflow.step_5_negotiation")}</strong> {t("courseflow.step_5_negotiation_desc")}
                  </li>
                  <li>
                    <strong>{t("courseflow.step_5_note")}</strong> <a
                      href="https://dinfo.work/contact"
                      className="text-orange-600 hover:underline font-semibold"
                    >
                      {t("courseflow.step_5_note_link")}
                    </a>{t("courseflow.step_5_note_desc")}
                  </li>
                </ul>
              </div>
            </article>
            {/* Step 6 */}
            <article className="step-item flex flex-col md:flex-row items-start p-6 bg-white rounded-xl shadow-lg">
              <img
                src="image/si6.png"
                alt={t("courseflow.step_6_img_alt")}
                className="w-16 h-16 md:w-20 md:h-20 mr-0 md:mr-6 mb-4 md:mb-0 rounded-full bg-green-100 p-2 object-contain flex-shrink-0"
              />
              <div className="flex-grow al_left">
                <h3 className="text-xl font-semibold step-title mb-2">
                  {t("courseflow.step_6_title")}
                </h3>
                <p className="text-gray-700 mb-1">
                  {t("courseflow.step_6_desc")}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                  <li>
                    <strong>{t("courseflow.step_6_place")}</strong> {t("courseflow.step_6_place_desc")}
                  </li>
                  <li>
                    <strong>{t("courseflow.step_6_fee")}</strong> {t("courseflow.step_6_fee_desc_1")}<strong className="text-red-600">{t("courseflow.step_6_fee_desc_2")}</strong>{t("courseflow.step_6_fee_desc_3")}
                  </li>
                  <li>
                    <strong>{t("courseflow.step_6_continue")}</strong> {t("courseflow.step_6_continue_desc")}
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section
          id="tips"
          className="my-12 md:my-16 p-6 bg-theme-primary-lightest border-l-4 border-green-400 text-green-700 rounded-md shadow-md"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-center text-green-800 mb-6">
            {t("courseflow.tips_title")}
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong>{t("courseflow.tips_1_title")}</strong> {t("courseflow.tips_1_desc_1")}<a
                  href="https://dinfo.work/node/817"
                  className="text-orange-600 hover:underline font-semibold"
                >
                  {t("courseflow.tips_1_link")}
                </a>{t("courseflow.tips_1_desc_2")}
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong>{t("courseflow.tips_2_title")}</strong> {t("courseflow.tips_2_desc")}
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong>{t("courseflow.tips_3_title")}</strong> {t("courseflow.tips_3_desc_1")}<strong className="text-red-600">{t("courseflow.tips_3_desc_2")}</strong>{t("courseflow.tips_3_desc_3")}
              </span>
            </li>
          </ul>
        </section>
        <section id="faq" className="my-12 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold section-title text-center md:text-left">
              {t("courseflow.faq_title")}
            </h2>
            <img
              src="https://placehold.co/100x100/eafaf1/4d8a1e?text=Q%26A"
              alt={t("courseflow.faq_img_alt")}
              className="w-20 h-20 md:w-24 md:h-24 mt-4 md:mt-0"
            />
          </div>
          <div className="space-y-4" id="faq-accordion">
            {faqData.map((item, idx) => (
              <div key={idx} className="faq-item bg-white rounded-lg shadow-md">
                <button
                  className="faq-question w-full flex justify-between items-center text-left p-4 md:p-5 focus:outline-none"
                  aria-expanded={openFaq === idx}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-lg font-medium text-gray-800">
                    {item.question}
                  </span>
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`faq-answer ${openFaq === idx ? "block" : "hidden"} p-4 md:p-5 border-t border-gray-200`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <a
              href="faq.html"
              className="text-orange-600 hover:underline font-semibold"
            >
              {t("courseflow.faq_more")}
            </a>
          </p>
        </section>
        <section
          id="final-cta"
          className="text-center py-10 md:py-16 final-cta-gradient text-white rounded-xl shadow-2xl mt-12 md:mt-16"
        >
          <div className="px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {t("courseflow.final_cta_title")}
            </h2>
            <p className="text-base md:text-lg mb-8">
              {t("courseflow.final_cta_desc")}
            </p>
            <a
              href="https://dinfo.work/search"
              className="inline-block bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-150 hover:scale-105"
            >
              {t("courseflow.final_cta_btn")}
            </a>
          </div>
        </section>
      </div>

      <style>{`
    .course-flow-root .hero-gradient {
      background-color: #6fba2c;
    }
    .course-flow-root .final-cta-gradient {
      background-color: #5a9a24;
    }
    .course-flow-root .faq-question svg {
      transition: transform 0.3s ease;
    }
    .course-flow-root .faq-question[aria-expanded="true"] svg {
      transform: rotate(180deg);
    }
    .course-flow-root .step-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    }
    .course-flow-root .step-item {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .course-flow-root .text-theme-primary { color: #6fba2c; }
    .course-flow-root .text-theme-primary-dark { color: #5a9a24; }
    .course-flow-root .bg-theme-primary-lightest { background-color: #f0fdf4; }
    .course-flow-root .border-theme-primary-light { border-color: #a7f3d0; }
    .course-flow-root .text-theme-primary-darker { color: #4d8a1e; }
    .course-flow-root .header-main-title { color: #5a9a24; }
    .course-flow-root .section-title { color: #6fba2c; }
    .course-flow-root .step-title { color: #5a9a24; }
  `}</style>
    </div>
  )
}