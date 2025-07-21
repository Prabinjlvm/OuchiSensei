import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function StFooter(){
  const { t } = useTranslation();
  return(
    <>
      <footer className="site-footer-container">
        <div className="footer-top section-padding">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-column">
                <h4 style={{fontWeight: 700}}>{t("footer_title")}</h4>
                <p>{t("footer_description")}</p>
              </div>
              <div className="footer-column al_left">
                <h4 style={{fontWeight: 700}}>{t("footer_sitemap")}</h4>
                <ul>
                  <li>
                    <a href="https://dinfo.work/">{t("footer_top")}</a>
                  </li>
                  <li>
                    <a href="https://dinfo.work/search/">{t("footer_find_teacher")}</a>
                  </li>
                  <li>
                    <a href="price.html">{t("footer_fees")}</a>
                  </li>
                  <li>
                    <a href="start.html">{t("footer_usage_flow")}</a>
                  </li>
                  <li>
                    <a href="sample.html">{t("footer_sample_email")}</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column al_left">
                <h4 style={{fontWeight: 700}}>{t("footer_support")}</h4>
                <ul>
                  <li>
                    <a href="faq.html">{t("footer_faq")}</a>
                  </li>
                  <li>
                    <a href="contact.html" target="_blank">
                      {t("footer_contact")}
                    </a>
                  </li>
                  <li>
                    <a href="en/index.html">{t("footer_teacher_register")}</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column al_left">
                <h4 style={{fontWeight: 700}}>{t("footer_operator_info")}</h4>
                <ul>
                  <li>
                    <Link to="/CompanyProfile"><a href>{t("footer_company")}</a></Link>
                  </li>
                  <li>
                    <a href="/CompanyProfile">{t("footer_tokutei")}</a>
                  </li>
                  <li>
                    <Link to="/TermsOfUse"><a href>{t("footer_terms")}</a></Link>
                  </li>
                  <li>
                    <Link to="/PrivacyPolicy"><a href>{t("footer_privacy")}</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>{t("footer_copyright")}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
export default StFooter;