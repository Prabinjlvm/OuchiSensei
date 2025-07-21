import react from "react";
import { useTranslation, Trans } from "react-i18next";
import React, { useState } from "react";

export default function TeacherFindingStudents(){
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const tipsData = t('tfstips', { returnObjects: true });
    console.log(tipsData);

    function TipsAccordion() {
        return (
            <div className="space-y-4">
                {tipsData.map((tip, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={tip.id} className="accordion-item border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                className={`accordion-button w-full flex justify-between items-center text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none transition-colors duration-150${isOpen ? ' active' : ''}`}
                                aria-expanded={isOpen}
                                aria-controls={`content-${tip.id}`}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <span className="text-lg font-semibold" style={{ color: "var(--primary-color)" }}>
                                    <span className="mr-3">{tip.icon}</span>{tip.title}
                                </span>
                                <span className="accordion-icon text-xl font-bold" style={{ color: "var(--primary-color)" }}>
                                    {isOpen ? '-' : '+'}
                                </span>
                            </button>
                            <div
                                id={`content-${tip.id}`}
                                className={`accordion-content p-6 bg-white border-t border-gray-200${isOpen ? '' : ' hidden'} overflow-visible`}
                                style={{ maxHeight: 'none', overflow: 'visible' }}
                            >
                                <div className="prose prose-lg max-w-none">
                                    <h3 className="text-xl font-semibold mb-2">{tip.title.substring(tip.title.indexOf(':') + 1).trim()}</h3>
                                    <p className="italic text-gray-600 mb-4">{tip.question}</p>
                                    <p className="mb-4" dangerouslySetInnerHTML={{ __html: tip.crucialInfo }} />
                                    <h4 className="text-lg font-semibold mb-2" style={{ color: "var(--primary-color)" }}>{t('tfs_actionable_steps')}</h4>
                                    <ul className="list-disc list-inside space-y-1 mb-4">
                                        {tip.actionSteps.map((step, i) =>
                                            step.startsWith('<ul') ? (
                                                <span key={i} dangerouslySetInnerHTML={{ __html: step }} />
                                            ) : (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
                                            )
                                        )}
                                    </ul>
                                    {tip.note && (
                                        <p className="text-sm text-gray-500 mt-4" dangerouslySetInnerHTML={{ __html: tip.note }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <>
  <style>{`
        :root {
            --primary-color: #4a7d1d;
            --accent-color: #6fba2c;
        }
        .font-sans {
            font-family: 'Roboto', 'Noto Sans JP', sans-serif;
        }
        .sidebar-nav a.active {
            background-color: var(--primary-color);
            color: white;
            font-weight: bold;
        }
        .sidebar-nav a:hover {
            background-color: #e2f0d9;
        }
        .content-section h3 { color: var(--primary-color); }
        .cta-button { background-color: var(--accent-color); }
        .cta-button:hover { background-color: #5a9a1f; }
        .prose strong { color: var(--primary-color); }
    `}</style>
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-12 text-center">
      <h1
        className="text-4xl md:text-5xl font-bold"
        style={{ color: "var(--primary-color)" }}
      >
        {t('tfs_title')}
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        {t('tfs_subtitle')}
      </p>
      <a
        href="#interactive-tips"
        className="mt-8 inline-block cta-button text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        {t('tfs_cta')}
      </a>
    </div>
  </header>
  <main className="container mx-auto px-6 py-12">
    <section
      id="why-tips-matter"
      className="mb-16 bg-white p-8 rounded-lg shadow-lg"
    >
      <h2
        className="text-3xl font-semibold mb-6 text-center"
        style={{ color: "var(--primary-color)" }}
      >
        {t('tfs_why_title')}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700 text-center">
        <p>
          {t('tfs_why_body')}
        </p>
      </div>
    </section>
    <section
      id="interactive-tips"
      className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
    >
      <h2
        className="text-3xl font-semibold mb-8 text-center"
        style={{ color: "var(--primary-color)" }}
      >
        {t('tfs_keys_title')}
      </h2>
      <p className="text-center text-gray-600 mb-8">
        {t('tfs_keys_subtitle')}
      </p>
      <div id="tipsAccordionContainer" className="space-y-4">
        <TipsAccordion />
      </div>
    </section>
    <section
      id="important-considerations"
      className="mt-16 bg-white p-8 rounded-lg shadow-lg"
    >
      <h2
        className="text-3xl font-bold mb-8 text-center"
        style={{ color: "var(--primary-color)" }}
      >
        {t('tfs_important_title')}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary-color)" }}>
            {t('tfs_considerations_profile_title')}
          </h3>
          <p>
            <Trans i18nKey="tfs_considerations_profile">
              While regular updates are highly encouraged, please <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>refrain from updating your profile multiple times in a short period (e.g., several times a day) solely to appear at the top of search results.</span> Such activity may be flagged, and your profile could be temporarily pended from publishing, taking longer than usual to reappear. Meaningful monthly updates are best.
            </Trans>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary-color)" }}>
            {t('tfs_considerations_authentic_title')}
          </h3>
          <p>
            {t('tfs_considerations_authentic')}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary-color)" }}>
            {t('tfs_considerations_culture_title')}
          </h3>
          <p>
            {t('tfs_considerations_culture')}
          </p>
        </div>
      </div>
    </section>
    <section
      id="next-steps"
      className="mt-16 py-12 text-center bg-gray-100 rounded-lg shadow-inner"
    >
      <h2
        className="text-3xl font-semibold mb-6"
        style={{ color: "var(--primary-color)" }}
      >
        {t('tfs_next_title')}
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        {t('tfs_next_body')}
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#your-profile-edit-link"
          className="cta-button text-white font-semibold py-3 px-8 rounded-lg shadow-lg inline-block transition-transform transform hover:scale-105"
        >
          {t('tfs_next_update')}
        </a>
        <a
          href="#teacher-registration-link"
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg inline-block transition-transform transform hover:scale-105"
        >
          {t('tfs_next_register')}
        </a>
      </div>
    </section>
  </main>
</>
    )
}