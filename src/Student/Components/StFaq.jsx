import React, { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./StFaq.css";

export default function StFaq() {
  const { t } = useTranslation();

  useEffect(() => {
    // Simple script to toggle icons for details/summary
    // Font Awesome icons are used: plus and times
    document.querySelectorAll('.st-faq-item details').forEach(detail => {
      detail.addEventListener('toggle', event => {
        // The icon display is now handled by CSS based on the [open] attribute.
        // This script is kept for compatibility or if more complex JS-driven behavior is needed later.
        // For example, if you wanted to animate the icon rotation with JS:
        // const iconElement = detail.querySelector('.st-faq-question .icon');
        // if (detail.open) {
        //    iconElement.style.transform = 'rotate(45deg)';
        // } else {
        //    iconElement.style.transform = 'rotate(0deg)';
        // }
      });
    });
  }, []);

  return (
    <>
      <header className="st-faq-header">
        <h1 style={{ color: "#fff" }}>{t('faq.page_title')}</h1>
        <p>{t('faq.page_desc')}</p>
      </header>
      <main className="st-faq-container">
        <section className="st-faq-category" id="category-service">
          <h2>{t('faq.category_service')}</h2>
          <div
            className="st-faq-img-placeholder st-faq-category-image-placeholder"
            role="img"
            aria-label={t('faq.category_service_img_alt')}
          >
            <img src="image/f2.png" />
          </div>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q1')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                <Trans i18nKey="faq.a1" components={{
                  strong: <span className="st-faq-important-note" />,
                  a1: <a href="kiyaku.html" title="ご利用規約" />,
                  a2: <a href="contact-2.html" title="お問い合わせフォーム" />
                }} />
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q2')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a2')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q3')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a3')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q4')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a4')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q5')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a5')}
              </p>
            </div>
          </details>
        </section>
        <section className="st-faq-category" id="category-fees">
          <h2>{t('faq.category_fees')}</h2>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q6')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a6')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q7')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a7')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q8')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a8')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q9')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a9')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q10')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a10')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q11')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a11')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q12')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a12')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q13')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a13')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q14')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a14')}
              </p>
            </div>
          </details>
        </section>
        <section className="st-faq-category" id="category-teacher-lesson">
          <h2>{t('faq.category_teacher_lesson')}</h2>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q15')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a15')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q16')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a16')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q17')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a17')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q18')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a18')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q19')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a19')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q20')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a20')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q21')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a21')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q22')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a22')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q23')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a23')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q24')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a24')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q25')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a25')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q26')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a26')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q27')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a27')}
              </p>
            </div>
          </details>
        </section>
        <section className="st-faq-category" id="category-usage">
          <h2>{t('faq.category_usage')}</h2>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q28')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a28')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q29')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a29')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q30')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a30')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q31')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a31')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q32')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a32')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q33')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a33')}
              </p>
            </div>
          </details>
        </section>
        <section className="st-faq-category" id="category-troubleshooting">
          <h2>{t('faq.category_troubleshooting')}</h2>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q34')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a34')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q35')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a35')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q36')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a36')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q37')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a37')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q38')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a38')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q39')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a39')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q40')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a40')}
              </p>
            </div>
          </details>
          <details className="st-faq-item">
            <summary className="st-faq-question">
              <span>Q: {t('faq.q41')}</span>
              <span className="icon">
                <i className="fas fa-plus" />
                <i className="fas fa-times" />
              </span>
            </summary>
            <div className="st-faq-answer">
              <p>
                <span className="st-faq-answer-label">A:</span>{" "}
                {t('faq.a41')}
              </p>
            </div>
          </details>
        </section>
        <section className="st-faq-cta-section">
          <h3>{t('faq.cta_title')}</h3>
          <p>
            {t('faq.cta_desc')}
            <br />
            {t('faq.cta_desc2')}
          </p>
          <a href="search.html" className="st-faq-cta-button">
            {t('faq.cta_button')}
          </a>
          <a href="contact.html" className="st-faq-cta-button secondary">
            {t('faq.cta_button_secondary')}
          </a>
        </section>
      </main>
    </>
  );
}