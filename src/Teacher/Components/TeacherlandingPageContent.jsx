import React from "react";
import { useTranslation, Trans } from "react-i18next";

export default function TeacherLandingPageContent() {
    const { t } = useTranslation();
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                html { scroll-behavior: smooth; }
                .hero-bg {
                    /* Default background for mobile */
                    background-image: url('image/t1m.png');
                    background-size: cover;
                    background-position: center;
                }
                @media (min-width: 768px) {
                    .hero-bg {
                        background-image: url('image/t1.png');
                    }
                }
                .section-title { @apply text-3xl font-bold text-center mb-4 text-brand-primary; }
                .section-subtitle { @apply text-xl text-center text-gray-600 mb-12; }
                .cta-button { @apply bg-accent-DEFAULT hover:bg-accent-dark text-white font-bold py-3 px-6 text-lg md:py-3 md:px-8 md:text-lg rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105; }
                .feature-card { @apply bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300; }
                .step-card { @apply bg-gray-50 p-6 rounded-xl shadow-md text-center; }
                .faq-item { @apply bg-white p-6 rounded-lg shadow-md; }
                .faq-item summary::-webkit-details-marker { display: none; }
                .faq-item summary::after { content: '▼'; float: right; transition: transform 0.3s; }
                .faq-item[open] summary::after { transform: rotate(180deg); }
                .nav-link.active { @apply text-brand-light font-semibold; }
                .language-flag-placeholder { @apply w-10 h-6 flex items-center justify-center text-white text-xs font-bold rounded-sm shadow; }
                .read-more-content { display: none; }
                .read-more-content.expanded { display: block; }

                .hamburger-icon span { @apply block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out; }
                .hamburger-icon.open span:nth-child(1) { @apply transform rotate-45 translate-y-1.5; }
                .hamburger-icon.open span:nth-child(2) { @apply opacity-0; }
                .hamburger-icon.open span:nth-child(3) { @apply transform -rotate-45 -translate-y-1.5; }
            `}} />
            <main>
                <section id="hero" className="hero-bg text-white">
                    <div className="bg-black bg-opacity-50 min-h-[calc(10vh-124px)] md:min-h-[500px] flex items-center justify-center">
                        <div className="container mx-auto px-6 text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                                {t('techerhero_title')}
                            </h1>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                <Trans i18nKey="Teacherhero_subtitle">
                                    Your Way. <span className="text-green-400">For Free.</span>
                                </Trans>
                            </h2>
                            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
                                {t('techerhero_description')}
                            </p>
                            <div className="btn btn-light py-4 px-8" >
                            <a href="https://dinfo.work/search/" className="btn btn-light btn-lg py-4 px-8">
                               <b > {t('hero_cta')}</b>
                            </a></div>
                            <p className="mt-4 text-sm text-gray-300 f16">
                                {t('hero_note')}
                            </p>
                        </div>
                    </div>
                </section>
                <section id="what-is" className="py-16 md:py-10 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="section-title f26 mbottom10 bold">
                            {t('what_is_title')}
                        </h2>
                        <p className="section-subtitle mbottom20">
                            {t('what_is_subtitle')}
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="feature-card">
                                <div className="text-5xl mx-auto mb-4 text-brand-light">💰</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {t('feature_free')}
                                </h3>
                                <p className="text-gray-600">
                                    {t('feature_free_desc')}
                                </p>
                            </div>
                            <div className="feature-card">
                                <div className="text-5xl mx-auto mb-4 text-brand-light">💬</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {t('feature_direct')}
                                </h3>
                                <p className="text-gray-600">
                                    {t('feature_direct_desc')}
                                </p>
                            </div>
                            <div className="feature-card">
                                <div className="text-5xl mx-auto mb-4 text-brand-light">🌍</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {t('feature_nationwide')}
                                </h3>
                                <p className="text-gray-600">
                                    {t('feature_nationwide_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="why-choose" className="py-16 md:py-10 bg-gray-100">
                    <div className="container mx-auto px-6">
                        <h2 className="section-title f26 mbottom10 bold">
                            {t('why_choose_title')}
                        </h2>
                        <p className="section-subtitle mbottom20">
                            {t('why_choose_subtitle')}
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="feature-card">
                                <h4 className="text-lg font-semibold text-brand-primary mb-1 f20">
                                    {t('choose_rate')}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {t('choose_rate_desc')}
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4 className="text-lg font-semibold text-brand-primary mb-1 f20">
                                    {t('choose_flexible')}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {t('choose_flexible_desc')}
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4 className="text-lg font-semibold text-brand-primary mb-1 f20">
                                    {t('choose_style')}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {t('choose_style_desc')}
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4 className="text-lg font-semibold text-brand-primary mb-1 f20">
                                    {t('choose_setup')}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {t('choose_setup_desc')}
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4 className="text-lg font-semibold text-brand-primary mb-1 f20">
                                    {t('choose_payment')}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {t('choose_payment_desc')}
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4 className="text-lg font-semibold text-brand-primary mb-1 f20">
                                    {t('choose_any_language')}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {t('choose_any_language_desc')}
                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <a href="#signup" className="cta-button inline-block bold f18">
                                {t('hero_cta')}
                            </a>
                        </div>
                    </div>
                </section>
                <section id="steps" className="py-16 md:py-10 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="section-title f26 mbottom10 bold">
                            {t('get_started_title')}
                        </h2>
                        <p className="section-subtitle mbottom20">
                            {t('get_started_subtitle')}
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="step-card">
                                <div className="bg-brand-light text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {t('step1_title')}
                                </h3>
                                <p className="text-gray-600">
                                    {t('step1_desc')}
                                </p>
                            </div>
                            <div className="step-card">
                                <div className="bg-brand-light text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {t('step2_title')}
                                </h3>
                                <p className="text-gray-600">
                                    {t('step2_desc')}
                                </p>
                            </div>
                            <div className="step-card">
                                <div className="bg-brand-light text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {t('step3_title')}
                                </h3>
                                <p className="text-gray-600">
                                    {t('step3_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="opportunities"
                    className="py-16 md:py-10 bg-brand-primary text-white"
                >
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-4">
                            {t('opportunities_title')}
                        </h2>
                        <p className="text-xl text-center text-green-200 mb-12">
                            {t('opportunities_subtitle')}
                        </p>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                                <p className="mb-4">
                                    {t('opportunities_explore')}
                                </p>
                                <p className="font-semibold text-green-300 f24 mbottom10 bold">
                                    {t('opportunities_online')}
                                </p>
                                <p>
                                    {t('opportunities_online_desc')}
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="image/mape.png"
                                    alt="Map of Japan showing teaching locations"
                                    className="rounded-lg shadow-xl w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="languages" className="py-16 md:py-10 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="section-title f24 mbottom10 bold">
                            {t('teach_languages_title')}
                        </h2>
                        <p className="section-subtitle mbottom20">
                            {t('teach_languages_subtitle')}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-red-600 mx-auto mb-2">
                                    <img src="image/feigo.png" alt="English" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_english')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-red-500 mx-auto mb-2">
                                    <img src="image/fch.png" alt="Chinese" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_chinese')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-blue-500 mx-auto mb-2">
                                    <img src="image/fha.png" alt="Korean" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_korean')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-blue-700 mx-auto mb-2">
                                    <img src="image/ffr.png" alt="French" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_french')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-yellow-500 mx-auto mb-2">
                                    <img src="image/fsp.png" alt="Spanish" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_spanish')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/fger.png" alt="German" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_german')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/fita.png" alt="Italian" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_italian')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/fpol.png" alt="Portuguese" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_portuguese')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/fro.png" alt="Russian" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_russian')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/ftai.png" alt="Tagalog" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_tagalog')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/fve.png" alt="Vietnamese" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_vietnamese')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/find.png" alt="Indonesian" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_indonesian')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/fmya.png" alt="Myanmar" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_myanmar')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/fphi.png" alt="Philippines" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_philippines')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/ftaiw.png" alt="Taiwanese" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_taiwanese')}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                                <div className="language-flag-placeholder bg-black mx-auto mb-2">
                                    <img src="image/fara.png" alt="Arabic" />
                                </div>
                                <p className="font-medium text-gray-700">{t('language_arabic')}</p>
                            </div>
                        </div>
                        <p className="text-center mt-8 text-gray-600">
                            {t('teach_languages_and_others')}
                        </p>
                    </div>
                </section>
                <section id="demand" className="py-16 md:py-100 bg-gray-100">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center bg-white p-8 md:p-12 rounded-xl shadow-xl">
                            <div className="md:w-2/5 mb-8 md:mb-0">
                                <img
                                    src="image/t2.png"
                                    alt="Passionate Tutor explaining concepts"
                                    className="rounded-lg shadow-md w-full"
                                />
                            </div>
                            <div className="md:w-3/5 md:pl-12">
                                <h2 className="text-3xl font-bold text-brand-primary mb-4">
                                    {t('demand_title')}
                                </h2>
                                <div id="demand-text-short">
                                    <p className="text-gray-700 mb-4">
                                        {t('demand_short')}
                                        <button
                                            id="read-more-btn"
                                            className="text-brand-primary hover:text-brand-dark font-semibold ml-1"
                                        >
                                            {t('demand_read_more')}
                                        </button>
                                    </p>
                                </div>
                                <div id="demand-text-long" className="read-more-content">
                                    <p className="text-gray-700 mb-4">
                                        {t('demand_long')}
                                    </p>
                                    <p className="text-gray-700 font-semibold">
                                        {t('demand_long2')}
                                        <button
                                            id="read-less-btn"
                                            className="text-brand-primary hover:text-brand-dark font-semibold ml-1"
                                        >
                                            {t('demand_read_less')}
                                        </button>
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <a href="#signup" className="cta-button inline-block bold">
                                        {t('demand_cta')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="faq" className="py-16 md:py-10 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="section-title f24 mbottom10 bold">
                            {t('faq_title')}
                        </h2>
                        <p className="section-subtitle mbottom20">
                            {t('faq_subtitle')}
                        </p>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <details className="faq-item group">
                                <summary className="flex justify-between items-center font-semibold text-lg text-gray-800 cursor-pointer group-open:text-brand-primary">
                                    {t('faq_q1')}
                                </summary>
                                <p className="text-gray-600 mt-3">
                                    {t('faq_a1')}
                                </p>
                            </details>
                            <details className="faq-item group">
                                <summary className="flex justify-between items-center font-semibold text-lg text-gray-800 cursor-pointer group-open:text-brand-primary">
                                    {t('faq_q2')}
                                </summary>
                                <p className="text-gray-600 mt-3">
                                    {t('faq_a2')}
                                </p>
                            </details>
                            <details className="faq-item group">
                                <summary className="flex justify-between items-center font-semibold text-lg text-gray-800 cursor-pointer group-open:text-brand-primary">
                                    {t('faq_q3')}
                                </summary>
                                <p className="text-gray-600 mt-3">
                                    {t('faq_a3')}
                                </p>
                            </details>
                            <details className="faq-item group">
                                <summary className="flex justify-between items-center font-semibold text-lg text-gray-800 cursor-pointer group-open:text-brand-primary">
                                    {t('faq_q4')}
                                </summary>
                                <p className="text-gray-600 mt-3">
                                    {t('faq_a4')}
                                </p>
                            </details>
                            <details className="faq-item group">
                                <summary className="flex justify-between items-center font-semibold text-lg text-gray-800 cursor-pointer group-open:text-brand-primary">
                                    {t('faq_q5')}
                                </summary>
                                <p className="text-gray-600 mt-3">
                                    {t('faq_a5')}
                                </p>
                            </details>
                        </div>
                    </div>
                </section>
                <section id="signup" className="py-16 md:py-10 bg-brand-primary text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t('signup_title')}
                        </h2>
                        <p className="text-lg md:text-xl text-green-200 mb-8 max-w-2xl mx-auto">
                            {t('signup_subtitle')}
                        </p>
                        <div className="btn btn-light btn-lg py-4 px-8">
                        <a href="https://dinfo.work/search/" className="btn btn-light btn-lg py-4 px-8">
                        <b>{t('signup_cta')}</b>
                        </a></div>
                        <p className="mt-4 text-sm text-green-300">
                            {t('signup_note')}
                        </p>
                    </div>
                </section>
            </main>

        </>
    )
}