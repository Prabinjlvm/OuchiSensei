import React from "react";
import "./language-toggle.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

// Optional: You can add flag images to src/Assets/images/ if you want to use them
// import enFlag from '../Assets/images/en_flag.png';
// import jaFlag from '../Assets/images/ja_flag.png';

const LANGUAGES = [
  { code: "ja", label: "JA" /*, flag: jaFlag*/ },
  { code: "en", label: "EN" /*, flag: enFlag*/ },
];

const LanguageToggle = () => {
  const { i18n: i18next } = useTranslation();
  const currentLanguage = i18next.language;

  const handleChange = (lang) => {
    if (lang !== currentLanguage) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div className="language-toggle-wow">
      <div
        className="language-slider"
        style={{ left: currentLanguage === "ja" ? 0 : "50%" }}
      />
      {LANGUAGES.map((lang, idx) => (
        <button
          key={lang.code}
          className={`language-btn${currentLanguage === lang.code ? " active" : ""}`}
          onClick={() => handleChange(lang.code)}
          aria-pressed={currentLanguage === lang.code}
        >
          {/* Uncomment for flags: <img src={lang.flag} alt={lang.label} className="flag-icon" /> */}
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle; 