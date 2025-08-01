import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutFees.css"

export default function AboutFees() {
  const { t } = useTranslation();

  return (
    <>
       <header class="aboutfess-header">
        <h1>{t("aboutfees.AboutFeesHeader")}</h1>
    </header>
      <main className="aboutfess-main">
        <section className="aboutfess-hero-section aboutfess-text-center">
          <div className="aboutfess-container">
            <h2 style={{ color: "#fff" }}>
              {t("aboutfees.hero_title")}
              <br />
              {t("aboutfees.hero_subtitle")}
              
            </h2>
            <p className="aboutfess-sub-copy">
              {t("aboutfees.hero_desc")}
            </p>
          </div>
        </section>
        <section id="pricing-reason" className="aboutfess-reason-section aboutfess-section-padding" style={{ background: "#fff" }}>
          <div className="aboutfess-container">
            <h2 className="aboutfess-section-title aboutfess-text-center">{t("aboutfees.why_affordable_title")}</h2>
            <div className="aboutfess-reason-content">
              <div className="aboutfess-reason-point">
                <i className="fas fa-thumbs-up aboutfess-icon-large" />{" "}
               <b> <h3>
                  {t("aboutfees.no_membership_fee_title")} <br />
                  <span className="aboutfess-highlight">{t("aboutfees.no_membership_fee_highlight")}</span>
                </h3></b>
                <p>
                  {t("aboutfees.no_membership_fee_desc")}
                </p>
              </div>
              <div className="aboutfess-reason-point">
                <i className="fas fa-users aboutfess-icon-large" />
                <b><h3>
                  {t("aboutfees.direct_platform_title")} <br />
                  <span className="aboutfess-highlight">{t("aboutfees.direct_platform_highlight")}</span>{t("aboutfees.direct_platform_after_highlight")}
                </h3></b>
                <p>
                  {t("aboutfees.direct_platform_desc")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="plan-details" className="aboutfess-plan-section aboutfess-section-padding aboutfess-bg-light">
          <div className="aboutfess-container">
            <h2 className="aboutfess-section-title aboutfess-text-center">{t("aboutfees.simple_plan_title")}</h2>
            <div className="aboutfess-plan-card-wrapper">
              <article className="aboutfess-plan-card">
                <header className="aboutfess-plan-card-header">
                  <h3 style={{ color: "#fff" }}>{t("aboutfees.system_fee_title")}</h3>
                  <p className="aboutfess-plan-description">{t("aboutfees.system_fee_desc")}</p>
                </header>
                <div className="aboutfess-plan-card-body">
                  <p className="aboutfess-price-main">
                    {t("aboutfees.system_fee_price")}<span className="aboutfess-price-unit">{t("aboutfees.system_fee_yen")}</span>
                    <span className="aboutfess-price-tax">{t("aboutfees.system_fee_tax")}</span>
                  </p>
                  <ul className="aboutfess-plan-features">
                    <li>
                      <i className="fas fa-check-circle" /> {t("aboutfees.system_fee_feature1")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle" /> {t("aboutfees.system_fee_feature2")}
                    </li>
                    <li>
                      <i className="fas fa-info-circle" />{" "}
                      {t("aboutfees.system_fee_feature3")}
                    </li>
                  </ul>
                  <div className="aboutfess-plan-cta">
                    <a
                      href="https://dinfo.work/test/application/"
                      className="aboutfess-cta-button aboutfess-primary-cta aboutfess-large-cta"
                    >
                      {t("aboutfees.cta_find_teacher_now")}
                    </a>
                    <p className="aboutfess-micro-copy">{t("aboutfees.cta_find_teacher_page")}</p>
                  </div>
                </div>
                <footer className="aboutfess-plan-card-footer">
                  <p>
                    <strong>{t("aboutfees.system_fee_note_strong")}</strong>
                    <br />
                    {t("aboutfees.system_fee_note")}
                  </p>
                </footer>
              </article>
            </div>
          </div>
        </section>
        <section id="payment-methods" className="aboutfess-payment-section aboutfess-section-padding " style={{ background: "#fff" }}>
          <div className="aboutfess-container">
            <h2 className="aboutfess-section-title aboutfess-text-center">
              {t("aboutfees.payment_methods_title")}
              <br />
              {t("aboutfees.payment_methods_subtitle")}
            </h2>
            <div className="aboutfess-payment-methods-grid">
              {/*
              <div class="payment-method">
                  <i class="fas fa-university icon-medium"></i>
                  <h4>1. 銀行振込</h4>
                  <p>お申し込み完了後にお送りする自動送信メールにて、振込先銀行口座の詳細をご案内いたします。</p>
                  <p class="note"><strong>ご注意:</strong> 銀行振込手数料は、お客様にご負担いただいております。</p>
              </div>
*/}
              <div className="aboutfess-payment-method">
                <img
                  src="image/stripe.png"
                  alt="stripe ロゴ"
                  className="aboutfess-payment-logo"
                  id="paypal-logo-img"
                />{" "}
                <b><h4>{t("aboutfees.stripe_title")}</h4></b>
                <div className="aboutfess-receipt-detail">
                  <h5>
                    <i className="far fa-credit-card" /> {t("aboutfees.stripe_easy_title")}
                  </h5>
                  <p>
                    {t("aboutfees.stripe_easy_desc1")}
                    <br />
                    {t("aboutfees.stripe_easy_desc2")}
                  </p>
                </div>
                <p className="aboutfess-benefit">
                  <i className="fas fa-bolt" />{" "}
                  {t("aboutfees.stripe_benefit")}
                </p>
                <a
                  href="https://stripe.com/jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aboutfess-external-link"
                >
                  {t("aboutfees.stripe_what_is")} <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="receipt-info"
          className="aboutfess-receipt-section aboutfess-section-padding aboutfess-bg-light"
        >
          <div className="aboutfess-container">
            <h2 className="aboutfess-section-title aboutfess-text-center">{t("aboutfees.receipt_title")}</h2>
            <p className="aboutfess-text-center">
              {t("aboutfees.receipt_desc1")}
              <br />
              {t("aboutfees.receipt_desc2")}
            </p>
            <div className="aboutfess-receipt-details-grid">
              {/*                    <div class="receipt-detail">
                  <h5><i class="fas fa-file-invoice"></i> 銀行振込の場合</h5>
                  <p>各金融機関発行の「振込明細票」や「ご利用明細」など</p>
              </div>
*/}
              <div className="aboutfess-receipt-detail">
                <h5>
                  <i className="far fa-credit-card" />{" "}
                  {t("aboutfees.receipt_stripe_title")}
                </h5>
                <p>
                  {t("aboutfees.receipt_stripe_desc")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="support-guarantee" className="aboutfess-support-section aboutfess-section-padding" >
          <div className="aboutfess-container">
            <h2 className="aboutfess-section-title aboutfess-text-center">{t("aboutfees.support_title")}</h2>
            <div className="aboutfess-support-content aboutfess-text-center">
              <i className="fas fa-shield-alt aboutfess-icon-xlarge" />
              <b><h3>{t("aboutfees.support_subtitle")}</h3></b>
              <p>
                {t("aboutfees.support_desc1")}
                <br />
                {t("aboutfees.support_desc2")}
              </p>
              <p>
                {t("aboutfees.support_desc3_1")}
                <a href="https://dinfo.work/contact.html" className="aboutfess-internal-link">
                  {t("aboutfees.support_desc3_link")}
                </a>
                {t("aboutfees.support_desc3_2")}
              </p>
            </div>
          </div>
        </section>
        <section
          id="important-notes"
          className="aboutfess-important-notes-section aboutfess-section-padding aboutfess-bg-light"
        >
          <div className="aboutfess-container">
            <h2 className="aboutfess-section-title aboutfess-text-center">
              <i className="fas fa-exclamation-triangle" />{" "}
              {t("aboutfees.important_notes_title")}
            </h2>
            <div className="aboutfess-notes-accordion">
              <details className="aboutfess-accordion-item" open="">
                <summary className="aboutfess-accordion-title">{t("aboutfees.important_notes_1_title")}</summary>
                <div className="aboutfess-accordion-content">
                  <ul>
                    <li>
                      {t("aboutfees.important_notes_1_desc1")}
                    </li>
                    <li>
                      {t("aboutfees.important_notes_1_desc2_1")}
                      <a href="faq.html" className="aboutfess-internal-link">
                        {t("aboutfees.important_notes_1_desc2_link1")}
                      </a>
                      {t("aboutfees.important_notes_1_desc2_2")}
                      <a href="kiyaku.html" className="aboutfess-internal-link">
                        {t("aboutfees.important_notes_1_desc2_link2")}
                      </a>
                      {t("aboutfees.important_notes_1_desc2_3")}
                    </li>
                  </ul>
                </div>
              </details>
              <details className="aboutfess-accordion-item">
                <summary className="aboutfess-accordion-title">
                  {t("aboutfees.important_notes_2_title")}
                </summary>
                <div className="aboutfess-accordion-content">
                  <ul>
                    <li>
                      {t("aboutfees.important_notes_2_desc1")}
                    </li>
                  </ul>
                </div>
              </details>
              <details className="aboutfess-accordion-item">
                <summary className="aboutfess-accordion-title">
                  {t("aboutfees.important_notes_3_title")}
                </summary>
                <div className="aboutfess-accordion-content">
                  <ul>
                    <li>
                      {t("aboutfees.important_notes_3_desc1")}
                    </li>
                    <li>
                      {t("aboutfees.important_notes_3_desc2")}
                    </li>
                  </ul>
                </div>
              </details>
              <details className="aboutfess-accordion-item">
                <summary className="aboutfess-accordion-title">
                  {t("aboutfees.important_notes_4_title")}
                </summary>
                <div className="aboutfess-accordion-content">
                  <ul>
                    <li>
                      {t("aboutfees.important_notes_4_desc1_1")}
                      <strong>{t("aboutfees.important_notes_4_desc1_strong")}</strong>
                      {t("aboutfees.important_notes_4_desc1_2")}
                    </li>
                    <li>
                      {t("aboutfees.important_notes_4_desc2")}
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="aboutfess-final-cta-section aboutfess-section-padding aboutfess-text-center" style={{ background: "#fff" }}>
          <div className="aboutfess-container">
            <h2 className="aboutfess-section-title">
              {t("aboutfees.final_cta_title1")}
              <br />
              {t("aboutfees.final_cta_title2")}
            </h2>
            <p>
              {t("aboutfees.final_cta_desc")}
            </p>
            <a
              href="https://dinfo.work/test/application/"
              className="aboutfess-cta-button aboutfess-primary-cta aboutfess-large-cta"
            >
              {t("aboutfees.final_cta_button")}
            </a>
            <div className="aboutfess-secondary-links">
              <a href="faq.html" className="aboutfess-internal-link">
                {t("aboutfees.final_cta_link")}
              </a>
              {/*                    <span class="separator">|</span>
              <a href="https://dinfo.work/test/contact/" class="internal-link">お問い合わせはこちら</a>
*/}
            </div>
          </div>
        </section>
      </main>

    </>
  )
}