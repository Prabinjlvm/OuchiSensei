import react from "react";
import "./Company.css"
import { Link } from "react-router-dom";

export default function CompanyProfile() {



    return (
        <>
            
                <header className="bg-[#5a9a24] text-white shadow-md">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-center">
                            会社概要 ・ 特定商取引法に基づく表記（Company Profile）
                        </h1>
                    </div>
                </header>
                <main
                    className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl"
                    id="company"
                >
                    <section className="mb-12 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-[#6fba2c] mb-4 pb-2 border-b border-[#a7d79b]">
                            会社概要（Company Profile）
                        </h2>
                        <p className="mb-6 text-gray-700">
                            有限会社ドットコムビジネスおよび私たちの運営する「おうち先生」サービスについての基本情報です。私たちの使命は、言語を学びたい方々と教えたい方々を繋ぐ、信頼性の高いプラットフォームを提供することです。
                            <br />
                            This section provides basic information about DotcomBusiness Y.K. and
                            our "Ouchi Sensei" service. Our mission is to provide a reliable
                            platform connecting those who want to learn languages with those who
                            want to teach.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full responsive-table">
                                <thead className="bg-stone-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                            項目（Item）
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                            詳細（Details）
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap table-cell-strong">
                                            会社名（Company name）
                                        </td>
                                        <td className="px-6 py-4">
                                            有限会社ドットコムビジネス（DotcomBusiness Y.K.）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap table-cell-strong">
                                            所在地（Company address）
                                        </td>
                                        <td className="px-6 py-4">
                                            埼玉県川越市新宿町1-13-16（1-13-16 Arajukumachi, Kawagoe-shi,
                                            Saitama, Japan）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap table-cell-strong">
                                            資本金（Capital）
                                        </td>
                                        <td className="px-6 py-4">JPY 3,000,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap table-cell-strong">
                                            事業内容（Our main service）
                                        </td>
                                        <td className="px-6 py-4">
                                            オンラインでの先生と生徒のマッチングプラットフォーム運営（Online
                                            teacher-student matching service）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap table-cell-strong">
                                            運営サイト（Operating website）
                                        </td>
                                        <td className="px-6 py-4">
                                            ouchi-sensei.com （おうち先生ドットコム）
                                            <br />
                                            <a
                                                href="en/index.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline"
                                            >
                                                Teacher's site (先生用ページ)
                                            </a>
                                            <br />
                                            <a
                                                href="index.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline"
                                            >
                                                Student's site (生徒用ページ)
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap table-cell-strong">
                                            運営責任者（Operation director）
                                        </td>
                                        <td className="px-6 py-4">角田豊（Yutka Tsunoda）</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap table-cell-strong">
                                            お問い合わせ（Contact）
                                        </td>
                                        <td className="px-6 py-4">
                                         <Link to="/StContact" >  <a
                                                
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline"
                                            >
                                                Contact form (お問い合わせフォーム)
                                            </a></Link>
                                            <br />
                                          
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section id="tokutei" className="mb-12 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-[#6fba2c] mb-4 pb-2 border-b border-[#a7d79b]">
                            特定商取引法に基づく表記 (Act on Specified Commercial Transactions)
                        </h2>
                        <p className="mb-6 text-gray-700">
                            おうち先生をご利用いただくにあたり、特定商取引法に基づき以下の通り表示いたします。サービスのご利用前に必ずご確認ください。
                            <br />
                            In accordance with the Act on Specified Commercial Transactions, we
                            provide the following information for users of Ouchi Sensei. Please be
                            sure to read this before using our services.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full responsive-table">
                                <thead className="bg-stone-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                            項目（Item）
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                            詳細（Details）
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 table-cell-strong">
                                            事業者情報 / Seller Information
                                        </td>
                                        <td className="px-6 py-4">
                                            上記会社概要欄に同じ / Same as Company Profile above
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 table-cell-strong">
                                            お問い合わせ窓口 / Contact Information
                                        </td>
                                        <td className="px-6 py-4">
                                            <a
                                                href="contact.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline"
                                            >
                                                お問い合わせフォーム / Contact Form
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 table-cell-strong">
                                            サービス内容 / Description of Service
                                        </td>
                                        <td className="px-6 py-4">
                                            当Webサイトにて登録中の語学教師の連絡先提供
                                            <br />
                                            Provision of contact information for language teachers
                                            registered on this website.
                                            <br />
                                            <span className="highlight-red">
                                                ★重要★当サービスはオンラインプラットフォームのご提供のみです。人材派遣・人材斡旋・先生紹介サービスのようなもではありません。
                                            </span>
                                            <br />
                                            <span className="highlight-red">
                                                ★Important★ This service only provides an online platform. It
                                                is not a talent dispatch, recruitment, or teacher referral
                                                service.
                                            </span>
                                            <br />
                                            レッスンに関することは全て個人間でのやり取りとなります。また、当サービスは、連絡先を入手していただいた先生とのレッスンの確実性や、ご希望条件でのレッスンの確実性、及びレッスン依頼メールへの先生からの返信に対する確実性を保証するものではありません。
                                            <br />
                                            All matters related to lessons are handled directly between
                                            individuals. Furthermore, this service does not guarantee the
                                            certainty of lessons with the teachers whose contact information
                                            you have obtained, the certainty of lessons under your desired
                                            conditions, or the certainty of a reply from teachers to your
                                            lesson request emails.
                                            <br />
                                            初めてのご利用の場合には必ずご利用前に
                                            <a
                                                href="faq.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline"
                                            >
                                                よくある質問 FAQ
                                            </a>
                                            ページと
                                            <a
                                                href="node/4.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline"
                                            >
                                                ご利用規約
                                            </a>
                                            ページをご確認ください。
                                            <br />
                                            If you are using our service for the first time, please be sure
                                            to check the{" "}
                                            <a
                                                href="kiyaku.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline"
                                            >
                                                FAQ
                                            </a>{" "}
                                            page and the{" "}
                                            <a
                                                href="node/4.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline"
                                            >
                                                Terms of Service
                                            </a>{" "}
                                            page before use.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 table-cell-strong">
                                            ご利用料金 / Service Fees
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-semibold">
                                                ＜システム利用料 / System Usage Fee＞
                                            </p>
                                            <p>
                                                3,300円（税込3,630円）にて、最大5名までの先生の連絡先をご提供します。
                                                <br />
                                                JPY 3,300 (JPY 3,630 including tax) for the contact
                                                information of up to 5 teachers.
                                            </p>
                                            <p className="mt-2">
                                                ※お申込みの完了後に先生の追加や変更はできません。
                                                <br />
                                                ※No additions or changes to teachers can be made after the
                                                application is completed.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 table-cell-strong">
                                            購入に付帯する費用 / Additional Costs
                                        </td>
                                        <td className="px-6 py-4">
                                            銀行振り込みによるお支払いの際の振込手数料
                                            <br />
                                            Bank transfer fees when paying by bank transfer.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 table-cell-strong">
                                            お支払い方法 / Payment Methods
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-semibold">
                                                ＜クレジットカード / Credit Card＞
                                            </p>
                                            <p>
                                                Stripe社の代行決済サービスとなりますため、当サイトよりStripe社のwebサイトに移動した後に決済を完了してください。
                                                <br />
                                                Payment is processed through Stripe's payment gateway service.
                                                You will be redirected to the Stripe website from our site to
                                                complete the payment.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 table-cell-strong">
                                            先生の連絡先情報のお渡し / Delivery of Teacher's Contact
                                            Information
                                        </td>
                                        <td className="px-6 py-4">
                                            ご利用料金のお支払いの確認が取れ次第、【ご入金確認完了のお知らせメール】をご登録いただいたメールアドレスに送信させていただきます。その後、アカウントにログインした状態でマイ・アカウント内の【入手した先生の連絡先】ページにて先生の連絡先をご確認いただけます。
                                            <br />
                                            Upon confirmation of payment of the service fee, a "Payment
                                            Confirmation Email" will be sent to your registered email
                                            address. After that, you can log in to your account and view the
                                            teacher's contact information on the "Obtained Teacher's Contact
                                            Information" page within My Account.
                                            <br />
                                            <p className="mt-2">
                                                ※先生の連絡先はお申し込み日より30日間上記のページにて表示されます。
                                                <br />
                                                ※The teacher's contact information will be displayed on the
                                                above page for 30 days from the date of application.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-class="px-6 py-4 table-cell-strong">
                                            連絡先の無料再追加について / Free Re-addition of Contacts
                                        </td>
                                        <td className="px-6 py-4">
                                            選択した先生全員に連絡を取ったにも関わらず体験（初回）レッスンが決まらなかった場合は、お申し込み日より
                                            <span className="highlight-red">60日間以内</span>
                                            に限り無料で代わりの先生の連絡先を追加させていただいております。
                                            <br />
                                            If you have contacted all the selected teachers and have not
                                            been able to arrange a trial (first) lesson, we will add contact
                                            information for alternative teachers free of charge, limited to
                                            within <span className="highlight-red">60 days</span> from the
                                            application date.
                                            <br />
                                            <p className="mt-2">
                                                ただし、ご利用者様が英会話スクール様や語学教室様の場合、またはその他の営利目的で当サイトをご利用いただいている場合は、先生ご自身がレッスンをお断りされるケースを含め、お選びいただいたどの先生とも条件などが合わない際でも無料再追加は対象外となります。
                                                <br />
                                                However, if the user is an English conversation school,
                                                language school, or is using this site for other commercial
                                                purposes, free re-addition is not applicable even if
                                                conditions do not match with any of the selected teachers,
                                                including cases where teachers themselves decline lessons.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>返金 / Refunds</td>
                                        <td className="px-6 py-4">
                                            クレジットカードにてお支払いいただいた場合にはデジタルコンテンツというサービスの性質上ご返金はお受けいたしません。
                                            <br />
                                            If you have paid by credit card, no refunds will be made due to
                                            the nature of digital content services.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>その他 / Other</td>
                                        <td className="px-6 py-4">
                                            <p>
                                                当サイトでのご対応期間はお申し込み日より
                                                <span className="highlight-red">60日間</span>となります。
                                                <br />
                                                The support period on this site is{" "}
                                                <span className="highlight-red">60 days</span> from the date
                                                of application.
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                特定のメールアドレス間ではメールの送受信ができないことが稀にあるようですが、その際は別メールアドレスから先生へ連絡していただくことになります。
                                                <br />
                                                It seems that in rare cases, emails cannot be sent or received
                                                between specific email addresses. In such cases, you will need
                                                to contact the teacher from a different email address.
                                                <br />
                                                <br />
                                                特に<span className="highlight-red">OCNメールアドレス</span>
                                                または
                                                <span className="highlight-red">
                                                    Yahoo Japanメールアドレス
                                                </span>
                                                から送信されたメールが先生側に届かないようなケースに関しましては当サイトではご対応できません。
                                                <br />
                                                In particular, we cannot provide support for cases where
                                                emails sent from{" "}
                                                <span className="highlight-red">
                                                    OCN email addresses
                                                </span> or{" "}
                                                <span className="highlight-red">
                                                    Yahoo Japan email addresses
                                                </span>{" "}
                                                do not reach the teacher.
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section
                        id="cta"
                        className="bg-[#e8f5e9] p-6 sm:p-8 rounded-lg shadow-lg text-center"
                    >
                        <h2 className="text-2xl font-semibold text-[#5a9a24] mb-4">
                            Ready to Start Your Language Journey? / 新しい言語学習を始めませんか？
                        </h2>
                        <p className="text-gray-700 mb-6">
                            あなたにぴったりの先生を見つけて、今日からレッスンを始めましょう。先生として登録することも可能です！
                            <br />
                            Find your perfect teacher and start your lessons today. You can also
                            register as a teacher!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-[#6fba2c] hover:bg-[#5a9a24] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105"
                            >
                                先生を探す (Find a Teacher)
                            </a>
                            <a
                                href="en/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105"
                            >
                                先生として登録する (Register as a Teacher)
                            </a>
                        </div>
                        <div className="mt-6">
                            <a
                                href="faq.html"
                                rel="noopener noreferrer"
                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline mr-4"
                            >
                                よくある質問 (FAQ)
                            </a>
                            <a
                                href="kiyaku.html"
                                rel="noopener noreferrer"
                                className="text-[#6fba2c] hover:text-[#5a9a24] hover:underline"
                            >
                                ご利用規約 (Terms of Service)
                            </a>
                        </div>
                    </section>
                    <section
                        id="additional-faq"
                        className="mt-12 bg-white p-6 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold text-[#6fba2c] mb-4 pb-2 border-b border-[#a7d79b]">
                            よくあるご質問 (抜粋) / Frequently Asked Questions (Excerpt)
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Q1: Ouchi Senseiはどのようなサービスですか？ / What kind of service
                                    is Ouchi Sensei?
                                </h3>
                                <p className="text-gray-700 ml-4">
                                    A1: Ouchi
                                    Senseiは、外国語を学びたい生徒と、教えたい先生をつなぐオンラインマッチングプラットフォームです。先生の連絡先情報を提供し、レッスン条件の交渉や契約は先生と生徒間で直接行っていただきます。私たちはレッスン場所の提供や契約の仲介は行いません。
                                    <br />
                                    A1: Ouchi Sensei is an online matching platform that connects
                                    students who want to learn foreign languages with teachers who want
                                    to teach. We provide teachers' contact information, and negotiations
                                    regarding lesson conditions and contracts are conducted directly
                                    between the teacher and the student. We do not provide lesson
                                    locations or mediate contracts.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Q2: 料金はいつ発生しますか？ / When does the fee occur?
                                </h3>
                                <p className="text-gray-700 ml-4">
                                    A2:
                                    先生の連絡先情報を取得する際に、システム利用料として3,300円（税込3,630円）が発生します。これにより最大5名の先生の連絡先を閲覧できます。レッスン料は別途、各先生と直接ご相談・お支払いください。
                                    <br />
                                    A2: A system usage fee of JPY 3,300 (JPY 3,630 including tax) is
                                    incurred when you obtain a teacher's contact information. This
                                    allows you to view the contact information of up to 5 teachers.
                                    Lesson fees are separate and should be discussed and paid directly
                                    to each teacher.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Q3: 先生と連絡が取れなかった場合はどうなりますか？ / What happens if
                                    I cannot contact a teacher?
                                </h3>
                                <p className="text-gray-700 ml-4">
                                    A3: お申し込み日から
                                    <span className="highlight-red">60日間以内</span>
                                    であれば、選択した先生全員に連絡を取ったにも関わらず体験レッスンが決まらなかった場合に限り、無料で代わりの先生の連絡先を追加提供する制度がございます。詳細は「特定商取引法に基づく表記」内の「連絡先の無料再追加について」の項目をご確認ください。
                                    <br />
                                    A3: If you have contacted all the selected teachers within{" "}
                                    <span className="highlight-red">60 days</span> of your application
                                    date and have not been able to arrange a trial lesson, there is a
                                    system to provide contact information for alternative teachers free
                                    of charge. For details, please check the "Free Re-addition of
                                    Contacts" section in the "Act on Specified Commercial Transactions."
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            

        </>
    )
}