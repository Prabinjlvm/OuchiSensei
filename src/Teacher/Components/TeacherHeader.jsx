import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import "./teacherHeader.css";

const TeacherHeader = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
           <Link to="/teacher"> <img src="image/logo.jpg" alt={t("logo_alt")} /></Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">

          {/* Dropdown Menu */}
          <div className="dropdown">
            <button className="nav-link dropdown-trigger">
              {t("nav_are_you_new")}
            </button>
            <div className="dropdown-menu">
              <Link to="/teacher-signup"><a  className="dropdown-item">New Registration</a></Link>
              <Link to="/student-finding-tips"><a  className="dropdown-item">{t("nav_tips_for_finding")}</a></Link>
              <Link to="/SampleEmail"><a  className="dropdown-item">{t("nav_example_email")}</a></Link>
            </div>
          </div>

          <Link to="/teacherfaq"><a  className="nav-link">{t("nav_faq")}</a></Link>
          <a href="/" className="nav-link">{t("stnav_teacher_site")}</a>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
         <Link to="/teacher-signup"> <button className="btn btn-orange">New Registration</button></Link>
          <Link to="/teacher-login"><button className="btn btn-green">{t("nav_login")}</button></Link>
          <LanguageToggle />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="mobile-nav">
        {/* Mobile Header */}
        <div className="mobile-header">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
             <Link to="/teacher"> <img src="image/logo.jpg" alt={t("logo_alt")} /></Link>
            </div>
          </div>

          {/* Language Toggle - Always visible */}
          <div className="mobile-language-toggle">
            <LanguageToggle />
          </div>

          {/* Hamburger Menu Button */}
          <button onClick={toggleMobileMenu} className="hamburger-btn">
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {/* Action Buttons */}
            <div className="mobile-buttons">
             <Link to="/card"> <button className="btn btn-orange">New Registration</button></Link>
            <Link to="/teacher-login"> <button className="btn btn-green">{t("nav_login")}</button></Link> 
            </div>

            {/* Navigation Links */}
            <div className="mobile-links">
            <Link to="/teacherfaq"><a  className="mobile-link">{t("nav_faq")}</a></Link>
              <Link to="/teacherlist"><a  className="mobile-link">{t("nav_tips_for_finding")}</a></Link>
              <Link to="/pricing"><a  className="mobile-link">{t("nav_example_email")}</a></Link>
              <a href="/" className="mobile-link">{t("stnav_teacher_site")}</a>
              <Link to="/teacher-contact"><a  className="mobile-link">{t("nav_contact")}</a></Link>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay */}
      {isMobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu} />}
    </>
  )
}

export default TeacherHeader