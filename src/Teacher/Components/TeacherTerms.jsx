
import React from "react";
import { useTranslation } from "react-i18next";

export default function TeacherTermsComponent() {
    const { t } = useTranslation();

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    :root {
                        --theme-color-primary: #4a7d1d;
                        --theme-color-accent: #6fba2c;
                        --theme-text-color: #1f2937;
                        --theme-bg-subtle: #f4f4f5;
                        --theme-border-color: #e4e4e7;
                    }
                    body {
                        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                        color: var(--theme-text-color);
                        background-color: var(--theme-bg-subtle);
                        font-size: 17px;
                        line-height: 1.75;
                    }
                    .content-section h2 {
                        color: var(--theme-color-primary);
                        border-bottom: 2px solid var(--theme-color-accent);
                        padding-bottom: 0.5rem;
                    }
                    h3 {
                        color: var(--theme-text-color);
                        font-weight: 600;
                    }
                `,
                }}
            />
            <div className="flex flex-col min-h-screen">
                <main id="contentArea" className="w-full p-6 md:p-12 lg:p-16">
                    <header className="mb-12 p-8 bg-white rounded-xl shadow-lg">
                        <div className="mb-8 text-center">
                            <h1 className="text-3xl font-bold text-theme-color-primary">
                                {t("teacherterms.header.siteName")}
                            </h1>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-theme-color-primary mb-4 text-center">
                            {t("teacherterms.header.title")}
                        </h1>
                        <p className="text-lg text-gray-700 mb-2 text-center">
                            {t("teacherterms.header.description")}
                        </p>
                        <p className="text-base text-gray-500 text-center">
                            {t("teacherterms.header.lastUpdated", {
                                date: new Date("2025-05-24").toLocaleDateString(),
                            })}
                        </p>
                    </header>
                    <div id="termsContent" className="space-y-10 max-w-5xl mx-auto">
                        <section id="section-1" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section1.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section1.description")}</p>
                                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                    <li>
                                        <strong>{t("teacherterms.section1.definitions.service")}</strong>:{" "}
                                        {t("teacherterms.section1.definitions.serviceDescription")}
                                    </li>
                                    <li>
                                        <strong>{t("teacherterms.section1.definitions.teacher")}</strong>:{" "}
                                        {t("teacherterms.section1.definitions.teacherDescription")}
                                    </li>
                                    <li>
                                        <strong>{t("teacherterms.section1.definitions.student")}</strong>:{" "}
                                        {t("teacherterms.section1.definitions.studentDescription")}
                                    </li>
                                    <li>
                                        <strong>{t("teacherterms.section1.definitions.ouchiSensei")}</strong>:{" "}
                                        {t("teacherterms.section1.definitions.ouchiSenseiDescription")}
                                    </li>
                                    <li>
                                        <strong>{t("teacherterms.section1.definitions.profile")}</strong>:{" "}
                                        {t("teacherterms.section1.definitions.profileDescription")}
                                    </li>
                                    <li>
                                        <strong>{t("teacherterms.section1.definitions.userContent")}</strong>:{" "}
                                        {t("teacherterms.section1.definitions.userContentDescription")}
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section id="section-2" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section2.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section2.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section2.purpose.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section2.purpose.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section2.scope.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section2.scope.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section2.eligibility.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section2.eligibility.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section2.nature.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section2.nature.description")}</p>
                            </div>
                        </section>
                        <section id="section-3" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section3.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section3.description")}</p>
                                <p className="text-gray-700 mb-4">{t("teacherterms.section3.intro")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section3.residency.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section3.residency.items.passport")}</li>
                                    <li>{t("teacherterms.section3.residency.items.registrationCard")}</li>
                                    <li>{t("teacherterms.section3.residency.items.workAuthorization")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section3.minimumStay.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section3.minimumStay.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section3.availability.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section3.availability.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section3.individualTeachers.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section3.individualTeachers.description")}</p>
                            </div>
                        </section>
                        <section id="section-4" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section4.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section4.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section4.legitimateUse.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section4.legitimateUse.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section4.prohibitedUses.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section4.prohibitedUses.intro")}</p>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section4.prohibitedUses.items.otherServices")}</li>
                                    <li>{t("teacherterms.section4.prohibitedUses.items.promotingBusinesses")}</li>
                                    <li>{t("teacherterms.section4.prohibitedUses.items.illegalActivities")}</li>
                                    <li>{t("teacherterms.section4.prohibitedUses.items.harassment")}</li>
                                </ul>
                            </div>
                        </section>
                        <section id="section-5" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section5.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section5.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section5.serviceFee.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section5.serviceFee.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section5.noEmployment.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section5.noEmployment.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section5.lessonPayments.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section5.lessonPayments.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section5.feeTransparency.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section5.feeTransparency.items.noUpfrontFees")}</li>
                                    <li>{t("teacherterms.section5.feeTransparency.items.feeConsistency")}</li>
                                    <li>{t("teacherterms.section5.feeTransparency.items.updateNotice")}</li>
                                </ul>
                            </div>
                        </section>
                        <section id="section-6" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section6.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section6.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section6.publicInfo.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section6.publicInfo.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section6.protectedInfo.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section6.protectedInfo.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section6.sharedInfo.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section6.sharedInfo.items.emailLastName")}</li>
                                    <li>{t("teacherterms.section6.sharedInfo.items.additionalContact")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section6.accuracy.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section6.accuracy.description")}</p>
                            </div>
                        </section>
                        <section id="section-7" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section7.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section7.description")}</p>
                                <p className="text-gray-700 mb-4">{t("teacherterms.section7.intro")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section7.accurateInfo.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section7.accurateInfo.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section7.professionalConduct.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section7.professionalConduct.items.respect")}</li>
                                    <li>{t("teacherterms.section7.professionalConduct.items.agreements")}</li>
                                    <li>{t("teacherterms.section7.professionalConduct.items.environment")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section7.accountSecurity.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section7.accountSecurity.items.passwordConfidentiality")}</li>
                                    <li>{t("teacherterms.section7.accountSecurity.items.noDisclosure")}</li>
                                    <li>{t("teacherterms.section7.accountSecurity.items.accountActivity")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section7.profileRestrictions.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section7.profileRestrictions.items.noContactInfo")}</li>
                                    <li>{t("teacherterms.section7.profileRestrictions.items.personalProfile")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section7.studentPrivacy.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section7.studentPrivacy.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section7.availability.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section7.availability.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section7.responsiveness.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section7.responsiveness.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section7.legalCompliance.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section7.legalCompliance.items.workObligations")}</li>
                                    <li>{t("teacherterms.section7.legalCompliance.items.lawCompliance")}</li>
                                </ul>
                            </div>
                        </section>
                        <section id="section-8" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section8.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section8.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section8.role.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section8.role.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section8.cooperation.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section8.cooperation.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section8.profileModeration.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section8.profileModeration.items.reviewEdit")}</li>
                                    <li>{t("teacherterms.section8.profileModeration.items.refuseRegistration")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section8.accountTermination.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section8.accountTermination.items.misconduct")}</li>
                                    <li>{t("teacherterms.section8.accountTermination.items.breach")}</li>
                                    <li>{t("teacherterms.section8.accountTermination.items.harmfulConduct")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section8.profileUse.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section8.profileUse.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section8.postRemoval.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section8.postRemoval.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section8.noEndorsement.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section8.noEndorsement.description")}</p>
                            </div>
                        </section>
                        <section id="section-9" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section9.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section9.description")}</p>
                                <p className="text-gray-700 mb-4">{t("teacherterms.section9.intro")}</p>
                                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section9.items.unlawfulPurpose")}</li>
                                    <li>{t("teacherterms.section9.items.lawViolation")}</li>
                                    <li>{t("teacherterms.section9.items.ipInfringement")}</li>
                                    <li>{t("teacherterms.section9.items.harassment")}</li>
                                    <li>{t("teacherterms.section9.items.falseInfo")}</li>
                                    <li>{t("teacherterms.section9.items.maliciousCode")}</li>
                                    <li>{t("teacherterms.section9.items.privacyViolation")}</li>
                                    <li>{t("teacherterms.section9.items.spam")}</li>
                                    <li>{t("teacherterms.section9.items.obscenePurpose")}</li>
                                    <li>{t("teacherterms.section9.items.securityInterference")}</li>
                                    <li>{t("teacherterms.section9.items.multipleAccounts")}</li>
                                    <li>{t("teacherterms.section9.items.bypassMeasures")}</li>
                                </ul>
                                <p className="text-gray-700 mt-4">{t("teacherterms.section9.termination")}</p>
                            </div>
                        </section>
                        <section id="section-10" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section10.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section10.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section10.ourContent.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section10.ourContent.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section10.limitedLicense.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section10.limitedLicense.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section10.restrictions.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section10.restrictions.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section10.userContent.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section10.userContent.description")}</p>
                            </div>
                        </section>
                        <section id="section-11" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section11.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section11.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section11.term.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section11.term.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section11.terminationByYou.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section11.terminationByYou.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section11.terminationByUs.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section11.terminationByUs.items.breach")}</li>
                                    <li>{t("teacherterms.section11.terminationByUs.items.legalLiability")}</li>
                                    <li>{t("teacherterms.section11.terminationByUs.items.misconduct")}</li>
                                    <li>{t("teacherterms.section11.terminationByUs.items.inactivity")}</li>
                                    <li>{t("teacherterms.section11.terminationByUs.items.integrity")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section11.effectOfTermination.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section11.effectOfTermination.description")}</p>
                            </div>
                        </section>
                        <section id="section-12" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section12.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section12.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section12.asIsService.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section12.asIsService.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section12.noGuarantee.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section12.noGuarantee.items.requirements")}</li>
                                    <li>{t("teacherterms.section12.noGuarantee.items.uninterrupted")}</li>
                                    <li>{t("teacherterms.section12.noGuarantee.items.results")}</li>
                                    <li>{t("teacherterms.section12.noGuarantee.items.quality")}</li>
                                    <li>{t("teacherterms.section12.noGuarantee.items.errors")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section12.userInteractions.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section12.userInteractions.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section12.limitationOfLiability.title")}</h3>
                                <ul className="list-decimal list-inside pl-6 space-y-3 text-gray-700">
                                    <li>{t("teacherterms.section12.limitationOfLiability.items.access")}</li>
                                    <li>{t("teacherterms.section12.limitationOfLiability.items.thirdPartyConduct")}</li>
                                    <li>{t("teacherterms.section12.limitationOfLiability.items.content")}</li>
                                    <li>{t("teacherterms.section12.limitationOfLiability.items.unauthorizedAccess")}</li>
                                    <li>{t("teacherterms.section12.limitationOfLiability.items.disputes")}</li>
                                </ul>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section12.maxLiability.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section12.maxLiability.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section12.jurisdictionalExceptions.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section12.jurisdictionalExceptions.description")}</p>
                            </div>
                        </section>
                        <section id="section-13" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section13.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section13.description")}</p>
                                <p className="text-gray-700">{t("teacherterms.section13.content")}</p>
                            </div>
                        </section>
                        <section id="section-14" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section14.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section14.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section14.rightToModify.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section14.rightToModify.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section14.notification.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section14.notification.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section14.effectiveDate.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section14.effectiveDate.description")}</p>
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{t("teacherterms.section14.acceptance.title")}</h3>
                                <p className="text-gray-700">{t("teacherterms.section14.acceptance.description")}</p>
                            </div>
                        </section>
                        <section id="section-15" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section15.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section15.description")}</p>
                                <p className="text-gray-700">{t("teacherterms.section15.law")}</p>
                                <p className="text-gray-700 mt-4">{t("teacherterms.section15.jurisdiction")}</p>
                            </div>
                        </section>
                        <section id="section-16" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section16.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section16.description")}</p>
                                <p className="text-gray-700">{t("teacherterms.section16.content")}</p>
                            </div>
                        </section>
                        <section id="section-17" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section17.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section17.description")}</p>
                                <p className="text-gray-700">{t("teacherterms.section17.content")}</p>
                            </div>
                        </section>
                        <section id="section-18" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section18.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section18.description")}</p>
                                <p className="text-gray-700">{t("teacherterms.section18.content")}</p>
                            </div>
                        </section>
                        <section id="section-19" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section19.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section19.description")}</p>
                                <p className="text-gray-700">{t("teacherterms.section19.content")}</p>
                            </div>
                        </section>
                        <section id="section-20" className="content-section bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-semibold mb-6">{t("teacherterms.section20.title")}</h2>
                            <div>
                                <p className="text-base text-gray-600 mb-6">{t("teacherterms.section20.description")}</p>
                                <p className="text-gray-700">
                                    {t("teacherterms.section20.content")}{" "}
                                    <a
                                        href="contact.html"
                                        target="_blank"
                                        className="text-theme-color-accent hover:underline font-medium"
                                    >
                                        {t("teacherterms.section20.contactLink")}
                                    </a>{" "}
                                    {t("teacherterms.section20.email")}
                                </p>
                            </div>
                        </section>
                    </div>
                </main>
                <footer className="bg-gray-800 text-gray-300 py-12">
                    <div className="container mx-auto px-6 text-center">
                        <div className="mb-4 space-x-4 f16">
                            <a href="terms.html" className="text-gray-300 hover:text-white">
                                {t("teacherterms.footer.terms")}
                            </a>
                            <a href="../company.html" className="text-gray-300 hover:text-white">
                                {t("teacherterms.footer.company")}
                            </a>
                            <a href="contact.html" target="_blank" className="text-gray-300 hover:text-white">
                                {t("teacherterms.footer.contact")}
                            </a>
                        </div>
                        <p>
                            {t("teacherterms.footer.copyright", { year: new Date().getFullYear() })}
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
