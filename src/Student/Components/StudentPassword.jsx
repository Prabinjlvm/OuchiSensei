import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const languageStrings = {
  ja: {
    pageTitle: "パスワード再発行 | Ouchi-Sensei",
    title: "パスワード再発行",
    instruction: "登録したメールアドレスを入力してください。パスワード再設定用のリンクを送信します。",
    emailLabel: "メールアドレス",
    submitBtn: "送信",
    backLink: "ログインページに戻る",
    successMessage: "もし「{email}」が登録されていれば、パスワード再設定用のリンクが送信されます。"
  },
  en: {
    pageTitle: "Password Reset | Ouchi-Sensei",
    title: "Reset Password",
    instruction: "Enter your registered email address. We'll send you a link to reset your password.",
    emailLabel: "Email Address",
    submitBtn: "Send Reset Link",
    backLink: "Back to Login",
    successMessage: "If an account with the email \"{email}\" exists, a password reset link will be sent."
  }
};

const style = `
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
body {
    font-family: 'Poppins', 'Noto Sans JP', sans-serif;
    background-color: var(--light-gray);
    color: var(--dark-gray);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    box-sizing: border-box;
}
.page-container {
    width: 100%;
    max-width: 450px;
}
.top-bar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
}
.lang-switcher { 
    display: flex; 
    gap: 0.5rem; 
}
.lang-switcher button { 
    background: none; 
    border: 2px solid var(--medium-gray); 
    color: #9ca3af; padding: 0.4rem 0.8rem; 
    border-radius: var(--border-radius-md); 
    cursor: pointer; 
    transition: all 0.3s ease; 
    font-weight: 600; 
}
.lang-switcher button.active { 
    border-color: var(--primary-color); 
    background-color: var(--primary-color); 
    color: var(--white-color); 
}
.reset-container {
    width: 100%;
    max-width: 450px;
    margin: auto;
}
.reset-card {
    background-color: var(--white-color);
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
}
@media (min-width: 640px) {
    .reset-card {
        padding: 3rem;
    }
}
.reset-header {
    text-align: center;
    margin-bottom: 2rem;
}
.reset-header .logo {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: block;
}
.reset-header h1 {
    font-size: 1.5rem;
    color: var(--text-color);
    margin: 0;
}
 .reset-header p {
    color: #6b7280;
    font-size: 1rem;
    margin-top: 0.5rem;
}
.form-group {
    margin-bottom: 1.5rem;
}
.form-group label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
}
.form-group input {
    width: 100%;
    padding: 12px 14px;
    border-radius: var(--border-radius-md);
    border: 1px solid #d1d5db;
    background-color: var(--white-color);
    font-size: 1rem;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
}
.form-group input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(111, 186, 44, 0.3);
}
.btn-submit {
    display: block;
    width: 100%;
    background-color: var(--primary-color);
    color: var(--white-color);
    font-weight: 600;
    font-size: 1rem;
    padding: 14px;
    border-radius: var(--border-radius-md);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.btn-submit:hover {
    background-color: var(--primary-color-dark);
}
.back-link {
    text-align: center;
    margin-top: 1.5rem;
}
.back-link a, .back-btn {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
}
.back-link a:hover, .back-btn:hover {
    text-decoration: underline;
}
.message-box {
    padding: 1rem;
    border-radius: var(--border-radius-md);
    margin-bottom: 1.5rem;
    font-weight: 500;
    display: none;
}
.message-box.success {
    background-color: #d1fae5;
    color: #065f46;
    border: 1px solid #6ee7b7;
    display: block;
}
`;

export default function StudentPasswordReset() {
  const [lang, setLang] = useState("ja");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = languageStrings[lang].pageTitle;
  }, [lang]);

  const handleLangSwitch = (newLang) => {
    setLang(newLang);
    setMessage("");
    setShowMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(languageStrings[lang].successMessage.replace("{email}", email));
      setShowMessage(true);
      setEmail("");
    }
  };

  return (
    <>
      <style>{style}</style>
      <div className="page-container">
        <div className="top-bar">
          <div className="lang-switcher">
            <button
              id="lang-ja"
              className={lang === "ja" ? "active" : ""}
              onClick={() => handleLangSwitch("ja")}
            >
              JA
            </button>
            <button
              id="lang-en"
              className={lang === "en" ? "active" : ""}
              onClick={() => handleLangSwitch("en")}
            >
              EN
            </button>
          </div>
        </div>
        <div className="reset-container">
          <div className="reset-card">
            <header className="reset-header">
              <a href="#" className="logo">
                Ouchi-Sensei
              </a>
              <h1>{languageStrings[lang].title}</h1>
              <p>{languageStrings[lang].instruction}</p>
            </header>
            {showMessage && (
              <div className="message-box success">{message}</div>
            )}
            <form id="password-reset-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="email">{languageStrings[lang].emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-submit">
                {languageStrings[lang].submitBtn}
              </button>
            </form>
            <div className="back-link">
              <button
                type="button"
                className="back-btn"
                onClick={() => navigate('/student-login')}
                style={{ background: 'none', border: 'none', color: 'var(--primary-color)', fontWeight: 500, cursor: 'pointer', padding: 0 }}
              >
                <i className="fas fa-arrow-left" /> {languageStrings[lang].backLink}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}