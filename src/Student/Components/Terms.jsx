import React from "react";
import { useTranslation } from "react-i18next";

export default function TermsOfUse() {
    const { t } = useTranslation();
    const effectiveDate = t("terms.effectiveDate");
    const sectionCount = 23;
    const termsData = Array.from({ length: sectionCount }, (_, idx) => {
        const num = idx + 1;
        return {
            id: `section${num}`,
            title: t(`terms.section${num}.title`),
            content: t(`terms.section${num}.content`),
        };
    });
    return (
        <>
            <style>{`
                .kcontainer { max-width: 800px; margin: 0 auto; padding: 20px; background-color: #fff; border: 1px solid #ddd; border-radius: 8px; }
                h1 { text-align: center; color: #4a7d1d; margin-bottom: 30px; font-size: 28px; }
                h2 { border-bottom: 2px solid #4a7d1d; padding-bottom: 8px; margin-top: 40px; margin-bottom: 20px; font-size: 22px; color: #4a7d1d; }
                h3 { margin-top: 30px; margin-bottom: 15px; font-size: 18px; color: #333; border-left: 4px solid #1a73e8; padding-left: 10px;}
                p { margin-bottom: 15px; font-size: 15px; }
                ul { padding-left: 30px; margin-bottom: 15px; }
                li { margin-bottom: 8px; font-size: 15px; }
                .alert { color: #d93025; font-weight: bold; }
                .indent { margin-left: 20px; }
                .important { font-weight: bold; color: #c00; }
                .footer-date { text-align: right; margin-top: 50px; font-size: 14px; }
            `}</style>
            <div className="kcontainer">
            <h1 style={{ fontWeight: 700 }}>{t("terms.header")}</h1>
            <p>{t("terms.intro")}</p>
            {/* Render all terms sections */}
            {termsData.map(section => (
                <div key={section.id} id={section.id} className="mb-6 terms-article">
                    <div className="terms-article-title">
                        <h2 style={{ fontWeight: 700 }}>{section.title}</h2>
                    </div>
                    <div
                        className="terms-article-content"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                </div>
            ))}
            <p className="footer-date">{t("terms.footerEnd")}</p>
            <p className="footer-date">{effectiveDate}</p>
            </div>
        </>
    );
}