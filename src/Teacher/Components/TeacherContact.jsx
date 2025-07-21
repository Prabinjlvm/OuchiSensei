import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./TeacherContact.css";

const TeContact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    alternativeEmail: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle form submission (e.g., send to backend)
  };

  return (
    <section className="stc-contact-bg">
      <div className="stc-contact-card">
        <h2 className="stc-title">{t('ContactForm.Title')}</h2>
        <p className="stc-desc">{t('ContactForm.Description')}</p>
        {submitted ? (
          <div className="stc-success">{t('ContactForm.ThankYou')}</div>
        ) : (
          <form className="stc-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="stc-form-group">
              <input
                type="text"
                name="name"
                id="stc-name"
                value={form.name}
                onChange={handleChange}
                required
                className="stc-input"
                placeholder=" "
                aria-label={t('ContactForm.NameLabel')}
              />
              <label htmlFor="stc-name" className="stc-label">{t('ContactForm.NameLabel')}</label>
            </div>
            <div className="stc-form-group">
              <input
                type="email"
                name="email"
                id="stc-email"
                value={form.email}
                onChange={handleChange}
                required
                className="stc-input"
                placeholder=" "
                aria-label={t('ContactForm.PrimaryEmailLabel')}
              />
              <label htmlFor="stc-email" className="stc-label">{t('ContactForm.PrimaryEmailLabel')}</label>
            </div>
            <div className="stc-form-group">
              <input
                type="email"
                name="alternativeEmail"
                id="stc-alt-email"
                value={form.alternativeEmail}
                onChange={handleChange}
                className="stc-input"
                placeholder=" "
                aria-label={t('ContactForm.AlternativeEmailLabel')}
              />
              <label htmlFor="stc-alt-email" className="stc-label">{t('ContactForm.AlternativeEmailLabel')}</label>
            </div>
            <div className="stc-form-group">
              <input
                type="text"
                name="subject"
                id="stc-subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="stc-input"
                placeholder=" "
                aria-label={t('ContactForm.SubjectLabel')}
              />
              <label htmlFor="stc-subject" className="stc-label">{t('ContactForm.SubjectLabel')}</label>
            </div>
            <div className="stc-form-group">
              <textarea
                name="message"
                id="stc-message"
                value={form.message}
                onChange={handleChange}
                required
                className="stc-input stc-textarea"
                placeholder=" "
                rows={4}
                aria-label={t('ContactForm.MessageLabel')}
              />
              <label htmlFor="stc-message" className="stc-label">{t('ContactForm.MessageLabel')}</label>
            </div>
            <button type="submit" className="stc-btn">{t('ContactForm.SendButton')}</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default TeContact;
