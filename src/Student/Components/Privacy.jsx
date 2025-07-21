import React from "react";
import { useTranslation } from "react-i18next";
import "./Privacy.css";

export default function PrivacyPolicy() {
    const { t, i18n } = useTranslation();
    const establishedDate = t("privacy.establishedDate");
    const lastRevisedDate = t("privacy.lastRevisedDate");
    const currentYear = new Date().getFullYear();

    // Build policy sections from i18n keys
    const sectionCount = 15;
    const policyData = Array.from({ length: sectionCount }, (_, idx) => {
        const num = idx + 1;
        return {
            id: `section${num}`,
            title: t(`privacy.section${num}.title`),
            content: t(`privacy.section${num}.content`),
        };
    });

    return (
        <div className="main-container">
            <div id="content-area">
                <header className="sticky-header py-4">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4a7d1d] mb-2">
                            {t("privacy.header")}
                        </h1>
                        <p className="text-sm text-gray-600 text-center">
                            {t("privacy.establishedLabel")} <span>{establishedDate}</span> | {t("privacy.lastRevisedLabel")} <span>{lastRevisedDate}</span>
                        </p>
                    </div>
                </header>
                <main id="policyContainer" className="container mx-auto px-4 py-8">
                    <div className="policy-section-intro bg-white p-6 rounded-lg shadow mb-8">
                        <p className="text-lg">
                            {t("privacy.intro1")}
                        </p>
                        <p className="mt-2">
                            {t("privacy.intro2")}
                        </p>
                    </div>
                    {/* Render all policy sections */}
                    {policyData.map(section => (
                        <div key={section.id} id={section.id} className="mb-6 policy-article">
                            <div className="policy-article-title">
                                <h2 className="text-xl font-semibold text-[#4a7d1d]">{section.title}</h2>
                            </div>
                            <div
                                className="policy-article-content"
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                        </div>
                    ))}
                </main>
                <footer className="text-center py-8 text-sm text-gray-500">
                    © <span>{currentYear}</span> {t("privacy.footer")}
                </footer>
            </div>
        </div>
    );
}