import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

const languageStrings = {
  ja: {
    pageTitle: "ログイン | Ouchi-Sensei",
    title: "購入履歴ログイン",
    emailLabel: "メールアドレス",
    passwordLabel: "パスワード",
    loginBtn: "ログイン",
    forgotPassword: "パスワードをお忘れですか？"
  },
  en: {
    pageTitle: "Login | Ouchi-Sensei",
    title: "Purchase History Login",
    emailLabel: "Email Address",
    passwordLabel: "Password",
    loginBtn: "Login",
    forgotPassword: "Forgot your password?"
  }
};

export default function StudentLogin() {
  const [lang, setLang] = useState("en");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = languageStrings[lang].pageTitle;
  }, [lang]);

  const handleLangSwitch = (newLang) => {
    setLang(newLang);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality would be implemented here.");
  };

  const strings = languageStrings[lang];

  return (
    <>
      <style>{`
        :root {
          --primary-color: #6fba2c;
          --primary-color-dark: #5a9d20;
          --light-gray: #f9fafb;
          --medium-gray: #e5e7eb;
          --dark-gray: #374151;
          --text-color: #111827;
          --white-color: #ffffff;
          --error-color: #ef4444;
          --success-color: #10b981;
          --border-radius-md: 8px;
          --border-radius-lg: 16px;
        }
        .page-container {
          width: 100vw;
          min-height: unset;
          background: var(--light-gray);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 3.5rem 1rem 2.5rem 1rem;
        }
        .login-container {
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
        }
        .login-card {
          background: var(--white-color);
          border-radius: var(--border-radius-lg);
          box-shadow: 0 8px 32px 0 rgba(55,65,81,0.10), 0 1.5px 4px 0 rgba(55,65,81,0.04);
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          position: relative;
        }
        @media (min-width: 640px) {
          .login-card {
            padding: 2.5rem 2.5rem 2rem 2.5rem;
          }
        }
        .top-bar {
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 2.2rem;
          padding-bottom: 0.5rem;
        }
        .lang-switcher {
          display: flex;
          gap: 0.5rem;
          position: static;
          z-index: 2;
        }
        .lang-switcher button {
          background: none;
          border: 2px solid var(--medium-gray);
          color: #9ca3af;
          padding: 0.5rem 1.2rem;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.03em;
        }
        .lang-switcher button.active {
          border-color: var(--primary-color);
          background-color: var(--primary-color);
          color: var(--white-color);
          box-shadow: 0 2px 8px rgba(111,186,44,0.08);
        }
        .login-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .login-header .logo {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--primary-color);
          text-decoration: none;
          margin-bottom: 0.5rem;
          display: block;
          letter-spacing: 0.04em;
        }
        .login-header h1 {
          font-size: 1.45rem;
          color: var(--text-color);
          margin: 0;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .form-group {
          margin-bottom: 1.7rem;
        }
        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.6rem;
          color: var(--dark-gray);
          font-size: 1.05rem;
        }
        .form-group input {
          width: 100%;
          padding: 13px 15px;
          border-radius: var(--border-radius-md);
          border: 1.5px solid #d1d5db;
          background-color: var(--white-color);
          font-size: 1.05rem;
          box-sizing: border-box;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .form-group input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(111, 186, 44, 0.13);
        }
        .btn-submit {
          display: block;
          width: 100%;
          background-color: var(--primary-color);
          color: var(--white-color);
          font-weight: 700;
          font-size: 1.08rem;
          padding: 15px;
          border-radius: var(--border-radius-md);
          border: none;
          cursor: pointer;
          transition: background-color 0.3s, box-shadow 0.3s;
          margin-top: 0.2rem;
          box-shadow: 0 2px 8px rgba(111,186,44,0.08);
        }
        .btn-submit:hover, .btn-submit:focus {
          background-color: var(--primary-color-dark);
        }
        .extra-links {
          text-align: center;
          margin-top: 2rem;
        }
        .extra-links a {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.01em;
          transition: text-decoration 0.2s;
        }
        .extra-links a:hover, .extra-links a:focus {
          text-decoration: underline;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--primary-color);
          font-size: 1.08rem;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 0;
          margin-left: 0;
          padding: 0.2rem 0.5rem 0.2rem 0.1rem;
          border-radius: var(--border-radius-md);
          transition: background 0.2s;
        }
        .back-btn:hover, .back-btn:focus {
          text-decoration: underline;
        }
      `}</style>
      <div className="page-container">
        <div className="top-bar">
          <BackButton />
          <div className="lang-switcher">
            <button
              id="lang-ja"
              className={lang === "ja" ? "active" : ""}
              onClick={() => handleLangSwitch("ja")}
              aria-pressed={lang === "ja"}
            >
              JA
            </button>
            <button
              id="lang-en"
              className={lang === "en" ? "active" : ""}
              onClick={() => handleLangSwitch("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
        </div>
        <div className="login-container">
          <div className="login-card">
            <header className="login-header">
              <a href="#" className="logo">
                Ouchi-Sensei
              </a>
              <h1>{strings.title}</h1>
            </header>
            <form id="login-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="email">{strings.emailLabel}</label>
                <input type="email" id="email" name="email" required autoComplete="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">{strings.passwordLabel}</label>
                <input type="password" id="password" name="password" required autoComplete="current-password" />
              </div>
              <button type="submit" className="btn-submit">
                {strings.loginBtn}
              </button>
            </form>
            <div className="extra-links">
              <Link to="/student-password">{strings.forgotPassword}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="back-btn"
      onClick={() => navigate('/')}
      aria-label="Back to Teacher Landing Page"
      type="button"
    >
      <span aria-hidden="true">&#8592;</span> Back
    </button>
  );
}