import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import "./studentheader.css";

const Navigation = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNav = (e, to) => {
    e.preventDefault();
    window.location.href = to;
  };

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
           <Link to="/"><img src="image/logo.jpg"  /></Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/TeacherList" className="nav-link">{t("nav_find_teachers")}</Link>

          {/* Dropdown Menu */}
          <div className="dropdown">
            <button className="nav-link dropdown-trigger">
              {t("nav_first_time_users")}
            </button>
            <div className="dropdown-menu">
              <Link to="/AboutFees"><a  className="dropdown-item">{t("nav_about_fees")}</a></Link>
              <Link to="/CourseFlow"><a  className="dropdown-item">{t("nav_usage_flow")}</a></Link>
              <Link to="/SampleEmail"><a  className="dropdown-item">{t("nav_example_email")}</a></Link>
            </div>
          </div>

          <Link to="/StFaq"><a  className="nav-link">{t("nav_faq")}</a></Link>
          <a href="/teacher" className="nav-link">Teacher Register</a>
          <Link to="/StContact"><a  className="nav-link">{t("nav_contact")}</a></Link>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
         <Link to="/techer-cart"> <button className="btn btn-orange">{t("nav_my_teacher_cart")}</button></Link>
         <Link to="/student-login"> <button className="btn btn-green">{t("nav_login")}</button></Link>
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
             <Link to="/"><img src="image/logo.jpg" alt={t("logo_alt")} /></Link>
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
             <Link to="/techer-cart"> <button className="btn btn-orange">{t("nav_my_teacher_cart")}</button></Link>
             <Link to="/student-login"> <button className="btn btn-green">{t("nav_login")}</button></Link>
            </div>

            {/* Navigation Links */}
            <div className="mobile-links">
              <Link to="/TeacherList"><a  className="mobile-link">{t("nav_find_teachers")}</a></Link>
              <Link to="/AboutFees"><a  className="mobile-link">{t("nav_usage_fees")}</a></Link>
              <Link to="/CourseFlow"><a  className="mobile-link">{t("nav_usage_flow_mobile")}</a></Link>
              <Link to="/SampleEmail"><a  className="mobile-link">{t("nav_example_email_lesson")}</a></Link>
              <Link to="/StFaq"><a  className="mobile-link">{t("nav_faq")}</a></Link>
              <a href="/teacher" className="mobile-link">Teacher Register</a>
              <Link to="/StContact"><a  className="mobile-link">{t("nav_contact")}</a></Link>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay */}
      {isMobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu} />}
    </>
  )
}

export default Navigation