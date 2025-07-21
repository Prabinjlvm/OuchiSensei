import react from "react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function TeacherFooter (){
    const { t } = useTranslation();
    const year = new Date().getFullYear();
    return (
        <>
        <footer className="bg-gray-800 text-gray-300 py-12">
  <div className="container mx-auto px-6 text-center">
    <div className="mb-4 space-x-4 f16">
      <Link to="/teacher-terms" className="text-gray-300 hover:text-white">
        {t('footer_terms')}
      </Link>
      <a href="/CompanyProfile" className="text-gray-300 hover:text-white">
        {t('footer_company')}
      </a>
      <a
        href="/teacher-contact"
        target="_blank"
        className="text-gray-300 hover:text-white"
      >
        {t('footer_contact')}
      </a>
    </div>
    <p>
      {t('footer_copyright', { year })}
    </p>
  </div>
</footer>
        </>
    )
}

