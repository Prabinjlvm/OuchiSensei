import { Link } from "react-router-dom";
import StFooter from "./Components/StFooter";
import Navigation from "./Components/StudentHeader";
import { useTranslation } from "react-i18next";

function StudentLandingpage() {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-image-placeholder">
              <img src="image/head.png" style={{ width: "1000px" }} alt={t("hero_title")} />
            </div>
            <div className="hero-content">
              <h1><b>
                {t("hero_title")}
                <br />
                <span className="f24">{t("hero_subtitle")}</span></b>
              </h1>
              <p className="subtitle">
                {t("hero_description")}
              </p>
              <form
                action="https://dinfo.work/search/"
                method="get"
                className="hero-search-form"
              >
                <div className="form-group">
                  <label htmlFor="hero-language-select" className="sr-only">
                    {t("hero_language_label")}
                  </label>
                  <select id="hero-language-select" name="language">
                    <option value="">{t("hero_language_placeholder")}</option>
                    <option value="english">{t("lang_english")}</option>
                    <option value="chinese_mandarin">{t("lang_chinese_mandarin")}</option>
                    <option value="chinese_cantonese">中国語（広東語）</option>
                    <option value="korean">{t("lang_korean")}</option>
                    <option value="french">{t("lang_french")}</option>
                    <option value="spanish">{t("lang_spanish", "スペイン語")}</option>
                    <option value="german">{t("lang_german")}</option>
                    <option value="italian">{t("lang_italian")}</option>
                    <option value="portuguese">{t("lang_portuguese")}</option>
                    <option value="russian">{t("lang_russian")}</option>
                    <option value="thai">{t("lang_thai")}</option>
                    <option value="vietnamese">{t("lang_vietnamese")}</option>
                    <option value="indonesian">{t("lang_indonesian")}</option>
                    <option value="burmese">{t("lang_burmese")}</option>
                    <option value="tagalog">{t("lang_tagalog")}</option>
                    <option value="arabic">{t("lang_arabic")}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="hero-area-input" className="sr-only">
                    {t("hero_area_label")}
                  </label>
                  <input
                    type="text"
                    id="hero-area-input"
                    name="area"
                    placeholder={t("hero_area_placeholder")}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  {t("hero_search_button")}
                </button>
              </form>
              <p className="hero-meta">
                {t("hero_meta")}
              </p>
            </div>
          </div>
        </section>
        <section className="features-overview section-padding" style={{ background: "#fff" }}>
          <div className="container features-container" style={{ maxWidth: 1170, margin: "0 auto" }}>
            <h2 className="section-title" style={{
              fontSize: "31px",
              color: "#4a7d1d",
              marginBottom: -10,
              fontWeight: 700,
            }}>
              {t("features_title")}
            </h2>
            <div
              className="features-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 32,
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="feature-item"
                  style={{
                    backgroundColor: "#fff",
                    padding: 30,
                    borderRadius: 8,
                    textAlign: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                  }}
                >
                  <div
                    className="feature-icon-placeholder"
                    style={{
                      width: 200,
                      height: 200,
                      margin: "0 auto 20px auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: 24,
                    }}
                  >
                    <img
                      src={`image/i${num}.png`}
                      alt={t(`features_${num}_title`)}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </div>
                  <h3 style={{
                    color: "#6fba2c",
                    marginBottom: 10,
                    fontWeight: 700,
                    fontSize: 23,
                    letterSpacing: "1px"
                  }}>
                    {t(`features_${num}_title`)}
                  </h3>
                  <p style={{
                    fontSize: 15,
                    color: "#222",
                    lineHeight: 1.7,
                    fontWeight: 400,
                    margin: 0
                  }}>
                    {t(`features_${num}_desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </section>
        <section className="map-search section-padding bg-light">
          <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 className="section-title" style={{
              fontSize: "30px",
              color: "#4a7d1d",
              fontWeight: 700,
              marginBottom: 12,
              letterSpacing: "1px",
              lineHeight: 1.2
            }}>{t("map_title")}</h2>
            <p className="section-subtitle" style={{
              fontSize: "18px",
              color: "#444",
              fontWeight: 400,
              marginBottom: 35,
              marginTop: 0,
              lineHeight: 1.6
            }}>
              {t("map_subtitle")}
            </p>
            <div id="japan-map" className="clearfix">
              <div id="hokkaido-touhoku" className="clearfix">
                <p className="area-title">北海道・東北</p>
                <div className="area">
                  <a href="#">
                    <div id="hokkaido">
                      <p>北海道</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="aomori">
                      <p>青森</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="akita">
                      <p>秋田</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="iwate">
                      <p>岩手</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="yamagata">
                      <p>山形</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="miyagi">
                      <p>宮城</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="fukushima">
                      <p>福島</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="kantou">
                <p className="area-title">関東</p>
                <div className="area">
                  <a href="#">
                    <div id="gunma">
                      <p>群馬</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="tochigi">
                      <p>栃木</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="ibaraki">
                      <p>茨城</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="saitama">
                      <p>埼玉</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="chiba">
                      <p>千葉</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="tokyo">
                      <p>東京</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="kanagawa">
                      <p>神奈川</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="tyubu" className="clearfix">
                <p className="area-title">中部</p>
                <div className="area">
                  <a href="#">
                    <div id="nigata">
                      <p>新潟</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="toyama">
                      <p>富山</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="ishikawa">
                      <p>石川</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="fukui">
                      <p>福井</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="nagano">
                      <p>長野</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="gifu">
                      <p>岐阜</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="yamanashi">
                      <p>山梨</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="aichi">
                      <p>愛知</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="shizuoka">
                      <p>静岡</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="kinki" className="clearfix">
                <p className="area-title">近畿</p>
                <div className="area">
                  <a href="#">
                    <div id="kyoto">
                      <p>京都</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="shiga">
                      <p>滋賀</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="osaka">
                      <p>大阪</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="nara">
                      <p>奈良</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="mie">
                      <p>三重</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="wakayama">
                      <p>和歌山</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="hyougo">
                      <p>兵庫</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="tyugoku" className="clearfix">
                <p className="area-title">中国</p>
                <div className="area">
                  <a href="#">
                    <div id="tottori">
                      <p>鳥取</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="okayama">
                      <p>岡山</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="shimane">
                      <p>島根</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="hiroshima">
                      <p>広島</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="yamaguchi">
                      <p>山口</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="shikoku" className="clearfix">
                <p className="area-title">四国</p>
                <div className="area">
                  <a href="#">
                    <div id="kagawa">
                      <p>香川</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="ehime">
                      <p>愛媛</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="tokushima">
                      <p>徳島</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="kouchi">
                      <p>高知</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="kyusyu" className="clearfix">
                <p className="area-title">九州・沖縄</p>
                <div className="area">
                  <a href="#">
                    <div id="fukuoka">
                      <p>福岡</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="saga">
                      <p>佐賀</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="nagasaki">
                      <p>長崎</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="oita">
                      <p>大分</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="kumamoto">
                      <p>熊本</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="miyazaki">
                      <p>宮崎</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="kagoshima">
                      <p>鹿児島</p>
                    </div>
                  </a>
                  <a href="#">
                    <div id="okinawa">
                      <p>沖縄</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="new-teachers section-padding" style={{ background: "#fff" }}>
          <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 className="section-title" style={{ fontWeight: 700, fontSize: 30, marginBottom: 30 }} >{t("new_teachers_title")}</h2>
            <div className="teacher-carousel">
              <div className="teacher-card">
                <div className="teacher-image-placeholder">
                  <img src="image/eigo.jpg" alt="●●先生" />
                </div>
                <h4 style={{ fontWeight: 700 }}>A先生 ({t("lang_english")})</h4>
                <p>東京都 | オンライン可</p>
                <a style={{ fontWeight: 700, border: "2px solid #6fc12c" }} href="001.html" className="btn btn-sm btn-outline">
                  {t("teacher_profile_button")}
                </a>
              </div>
              <div className="teacher-card">
                <div className="teacher-image-placeholder">
                  <img src="image/ch.jpg" alt="●●先生" />
                </div>
                <h4 style={{ fontWeight: 700 }}>B先生 ({t("lang_chinese_mandarin")})</h4>
                <p>大阪府</p>
                <a style={{ fontWeight: 700, border: "2px solid #6fc12c" }} href="002.html" className="btn btn-sm btn-outline">
                  {t("teacher_profile_button")}
                </a>
              </div>
            </div>
            <div className="text-center">
              <Link to="/TeacherList"><a href className="btn btn-primary">
                {t("more_teachers_button")}
              </a></Link>
            </div>
          </div>
        </section>
        <section className="how-to-use section-padding bg-light">
          <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 className="section-title" style={{
              fontSize: 30,
              color: "#4a7d1d",
              fontWeight: 700,
              marginBottom: 40,
              letterSpacing: "1px"
            }}>{t("howto_title")}</h2>
            <div className="steps-container" style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 15,
              flexWrap: "wrap"
            }}>
              {[1, 2, 3, 4].map((step) => (
                <div className="step-item" key={step} style={{
                  flex: "1 1 22%",
                  minWidth: 220,
                  maxWidth: 270,
                  background: "#fff0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0 10px",
                  textAlign: "center"
                }}>
                  <div className="step-number" style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "3px solid #6fc12c",
                    color: "#6fc12c",
                    fontWeight: 700,
                    fontSize: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 0 18px 0"
                  }}>{step}</div>
                  <div className="step-icon" style={{ marginBottom: 18 }}>
                    <img src={`image/ii${step}.png`} alt={t(`howto_${step}_title`)} style={{ width: 90, height: 90, objectFit: "contain" }} />
                  </div>
                  <h3 style={{
                    color: "#4a7d1d",
                    fontWeight: 700,
                    fontSize: 22,
                    margin: "0 0 10px 0"
                  }}>{t(`howto_${step}_title`)}</h3>
                  <p style={{
                    color: "#222",
                    fontSize: 16,
                    lineHeight: 1.7,
                    margin: 0
                  }}>{t(`howto_${step}_desc`)}</p>
                </div>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: 40 }}>
              <a href="start.html" className="btn btn-secondary" style={{
                background: "#ffa726",
                color: "#fff",
                fontWeight: 700,
                borderRadius: 8,
                padding: "16px 48px",
                border: "none",
                textDecoration: "none",
                display: "inline-block",
                minWidth: 320,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
              }}>
                {t("howto_guide_button")}
              </a>
            </div>
            <style>{`
              @media (max-width: 900px) {
                .steps-container {
                  flex-wrap: wrap !important;
                  gap: 24px !important;
                  justify-content: center !important;
                }
                .step-item {
                  min-width: 180px !important;
                  max-width: 48vw !important;
                }
              }
              @media (max-width: 600px) {
                .steps-container {
                  flex-direction: column !important;
                  gap: 28px !important;
                  align-items: center !important;
                }
                .step-item {
                  min-width: 0 !important;
                  max-width: 95vw !important;
                  width: 100% !important;
                  margin: 0 auto !important;
                }
                .step-icon img {
                  width: 120px !important;
                  height: 120px !important;
                }
                .section-title {
                  font-size: 24px !important;
                }
              }
            `}</style>
          </div>
        </section>
        <section className="service-details section-padding" style={{ background: "#fff" }}>
          <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="service-content" style={{
              display: "flex",
              gap: 40,
              alignItems: "flex-start",
              flexWrap: "wrap"
            }}>
              <article style={{ flex: 2 }}>
                <h2 className="section-title" style={{
                  fontSize: 30,
                  color: "#4a7d1d",
                  fontWeight: 700,
                  marginBottom: 30,
                }}>{t("service_title")}</h2>
                <h3 style={{
                  color: "#6fc12c",
                  fontWeight: 700,
                  fontSize: 20,
                  margin: "0 0 18px 0"
                }}>{t("service_1_title")}</h3>
                <p style={{
                  color: "#222",
                  fontSize: 15,
                  marginBottom: 28
                }}>{t("service_1_desc")}</p>
                <h3 style={{
                  color: "#6fc12c",
                  fontWeight: 700,
                  fontSize: 20,
                  margin: "0 0 18px 0"
                }}>{t("service_2_title")}</h3>
                <p style={{
                  color: "#222",
                  fontSize: 15,
                  marginBottom: 0
                }}>{t("service_2_desc")}</p>
                <div className="service-links" style={{
                  display: "flex",
                  marginTop: 32,
                  fontWeight: 700,
                  fontSize: 18,
                }}>
                  <a href="https://dinfo.work/languages/" className="text-link" style={{ color: "#6fc12c", textDecoration: "none" }}>
                    {t("service_links_languages")}
                  </a>
                  <a href="https://dinfo.work/areas/" className="text-link" style={{ color: "#6fc12c", textDecoration: "none" }}>
                    {t("service_links_area")}
                  </a>
                  <a href="https://dinfo.work/search/?online=true" className="text-link" style={{ color: "#6fc12c", textDecoration: "none" }}>
                    {t("service_links_online")}
                  </a>
                </div>
              </article>
              <aside className="important-notes" style={{
                flex: 1,
                background: "#fafbfc",
                borderLeft: "6px solid #ffa726",
                borderRadius: 10,
                padding: "24px 28px 24px 24px",
                marginTop: 70
              }}>
                <h4 style={{
                  color: "#ffa726",
                  fontWeight: 700,
                  fontSize: 22,
                  margin: "0 0 12px 0"
                }}>{t("notes_title")}</h4>
                <p style={{ color: "#444", fontSize: 16, lineHeight: 1.7 }}>
                  {t("notes_desc")} <a href="start.html#faq" style={{ color: "#6fc12c", textDecoration: "underline" }}>{t("more_info_faq")}</a>と <a href="kiyaku.html" style={{ color: "#6fc12c", textDecoration: "underline" }}>「ご利用規約」</a>をご確認ください。
                </p>
              </aside>
            </div>
            <style>{`
              @media (max-width: 900px) {
                .service-content {
                  flex-direction: column !important;
                  gap: 24px !important;
                }
                .important-notes {
                  margin-top: 0 !important;
                }
              }
              @media (max-width: 600px) {
                .section-title {
                  font-size: 22px !important;
                  margin-bottom: 18px !important;
                }
                .service-links {
                  flex-direction: column !important;
                  gap: 12px !important;
                  font-size: 16px !important;
                }
                .important-notes {
                  font-size: 15px !important;
                  padding: 16px 10px 16px 10px !important;
                }
                article h3 {
                  font-size: 18px !important;
                }
                article p {
                  font-size: 15px !important;
                }
              }
            `}</style>
          </div>
        </section>
        <section className="pricing-cta section-padding text-white bg-primary-gradient">
          <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="pricing-cta-content">
              <div className="pricing-cta-text">
                <h2 style={{ fontWeight: 700, fontSize: 30 }}>{t("pricing_cta_title")}</h2>
                <p>{t("pricing_cta_desc")}</p>
              </div>
              <div className="pricing-cta-box">
                <p className="system-fee-label">{t("pricing_cta_fee_label")}</p>
                <p className="system-fee-label">{t("pricing_cta_fee_note")}</p>
                <p className="system-fee-price" dangerouslySetInnerHTML={{ __html: t("pricing_cta_fee_price") }} />
                <a style={{ padding: 20, fontWeight: 700 }} href="https://dinfo.work/search/" className="btn btn-light btn-lg">
                  {t("pricing_cta_search_button")}
                </a>
                <p>
                  <a href="price.html" className="text-link-light">
                    {t("pricing_cta_more")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-teachers section-padding" style={{ background: "#fff" }}>
          <div
            className="container about-teachers-container"
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 40,
              flexWrap: "wrap"
            }}
          >
            <div
              className="about-teachers-text"
              style={{
                flex: 1,
                minWidth: 280,
                textAlign: "center"
              }}
            >
              <h2 className="section-title-left" style={{
                fontWeight: 700,
                fontSize: 32,
                color: "#4a7d1d",
                marginBottom: 28,
                textAlign: "left"
              }}>{t("about_teachers_title")}</h2>
              <p style={{
                color: "#222",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 18,
                textAlign: "left"
              }}>{t("about_teachers_1")}</p>
              <p style={{
                color: "#222",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 32,
                textAlign: "left"
              }}>{t("about_teachers_2")}</p>
              <a href="https://dinfo.work/for-teachers/" className="btn btn-outline" style={{
                border: "2px solid #6fc12c",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
                marginTop: 10
              }}>
                <span style={{ fontSize: 18, fontWeight: 700 }}>{t("about_teachers_register")}</span><br />
                <span style={{ fontSize: 16, fontWeight: 700 }}>Teacher Register</span>
              </a>
            </div>
            <div
              className="about-teachers-image"
              style={{
                flex: 1,
                minWidth: 260,
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div className="illustration-placeholder" style={{ width: "100%", maxWidth: 520 }}>
                <img src="image/main4.png" alt={t("about_teachers_title")}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }} />
              </div>
            </div>
            <style>{`
              @media (max-width: 900px) {
                .about-teachers-container {
                  flex-direction: column !important;
                  gap: 32px !important;
                  align-items: flex-start !important;
                }
                .about-teachers-image {
                  width: 100% !important;
                  max-width: 100% !important;
                  justify-content: center !important;
                }
                .about-teachers-text {
                  width: 100% !important;
                  max-width: 100% !important;
                }
              }
              @media (max-width: 600px) {
                .section-title-left {
                  font-size: 22px !important;
                  margin-bottom: 16px !important;
                }
                .about-teachers-text p {
                  font-size: 15px !important;
                }
                .btn.btn-outline {
                  font-size: 16px !important;
                  padding: 10px 12px !important;
                }
                .about-teachers-image .illustration-placeholder {
                  max-width: 100vw !important;
                }
              }
            `}</style>
          </div>
        </section>
        <section className="more-info-links section-padding bg-light">
          <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 className="section-title" style={{ fontWeight: 700, fontSize: 30 }}>{t("more_info_title")}</h2>
            <div className="quick-links">
              <a href="start.html" className="quick-link-item">
                <img
                  src="image/iii1.png"
                  alt={t("more_info_guide")}
                  className="quick-link-icon"
                />
                <span>{t("more_info_guide")}</span>
              </a>
              <a href="faq.html" className="quick-link-item">
                <img
                  src="image/iii2.png"
                  alt={t("more_info_faq")}
                  className="quick-link-icon"
                />
                <span>{t("more_info_faq")}</span>
              </a>
              <a href="price.html" className="quick-link-item">
                <img
                  src="image/iii3.png"
                  alt={t("more_info_fees")}
                  className="quick-link-icon"
                />
                <span>{t("more_info_fees")}</span>
              </a>
              <a href="https://dinfo.work/search/" className="quick-link-item">
                <img
                  src="image/iii4.png"
                  alt={t("more_info_search")}
                  className="quick-link-icon"
                />
                <span>{t("more_info_search")}</span>
              </a>
            </div>
          </div>
        </section>
        <section className="benefits-comparison section-padding" style={{ background: "#fff" }}>
          <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="benefits-columns">
              <div className="column">
                <h2 style={{ fontWeight: 700, fontSize: 30 }}>{t("benefits_title")}</h2>
                <ul>
                  <li>{t("benefits_1")}</li>
                  <li>{t("benefits_2")}</li>
                  <li>{t("benefits_3")}</li>
                  <li>{t("benefits_4")}</li>
                  <li>{t("benefits_5")}</li>
                  <li>{t("benefits_6")}</li>
                </ul>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <a style={{ padding: 15 }} href="https://dinfo.work/search/" className="btn btn-primary">
                    {t("benefits_search_button")}
                  </a>
                </div>
              </div>
              <div className="column">
                <h2 style={{ fontWeight: 700, fontSize: 30 }}>{t("fit_title")}</h2>
                <ul>
                  <li>{t("fit_1")}</li>
                  <li>{t("fit_2")}</li>
                  <li>{t("fit_3")}</li>
                  <li>{t("fit_4")}</li>
                  <li>{t("fit_5")}</li>
                </ul>
                <h2 style={{ fontWeight: 700, fontSize: 30 }}>{t("not_fit_title")}</h2>
                <ul>
                  <li>{t("not_fit_1")}</li>
                  <li>{t("not_fit_2")}</li>
                  <li>{t("not_fit_3")}</li>
                </ul>
                <a style={{ color: "#6fc12c" }} href="faq.html" className="text-link">
                  {t("fit_faq")}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="language-list-visual section-padding bg-light">
          <div className="container" style={{ maxWidth: 1150, margin: "0 auto" }}>
            <h2 style={{ fontWeight: 700, fontSize: 30 }} className="section-title">{t("language_list_title")}</h2>
            <div className="language-grid">
              <a
                href="https://dinfo.work/languages/english/"
                className="language-item"
              >
                <img src="image/feigo.png" alt={t("lang_english")} />
                <span>{t("lang_english")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/chinese_mandarin/"
                className="language-item"
              >
                <img src="image/fch.png" alt={t("lang_chinese_mandarin")} />
                <span>{t("lang_chinese_mandarin")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/korean/"
                className="language-item"
              >
                <img src="image/fha.png" alt={t("lang_korean")} />
                <span>{t("lang_korean")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/french/"
                className="language-item"
              >
                <img src="image/ffr.png" alt={t("lang_french")} />
                <span>{t("lang_french")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/fger.png" alt={t("lang_german")} />
                <span>{t("lang_german")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/fita.png" alt={t("lang_italian")} />
                <span>{t("lang_italian")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/fpol.png" alt={t("lang_portuguese")} />
                <span>{t("lang_portuguese")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/fro.png" alt={t("lang_russian")} />
                <span>{t("lang_russian")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/ftai.png" alt={t("lang_thai")} />
                <span>{t("lang_thai")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/fve.png" alt={t("lang_vietnamese")} />
                <span>{t("lang_vietnamese")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/find.png" alt={t("lang_indonesian")} />
                <span>{t("lang_indonesian")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/fmya.png" alt={t("lang_burmese")} />
                <span>{t("lang_burmese")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/fphi.png" alt={t("lang_tagalog")} />
                <span>{t("lang_tagalog")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/ftaiw.png" alt={t("lang_taiwanese")} />
                <span>{t("lang_taiwanese")}</span>
              </a>
              <a
                href="https://dinfo.work/languages/spanish/"
                className="language-item"
              >
                <img src="image/fara.png" alt={t("lang_arabic")} />
                <span>{t("lang_arabic")}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <StFooter />
    </>
  )
}
export default StudentLandingpage;