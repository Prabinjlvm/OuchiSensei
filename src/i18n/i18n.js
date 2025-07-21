// filepath: m:\Project\Ouchi-Senei\src\i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero_title: "Find Your Ideal Foreign Language Teacher!",
      hero_subtitle: "Only a 3,300 yen system usage fee!",
      hero_description: "Choose from over 16 languages! Find your ideal native teacher by region, age, and gender, and take one-on-one lessons at a nearby cafe or online.",
      hero_language_label: "Lesson Language",
      hero_language_placeholder: "Select the language you want to learn",
      hero_area_label: "Lesson Area",
      hero_area_placeholder: "e.g. Tokyo, Shinjuku Station, Online",
      hero_search_button: "Quick Search Now",
      hero_meta: "Over XXXX registered teachers! Affordable lessons with direct contracts for peace of mind.",
      features_title: "3 Reasons Why Ouchi Sensei is Chosen",
      features_1_title: "Wide Range of Languages & Teachers",
      features_1_desc: "Not just English—over 16 languages from Asia and Europe. Many experienced native and bilingual teachers are registered.",
      features_2_title: "Flexible Lesson Styles",
      features_2_desc: "Face-to-face lessons at cafes, home tutoring, or online lessons—choose the time and place that fits your lifestyle.",
      features_3_title: "Affordable Pricing",
      features_3_desc: "No admission or annual fees! Negotiate lesson fees directly with teachers for high-quality one-on-one lessons at low prices.",
      map_title: "Find Teachers Near You on the Map",
      map_subtitle: "Great teachers are waiting in all 47 prefectures of Japan, including your city.",
      new_teachers_title: "Newly Registered Teachers",
      teacher_profile_button: "View Profile",
      more_teachers_button: "Find More Teachers",
      howto_title: "Easy Steps to Use Ouchi Sensei.com",
      howto_1_title: "Find a Teacher",
      howto_1_desc: "Search for your ideal teacher by language, area, or keyword.",
      howto_2_title: "Check Profile",
      howto_2_desc: "Check the teacher's background, fees, and reviews to find the right one for you.",
      howto_3_title: "Contact",
      howto_3_desc: "After paying the system fee, contact the teacher directly to discuss lesson details.",
      howto_4_title: "Start Lesson!",
      howto_4_desc: "Start your lesson at the agreed time and place, whether at a cafe or online!",
      howto_guide_button: "See the Full User Guide",
      service_title: "Start Your Ideal Language Lessons with Ouchi Sensei.com",
      service_1_title: "One-on-One Lessons at Your Own Pace",
      service_1_desc: "Ouchi Sensei.com is a platform to find the perfect language teacher for you. Search for teachers in all 47 prefectures of Japan, covering over 16 languages including English, Chinese, Korean, and French. Many teachers with experience at major language schools are registered. From daily conversation to business and exam prep, get personalized lessons tailored to your level and goals.",
      service_2_title: "Affordable Direct Negotiation",
      service_2_desc: "You can discuss lesson content, schedule, and fees directly with the teacher, so there are no high initial or material costs like typical language schools. Enjoy high-quality lessons in a relaxed environment, either at a cafe or online. New teachers are joining all the time! We fully support your desire to learn.",
      service_links_languages: "Search by Language",
      service_links_area: "Search by Area",
      service_links_online: "Find Teachers for Online Lessons",
      notes_title: "Important Notes for Use",
      notes_desc: "This site is a matching platform for individual language lessons. We do not provide teacher placement or staffing services. All communication and contracts with teachers are your own responsibility. First-time users, please be sure to check the FAQ and Terms of Use.",
      pricing_cta_title: "Start Affordable One-on-One Lessons with Native Teachers",
      pricing_cta_desc: "Are you questioning the high costs of language schools? With Ouchi Sensei.com, there are no admission or annual fees. You only pay the system fee to get the teacher's contact info, then negotiate lesson fees directly. Start high-quality lessons at your own pace for an amazingly reasonable price.",
      pricing_cta_fee_label: "System Usage Fee (Only When Getting Contact Info)",
      pricing_cta_fee_note: "*No admission or monthly fees at all",
      pricing_cta_fee_price: "3,300 yen (tax included: 3,630 yen)",
      pricing_cta_search_button: "Find Your Perfect Teacher Now!",
      pricing_cta_more: "Learn More About Fees",
      about_teachers_title: "What Kind of Teachers Are Registered?",
      about_teachers_1: "Ouchi Sensei.com has a diverse range of native and non-native teachers living in Japan. Most are native speakers of the lesson language, but there are also bilingual teachers raised in international environments and Japanese teachers with long overseas experience.",
      about_teachers_2: "From professional teachers with experience as ALTs or at major language schools to friendly student teachers, a variety of teachers are waiting for you. All teachers share their skills and experience through their profiles and are eager to find students.",
      about_teachers_register: "Register as a Teacher Here\nTeacher Register",
      more_info_title: "Learn More About Ouchi Sensei.com",
      more_info_guide: "User Guide",
      more_info_faq: "FAQ",
      more_info_fees: "Usage Fees",
      more_info_search: "Find a Teacher Now",
      benefits_title: "Why Ouchi Sensei.com is Perfect for You",
      benefits_1: "No admission or monthly/annual fees!",
      benefits_2: "High-quality one-on-one lessons at low prices",
      benefits_3: "Check experienced, high-quality teachers by other students' reviews",
      benefits_4: "Regular profile checks by management for peace of mind",
      benefits_5: "Learn flexibly at your preferred time and place",
      benefits_6: "No app required! Easy search on the website",
      benefits_search_button: "Try Finding a Teacher Now",
      fit_title: "Perfect For...",
      fit_1: "Those who want to avoid high language school fees",
      fit_2: "Those who want to communicate directly with teachers and take affordable lessons",
      fit_3: "Those who want to learn in a free style at a cafe, home, or online",
      fit_4: "Those who value practical conversation practice in person",
      fit_5: "Those with clear goals like travel, business, or certification",
      not_fit_title: "May Not Be Suitable If...",
      not_fit_1: "You want extensive counseling or a fixed curriculum",
      not_fit_2: "You want to avoid direct communication with teachers",
      not_fit_3: "You are not comfortable with web or email communication",
      fit_faq: "If you are unsure, check the FAQ",
      language_list_title: "Find Teachers by Language You Want to Learn",
      // Language names
      lang_english: "English",
      lang_chinese_mandarin: "Chinese (Mandarin)",
      lang_korean: "Korean",
      lang_french: "French",
      lang_german: "German",
      lang_italian: "Italian",
      lang_portuguese: "Portuguese",
      lang_russian: "Russian",
      lang_thai: "Thai",
      lang_vietnamese: "Vietnamese",
      lang_indonesian: "Indonesian",
      lang_burmese: "Burmese",
      lang_tagalog: "Tagalog",
      lang_taiwanese: "Taiwanese",
      lang_arabic: "Arabic",
      logo_alt: "Ouchi Sensei Dot Com",
      nav_find_teachers: "Find a Teacher",
      nav_first_time_users: "For First-Time Users",
      nav_about_fees: "About Fees",
      nav_usage_flow: "Usage Flow",
      nav_example_email: "Example Email (English)",
      nav_faq: "FAQ",
      nav_teacher_site: "Teacher's Site",
      nav_contact: "Contact",
      nav_my_teacher_cart: "My Teacher Cart",
      nav_login: "Login",
      nav_usage_fees: "Usage Fees",
      nav_usage_flow_mobile: "How to Use",
      nav_example_email_lesson: "Example Email (Lesson Request)",
      // Footer
      footer_title: "Ouchi Sensei Dot Com",
      footer_description: "Find your perfect language teacher and start one-on-one lessons.",
      footer_sitemap: "Sitemap",
      footer_top: "Top",
      footer_find_teacher: "Find a Teacher",
      footer_fees: "About Fees",
      footer_usage_flow: "How to Use",
      footer_sample_email: "Sample Email (English)",
      footer_support: "Support",
      footer_faq: "FAQ",
      footer_contact: "Contact",
      footer_teacher_register: "Teacher Register",
      footer_operator_info: "Operator Info",
      footer_company: "Company Info",
      footer_tokutei: "Specified Commercial Transactions Act",
      footer_terms: "Terms of Use",
      footer_privacy: "Privacy Policy",
      footer_copyright: "© 2025 Ouchi Sensei Dot Com. All Rights Reserved.",
      aboutfees: {
        hero_title: "Find the perfect native teacher for you,",
        hero_subtitle: "and get affordable one-on-one lessons",
        hero_desc: "We offer a clear and reasonable pricing system to support your language learning journey.",
        why_affordable_title: "Why is it so affordable?",
        no_membership_fee_title: "No admission, annual, or monthly fees",
        no_membership_fee_highlight: "Completely free!",
        no_membership_fee_desc: "All you need is the system usage fee to connect with great teachers. Start learning without worrying about high initial or ongoing costs.",
        direct_platform_title: "A platform that",
        direct_platform_highlight: "connects teachers and students directly",
        direct_platform_after_highlight: "",
        direct_platform_desc: "By providing a direct platform, we thoroughly eliminate unnecessary costs. That's why we can offer high-quality connections at such low prices.",
        simple_plan_title: "Simple and easy to choose",
        system_fee_title: "System Usage Fee",
        system_fee_desc: "Fee to obtain teacher's contact info",
        system_fee_price: "3,300",
        system_fee_yen: "yen",
        system_fee_tax: "(tax included 3,630 yen)",
        system_fee_feature1: "Contact info for up to 5 teachers",
        system_fee_feature2: "Flat rate regardless of number of teachers",
        system_fee_feature3: "No admission, annual, or monthly fees",
        cta_find_teacher_now: "Start finding a teacher now",
        cta_find_teacher_page: "Go to teacher search page",
        system_fee_note_strong: "[Please Note]",
        system_fee_note: "The above is the platform system usage fee. Lesson fees are paid directly to the teacher and vary by teacher. Please check each teacher's profile for details and confirm conditions directly before starting lessons.",
        payment_methods_title: "Payment Methods",
        payment_methods_subtitle: "(Safe and Easy Payment)",
        stripe_title: "Stripe",
        stripe_easy_title: "Easy, Safe, and Speedy!",
        stripe_easy_desc1: "You can pay safely without sharing your credit card info with our site.",
        stripe_easy_desc2: "Even if you don't have a Stripe account, you can pay easily with major credit cards.",
        stripe_benefit: "After payment, you can immediately view teacher contact info 24/7, even on weekends and holidays.",
        stripe_what_is: "What is Stripe?",
        receipt_title: "About Receipts",
        receipt_desc1: "Ouchi Sensei Dot Com does not issue original receipts.",
        receipt_desc2: "Depending on your payment method, the following can be used as official receipts.",
        receipt_stripe_title: "For Stripe (Credit Card) payments",
        receipt_stripe_desc: "Please use the credit card statement issued by your card company or the receipt email sent by Stripe at the time of payment.",
        support_title: "Reliable Support System",
        support_subtitle: "No worries even if you can't arrange a lesson!",
        support_desc1: "If you contact all selected teachers but cannot arrange a trial lesson (first lesson), don't worry.",
        support_desc2: "For 60 days from your application date, you can get additional teacher contact info at no extra charge.",
        support_desc3_1: "In such cases, please contact us via the ",
        support_desc3_link: "Contact Form",
        support_desc3_2: ".",
        important_notes_title: "Please be sure to check before use (Important Notes)",
        important_notes_1_title: "1. About the Service",
        important_notes_1_desc1: "This service is an online platform to connect students and teachers. It is not a staffing, dispatch, or intermediary service, and there are no direct employment or outsourcing contracts with registered teachers.",
        important_notes_1_desc2_1: "Especially for first-time users, please make sure there is no difference between your desired service and our service by checking the ",
        important_notes_1_desc2_link1: "FAQ",
        important_notes_1_desc2_2: " page and the ",
        important_notes_1_desc2_link2: "Terms of Use",
        important_notes_1_desc2_3: " page in advance.",
        important_notes_2_title: "2. About Lesson Guarantees",
        important_notes_2_desc1: "We do not guarantee that you will find a lesson that perfectly matches your conditions, that teachers will reply to your lesson request emails, or that lessons will be established with all teachers whose contact info you obtain. You must actively communicate with teachers yourself.",
        important_notes_3_title: "3. Changes/Cancellations after Application",
        important_notes_3_desc1: "In principle, we do not accept changes (including additions) or cancellations of teachers due to customer reasons after application.",
        important_notes_3_desc2: "Due to the nature of digital content, we do not offer refunds for the system usage fee for any reason after payment. Please understand this in advance.",
        important_notes_4_title: "4. Validity Period of Contact Info & Email",
        important_notes_4_desc1_1: "You can check the contact info of teachers you obtained on your My Account page for ",
        important_notes_4_desc1_strong: "30 days",
        important_notes_4_desc1_2: " from the application date.",
        important_notes_4_desc2: "In rare cases, email may not be sent/received properly between certain addresses (e.g., Yahoo! Mail, OCN Mail, etc.). If this happens, please try contacting the teacher from another email address. We cannot provide individual support for such email issues.",
        final_cta_title1: "Now, find your perfect teacher,",
        final_cta_title2: "and start a new language experience!",
        final_cta_desc: "If you have any questions, please check the FAQ.",
        final_cta_button: "Find a teacher now!",
        final_cta_link: "See the FAQ",
        AboutFeesHeader:"Usage fee",
      },
      courseflow: {
        // Header
        header_title: "How to Use",
        header_desc_1: "Start lessons at your own pace with experienced native or bilingual teachers, online or in person.",
        header_desc_2: "Here are 6 easy steps to find your ideal teacher and start lessons.",
        // Hero
        hero_title: "Let's start your teacher search journey!",
        hero_subtitle: "You will surely find the perfect teacher for you.",
        hero_btn: "Find a Teacher Now",
        hero_img_alt: "A Japanese woman enjoying an online language lesson with a smiling foreign teacher on a tablet.",
        // Notice
        notice_title: "[!] Please read before using",
        notice_desc_1: "Ouchi Sensei is an online platform connecting students and teachers. We provide opportunities, but do not offer staffing or teacher introduction services.",
        notice_desc_2: "All contracts and lesson details are to be negotiated and decided directly between you and the teacher.",
        notice_desc_3: "Before starting, please be sure to check all the following pages.",
        notice_faq: "FAQ",
        notice_terms: "Terms of Use",
        // Steps
        steps_title: "Easy 6 Steps! How to Use",
        step_1_title: "STEP 1: Find a Teacher",
        step_1_img_alt: "Simple illustration of searching teacher profiles with a magnifying glass",
        step_1_desc_1: "First, search for teachers that match your preferences on the ",
        step_1_link: "Teacher Search Page",
        step_1_desc_2: ".",
        step_1_point: "Point:",
        step_1_point_desc: "You can filter by language, level, location, online/in-person, etc.",
        step_1_hint: "Hint:",
        step_1_hint_desc: "Try searching with different conditions to discover great teachers.",
        step_2_title: "STEP 2: Add Teachers to Cart",
        step_2_img_alt: "Simple illustration of a shopping cart with teacher photos",
        step_2_desc: "Check teacher profiles! Refer to their lesson policy, self-introduction, and student reviews.",
        step_2_point: "Point:",
        step_2_point_desc: "Teachers with a recent 'last updated' date are likely actively seeking students.",
        step_2_action: "Action:",
        step_2_action_desc: "Click 'Add to My Teacher Cart'! You can compare multiple teachers.",
        step_3_title: "STEP 3: Apply to Get Contact Info",
        step_3_img_alt: "Simple illustration of a registration form on a computer screen",
        step_3_desc: "Proceed to the application process from the cart page.",
        step_3_first: "First-time users:",
        step_3_first_desc: "Please enter your account and registration information.",
        step_3_registered: "Registered users:",
        step_3_registered_desc: "Please log in.",
        step_3_note: "Note:",
        step_3_note_desc_1: "If you use a mobile email address (docomo, au, softbank, etc.), please make sure you can receive emails from ",
        step_3_note_desc_2: " (e.g.) Some email formats may not be accepted.",
        step_4_title: "STEP 4: Get Contact Info (Payment)",
        step_4_img_alt: "Simple illustration of credit card and bank icons",
        step_4_desc: "Check your information, agree to the terms, and confirm your application.",
        step_4_payment: "Payment Method:",
        step_4_payment_stripe: "Stripe: Available 24/7, check immediately after payment.",
        step_4_confirm: "How to Check:",
        step_4_confirm_desc_1: "After payment, you can check on the ",
        step_4_confirm_link: "My Account - Acquired Teacher Contacts",
        step_4_confirm_desc_2: " page for 30 days.",
        step_5_title: "STEP 5: Contact the Teacher",
        step_5_img_alt: "Simple illustration of a flying mail envelope",
        step_5_desc: "Now it's time to contact the teacher! Send a lesson request email to the acquired contact (mainly email address).",
        step_5_point: "Point:",
        step_5_point_sample: "Sample email for first contact",
        step_5_point_sample_desc: " is also available.",
        step_5_point_subject: "Include 'From Ouchi Sensei' in the subject for clarity.",
        step_5_point_language: "Contact foreign teachers in English or your target language.",
        step_5_negotiation: "Negotiation:",
        step_5_negotiation_desc: "Discuss lesson location, date, and fee directly with the teacher.",
        step_5_note: "Note:",
        step_5_note_link: "Contact Form",
        step_5_note_desc: " if you do not receive a reply after 3 days.",
        step_6_title: "STEP 6: Take Your First Lesson",
        step_6_img_alt: "Simple illustration of two people shaking hands",
        step_6_desc: "Take your first lesson as agreed in advance.",
        step_6_place: "Location:",
        step_6_place_desc: "The first lesson should be in a public place like a cafe. Be cautious about home lessons, especially with teachers of the opposite sex.",
        step_6_fee: "Lesson Fee:",
        step_6_fee_desc_1: "Pay ",
        step_6_fee_desc_2: "after each lesson",
        step_6_fee_desc_3: " directly to the teacher. Avoid prepayment to prevent money troubles.",
        step_6_continue: "Continue:",
        step_6_continue_desc: "If you like the lesson, discuss future schedules and request regular lessons.",
        // Tips
        tips_title: "3 Tips for Smooth Communication with Teachers",
        tips_1_title: "Polite First Contact:",
        tips_1_desc_1: "Clearly introduce yourself and your learning goals. (See ",
        tips_1_link: "Sample Email",
        tips_1_desc_2: ")",
        tips_2_title: "Be Clear on Conditions:",
        tips_2_desc: "Confirm lesson fee, time, place, and cancellation policy in writing (e.g., email).",
        tips_3_title: "Safety First:",
        tips_3_desc_1: "First lessons should be in public. Always ",
        tips_3_desc_2: "pay per lesson",
        tips_3_desc_3: " to avoid trouble.",
        // FAQ
        faq_title: "Frequently Asked Questions (FAQ)",
        faq_img_alt: "Large question mark and Q&A icon in a speech bubble",
        faq_1_q: "What payment methods are available?",
        faq_1_a: "You can use bank transfer and PayPal. PayPal is recommended for instant confirmation.",
        faq_2_q: "The teacher hasn't replied.",
        faq_2_a_1: "If you don't get a reply for more than 3 days, please contact us via the ",
        faq_2_a_link: "Contact Form",
        faq_2_a_2: " with the teacher's ID/name and email date. Consider contacting again or searching for another teacher.",
        faq_3_q: "Are there any fees besides the lesson fee?",
        faq_3_a: "You only pay the contact acquisition fee to us. Lesson fees, your own food/drink at cafes, and transportation are separate and should be discussed directly with the teacher.",
        faq_4_q: "Are online lessons available?",
        faq_4_a: "Yes, many teachers offer online lessons. Filter by 'online' when searching or check the teacher's profile.",
        faq_5_q: "What if I have trouble with a teacher?",
        faq_5_a_1: "We cannot intervene in private contracts. To avoid trouble, please read the ",
        faq_5_a_link: "Terms of Use",
        faq_5_a_2: " carefully and confirm lesson conditions (fee, place, time, cancellation policy, etc.) in writing (e.g., email).",
        faq_more: "See more FAQs...",
        // Final CTA
        final_cta_title: "Now, find your own teacher!",
        final_cta_desc: "Ready? Open the door to the world and start your new learning journey!",
        final_cta_btn: "Find a Teacher Now"
      },
      sampleemail: {
        title_jp: "English/Japanese Email Template Collection",
        subtitle_jp: "Smooth communication between teachers and students!",
        intro_jp1: "When starting a language lesson with a foreign teacher or with a Japanese learner, polite and clear communication is the first step in building a trusting relationship. On this page, we have prepared an interactive email template in English and Japanese that you can use in a variety of lesson-related situations.",
        intro_jp2: "Each template allows you to easily switch languages and copy content. Use these templates as a guide and add your own words to create a heartfelt message.",
        title_en: "English/Japanese Email Template Collection",
        subtitle_en: "Smooth communication between teachers and students!",
        intro_en1: "When starting a language lesson with a foreign teacher or with a Japanese learner, polite and clear communication is the first step in building a trusting relationship. On this page, we have prepared an interactive email template in English and Japanese that you can use in a variety of lesson-related situations.",
        intro_en2: "Each template allows you to easily switch languages and copy content. Use these templates as a guide and add your own words to create a heartfelt message.",
        manners_title: "Basic Manners for Using Email Templates",
        manners_subject_title: "Subject Line",
        manners_subject_desc: "Be specific so the content is clear at a glance. Including the platform name (e.g., Ouchi Sensei) or your own name makes it easier for the recipient to understand.",
        manners_subject_jp_label: "Japanese Example:",
        manners_subject_jp: "[From Ouchi Sensei] Lesson Request from [Your Name]",
        manners_subject_en_label: "English Example:",
        manners_subject_en: "Lesson Request from [Your Name] via Ouchi Sensei",
        manners_polite_title: "Polite Language",
        manners_polite_desc: "Be respectful and choose polite words. Especially when making requests or negotiating, it is important to use expressions that respect the other person's position. Avoid excessive demands or one-sided expressions.",
        manners_response_title: "Response Time",
        manners_response_desc: "Teachers and students may not be able to reply immediately for various reasons. Generally, it is good manners to wait about 24 to 48 hours for a reply. If you do not receive a reply after a few days, check your spam folder and try contacting them again politely.",
        for_students_title: "[For Students] Email Templates for Contacting Teachers",
        for_students_desc: "Templates you can use for various situations, from your first contact with a teacher to negotiating lesson conditions and saying thank you. Click each item to view and use the content.",
        for_teachers_title: "[For Teachers] Email Templates for Contacting Students",
        for_teachers_title_en: "(Template collection of contact e-mail messages to students for teachers)",
        for_teachers_desc: "Templates for teachers to communicate smoothly with students, such as replying to student communications and confirming lesson-related information.",
        for_teachers_desc_en: "(This template is used for teachers to communicate smoothly with students, such as replying to student communications and confirming lesson-related information.)",
        important_notes_title: "Important Notes When Sending Emails",
        important_notes_main: "This service is only an online platform and is not a staffing, dispatch, or teacher introduction service.",
        important_notes_check1: "If you are using the service for the first time, please be sure to check the ",
        important_notes_faq: "FAQ",
        important_notes_check2: " page and the ",
        important_notes_terms: "Terms of Use",
        important_notes_check3: " page before use.",
        important_notes_li1: "When contacting a foreign teacher for the first time, please send your email in English or the lesson language.",
        important_notes_li2: "Please make sure to indicate in the subject line of your lesson request email that you are using Ouchi Sensei Dot Com.",
        important_notes_li3a: "OCN email address",
        important_notes_li3b: " or ",
        important_notes_li3c: "nifty email address",
        important_notes_li3d: " users, please be careful. Especially with foreign teachers, there are frequent cases where emails sent do not reach the recipient.",
        important_notes_li4a: "Yahoo Japan email address",
        important_notes_li4b: " users have also reported cases where emails do not arrive (as of October 2016).",
        important_notes_li5a: "Mobile email address",
        important_notes_li5b: " users may not be able to receive replies. Please check your PC email rejection settings.",
        faq_title: "FAQ",
        faq_desc: "Frequently asked questions and answers about email exchanges and template usage.",
        faq_q1: "I sent an email but have not received a reply from the teacher/student. What should I do?",
        faq_a1: "It may take about 24-48 hours to receive a reply. If you do not receive a reply after a few days, first check your spam folder. If you still cannot find it, try contacting them again politely. Some platforms allow you to check the recipient's last login date. If you do not receive a reply for a long time, consider looking for another teacher/student.",
        faq_q2: "Will teachers/students always agree to negotiate fees or conditions?",
        faq_a2: "Negotiation is just a 'consultation' and not all teachers/students will necessarily agree. The conditions presented are set by the teacher/student after considering various factors. It is important to respect the other person's situation and ask politely. If negotiation is difficult, they will let you know politely.",
        faq_q3: "Can I use the templates as they are?",
        faq_a3: "Yes, you are free to use the templates. However, to make your message more personal and heartfelt, we recommend modifying them to suit your own words and situation. In particular, be sure to include your name, specific preferred dates/times, and learning objectives for smoother communication.",
        related_links_title: "Related Links",
        related_links_find_teacher: "Find a Teacher",
        related_links_teacher_register: "Teacher Register",
        related_links_terms: "Terms of Use",
        related_links_faq: "FAQ",
      },
      faq: {
        page_title: "Frequently Asked Questions",
        page_desc: "We support you by resolving questions and concerns about using Ouchi Sensei Dot Com, so you can start foreign language learning with peace of mind.",
        category_service: "General Service Information",
        category_fees: "Fees & Payment",
        category_teacher_lesson: "Teachers & Lessons",
        category_usage: "Registration & Usage",
        category_troubleshooting: "Troubleshooting & Others",
        category_service_img_alt: "Placeholder illustration of a person taking online lessons on a laptop and a person having a face-to-face conversation",
        answer_label: "A:",
        important_note: "Ouchi Sensei Dot Com is not a staffing, dispatch, or teacher introduction service.",
        important_note2: "Ouchi Sensei Dot Com does not establish employment relationships or contracts with registered teachers, and only provides an online platform as our service.",
        terms_link: "Terms of Use",
        contact_link: "Contact Form",
        sample_email_link: "Sample English Email for First Contact with Teacher",
        price_link: "Usage Fees Page",
        negotiation_sample_link: "Sample English Email for Negotiating with Teacher",
        contact_form_link: "Contact Form",
        privacy_policy_link: "Privacy Policy",
        my_account_link: "Acquired Teacher Contacts (Login Required)",
        search_link: "Find a Teacher",
        contact_page_link: "Contact",
        
        // Service Category Questions
        q1: "What is the difference between this site and teacher introduction or dispatch services?",
        a1: "Ouchi Sensei Dot Com is not a staffing, dispatch, or teacher introduction service. Ouchi Sensei Dot Com does not establish employment relationships or contracts with registered teachers, and only provides an online platform as our service. We only provide an online platform where teachers looking for language students can post their own profiles, and all matters related to lessons are handled personally between users (students) and teachers. This is a service that enables low-cost teacher search by having users (students) contact teachers directly. *For first-time users, please be sure to check the Terms of Use before use to ensure there is no difference between your desired service and our service. Also, if you have any questions about our service content, please contact us via the Contact Form before use.",
        
        q2: "Can I use this site for purposes other than language lessons?",
        a2: "We apologize, but we strictly prohibit use for purposes other than language lessons. You cannot use this site for interpretation or translation requests, business partner searches, or personal meetings.",
        
        q3: "What kind of teachers are registered?",
        a3: "Teachers with various backgrounds are registered, from native speakers to Japanese teachers who are proficient in specific languages. Teachers create their own profiles and publish their language specialties, lesson areas and times, lesson fees, etc. Please check the profiles carefully and find a teacher that suits you.",
        
        q4: "Are the registered teachers instructors who have employment contracts with 'Ouchi Sensei Dot Com'?",
        a4: "No, Ouchi Sensei Dot Com is a service that provides a platform for teachers and students to meet. Registered teachers use this site as individuals to recruit students, and there are no employment contracts or outsourcing contracts with 'Ouchi Sensei Dot Com'. All lesson contracts and conditions are decided directly between students and teachers.",
        
        q5: "I cannot speak any foreign language and cannot write lesson request emails in foreign languages. Can you arrange lesson schedules etc. on my behalf?",
        a5: "We apologize, but Ouchi Sensei Dot Com does not provide communication or schedule coordination services with teachers. Contacting teachers is a system that students must do themselves. Many teachers can communicate in Japanese, but we also provide simple English email templates, so please use the Sample English Email for First Contact with Teacher. If you are concerned, please first check the teacher's profile to see if they can communicate in Japanese, or contact us.",
        
        // Fees Category Questions
        q6: "What are the costs for this service?",
        a6: "There are no admission fees, annual fees, etc. for using Ouchi Sensei Dot Com. When obtaining teacher contact information, there is a contact acquisition fee of 3,300 yen (3,630 yen including tax, flat rate for up to 5 people). With this fee, you can check the contact information (mainly email addresses) of the selected teachers for 30 days. Lesson fees should be paid directly to the teacher after each lesson. To avoid financial trouble between individuals, we recommend paying lesson fees after each lesson rather than in advance. *Due to the nature of digital content, we do not accept refunds of system usage fees, so please understand this in advance. For details, please check the Usage Fees Page.",
        
        q7: "Tell me about lesson fee payment.",
        a7: "Since Ouchi Sensei Dot Com only provides an online platform, we do not intervene in lesson-related matters including lesson fee payments. Lesson fees should be paid directly to the teacher after each lesson. Also, to prevent trouble related to lesson fees, please be sure to arrange details such as lesson fees, payment methods, and transportation costs with the teacher before starting lessons.",
        
        q8: "What payment methods are available? (System usage fee)",
        a8: "For system usage fees (contact acquisition fees), you can use credit card payments. You can check the teacher's contact information immediately after payment is completed.",
        
        q9: "Do I need to pay the teacher's transportation costs?",
        a9: "Ouchi Sensei Dot Com does not have specific regulations for transportation costs to increase matching rates between teachers and students. When requesting lessons by email, please tell the teacher the station name (place name) where you want to take lessons, and decide after consulting directly with the teacher. Generally, when the desired lesson location is far from the teacher's home or workplace, or when the teacher has to travel to the student's desired location, they often ask for actual costs. For negotiations, please also use the Sample English Email for Negotiating with Teacher.",
        
        q10: "I want to have lessons at a cafe. Do I also have to pay for the teacher's drinks?",
        a10: "To avoid the teacher misunderstanding that you will treat them, please only order your own drink and tell the staff at the register to pay separately. There are cases where students end up paying for the teacher's drink thinking 'students must pay for the teacher's drinks', and then feel obligated to pay every time they have a lesson. To avoid financial and mental burden, please pay only for your own drinks from the beginning. *There are no strict regulations regarding the teacher's drink costs when having lessons at cafes. Some teachers write these conditions in the [Message] section of their profile, but when teachers ask students for costs other than lessons, it is basically decided by mutual discussion.",
        
        q11: "Can you issue receipts?",
        a11: "For system usage fees (contact acquisition fees), please use the 'Usage Statement' issued by your credit card company or the 'Receipt (Email)' sent by Stripe at the time of payment.",
        
        q12: "After paying the introduction fee, do I get all contact information at once, or can I get it individually as needed?",
        a12: "System usage fees (contact acquisition fees) are charged per application (up to 5 people can be selected). Once you pay, you can check the contact information of all selected teachers from your My Page for 30 days. This is not a system where you get contact information one person at a time. To efficiently compare and consider multiple teachers, we recommend selecting multiple teachers at once.",
        
        q13: "I run a private language school. Are there special pricing plans for businesses when using this site for student recruitment?",
        a13: "Currently, we provide services at a uniform system usage fee regardless of whether you are an individual or a corporation (such as language school operators). We do not have special business pricing plans, but many language schools also use this as a platform to find teachers.",
        
        q14: "How are group lesson fees set? I want to take lessons with friends or family.",
        a14: "System usage fees are the same as individual lessons if the representative applies. Lesson fees paid directly to the teacher vary depending on the group size and teacher. Please check if the teacher's profile has information about group lessons (fees, number of people they can accommodate, etc.). If there is no description or details are unclear, we recommend contacting the teacher directly after obtaining contact information. Some teachers set fees per person, while others set fees for the entire group, so please confirm thoroughly in advance.",
        
        // Teacher & Lesson Category Questions
        q15: "I cannot speak English or any other foreign language at all, but can I use this service?",
        a15: "Yes, you can use it. Many teachers can communicate in Japanese. Please check if the teacher's profile states 'Japanese lessons possible' or 'Japanese email communication possible'. However, since the teacher's Japanese level is self-reported, we recommend checking the teacher's Japanese level yourself in advance for important communications (lesson fees, times, etc.). When sending lesson request emails to foreign teachers or teachers whose native language is not Japanese, it may be smoother to use simple English or the language the teacher teaches. If you are unsure about first contact, please use the following sample email: Sample English Email for First Contact with Teacher",
        
        q16: "I am a beginner in foreign languages, but is it okay to take lessons from a native speaker teacher right away?",
        a16: "Yes, it is very effective to take lessons from native speaker teachers even for beginners. There are benefits such as being exposed to correct pronunciation and natural expressions from the beginning, making it easier to acquire practical language skills. Many teachers have rich experience teaching beginners, so please honestly tell them your level and concerns, and discuss lesson content. Also check if the teacher's profile mentions 'Beginners welcome'.",
        
        q17: "What specifically are the teacher's 'contact information'?",
        a17: "You can mainly use PC email addresses. Some teachers also publish mobile phone numbers and other contact methods (LINE, Skype, etc.). However, for first lesson requests, please contact by email to avoid confusion.",
        
        q18: "Can I send lesson request emails to all teachers whose contact information I obtained at the same time?",
        a18: "Yes, no problem. To efficiently find teachers, many people send lesson request emails to multiple teachers whose contact information they obtained at the same time.",
        
        q19: "Can I definitely take lessons with all teachers whose contact information I obtained?",
        a19: "This service does not guarantee the certainty of lessons. All matters related to lessons are handled personally between teachers and students. While you can select multiple teachers with one application, including cases where lesson locations and schedules don't match, you may not necessarily be able to realize lessons with all teachers whose contact information you obtained. *Especially when the teacher is of the opposite sex, we cannot handle cases where the teacher themselves declines lessons, or cases where email replies stop midway. Also, when lesson request emails don't include the user's self-introduction or specific request content, teachers of the opposite sex often decline lessons, but we cannot handle such cases either.",
        
        q20: "If I obtain contact information for up to 5 teachers, can I take lessons with multiple teachers simultaneously, or do I need to focus on one teacher?",
        a20: "Yes, you can either proceed with lessons with multiple teachers simultaneously, or focus on one teacher after trial lessons. You can decide freely according to your preferences and learning style. Learning from multiple teachers with different perspectives and approaches is also an effective learning method.",
        
        q21: "Where are lessons held?",
        a21: "Lesson locations are decided by consultation between the teacher and student. Generally, cafes, the student's home, the teacher's home, online, etc. are used. The teacher's profile often lists possible lesson locations, so please check. For first lessons, we recommend holding them in public places (like cafes) to get to know each other.",
        
        q22: "Can I have lessons at home or at the teacher's home?",
        a22: "Even if you want lessons at the student's or teacher's home, many people prefer lessons in public places like cafes at the stage when they don't know each other well. Even if [Teacher's home] or [Student's home] is selected in the lesson location on the profile, some teachers decline lessons in private places like homes until a trusting relationship is built. Therefore, we recommend that first lessons be held in public places like cafes near stations. Even if you want home lessons, please include details of the public place you want for trial lessons in your lesson request email. *This service does not guarantee the certainty of lessons. Also, when the teacher is of the opposite sex, careful judgment is required from both parties for first-time home lessons.",
        
        q23: "Are online lessons possible? What should I be careful about?",
        a23: "Yes, many teachers offer online lessons. Please check if the teacher's profile says 'Online lessons available'. For online lessons, please discuss and decide in advance with the teacher about tools to use (Zoom, Skype, etc.), how to proceed with lessons, and teaching materials. You need a stable internet environment and devices with cameras and microphones (PC, tablet, smartphone, etc.).",
        
        q24: "Are children's lessons possible?",
        a24: "When minors take lessons, a parent must apply on their behalf, and lessons must be taken under the parent's accompaniment and responsibility. *For children aged 3 and under, you cannot currently use this site. *For example, if the purpose is subjects other than the lesson language like 'I want to learn math using English', or if you want 'foreign language babysitting', you cannot use this site.",
        
        q25: "I want to find a teacher quickly and start lessons. Is it possible to take lessons on the day of application?",
        a25: "Depending on the teacher's schedule and reply timing, it is often difficult to start lessons on the day of application. Including contacting teachers and adjusting schedules, it usually takes several days to a week, sometimes longer, to start lessons. If you are in a hurry, please mention this in your first contact with the teacher, and we recommend finding a teacher with a relaxed schedule, such as contacting multiple teachers simultaneously.",
        
        q26: "Can I request a one-time lesson right before a business trip or travel abroad?",
        a26: "Some teachers offer one-time lessons, but many teachers prefer continuous lessons.",
        
        q27: "Should I exchange emergency contact information like mobile phone numbers with the teacher during the first lesson?",
        a27: "Yes, we recommend exchanging emergency contact information like mobile phone numbers or LINE with mutual consent during the first lesson or subsequent interactions. This enables smooth communication in emergencies like sudden lesson cancellations, lateness, or confusion at meeting places. However, please exchange personal information carefully at your own responsibility.",
        
        // Usage Category Questions
        q28: "Is membership registration free?",
        a28: "Yes, student membership registration is free. There are no admission fees or annual fees. System usage fees are only charged when obtaining teacher contact information.",
        
        q29: "When and how can I check the teacher's 'contact information'?",
        a29: "After payment of the system usage fee is completed, you can check it for 30 days from the application date on the [Acquired Teacher Contacts (Login Required)] page in your My Account while logged in. For bank transfers, it usually takes 1-2 business days, and for credit card payments, you can check immediately or within several tens of minutes after payment is completed.",
        
        q30: "After applying for contact information acquisition, will teachers contact me if I wait?",
        a30: "No. Ouchi Sensei Dot Com has a system where users (students) contact teachers directly. Please contact teachers you want to take lessons from using the obtained contact information. If you are unsure how to write emails for first contact with teachers, please refer to this sample email.",
        
        q31: "Many teachers are registered in my area, but I don't know which teacher to choose.",
        a31: "When choosing a teacher, please refer to the following points: Profile last updated date: New teachers are actively looking for students, so they tend to reply quickly or have conditions that match. Newly registered teachers have a 'New' mark, and teachers with updated profiles have an 'Updated' mark. Languages and levels they can teach: Whether they match the language and level you want to learn. Lesson location and format: Whether they can accommodate your desired location (cafe, online, etc.). Lesson fees: Whether they fit your budget. Self-introduction and message: You can sometimes see the teacher's personality and teaching approach. Reviews and ratings (if available): Other students' evaluations are also helpful. (※Delete this item if there are no reviews as a site function) Compare and consider multiple teachers' profiles, and actively contact teachers you are interested in.",
        
        q32: "What can I do on 'My Page' (member-only page)?",
        a32: "'My Page' (or 'My Account') is a page exclusively for registered students. You can mainly use the following functions: Check, change, and withdraw registration information. Check acquired teacher contact information (30 days) after paying system usage fees. Login is required to use.",
        
        q33: "Can I ask teachers about lesson content and conditions before paying the system usage fee?",
        a33: "No. Please check in advance on the teacher's profile page about possible lesson times and locations, how lessons proceed, etc.",
        
        // Troubleshooting Category Questions
        q34: "How long does it usually take for teachers to reply? Also, what should I do if I don't get a reply?",
        a34: "Many teachers reply within 3 days, but depending on the teacher's situation, it may take longer. If you don't get a reply even after waiting about 3 days to a week, first check your spam folder. Teachers have various circumstances like lesson conditions not matching, so if there's still no contact, please contact other teachers. *For users of specific email services (OCN, nifty, Yahoo! Japan, @i.softbank.jp, etc.), there are reports of emails not reaching foreign teachers, or being processed as spam. Please also consider resending from another email address. *When sending from mobile email addresses, please check that PC email rejection settings are not enabled.",
        
        q35: "I contacted all teachers whose contact information I obtained, but I couldn't arrange trial lessons with any teacher due to schedule or condition mismatches.",
        a35: "We apologize for the inconvenience. If you are within the 60-day support period from your application date, we can provide additional teacher contact information for up to 5 people at no extra charge, once only. In such cases, please contact us via the Contact Form with the background and new desired teachers (if found, their ID, etc.). However, this service does not guarantee the certainty of lessons. We may not be able to respond in areas with few teachers. Even in such cases, there will be no refund of system usage fees.",
        
        q36: "I obtained contact information for multiple teachers, and lessons were arranged with one teacher, but conditions didn't match with other teachers. Can I get contact information for different teachers instead of those whose conditions didn't match?",
        a36: "No, this is not covered by support. This service does not guarantee the certainty of lessons. Even in such cases, there will be no refund of system usage fees.",
        
        q37: "When I requested lessons from teachers, all 5 said they are not currently recruiting new students. Or they presented conditions different from those listed in their profile.",
        a37: "We apologize for the inconvenience. If you are within the 60-day support period from your application date, we can provide additional teacher contact information for up to 5 people at no extra charge, once only. In such cases, please contact us via the Contact Form with the background and new desired teachers (if found, their ID, etc.). However, this service does not guarantee the certainty of lessons. We may not be able to respond in areas with few teachers. Even in such cases, there will be no refund of system usage fees.",
        
        q38: "If I have trouble with a teacher, how much support will the management provide?",
        a38: "Ouchi Sensei Dot Com is a service that provides contact information for teachers and students to meet, and regarding lesson contracts and events during lessons, we ask that you resolve them between the parties concerned (teachers and students) in principle. However, if there are violations of terms of use or suspected malicious trouble, please provide detailed information via the Contact Form.",
        
        q39: "If I want to change lesson dates/times or cancel urgently, can I contact Ouchi Sensei Dot Com for support?",
        a39: "We apologize, but all lesson-related schedule adjustments and cancellation notices must be done directly between students and teachers. Ouchi Sensei Dot Com cannot mediate. To handle emergency communications, we recommend confirming and arranging contact methods (email, phone, messaging apps, etc.) with the teacher in advance.",
        
        q40: "How do I withdraw from membership?",
        a40: "If you wish to withdraw, you can do so from the 'Account Settings' or 'Withdrawal Procedure' items in your My Page after logging in. If you cannot find the relevant items, please contact us via the Contact Form with your withdrawal request. Please note that once you withdraw, you will no longer be able to check past usage history or acquired teacher information.",
        
        q41: "How is personal information protected?",
        a41: "This site has established and complies with a Privacy Policy to appropriately protect users' personal information. For details, please check the Privacy Policy page. Exchange of contact information with teachers and lesson-related interactions are done at your own responsibility, but personal information obtained for site operation is strictly managed.",
        
        // Additional questions from the HTML
        q42: "What if I have trouble with the teacher?",
        a42: "Ouchi Sensei Dot Com is a service that provides contact information for teachers and students to meet, and regarding lesson contracts and events during lessons, we ask that you resolve them between the parties concerned (teachers and students) in principle. However, if there are violations of terms of use or suspected malicious trouble, please provide detailed information via the Contact Form.",
        
        q43: "Can I contact Ouchi Sensei Dot Com for lesson schedule changes or urgent cancellations?",
        a43: "We apologize, but all lesson-related schedule adjustments and cancellation notices must be done directly between students and teachers. Ouchi Sensei Dot Com cannot mediate. To handle emergency communications, we recommend confirming and arranging contact methods (email, phone, messaging apps, etc.) with the teacher in advance.",
        
        q44: "How do I withdraw from membership?",
        a44: "If you wish to withdraw, you can do so from the 'Account Settings' or 'Withdrawal Procedure' items in your My Page after logging in. If you cannot find the relevant items, please contact us via the Contact Form with your withdrawal request. Please note that once you withdraw, you will no longer be able to check past usage history or acquired teacher information.",
        
        q45: "How is personal information protected?",
        a45: "This site has established and complies with a Privacy Policy to appropriately protect users' personal information. For details, please check the Privacy Policy page. Exchange of contact information with teachers and lesson-related interactions are done at your own responsibility, but personal information obtained for site operation is strictly managed.",
        
        // CTA Section
        cta_title: "Were your questions resolved?",
        cta_desc: "If you have any other questions not listed above, please feel free to contact us. Find the perfect teacher for you and start foreign language learning!",
        cta_desc2: "Find the perfect teacher for you and start foreign language learning!",
        cta_button: "Find a Teacher",
        cta_button_secondary: "Contact",
  
      },
      "ContactForm.Title": "Contact Us",
      "ContactForm.Description": "We'd love to hear from you! Fill out the form below and we'll get back to you soon.",
      "ContactForm.ThankYou": "Thank you for your inquiry! We'll be in touch soon.",
      "ContactForm.NameLabel": "Your Name *",
      "ContactForm.PrimaryEmailLabel": "Primary Email *",
      "ContactForm.AlternativeEmailLabel": "Alternative Email",
      "ContactForm.SubjectLabel": "Subject *",
      "ContactForm.MessageLabel": "Message *",
      "ContactForm.SendButton": "Send Message",
      privacy: {
        header: "Privacy Policy",
        intro1: "Dotcom Business Ltd. (hereinafter referred to as \"the Company\") recognizes that the proper protection of personal information and privacy of customers (hereinafter referred to as \"Customers\") who use the services operated by the Company (hereinafter referred to as \"the Service\") is a fundamental part of our business activities and a significant social responsibility.",
        intro2: "To fulfill this responsibility, the Company complies with the Act on the Protection of Personal Information (hereinafter referred to as the \"Personal Information Protection Act\") and other relevant laws and guidelines, establishes a personal information protection policy as set forth in this policy, thoroughly informs officers and employees, and handles personal information appropriately. This page allows you to easily check each article.",
        establishedLabel: "Established:",
        lastRevisedLabel: "Last Revised:",
        establishedDate: "May 25, 2024",
        lastRevisedDate: "May 25, 2025",
        footer: "Dotcom Business Ltd. All Rights Reserved.",
        section1: {
          title: "Article 1 (Scope of Application)",
          content: `<p>This policy applies to all personal information obtained from customers in connection with the use of the Service. The handling of personal information on websites and services of other businesses or individuals linked from the Service is outside the scope of this policy, and the Company assumes no responsibility. Please check the privacy policies of each linked site.</p>`
        },
        section2: {
          title: "Article 2 (Definition of Personal Information)",
          content: `<p>In this policy, \"personal information\" means personal information as defined in Article 2, Paragraph 1 of the Personal Information Protection Act, i.e., information about a living individual that can identify a specific individual by name, date of birth, or other description contained in such information (including information that can be easily collated with other information and thereby identify a specific individual), or information that contains a personal identification code.</p>`
        },
        section3: {
          title: "Article 3 (Acquisition of Personal Information)",
          content: `<p>The Company acquires customers' personal information, including but not limited to the following, by lawful and fair means.</p>
            <ol>
                <li>Information provided directly by customers:
                    <ul>
                        <li>Name, furigana, gender, date of birth, address, phone number, email address</li>
                        <li>Account information (user ID, password)</li>
                        <li>Payment information (credit card information, bank account information, etc.) *May be handled by a payment agency, not directly by the Company.</li>
                        <li>Lesson-related information (desired language, learning objectives, lesson history, etc.)</li>
                        <li>Information provided when registering as a teacher (career, qualifications, identity verification documents, bank account for payment, etc.)</li>
                        <li>Information provided when making inquiries or responding to surveys</li>
                    </ul>
                </li>
                <li>Information automatically acquired through use of the Service:
                    <ul>
                        <li>Cookie information, IP address, browser type, OS, browsing history, search history, device information (model name, OS version, etc.), advertising identifiers (IDFA, AAID, etc.)</li>
                        <li>Service usage information (login status, lesson reservation/cancellation history, communication logs, etc.)</li>
                        <li>Location information (only with customer consent)</li>
                    </ul>
                </li>
            </ol>`
        },
        section4: {
          title: "Article 4 (Purpose of Use of Personal Information)",
          content: `<p>The Company uses the acquired personal information for the following purposes. If the information is to be used beyond the notified purposes, the Company will obtain the customer's consent in advance.</p>
            <ol>
                <li>To provide, operate, and manage the Service (membership registration, identity verification, lesson reservation, billing, inquiry response, etc.)</li>
                <li>To maintain and improve the Service and develop new services (usage analysis, surveys, new feature development, etc.)</li>
                <li>To contact and notify customers (important notices, campaign information, newsletter distribution, etc.)</li>
                <li>For advertising and marketing (displaying ads according to attributes, measuring effectiveness, etc.)</li>
                <li>For recruitment and hiring activities</li>
                <li>For other purposes incidental to the above</li>
            </ol>`
        },
        section5: {
          title: "Article 5 (Provision of Personal Information to Third Parties)",
          content: `<p>The Company will not provide personal information to third parties (meaning parties other than the Company and its direct stakeholders) without the prior consent of the customer, except in the following cases:</p>
            <ol>
                <li>When required by law</li>
                <li>When necessary to protect a person's life, body, or property and it is difficult to obtain the customer's consent</li>
                <li>When particularly necessary for improving public health or promoting the sound growth of children and it is difficult to obtain the customer's consent</li>
                <li>When it is necessary to cooperate with a national or local government agency or its agent in performing duties prescribed by law, and obtaining the customer's consent may impede the performance of such duties</li>
                <li>When entrusting all or part of the handling of personal information within the scope necessary to achieve the purpose of use (in this case, the Company will appropriately supervise the contractor)</li>
                <li>When personal information is provided due to business succession by merger or other reasons</li>
                <li>When disclosed as statistical data that cannot identify an individual customer</li>
                <li>When the customer has given consent</li>
            </ol>`
        },
        section6: {
          title: "Article 6 (Joint Use of Personal Data)",
          content: `<p>The Company may jointly use personal data within the following scope:</p>
            <ol>
                <li>Items of personal data to be jointly used: The minimum necessary items among the personal information obtained from customers as specified in Article 3 (name, address, phone number, email address, contract details, application history, etc.)</li>
                <li>Scope of joint users: Dotcom Business Ltd. and other group companies designated by the Company as necessary to achieve the above purposes (if applicable, will be notified or announced separately)</li>
                <li>Purpose of joint use: Within the scope of the purposes specified in Article 4</li>
                <li>Name of the person responsible for managing personal data: Dotcom Business Ltd. (For address and representative, please refer to the company profile page on our website.)</li>
            </ol>`
        },
        section7: {
          title: "Article 7 (Cross-border Transfer of Personal Data)",
          content: `<p>In providing the Service, the Company may provide customers' personal data to businesses outside Japan (including foreign teachers, contractors, cloud service providers, etc.).</p>
            <p>In such cases, the Company will take one of the following measures:</p>
            <ol>
                <li>Obtain the customer's prior consent to provide personal data to a third party located in a foreign country.</li>
                <li>Confirm that the third party has established a system necessary to continuously take measures equivalent to those required of personal information handling businesses under the Personal Information Protection Act.</li>
                <li>Confirm that the third party is located in a country with a personal information protection system recognized as being of a level equivalent to that of Japan, as specified by the Personal Information Protection Commission regulations.</li>
            </ol>
            <p>If you wish to receive information about the names of foreign countries to which personal data may be provided, the personal information protection systems in those countries, or the measures taken by such third parties to protect personal information, please contact the inquiry desk in Article 14.</p>`
        },
        section8: {
          title: "Article 8 (Security Measures for Personal Information)",
          content: `<p>The Company will keep the personal information provided by customers accurate and up-to-date, and will take organizational, human, physical, and technical security measures to prevent unauthorized access, loss, destruction, alteration, or leakage. For details, please contact us.</p>
            <ul>
                <li>Organizational security measures: Appointment of a manager, establishment of rules, development of reporting and communication systems, etc.</li>
                <li>Human security measures: Regular training for employees, confidentiality obligations, etc.</li>
                <li>Physical security measures: Access control, equipment restrictions, lock management, etc.</li>
                <li>Technical security measures: Access control, unauthorized access countermeasures, etc.</li>
            </ul>`
        },
        section9: {
          title: "Article 9 (Retention Period of Personal Information)",
          content: `<p>The Company will promptly dispose of personal information after the period necessary to achieve the purpose of use or the period specified by laws and regulations has ended.</p>`
        },
        section10: {
          title: "Article 10 (Disclosure, Correction, Suspension of Use, etc. of Retained Personal Data)",
          content: `<p>Customers may request notification of the purpose of use, disclosure, correction, addition, deletion, suspension of use, erasure, or suspension of provision to third parties (hereinafter referred to as \"disclosure, etc.\") of their personal information held by the Company.</p>
            <p>If you wish to request disclosure, etc., please contact the inquiry desk in Article 14. We will guide you through the procedures specified by the Company (submission of identity verification documents, payment of fees (1,000 yen (excluding tax) per case for disclosure and notification of purpose of use), etc.).</p>
            <p>We will respond within a reasonable period and scope only if it can be confirmed that the request is made by the customer. However, we may not be able to respond to disclosure, etc. based on laws and regulations.</p>`
        },
        section11: {
          title: "Article 11 (Use of Cookies and Other Technologies)",
          content: `<h3>1. Use of Cookies:</h3>
            <p>Our website uses cookies to improve convenience, analyze usage, and deliver advertisements. You can disable cookies in your browser settings, but some services may not be available.</p>
            <h3>2. Access Analysis Tools:</h3>
            <p>We use Google Analytics. The information collected is managed in accordance with Google LLC's privacy policy. Opt-out is also possible.</p>
            <ul>
                <li>Google Analytics Terms of Service: <a href=\"https://marketingplatform.google.com/about/analytics/terms/us/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#4a7d1d] hover:underline\">Link</a></li>
                <li>Google Privacy Policy: <a href=\"https://policies.google.com/privacy?hl=en\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#4a7d1d] hover:underline\">Link</a></li>
                <li>Google Analytics Opt-out Add-on: <a href=\"https://tools.google.com/dlpage/gaoptout?hl=en\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#4a7d1d] hover:underline\">Link</a></li>
            </ul>
            <h3>3. Behavioral Targeting Advertising:</h3>
            <p>We use advertising services of third-party distributors. You can opt out on each provider's site.</p>
            <p>(Example) Opt-out of Google ads: <a href=\"http://www.google.com/policies/privacy/ads/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#4a7d1d] hover:underline\">Link</a></p>`
        },
        section12: {
          title: "Article 12 (Limitation of Liability)",
          content: `<p>The use of the Service is at the customer's own responsibility. The Company shall not be liable for any damages (including direct, indirect, lost profits, etc.) arising from the use of information obtained from the Company's website or other websites linked to the Company's website, regardless of the reason. However, this does not apply in cases of willful misconduct or gross negligence by the Company.</p>`
        },
        section13: {
          title: "Article 13 (Changes and Revisions to this Privacy Policy)",
          content: `<p>The Company may review and revise this policy as necessary to comply with legal amendments, changes in business content, or customer requests.</p>
            <p>If the policy is changed, the Company will notify customers by posting on the website or by other appropriate means. In the case of important changes, customers will be notified in advance and their consent will be obtained if necessary.</p>
            <p>The revised privacy policy will take effect when posted on the Company's website. Customers are requested to regularly check the latest contents of this policy.</p>`
        },
        section14: {
          title: "Article 14 (Contact for Inquiries)",
          content: `<p>For questions, consultations, complaints, or requests for disclosure, etc. regarding the handling of personal information by the Company, please contact the following desk.</p>
            <p><strong>Dotcom Business Ltd. Customer Consultation Desk</strong></p>
            <p>Address: 1-13-16 Shinjuku-cho, Kawagoe-shi, Saitama 350-1124, Japan</p>
            <p>Reception hours: 10:00 a.m. to 5:00 p.m. (excluding weekends, national holidays, year-end and New Year holidays, and other company holidays)</p>
            <p>Contact form: <a href=\"contact.html\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#4a7d1d] hover:underline\">Contact Form</a></p>
            <p>When making an inquiry, please provide your name, email address, and other information necessary for identity verification.</p>`
        },
        section15: {
          title: "Article 15 (Governing Law and Jurisdiction)",
          content: `<p>The interpretation of this policy shall be governed by Japanese law.</p>
            <p>Any disputes relating to this policy shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.</p>`
        },
       
      },
      terms: {
        header: "Terms of Use",
        intro: "Please read the following Terms of Use (hereinafter referred to as 'these Terms') carefully before using Ouchi Sensei Dot Com (hereinafter referred to as 'the Service'). By using the Service, you are deemed to have agreed to all the provisions of these Terms.",
        section1: {
          title: "Article 1 (Application and Amendment of These Terms)",
          content: `<p>1. These Terms apply to the provision and use of the Service between the operator or company providing the Service (hereinafter referred to as 'the Company') and users (as defined in Article 3).</p>
<p>2. The Company may amend these Terms at its discretion without prior consent of the users. The amended Terms shall take effect from the time they are posted on the Service website, and users who use the Service after the amendment shall be deemed to have agreed to the amended Terms.</p>
<p>3. Matters not stipulated in these Terms shall be governed by separate rules, guidelines, precautions, etc. (collectively referred to as 'Individual Terms') established by the Company, which shall constitute a part of these Terms. In the event of any inconsistency between these Terms and the Individual Terms, the Individual Terms shall prevail unless otherwise specified.</p>`
        },
        section2: {
          title: "Article 2 (Service Overview)",
          content: `<p>1. The Service is a platform that provides opportunities for matching online between individuals or corporations wishing to teach languages (hereinafter referred to as 'Teachers') and individuals or corporations wishing to learn languages (hereinafter referred to as 'Students').</p>
<p>2. The Service only provides opportunities for matching between Teachers and Students, and the Company does not employ Teachers or provide language lessons to Students. Therefore, the Company does <span class="important">not operate as a job placement service, employment agency, staffing service, or online language school.</span></p>
<p>3. Students are responsible for directly contacting Teachers using the contact information obtained through the Service, concluding lesson contracts, determining lesson details, dates, locations, fees, and making payments at their own responsibility. <span class="important">The Company is not involved in any communication, negotiation, contract conclusion, lesson implementation, or any other matters between Teachers and Students.</span></p>`
        },
        section3: {
          title: "Article 3 (Definitions of Terms)",
          content: `<p>The definitions of terms used in these Terms are as follows:</p>
<ul>
<li>(1) "User" means any individual or corporation who agrees to these Terms and uses the Service. This includes both Students and Teachers.</li>
<li>(2) "Student" means a User who uses the Service to find a language Teacher and wishes to take lessons.</li>
<li>(3) "Teacher" means a User who registers with the Service and wishes to provide language instruction.</li>
<li>(4) "Registration Information" means the information provided by Users to the Company when using the Service.</li>
<li>(5) "System Usage Fee" means the fee paid by Students to the Company as consideration for obtaining the contact information of Teachers through the Service.</li>
</ul>`
        },
        section4: {
          title: "Article 4 (About Registered Teachers)",
          content: `<p>1. Teachers registered with the Service are individuals residing in Japan who wish to teach languages as freelancers, not through organizations such as schools or companies.</p>
<p>2. There is <span class="important">no employment contract, outsourcing contract, agency contract, or any other contractual relationship</span> between the Company and registered Teachers.</p>
<p>3. The Company does not guarantee the accuracy, completeness, usefulness, etc. of any information regarding Teachers, such as schedule management, teaching skills, or background, and <span class="important">does not, in principle, conduct background checks.</span> Users are responsible for selecting Teachers at their own discretion.</p>`
        },
        section5: {
          title: "Article 5 (Teacher Profiles)",
          content: `<p>1. All Teacher profiles posted on the Service are registered by the Teachers themselves. The information in the profiles (including but not limited to background, qualifications, teachable languages, and estimated lesson fees) is <span class="important">self-reported by the Teachers, and the Company does not confirm or guarantee the reliability or accuracy of the content.</span></p>
<p>2. The Company may periodically review Teacher profiles and, if inappropriate or clearly false information is found, may modify or delete such information without notifying the Teacher. However, this is not an obligation of the Company, and such actions do not guarantee the reliability or accuracy of the profiles.</p>`
        },
        section6: {
          title: "Article 6 (User Qualifications)",
          content: `<p>1. The Service may be used by individuals or corporations seeking language Teachers (Students) and individuals or corporations wishing to teach languages (Teachers).</p>
<p>2. If using the Service as a Student, <span class="important">minors cannot apply on their own.</span> If a minor wishes to take lessons, a parent or legal guardian (hereinafter referred to as 'Guardian') must agree to these Terms and apply on their behalf, and the Guardian must accompany and take responsibility for the minor during lessons.</p>
<p>3. Users are expected to have the necessary devices (computer, smartphone, etc.), internet environment, and basic operation skills required for communication with Teachers (such as email) and use of the Service. The Company does not provide support for setting up email software/accounts or device operation.</p>
<p>4. Communication with foreign Teachers or Teachers whose native language is not Japanese may require proficiency in English or other foreign languages.</p>
<p>5. <span class="important">For safety reasons, the Service cannot be used if the lesson recipient is a child under 3 years old.</span></p>`
        },
        section7: {
          title: "Article 7 (Student Registration, Changes, and Account Deletion)",
          content: `<p>1. To obtain a Teacher's contact information, Students must enter registration information in the prescribed manner and create a Student account. Except when the lesson recipient is a minor or the User is a language school or corporation, registration must be made with the lesson recipient's own information.</p>
<p>2. After completing the initial application procedure, a Student account is automatically created. There are no admission or annual fees for maintaining the account.</p>
<p>3. Registration information, except for some items such as name, can be changed after registration via My Page, etc.</p>
<p>4. If a Student wishes to delete their account, they must notify the Company in the prescribed manner (such as via the contact form). To delete an account, contact must be made from the registered email address for identity verification.</p>`
        },
        section8: {
          title: "Article 8 (System Usage Fee [Teacher Contact Acquisition Fee])",
          content: `<p>1. Students must pay the Company a separately specified system usage fee to obtain a Teacher's contact information. The current system usage fee is <span class="important">3,300 yen (tax included 3,630 yen) for contact information of up to 5 Teachers</span>.</p>
<p>2. The Company may change the system usage fee without notice. The changed fee will apply from the time it is displayed on the Service website.</p>
<p>3. Due to the nature of the service as digital content (Teacher contact information), <span class="important">no refunds will be given for any reason after payment is completed.</span> Please understand this in advance.</p>
<p>4. After completing the application (payment of the system usage fee), you cannot change or add to the selected Teachers.</p>`
        },
        section9: {
          title: "Article 9 (Teacher Contact Information)",
          content: `<p>1. The contact information Students can obtain is, in principle, a PC email address. However, if the Teacher has registered other contact methods (mobile phone number, mobile email address, SNS account, etc.), such information may also be provided.</p>
<p>2. Teacher contact information can be viewed on the Student's account page for <span class="important">30 days from the application date</span> after payment of the system usage fee. Please note that it cannot be viewed after this period.</p>
<p>3. Even if a Teacher provides a phone number as contact information, it is recommended to conduct important communications such as lesson requests and negotiations by email as much as possible for record-keeping and to prevent misunderstandings.</p>`
        },
        section10: {
          title: "Article 10 (Contacting Teachers)",
          content: `<p>1. Students are responsible for directly contacting Teachers by email or other means using the obtained contact information.</p>
<p>2. If a Student contacts a Teacher and does not receive a reply, or if a reply takes time, this is due to the Teacher's circumstances or intentions, and the Company cannot check the Teacher's status or urge a reply. The Company is not responsible for the lack of response from Teachers.</p>
<p>3. Communication with Teachers whose native language is not Japanese should, in principle, be conducted in English or the language specified by the Teacher. However, if the Teacher's profile states that communication in Japanese is possible, it may be possible to communicate in Japanese; please confirm this directly with the Teacher at the first contact.</p>
<p>4. If a Student does not receive a reply from a Teacher within 3 business days (may vary depending on the Teacher's activity), the Student may contact the Company via the contact form, providing the Teacher's ID or name, the date and time the lesson request email was sent, and the sender's email address. The Company may attempt to contact the Teacher depending on the situation, but does not guarantee a reply.</p>
<p>5. There have been rare reports of email delivery issues between certain email addresses (e.g., OCN, nifty, Yahoo! Japan, and some overseas providers). The Company cannot address such technical issues. Please try contacting the Teacher again from a different email address.</p>`
        },
        section11: {
          title: "Article 11 (Payment of Lesson Fees, etc.)",
          content: `<p>1. As stated in Article 4, paragraph 2, there is no employment relationship between the Company and Teachers, so <span class="important">lesson fees are to be paid directly from the Student to the Teacher after the lesson is conducted.</span></p>
<p>2. The amount, payment method, payment timing, cancellation policy, and other conditions of lesson fees must be fully discussed and agreed upon between the Student and Teacher before starting the first lesson. The same applies to whether trial lessons are free and to the handling of actual expenses such as transportation costs.</p>
<p>3. The Company is not involved in any monetary transactions between Students and Teachers and assumes no responsibility. To avoid monetary disputes, <span class="important">it is recommended to pay lesson fees after each lesson, not in advance.</span></p>`
        },
        section12: {
          title: "Article 12 (Free Additional Teacher Contacts)",
          content: `<p>1. The Service does not guarantee that lessons will be established with all Teachers whose contact information is obtained. Therefore, the system allows selection of multiple Teachers (up to 5) in a single application.</p>
<p>2. If, despite contacting all selected Teachers, the Student is unable to agree on a trial lesson (first lesson) with any of them, the Student may, within <span class="important">60 days</span> from the payment date of the system usage fee, apply for free additional Teacher contacts (up to the specified number) by following the prescribed procedure.</p>
<p>3. However, in the following cases, including when a Teacher refuses a lesson or conditions do not match, <span class="important">free additional contacts are not available</span>:</p>
<ul>
<li>(1) The User (Student) is a language school, language class, or other corporation/organization.</li>
<li>(2) The Company determines that the Service is being used for commercial purposes (e.g., a Student who is a language teacher using the Service to research other teachers' methods).</li>
<li>(3) The Service is used for purposes other than personal language learning (e.g., translation/interpretation requests, scouting, business partner search, etc.).</li>
<li>(4) The Student requests lessons under conditions that significantly deviate from those stated in the Teacher's profile (e.g., online lessons only, female students only, etc.).</li>
<li>(5) The Student requests lessons at their home, which is not within walking distance (generally within 10 minutes) from the nearest station, and the Teacher finds it difficult to accommodate (except when the Teacher actively accepts home visits).</li>
<li>(6) The Company determines that the Student's requests are socially unreasonable or excessive.</li>
</ul>`
        },
        section13: {
          title: "Article 13 (Prohibited Acts)",
          content: `<p>Users must not engage in the following acts when using the Service:</p>
<ul>
<li>(1) Using the Service for purposes other than finding a Teacher for genuine language lessons (e.g., translation/interpretation requests, babysitting in a foreign language, tutoring in specialized fields using a foreign language, solicitation for religious/political activities, sales activities, romantic purposes, etc.).</li>
<li>(2) Acts that infringe or may infringe the copyrights, trademarks, privacy rights, honor, or other rights of the Company or third parties.</li>
<li>(3) Acts that violate laws or public order and morals.</li>
<li>(4) Acts of abusive language, defamation, threats, sexual harassment, stalking, or other acts that cause trouble to Teachers or other Users.</li>
<li>(5) Consuming alcohol with Teachers during or around lessons (except when both parties agree and it is within the bounds of social norms, such as meals in public places).</li>
<li>(6) Requesting a trial lesson at a lower fee than usual without the intention of continuing lessons.</li>
<li>(7) Demanding lesson fees below the hourly rate stated in the Teacher's profile (even for lessons less than one hour, the hourly rate applies).</li>
<li>(8) Requesting the first lesson with a Teacher of the opposite sex in a non-public place (e.g., home, hotel room, etc.). For subsequent lessons, public places are the rule unless both parties clearly agree otherwise.</li>
<li>(9) Disclosing, leaking, or providing Teacher contact information or other personal information obtained through the Service to third parties without the Teacher's permission (whether for a fee or not).</li>
<li>(10) Transferring, lending, or allowing third parties to use the User's own username and password.</li>
<li>(11) Applying for or contacting a large number of Teachers of the opposite sex in a short period, where the Company reasonably suspects purposes other than language learning.</li>
<li>(12) Acts that interfere with the Company's servers or network systems, or may do so.</li>
<li>(13) Accessing Service information using automated means such as bots, crawlers, or spiders.</li>
<li>(14) Any other acts that the Company deems inappropriate for the operation of the Service.</li>
</ul>`
        },
        section14: {
          title: "Article 14 (Support)",
          content: `<p>1. Inquiries and support regarding the Service are, in principle, accepted <span class="important">only through the contact form on the Company's website</span>. Support is not provided by phone or in person.</p>
<p>2. The support period for system usage of the Service is <span class="important">60 days from the payment date of the system usage fee</span>. Inquiries after this period may not be answered.</p>
<p>3. The Company identifies and manages Users by registered email address and application number. Please provide this information when making inquiries. If any information is missing or if the inquiry is judged to be from someone other than the registered User, support may not be provided.</p>
<p>4. In principle, inquiries regarding specific applications will only be answered if made from the registered email address of the relevant account.</p>
<p>5. If necessary information such as the Teacher's ID, email sending date, and sender's email address is not provided when inquiring about a Teacher who has not replied to a lesson request email, support may not be provided. If it is found that a false report has been made to the Company (e.g., claiming to have sent an email when none was sent), all support will be immediately terminated and future use will be refused.</p>
<p>6. If it is found that a Teacher was contacted for purposes other than lessons, lesson fees were not paid to the Teacher, or the User failed to attend a scheduled lesson without a valid reason, all support will be immediately terminated and future use will be refused, even within the support period.</p>
<p>7. Especially in cases where the Teacher is of the opposite sex, if the Teacher refuses lessons or stops replying, the Company cannot conduct detailed investigations or intervene due to privacy and other reasons, and, in principle, cannot provide support.</p>
<p>8. Support for Student accounts is provided only in Japanese.</p>`
        },
        section15: {
          title: "Article 15 (Personal Information)",
          content: `<p>1. The Company will appropriately handle Users' personal information obtained through the use of the Service in accordance with the separately established "Privacy Policy".</p>
<p>2. Users must check the Privacy Policy before using the Service and agree to its contents before using the Service.</p>
<p>3. In principle, personal information will not be disclosed or provided to third parties without the User's consent. However, this does not apply if disclosure is required by law, requested by public institutions such as courts or police, or necessary to protect life, body, or property and it is difficult to obtain the User's consent, or in other cases permitted by the Personal Information Protection Law.</p>`
        },
        section16: {
          title: "Article 16 (Intellectual Property Rights)",
          content: `<p>1. All copyrights, trademark rights, and other intellectual property rights related to the Service and all content related to the Service (including but not limited to website design, text, images, logos, software, etc.) belong to the Company or rights holders who have licensed the Company.</p>
<p>2. Users may not reproduce, transmit, transfer, lend, translate, adapt, modify, reprint, or reuse these intellectual property rights without the prior written consent of the Company.</p>
<p>3. Intellectual property rights related to teaching materials used by Teachers in lessons or content independently created by Teachers belong to the relevant Teacher or legitimate rights holder. Students must not improperly use these intellectual property rights without the Teacher's permission.</p>`
        },
        section17: {
          title: "Article 17 (Disclaimer)",
          content: `<p>1. The Company makes <span class="important">no guarantees whatsoever</span> regarding the completeness, accuracy, timeliness, usefulness, reliability, legality, or fitness for a particular purpose of the information provided by the Service (including Teacher profile information, reviews from other Users, etc.).</p>
<p>2. The Company does not guarantee that the Service will improve Users' language skills to the expected level or achieve specific goals such as passing exams.</p>
<p>3. The Company does not guarantee or assume any responsibility for the content, quality, schedule, fees, or any other matters related to lessons provided by Teachers. <span class="important">Troubles or disputes related to lessons must be resolved between the Student and Teacher.</span></p>
<p>4. The Company does not guarantee that there will be no bugs, errors, interruptions, delays, data loss or corruption, unauthorized access, or data alteration or leakage by third parties in the provision of the Service.</p>
<p>5. Users are responsible for preparing and maintaining the communication devices, software, internet environment, etc. necessary to use the Service at their own expense. The Company is not responsible for problems caused by communication environment failures.</p>
<p>6. Even if any damage (including direct, indirect, consequential, or lost profits) occurs to Users or third parties due to the use of or inability to use the Service, the Company shall not be liable for any compensation <span class="important">except in cases of willful misconduct or gross negligence by the Company.</span></p>
<p>7. Notwithstanding the preceding paragraph, if the provisions exempting the Company from liability for damages are invalidated by the Consumer Contract Act or other laws, the Company shall be liable only for ordinary damages actually incurred by the User and only up to the amount of the system usage fee that caused the damage.</p>`
        },
        section18: {
          title: "Article 18 (Company Rights, Suspension, Change, and Termination of Service)",
          content: `<p>1. If a registered Teacher inquires about a specific User, the Company may, as necessary, report part of the User's registration status or usage history to the Teacher (within the scope permitted by the Personal Information Protection Law).</p>
<p>2. To facilitate the resolution of disputes between Users or to ensure the sound operation of the Service, the Company may provide the name and registered email address of a User to the Teacher or Student with whom the User is communicating or attempting to communicate.</p>
<p>3. If a dispute arises between a Teacher and a Student, the Company may, at its discretion, temporarily suspend or delete the registration of the relevant Teacher, but Users do not have the right to demand specific action (such as deletion or guidance) against a Teacher. The Company is not obligated to disclose the reasons for such actions.</p>
<p>4. If the Company determines that a User has violated these Terms or that the User's registration information is false or may be false, the Company may, without prior notice or demand, suspend all or part of the Service to the User or delete the User's account. In this case, the User loses all rights related to the Service, and no refunds will be made for paid system usage fees, etc.</p>
<p>5. The Company may temporarily suspend all or part of the Service without prior notice to Users in any of the following cases:</p>
<ul>
<li>(1) When maintenance or construction of Service equipment is unavoidable.</li>
<li>(2) When the Service cannot be provided due to natural disasters, calamities, fire, power outages, war, riots, terrorism, or other force majeure.</li>
<li>(3) When the Company determines that temporary suspension of the Service is necessary for operational or technical reasons.</li>
</ul>
<p>6. The Company may permanently change or terminate all or part of the Service by notifying Users at least one month in advance due to management decisions or changes in business strategy. However, in emergencies, this may not apply. In such cases, the Company assumes no responsibility to Users.</p>`
        },
        section19: {
          title: "Article 19 (Exclusion of Anti-Social Forces)",
          content: `<p>1. Users represent and warrant that they are not, and will not be in the future, members of organized crime groups, organized crime group members, quasi-members of organized crime groups, companies affiliated with organized crime groups, corporate extortionists, social movement racketeers, special intelligence violent groups, or any other similar persons (collectively, 'Anti-Social Forces'), and that none of the following apply:</p>
<ul>
<li>(1) Having a relationship in which Anti-Social Forces are recognized as controlling management.</li>
<li>(2) Having a relationship in which Anti-Social Forces are recognized as being substantially involved in management.</li>
<li>(3) Having a relationship in which Anti-Social Forces are recognized as being used unjustly for the purpose of gaining wrongful profit for oneself, one's company, or a third party, or for the purpose of causing damage to a third party.</li>
<li>(4) Having a relationship in which funds, etc. are provided or convenience is offered to Anti-Social Forces.</li>
<li>(5) Having a relationship in which officers or persons substantially involved in management have a socially reprehensible relationship with Anti-Social Forces.</li>
</ul>
<p>2. Users warrant that they will not, by themselves or through third parties, engage in any of the following acts:</p>
<ul>
<li>(1) Violent demands.</li>
<li>(2) Unreasonable demands beyond legal responsibility.</li>
<li>(3) Acts of threatening behavior or violence in connection with transactions.</li>
<li>(4) Acts of spreading rumors, using fraudulent means or force to damage the Company's credibility or obstruct the Company's business.</li>
<li>(5) Any other acts equivalent to the above.</li>
</ul>
<p>3. If the Company determines that a User is an Anti-Social Force or falls under any of the above items, or is likely to do so, the Company may, without prior notice or demand, suspend all or part of the Service to the User or delete the User's account. In this case, the User loses all rights related to the Service, and no refunds will be made for paid system usage fees, etc. The Company assumes no responsibility for any damages incurred by the User as a result of such termination.</p>`
        },
        section20: {
          title: "Article 20 (Compensation for Damages)",
          content: `<p>1. If a User causes damage to the Company or a third party (including other Users) by violating these Terms or in connection with the use of the Service, the User shall be liable to compensate for such damage (including attorney's fees).</p>`
        },
        section21: {
          title: "Article 21 (Severability)",
          content: `<p>Even if any provision or part of these Terms is determined to be invalid or unenforceable under the Consumer Contract Act or other laws, the remaining provisions and the remaining part of the provision determined to be invalid or unenforceable shall remain in full force and effect.</p>`
        },
        section22: {
          title: "Article 22 (Governing Law and Jurisdiction)",
          content: `<p>1. The governing law for these Terms and the use of the Service shall be Japanese law.</p>
<p>2. If a dispute arises between the User and the Company regarding these Terms or the use of the Service, the parties shall attempt to resolve the dispute amicably through consultation. If the dispute cannot be resolved through consultation, the <span class="important">Tokyo Summary Court or Tokyo District Court</span> shall have exclusive jurisdiction as the court of first instance.</p>`
        },
        section23: {
          title: "Article 23 (Supplementary Provisions)",
          content: `<p>1. When using the Service, please be sure to read the "Frequently Asked Questions (FAQ)" page on this site in addition to these Terms, and fully understand the system and content of the Service before applying.</p>
<p>2. These Terms may be revised without notice due to changes in the Company's management policy, amendments to laws, changes in social conditions, etc. The revised Terms shall take effect from the time they are posted on this page (the page where the Terms of Use are posted on the Service website), and such posting shall constitute notice to Users. Users are required to regularly check this page and use the Service after agreeing to the latest Terms of Use.</p>`
        },
        footerEnd: "End",
        effectiveDate: "[Effective Date: May 25, 2025]"
      },
      nav_are_you_new: "Are you new?",
      nav_first_time_users: "For First-Timers",
      nav_login: "Log in",
      nav_faq: "FAQ",
      nav_tips_for_finding: "Tips for finding students in Japan",
      nav_example_email: "Example of Mail",
      stnav_teacher_site: "Students' site",
      nav_contact: "Contact us",
      menu: "Menu",
      techerhero_title: "Teach Your Language in Japan.",
      Teacherhero_subtitle: "Your Way. <1>For Free.</1>",
      techerhero_description: "Connect with thousands of eager learners and share your passion. Create your free teaching profile on Ouchi Sensei today!",
      hero_cta: "▶Create Your Free Teaching Profile Now!",
      hero_note: "Takes only 10-15 minutes! No credit card required.",
      what_is_title: "What is Ouchi Sensei?",
      what_is_subtitle: "Your Gateway to Teaching in Japan. Spend your free time meaningfully and earn extra income by becoming a language tutor!",
      feature_free: "Absolutely FREE for Teachers",
      feature_free_desc: "Create your profile, list lessons, and connect with students – all without any fees or commissions.",
      feature_direct: "Direct Connection",
      feature_direct_desc: "Communicate directly with students to arrange lessons, set your schedule, and tailor your teaching.",
      feature_nationwide: "Nationwide Reach",
      feature_nationwide_desc: "Whether in Tokyo, Osaka, or anywhere else, students are looking for teachers like you.",
      why_choose_title: "Why Choose Ouchi Sensei?",
      why_choose_subtitle: "Unlock your teaching potential with a platform designed for your success.",
      choose_rate: "Set Your Own Rates",
      choose_rate_desc: "You decide your lesson fees. Maximize your earnings.",
      choose_flexible: "Flexible Schedule",
      choose_flexible_desc: "Teach when and where it suits you – online or in-person.",
      choose_style: "Your Teaching Style",
      choose_style_desc: "Design lessons your way. No rigid policies.",
      choose_setup: "Easy Profile Setup",
      choose_setup_desc: "Get your profile live in minutes and attract students.",
      choose_payment: "Direct Payments",
      choose_payment_desc: "Students pay you directly. We take no commission.",
      choose_any_language: "Teach Any Language",
      choose_any_language_desc: "From English to Spanish, Chinese to French, and more!",
      get_started_title: "Get Started in 3 Easy Steps",
      get_started_subtitle: "Joining Ouchi Sensei and finding students is quick and straightforward.",
      step1_title: "Create Free Account",
      step1_desc: "Sign up with basic info. Fast, easy, and completely free. (Approx. 5 mins)",
      step2_title: "Build Teaching Profile",
      step2_desc: "Showcase your skills, experience, rates, and availability. (Approx. 10 mins)",
      step3_title: "Connect with Students!",
      step3_desc: "Profile goes live (usually within 24hrs). Students contact you directly.",
      opportunities_title: "Teaching Opportunities Across Japan",
      opportunities_subtitle: "From the vibrant streets of Tokyo to the historic temples of Kyoto, opportunities abound! Ouchi Sensei connects you with students in major cities and regions nationwide.",
      opportunities_explore: "Explore teaching roles in Tokyo, Yokohama, Osaka, Kyoto, Nagoya, Sapporo, Fukuoka, and many more locations!",
      opportunities_online: "Online Lessons? Yes!",
      opportunities_online_desc: "While many students seek in-person lessons, you can also offer online lessons to reach an even wider audience across Japan. Work from the comfort of your home!",
      teach_languages_title: "Teach a Variety of Languages",
      teach_languages_subtitle: "We welcome teachers of all these languages and more! Students in Japan are eager to learn.",
      teach_languages_and_others: "And many others! If you can teach it, there's likely a student waiting to learn.",
      demand_title: "High Demand for Passionate Tutors",
      demand_short: "Japan has a significant demand for dedicated language teachers. While professional experience is valued, students also seek tutors who are friendly, approachable, and have effective teaching methods.",
      demand_read_more: "Read More",
      demand_long: "Japan has a significant demand for dedicated language teachers. While professional experience is valued, students also seek tutors who are friendly, approachable, and have effective teaching methods. This means that even if you don't have formal certifications, your passion and ability to connect with students can lead to a successful teaching experience. We believe that a supportive attitude and a genuine desire to help others learn are just as important as qualifications.",
      demand_long2: "You don't necessarily need a formal degree or teaching certificate to succeed. If you have a passion for language, excellent communication skills, and a supportive attitude, you can build a rewarding teaching career with Ouchi Sensei.",
      demand_read_less: "Read Less",
      demand_cta: "▶Share Your Skills - Join Free!",
      faq_title: "Frequently Asked Questions",
      faq_subtitle: "Have questions? We've got answers. Here are some common queries from prospective tutors.",
      faq_q1: "Is Ouchi Sensei really free for teachers?",
      faq_a1: "Yes, absolutely! Creating a profile, listing your services, and connecting with students is 100% free for teachers. We do not charge any registration fees, commissions, or hidden costs.",
      faq_q2: "What qualifications do I need to become a tutor?",
      faq_a2: "While formal qualifications (like TEFL, TESOL, or language teaching degrees) can be an advantage, they are not strictly required. Native or fluent speakers with a passion for teaching and good communication skills are welcome. Clearly state your qualifications and experience in your profile.",
      faq_q3: "How do I get paid?",
      faq_a3: "You arrange payment terms directly with your students. Ouchi Sensei does not get involved in the payment process, ensuring you receive 100% of your earnings.",
      faq_q4: "Can I teach online?",
      faq_a4: "Yes! You can specify in your profile whether you offer in-person lessons, online lessons, or both. This gives you the flexibility to reach students nationwide.",
      faq_q5: "How quickly will my profile be visible to students?",
      faq_a5: "After you submit your profile, our team will review it. Approval typically takes 24-48 hours. Once approved, your profile will be live on our student-facing website.",
      signup_title: "Ready to Start Your Teaching Journey in Japan?",
      signup_subtitle: "Your students are waiting. Don't miss out on the opportunity to connect, share your skills, and earn money on your own terms.",
      signup_cta: "▶Create Your Free Teaching Profile Now!",
      signup_note: "Join thousands of successful tutors in Japan!",
      footer_terms: "Terms of Use",
      footer_company: "Company",
      footer_contact: "Contact Us",
      footer_copyright: "© 2025 Ouchi Sensei. All rights reserved.",
      language_english: "English",
      language_chinese: "Chinese",
      language_korean: "Korean",
      language_french: "French",
      language_spanish: "Spanish",
      language_german: "German",
      language_italian: "Italian",
      language_portuguese: "Portuguese",
      language_russian: "Russian",
      language_tagalog: "Tagalog",
      language_vietnamese: "Vietnamese",
      language_indonesian: "Indonesian",
      language_myanmar: "Myanmar",
      language_philippines: "Philippines",
      language_taiwanese: "Taiwanese",
      language_arabic: "Arabic",
      // --- TeacherFindingStudents Page ---
      tfs_title: "Unlock Your Teaching Potential in Japan!",
      tfs_subtitle: "Expert tips to attract more students and build a thriving teaching career.",
      tfs_cta: "Explore the 7 Keys to Success",
      tfs_why_title: "Why These Tips Matter",
      tfs_why_body: "In a competitive market, a well-crafted profile is your most powerful tool. It's more than just a listing; it's your personal introduction to Japanese students who are eager to learn but also careful in choosing their sensei. The most sought-after teachers on our platform consistently demonstrate clarity, professionalism, and a genuine understanding of student needs. This guide is designed to help you do just that, making your profile irresistible!",
      tfs_keys_title: "The 7 Keys to an Irresistible Profile",
      tfs_keys_subtitle: "Click on each key to reveal detailed advice. Transform your profile from a simple listing into a compelling invitation to learn!",
      tfs_considerations_title: "Important Considerations",
      tfs_considerations_profile: "While regular updates are highly encouraged, please <1>refrain from updating your profile multiple times in a short period (e.g., several times a day) solely to appear at the top of search results.</1> Such activity may be flagged, and your profile could be temporarily pended from publishing, taking longer than usual to reappear. Meaningful monthly updates are best.",
      tfs_considerations_authentic: "Let your personality shine through your profile. Authenticity builds trust and helps you connect with the right students for your teaching style.",
      tfs_considerations_culture: "Understanding and respecting Japanese communication styles can greatly enhance your interactions with students and build stronger, more positive teaching relationships.",
      tfs_next_title: "Ready to Attract More Students?",
      tfs_next_body: "You now have the keys to creating a truly outstanding teaching profile! By investing a little time in implementing these tips, you'll be well on your way to building rewarding teaching relationships and thriving as a language teacher in Japan.",
      tfs_next_update: "Update Your Profile Now!",
      tfs_next_register: "New? Register as a Teacher!",
      tfstips: [
        {
          icon: "📷",
          title: "Key 1: The Power of a Professional Photo",
          question: "Is your profile picture making the right first impression?",
          crucialInfo: "A clear, friendly, and professional photo humanizes your profile. It helps students feel more at ease and comfortable initiating contact. Think of it as your virtual handshake! Profiles with photos are significantly more likely to be viewed.",
          actionSteps: [
            "Upload a high-quality, recent photo of yourself.",
            "Ensure your face is clearly visible, with good lighting.",
            "A warm, genuine smile can make a big difference.",
            "Avoid sunglasses, group photos, or overly casual settings."
          ],
          note: "<em>If you encounter any issues uploading your photo, please don't hesitate to use our contact form. We're here to assist!</em>",
          actionable_steps: "Actionable Steps:"
        },
        {
          icon: "💰",
          title: "Key 2: Strategic Lesson Pricing",
          question: "Is your lesson fee competitive and fair?",
          crucialInfo: "Price is a significant factor for many students. Setting a fee that is too high might deter them, while a fee that is too low could undervalue your expertise.",
          actionSteps: [
            "Research the average rates for your language and experience level in your area. For example, many Japanese students are willing to pay approximately <strong>¥2,500 to ¥3,500 per hour</strong> for a one-on-one English lesson.",
            "Consider your qualifications, experience, and the unique value you offer.",
            "Ask yourself: \"If I were a student, what would I consider a reasonable price for this lesson?\"",
            "Clearly state your fee per hour for one-on-one lessons."
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "🚉",
          title: "Key 3: Maximize Your Visibility with Station Selection",
          question: "Are you reaching students in all your accessible locations?",
          crucialInfo: "Many students in Japan search for teachers based on specific train stations for convenience. Our platform creates dedicated landing pages for each station in major areas (Kanto: Tokyo, Kanagawa, Chiba, Saitama; Kansai: Osaka, Hyogo, Kyoto, Nara, etc.).",
          actionSteps: [
            "Select <strong>all</strong> train stations you are genuinely willing and able to travel to for face-to-face lessons.",
            "The more stations you select, the wider your profile's exposure will be across our platform and in search engine results for station-specific searches.",
            "Be realistic about travel times and costs when selecting stations."
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "📝",
          title: "Key 4: Craft a Compelling Self-Description (In Japanese First!)",
          question: "Does your profile truly reflect who you are as a teacher?",
          crucialInfo: "Japanese students often read profiles very carefully. They want to understand your personality, teaching style, and experience before committing. A generic or incomplete description will likely be overlooked.",
          actionSteps: [
            "<strong>Write in Japanese, or at least provide a Japanese version first.</strong> This demonstrates respect for the local culture and makes your profile accessible to a broader audience. Even if your Japanese isn't perfect, students will appreciate the effort. Consider using a translation tool and then having a Japanese-speaking friend review it.",
            "Go beyond the basics. Fill out all available fields in your profile.",
            "In the \"Message to Students\" section, share:",
            "  <ul class='list-disc list-inside ml-4'><li>Your teaching philosophy and passion.</li><li>Your background and relevant experience.</li><li>Your interests and hobbies (this can help build rapport!).</li><li>What students can expect to gain from your lessons.</li></ul>",
            "Avoid generic phrases like \"Hi everyone, I'm looking forward to hearing from you soon!\" Instead, be specific and engaging."
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "🧑‍🏫",
          title: "Key 5: Detail Your Unique Lesson Style",
          question: "Do students understand what it's like to learn with you?",
          crucialInfo: "Clearly describing your teaching methods and materials helps students determine if you're the right fit for their learning style and goals.",
          actionSteps: [
            "Explain how you typically conduct your lessons.",
            "What materials do you use (e.g., textbooks, online resources, original materials, news articles, videos)?",
            "How do you allocate time between conversation practice, grammar, vocabulary, etc.?",
            "Do you offer customized lesson plans?",
            "Mention if you specialize in certain areas (e.g., business English, exam preparation, conversational practice)."
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "🔄",
          title: "Key 6: Keep Your Profile Fresh & Active",
          question: "When was the last time you logged in or updated your profile?",
          crucialInfo: "An \"Updated\" mark is displayed on your profile for 4 weeks after any modification. Students often prefer teachers who appear active and engaged on the platform. Moreover, profiles that haven't been updated for <strong>90 days</strong> will temporarily be hidden from search results.",
          actionSteps: [
            "Log in regularly and make small updates to your profile at least <strong>once a month</strong>. This could be as simple as rephrasing a sentence or adding a new available time slot.",
            "This signals to both students and our system that you are actively seeking new students."
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "💬",
          title: "Key 7: Engage Promptly with Potential Students",
          question: "Are you responding quickly and professionally to inquiries?",
          crucialInfo: "When a student reaches out, a prompt and courteous reply can make all the difference. It shows you are serious, organized, and enthusiastic about teaching. Delayed responses can lead to missed opportunities.",
          actionSteps: [
            "Check your messages on our platform regularly (ideally daily).",
            "Aim to respond to student inquiries within 24 hours.",
            "Even a quick acknowledgment (\"Thanks for your message! I'll reply in more detail soon.\") is better than no response.",
            "Maintain a friendly, professional, and helpful tone in all your communications."
          ],
          note: null,
          actionable_steps: "実践ステップ："
        }
      ],
      tfs_important_title: "Important Considerations",
      tfs_considerations_profile_title: "Regarding Profile Updates:",
      tfs_considerations_authentic_title: "Be Authentic:",
      tfs_considerations_culture_title: "Respect Cultural Nuances:",
      tfs_actionable_steps: "Actionable Steps:",
      
        "teacherfaq": {
          "hero": {
            "imageAlt": "Teachers collaborating and students learning with Ouchi-Sensei.com",
            "title": "Your Questions Answered",
            "description": "Find all the information you need to start teaching languages with Ouchi-Sensei.com in Japan. We're here to support your success!",
            "ctaButton": "Start Teaching Now"
          },
          "gettingStarted": {
            "title": "Getting Started & Profile",
            "description": "This section covers how to create your account, set up your teaching profile, and other initial considerations for teaching with Ouchi-Sensei.com.",
            "q1": {
              "question": "How do I make my account and teaching profile?",
              "answer": {
                "part1": "First, please",
                "register": "register",
                "part2": "and once you have an account you will be able to make your teaching profile on the",
                "editProfile": "Edit Profile page (Please log-in)",
                "part3": "section of your account page."
              }
            },
            "q2": {
              "question": "How long must I plan to be in Japan to have my teaching profile published?",
              "answer": {
                "part1": "You can only have your teaching profile published if you plan to be in Japan for",
                "duration": "at least 60 days"
              }
            },
            "q3": {
              "question": "What qualifications do I need to become a tutor?",
              "answer": "You do not need any specific qualifications to become a tutor on Ouchi-Sensei.com. However, having teaching experience or relevant certifications can help you attract more students."
            },
            "q4": {
              "question": "I don't speak Japanese at all. Can I still register?",
              "answer": "Sure, go ahead, please. Most of the Japanese students are looking for teachers who can help them brush up their conversation skills, which means that you can talk to them in the language you are teaching."
            },
            "q5": {
              "question": "Where and when will my teaching profile be published?",
              "answer": {
                "part1": "Your teaching profile will be published on our",
                "studentsPage": "Students' page",
                "part2": "normally within 24 hours of your submission. And it will appear in teacher search results for",
                "duration": "90 days after the last update"
              }
            },
            "q6": {
              "question": "How can I improve my teaching profile to attract more students?",
              "answer": {
                "part1": "To attract more students, ensure your profile is complete and up-to-date. Include details about your teaching experience, methodology, and any special skills or certifications. Adding photos and a compelling introduction can also make your profile more appealing. Please",
                "tipsPage": "check out this page",
                "part2": "where we provide additional tips on how to find more students."
              }
            },
            "q7": {
              "question": "Can I get a visa from Ouchi-Sensei.com?",
              "answer": "No. We offer only the online teacher-student matching service that gives you the opportunity to find students."
            }
          },
          "lessonsTeaching": {
            "title": "Lessons & Teaching",
            "description": "Information about lesson locations, pricing, duration, and how to present your offerings.",
            "q1": {
              "question": "Where do lessons take place?",
              "answer": "The lessons typically take place in public places such as cafes near train stations. Please meet for lessons in public, for example, especially when the student is a person of the opposite gender, or even the same gender at least until you get to know each other. Please note that lessons involving alcohol are not allowed."
            },
            "q2": {
              "question": "How much should I charge per lesson?",
              "answer": {
                "part1": "This is up to your discretion. You can select your lesson fee on the",
                "editProfile": "Edit Profile page (Please log-in)",
                "part2": "section of your account page and pick a rate you think is appropriate. It's advised that teachers and students confirm the lesson fee before the lessons start."
              }
            },
            "q3": {
              "question": "I have a discount for lesson fees if students take multiple lessons. How can I let students know?",
              "answer": "The lesson fee fields are currently all hourly base on Ouchi-Sensei.com. So please describe the detail of your lesson fee in 'Message to students' field in your teaching profile if you have another lesson fee structure."
            },
            "q4": {
              "question": "My lesson duration is not one hour, but the system only allows hourly-based fees.",
              "answer": "The lesson fee fields are currently set based on hourly rates on Ouchi-Sensei.com. If your lesson has a different duration or fee structure, please select the hourly equivalent in the lesson fee fields and clearly explain your actual pricing details in the 'Message to students' field."
            }
          },
          "connectingStudents": {
            "title": "Connecting with Students",
            "description": "Details on how students will contact you, recommendations, and handling initial communications.",
            "q1": {
              "question": "How will students contact me?",
              "answer": {
                "part1": "Students will usually contact you for the first time by sending an e-mail to your registered e-mail address after they have received your contact information. They may also use other means, such as phone, if you have allowed on your profile page for students to access your additional contact information.",
                "contactUs": "Contact Us",
                "part2": "*Please frequently and routinely check your spam or junk e-mail boxes also as it seems that sometimes the lesson request e-mails are automatically sorted into there."
              }
            },
            "q2": {
              "question": "How can I know if the student who has contacted me is a member of Ouchi-Sensei.com?",
              "answer": {
                "part1": "Please just let us know the name and the email address of the student using our",
                "contactUs": "Contact Us",
                "part2": "form. We will check it for you and get back to you as soon as possible."
              }
            },
            "q3": {
              "question": "A student contacted me with little information. Should I meet him/her?",
              "answer": {
                "part1": "You can ask the student directly more about himself/herself. If you still don't feel comfortable for example, especially when the student is a person of the opposite gender, you may turn down the lesson request as these are private lessons. In case, you find someone suspicious please don't hesitate to report to us by using our",
                "contactUs": "Contact Us",
                "part2": "form."
              }
            },
            "q4": {
              "question": "How can my students recommend me? (Osusume feature)",
              "answer": "Ouchi-Sensei.com has an \"Osusume\" feature that lets students recommend teachers after they have requested the teacher's contact information through our platform. It displays how many students have recommended you. The \"Osusume\" button appears on your profile only for students who have requested your contact information. To recommend you, students must log in and visit your profile page."
            }
          },
          "paymentsFees": {
            "title": "Payments & Fees",
            "description": "Information about the cost of using Ouchi-Sensei.com and how you receive payment from students.",
            "q1": {
              "question": "How much does this teacher-student matching service cost?",
              "answer": {
                "part1": "Nothing. It's",
                "freeForTeachers": "totally free for teachers"
              }
            },
            "q2": {
              "question": "How do I get paid?",
              "answer": {
                "part1": "Your students will pay you",
                "paymentMethod": "in cash at the end of each lesson",
                "part2": ". Note: Teachers should never ask students to pay in advance."
              }
            }
          },
          "rulesSupportAccount": {
            "title": "Platform Rules, Support & Account Management",
            "description": "Guidance on platform rules, managing your availability, account settings, and how to get support.",
            "q1": {
              "question": "How do I update my availability on the platform?",
              "answer": {
                "part1": "You can update your availability by logging into your account and navigating to the",
                "editProfile": "Edit Profile page",
                "part2": "where you can specify your available teaching hours and locations."
              }
            },
            "q2": {
              "question": "What should I do if I encounter a technical issue?",
              "answer": {
                "part1": "If you experience any technical difficulties, please reach out to our support team via the",
                "contactUs": "Contact Us",
                "part2": "form, and we will assist you promptly."
              }
            }
          },
          "cta": {
            "title": "Ready to Share Your Language Skills?",
            "description": "Join our community of talented language teachers on Ouchi-Sensei.com and start connecting with students in Japan today. If you couldn't find an answer above, our support team is ready to assist you.",
            "registerButton": "Register as a Teacher",
            "contactButton": "Contact Support"
          }
        },
        "teacherterms": {
          "header": {
            "siteName": "Ouchi-Sensei.com",
            "title": "Interactive Terms of Use",
            "description": "Welcome! This page presents the \"Terms of Use for Language Teachers\". Scroll down to read through all sections.",
            "lastUpdated": "Last Updated: {date}"
          },
          "section1": {
            "title": "1. Definitions",
            "description": "This section clarifies the meaning of key terms used throughout this Agreement to ensure a common understanding.",
            "definitions": {
              "service": "\"Service\"",
              "serviceDescription": "Refers to the online platform provided by Ouchi-Sensei.com that connects Language Teachers with potential Students for language lessons.",
              "teacher": "\"Language Teacher\" (or \"Teacher\", \"You\", \"Your\")",
              "teacherDescription": "An individual who registers on the Service to offer language teaching services to Students.",
              "student": "\"Student\"",
              "studentDescription": "An individual who uses the Service to find Language Teachers.",
              "ouchiSensei": "\"Ouchi-Sensei.com\" (or \"We\", \"Us\", \"Our\")",
              "ouchiSenseiDescription": "The operator of the website and provider of the Service.",
              "profile": "\"Profile\"",
              "profileDescription": "The information submitted by a Language Teacher that is displayed on the Service to attract Students.",
              "userContent": "\"User Content\"",
              "userContentDescription": "Any content submitted by users, including but not limited to text, images, and information in Profiles."
            }
          },
          "section2": {
            "title": "2. About the Service",
            "description": "This section describes the purpose, scope, eligibility, and nature of the services provided by Ouchi-Sensei.com.",
            "purpose": {
              "title": "2.1. Purpose",
              "description": "The Service aims to facilitate connections between Language Teachers and Students in Japan by allowing Teachers to create and publish profiles outlining their teaching services."
            },
            "scope": {
              "title": "2.2. Scope",
              "description": "The Service is primarily intended to improve the quality and affordability of language training within Japan."
            },
            "eligibility": {
              "title": "2.3. Eligibility",
              "description": "The Service is available only to individuals residing in Japan."
            },
            "nature": {
              "title": "2.4. Nature of Service",
              "description": "Ouchi-Sensei.com acts as a neutral platform. We are not a recruiting agency or a personnel service agency. We do not directly participate in, nor are we a party to, any agreements or transactions between Language Teachers and Students. All contractual arrangements for language lessons are solely between the Teacher and the Student. Ouchi-Sensei.com is not responsible for the content of lessons, scheduling, payments, or any other aspect of the interaction between Teachers and Students."
            }
          },
          "section3": {
            "title": "3. Eligibility for Language Teachers",
            "description": "This section outlines the specific criteria that individuals must meet to register and use the Service as a Language Teacher.",
            "intro": "To register and use the Service as a Language Teacher, you must meet the following criteria:",
            "residency": {
              "title": "3.1. Residency and Work Authorization",
              "items": {
                "passport": "Possess a valid passport and visa that permits you to reside in Japan.",
                "registrationCard": "Hold a valid Alien Registration Card (or Zairyu Card/Permanent Resident Card) or possess Japanese citizenship/nationality.",
                "workAuthorization": "Possess a valid visa or permit that legally allows you to work or engage in remunerated activities in Japan (e.g., appropriate work visa, spouse visa with work permission, Japanese citizenship). It is your sole responsibility to ensure compliance with Japanese immigration laws."
              }
            },
            "minimumStay": {
              "title": "3.2. Minimum Stay",
              "description": "You must plan to be physically present in Japan for at least sixty (60) consecutive days from the date your Profile is published on the Service."
            },
            "availability": {
              "title": "3.3. Availability",
              "description": "You must be available for lessons and plan to be in the geographical area you have selected in your Profile for at least sixty (60) consecutive days from the date your Profile is published."
            },
            "individualTeachers": {
              "title": "3.4. Individual Teachers Only",
              "description": "The Service is for individual Language Teachers. Language schools, agencies, or pre-arranged group lessons offered by an organization are not permitted to register."
            }
          },
          "section4": {
            "title": "4. Purpose of Use",
            "description": "This section defines the acceptable uses of the Service and lists activities that are not permitted.",
            "legitimateUse": {
              "title": "4.1. Legitimate Use",
              "description": "You agree to use the Service solely for the purpose of genuinely and seriously seeking Students for your language lessons in Japan."
            },
            "prohibitedUses": {
              "title": "4.2. Prohibited Uses",
              "intro": "You must not use the Service for any other purpose, including but not limited to:",
              "items": {
                "otherServices": "Soliciting services other than language lessons.",
                "promotingBusinesses": "Promoting other businesses or websites.",
                "illegalActivities": "Any illegal, unethical, or fraudulent activities.",
                "harassment": "Harassment, discrimination, or any form of inappropriate communication."
              }
            }
          },
          "section5": {
            "title": "5. Service Charges and Lesson Fees",
            "description": "This section details Ouchi-Sensei.com's policy on service charges for teachers, the nature of the teacher-platform relationship regarding employment, and rules for lesson fee transparency.",
            "serviceFee": {
              "title": "5.1. Service Fee for Teachers",
              "description": "Ouchi-Sensei.com does not currently charge Language Teachers a fee for registering or using the basic features of the Service to connect with Students. We reserve the right to introduce fees or change existing fee policies in the future, with prior notice as outlined in Section 14 (Modification of Terms)."
            },
            "noEmployment": {
              "title": "5.2. No Employment Relationship",
              "description": "You acknowledge that you are an independent contractor and not an employee, agent, partner, or joint venturer of Ouchi-Sensei.com. You are not entitled to any employment benefits."
            },
            "lessonPayments": {
              "title": "5.3. Lesson Payments",
              "description": "Language Teachers receive lesson payments directly from their Students. Ouchi-Sensei.com is not involved in these financial transactions. The terms of payment (e.g., rate, method, timing) are to be agreed upon directly between the Teacher and the Student."
            },
            "feeTransparency": {
              "title": "5.4. Fee Transparency",
              "items": {
                "noUpfrontFees": "You are prohibited from advertising lessons that require an enrollment fee, upfront payment for multiple lessons (unless explicitly agreed upon with the student for a defined block), or a mandatory monthly/annual fee structure that locks students in. Pay-as-you-go or payment per lesson/small block of lessons is encouraged.",
                "feeConsistency": "There must be no discrepancy between the lesson fee (and any other disclosed fees, such as for materials or travel) displayed on your Profile and the actual amount charged to Students.",
                "updateNotice": "You must promptly update your Profile and provide reasonable notice to your current Students if you decide to change your lesson fees or any other additional charges."
              }
            }
          },
          "section6": {
            "title": "6. Information Provided by Language Teachers",
            "description": "This section explains how information provided by Language Teachers is handled, including what is publicly displayed, what is protected, and what is shared with students, along with the teacher's responsibility for information accuracy.",
            "publicInfo": {
              "title": "6.1. Publicly Displayed Information",
              "description": "Most information provided in your Language Teacher Profile (e.g., first name, teaching experience, qualifications, lesson details, teaching locations, photo) will be publicly displayed on the Ouchi-Sensei.com website and may be shared via its social network accounts to promote your services and the platform."
            },
            "protectedInfo": {
              "title": "6.2. Protected Information",
              "description": "Your last name, full residential address, personal phone number, and primary email address will not be publicly displayed on your Profile."
            },
            "sharedInfo": {
              "title": "6.3. Information Shared with Students",
              "items": {
                "emailLastName": "Your email address and last name will be provided to a Student who makes a formal request through the Service to contact you regarding language lessons.",
                "additionalContact": "You may choose to authorize the sharing of additional contact information (e.g., mobile phone number, alternative email address) with Students through your Profile settings. You are responsible for managing these settings."
              }
            },
            "accuracy": {
              "title": "6.4. Accuracy of Information",
              "description": "You are solely responsible for the accuracy, completeness, and legality of all information you provide in your registration form and Profile. You agree to keep this information up-to-date."
            }
          },
          "section7": {
            "title": "7. Responsibilities of Language Teachers",
            "description": "This section details the obligations and duties of Language Teachers when using the Service, covering accuracy of information, professional conduct, account security, profile content, student privacy, availability, responsiveness, and legal compliance.",
            "intro": "As a Language Teacher using the Service, you agree to:",
            "accurateInfo": {
              "title": "7.1. Provide Accurate Information",
              "description": "Ensure all information submitted to Ouchi-Sensei.com, including in your registration and Profile, is true, accurate, current, and complete. You must not provide false, misleading, or deceptive information under any circumstances."
            },
            "professionalConduct": {
              "title": "7.2. Professional Conduct",
              "items": {
                "respect": "Treat all Students and potential Students with respect, professionalism, and courtesy.",
                "agreements": "Abide by all agreements made between you and your Students regarding lessons, scheduling, fees, and conduct.",
                "environment": "Maintain a safe and appropriate learning environment."
              }
            },
            "accountSecurity": {
              "title": "7.3. Account Security",
              "items": {
                "passwordConfidentiality": "You are responsible for maintaining the confidentiality of the password issued to you upon registration.",
                "noDisclosure": "You must not disclose your ID or password to any third party.",
                "accountActivity": "You are responsible for all activities that occur under your account. Notify Ouchi-Sensei.com immediately of any unauthorized use of your account."
              }
            },
            "profileRestrictions": {
              "title": "7.4. Profile Content Restrictions",
              "items": {
                "noContactInfo": "Do not include direct contact information (e.g., email address, phone number, personal website links, social media handles) in any Profile fields not specifically designated for such information. The Service provides a secure way for Students to contact you.",
                "personalProfile": "Only publish a Profile for language lessons that you personally offer. You may not create profiles for other individuals or entities."
              }
            },
            "studentPrivacy": {
              "title": "7.5. Student Information Privacy",
              "description": "You must not share or sell any Student's personal information received through the Service with any third party for any reason, except as strictly necessary to conduct the lessons and as permitted by the Student and applicable law."
            },
            "availability": {
              "title": "7.6. Availability Management",
              "description": "If you are unavailable for lessons for any period, you must set your Profile status to \"Unpublished\" or \"Unavailable\" through your account settings to avoid misleading Students."
            },
            "responsiveness": {
              "title": "7.7. Responsiveness",
              "description": "Respond to all lesson requests from Students received through the Service as promptly as possible, ideally within 48 hours. If you are not available or not interested in a request, inform the Student courteously and in a timely manner."
            },
            "legalCompliance": {
              "title": "7.8. Legal Compliance",
              "items": {
                "workObligations": "You are solely responsible for all work-related obligations arising from your teaching activities, including but not limited to income tax reporting and payments, health insurance, pension contributions (superannuation), and any other legal or fiscal responsibilities in Japan.",
                "lawCompliance": "Comply with all applicable local, national, and international laws and regulations in connection with your use of the Service and your provision of teaching services."
              }
            }
          },
          "section8": {
            "title": "8. Responsibilities and Rights of Ouchi-Sensei.com",
            "description": "This section describes Ouchi-Sensei.com's role, our rights concerning user profiles and content, account termination, and our stance on endorsements and cooperation with authorities.",
            "role": {
              "title": "8.1. Our Role",
              "description": "Ouchi-Sensei.com's primary responsibility is to provide the online platform that enables Language Teachers to create Profiles and connect with potential Students."
            },
            "cooperation": {
              "title": "8.2. Cooperation with Authorities",
              "description": "Ouchi-Sensei.com reserves the right to provide government institutions or law enforcement agencies with any necessary information regarding users of the Service in the event of investigations into illegal acts, harassment, or other serious misconduct, as required by law or to protect the safety and integrity of the Service and its users."
            },
            "profileModeration": {
              "title": "8.3. Profile Moderation",
              "items": {
                "reviewEdit": "Review, edit, or delete any Language Teacher's Profile or User Content if it is found to contain false or misleading information, prohibited contact information, inappropriate statements, or violates any part of this Agreement or applicable law, at our sole discretion.",
                "refuseRegistration": "Refuse a Language Teacher's registration request or the publication of a Profile without providing a reason."
              }
            },
            "accountTermination": {
              "title": "8.4. Account Termination",
              "items": {
                "misconduct": "There are credible reports of serious issues, misconduct, or complaints from Students.",
                "breach": "The Teacher breaches any term of this Agreement.",
                "harmfulConduct": "The Teacher's conduct is deemed harmful to the reputation or operation of Ouchi-Sensei.com or the safety of its users."
              }
            },
            "profileUse": {
              "title": "8.5. Use of Profile Information",
              "description": "Ouchi-Sensei.com has the right to publicly display all information in Language Teachers' Profiles (except for information designated as private, such as last names, full addresses, phone numbers, and email addresses, unless authorized for sharing with specific students) for the purpose of operating and promoting the Ouchi-Sensei.com online service and its associated social network accounts."
            },
            "postRemoval": {
              "title": "8.6. Post-Removal Contact Information",
              "description": "Ouchi-Sensei.com may, at its discretion, continue to provide a Teacher's authorized contact information to Students who had previously initiated contact for up to five (5) weeks after the Teacher's Profile has been removed or unpublished, to facilitate ongoing communication for lessons already in progress or recently requested."
            },
            "noEndorsement": {
              "title": "8.7. No Endorsement",
              "description": "Publication of a Teacher's Profile on Ouchi-Sensei.com does not constitute an endorsement, recommendation, or guarantee of that Teacher's qualifications, skills, or the quality of their lessons. Students are advised to exercise their own judgment when selecting a Teacher."
            }
          },
          "section9": {
            "title": "9. Prohibited Activities",
            "description": "This section explicitly lists activities that are strictly forbidden when using the Service to ensure a safe, legal, and respectful environment for all users.",
            "intro": "In addition to other prohibitions as set forth in this Agreement, you are prohibited from using the Service or its content:",
            "items": {
              "unlawfulPurpose": "For any unlawful purpose or to solicit others to perform or participate in any unlawful acts.",
              "lawViolation": "To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.",
              "ipInfringement": "To infringe upon or violate our intellectual property rights or the intellectual property rights of others.",
              "harassment": "To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.",
              "falseInfo": "To submit false or misleading information.",
              "maliciousCode": "To upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet.",
              "privacyViolation": "To collect or track the personal information of others without their explicit consent.",
              "spam": "To spam, phish, pharm, pretext, spider, crawl, or scrape.",
              "obscenePurpose": "For any obscene or immoral purpose.",
              "securityInterference": "To interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet.",
              "multipleAccounts": "To create multiple accounts for a single individual or to misrepresent your identity or qualifications.",
              "bypassMeasures": "To attempt to bypass any measures we may use to prevent or restrict access to the Service."
            },
            "termination": "We reserve the right to terminate your use of the Service for violating any of the prohibited uses."
          },
          "section10": {
            "title": "10. Intellectual Property",
            "description": "This section addresses the ownership of content on Ouchi-Sensei.com, the limited license granted to users, restrictions on use, and the rights granted by users for their submitted content.",
            "ourContent": {
              "title": "10.1. Our Content",
              "description": "All content provided on the Ouchi-Sensei.com website, including but not limited to text, graphics, logos, images, software, and the compilation thereof (meaning the collection, arrangement, and assembly of all content on the Service) is the property of Ouchi-Sensei.com or its content suppliers and is protected by Japanese and international copyright and other intellectual property laws."
            },
            "limitedLicense": {
              "title": "10.2. Limited License",
              "description": "Ouchi-Sensei.com grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial use as a Language Teacher, strictly in accordance with this Agreement."
            },
            "restrictions": {
              "title": "10.3. Restrictions",
              "description": "You may not copy, modify, distribute, sell, lease, or create derivative works from any part of our Service or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit these restrictions or you have our written permission."
            },
            "userContent": {
              "title": "10.4. User Content",
              "description": "By submitting User Content (such as your Profile information and photo), you grant Ouchi-Sensei.com a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the Service and Ouchi-Sensei.com's (and its successors' and affiliates') business, including without limitation for promoting and redistributing part or all of the Service (and derivative works thereof) in any media formats and through any media channels. This license continues even if you stop using our Service, primarily for archival, promotional, and legal purposes. You represent and warrant that you have all necessary rights to grant this license."
            }
          },
          "section11": {
            "title": "11. Term and Termination",
            "description": "This section explains the duration of this Agreement, how it can be terminated by either the Language Teacher or Ouchi-Sensei.com, and the effects of such termination.",
            "term": {
              "title": "11.1. Term",
              "description": "This Agreement shall commence upon your successful registration for the Service and shall remain in effect until terminated by either you or Ouchi-Sensei.com."
            },
            "terminationByYou": {
              "title": "11.2. Termination by You",
              "description": "You may terminate this Agreement at any time by deactivating your account and ceasing all use of the Service. Deactivation can typically be done through your account settings."
            },
            "terminationByUs": {
              "title": "11.3. Termination by Ouchi-Sensei.com",
              "items": {
                "breach": "A breach of this Agreement.",
                "legalLiability": "If we believe that your actions may cause legal liability for you, our users, or us.",
                "misconduct": "If we suspect misconduct or fraudulent activity in connection with your account.",
                "inactivity": "For extended periods of inactivity.",
                "integrity": "For any other reason deemed necessary to protect the integrity and operation of the Service."
              }
            },
            "effectOfTermination": {
              "title": "11.4. Effect of Termination",
              "description": "Upon termination, your right to use the Service will immediately cease. We may delete your Profile and User Content, although some information may be retained for archival, legal, or operational purposes as permitted by law. Provisions of this Agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability."
            }
          },
          "section12": {
            "title": "12. Disclaimer of Warranties and Limitation of Liability",
            "description": "This crucial section outlines that the Service is provided \"as is,\" without warranties, and sets limits on Ouchi-Sensei.com's liability for damages arising from your use of the Service.",
            "asIsService": {
              "title": "12.1. AS IS Service",
              "description": "The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. Ouchi-Sensei.com expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement."
            },
            "noGuarantee": {
              "title": "12.2. No Guarantee",
              "items": {
                "requirements": "The Service will meet your requirements or expectations.",
                "uninterrupted": "The Service will be uninterrupted, timely, secure, or error-free.",
                "results": "The results that may be obtained from the use of the Service (such as finding Students) will be accurate, reliable, or guaranteed.",
                "quality": "The quality of any products, services, information, or other material obtained by you through the Service will meet your expectations.",
                "errors": "Any errors in the software will be corrected."
              }
            },
            "userInteractions": {
              "title": "12.3. User Interactions",
              "description": "You are solely responsible for your interactions and agreements with Students. Ouchi-Sensei.com is not responsible for the conduct, whether online or offline, of any user of the Service (including Teachers and Students). We do not conduct background checks on Students."
            },
            "limitationOfLiability": {
              "title": "12.4. Limitation of Liability",
              "items": {
                "access": "Your access to or use of or inability to access or use the Service.",
                "thirdPartyConduct": "Any conduct or content of any third party on the Service, including without limitation, any defamatory, offensive, or illegal conduct of other users or third parties.",
                "content": "Any content obtained from the Service.",
                "unauthorizedAccess": "Unauthorized access, use, or alteration of your transmissions or content.",
                "disputes": "Any disputes or issues arising between you and a Student."
              }
            },
            "maxLiability": {
              "title": "12.5. Maximum Liability",
              "description": "Notwithstanding anything to the contrary contained herein, our total liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to Ouchi-Sensei.com for the Service during the three (3) months prior to the event giving rise to the liability, or one hundred Yen (¥100), if no such payments have been made."
            },
            "jurisdictionalExceptions": {
              "title": "12.6. Jurisdictional Exceptions",
              "description": "Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you."
            }
          },
          "section13": {
            "title": "13. Indemnification",
            "description": "This section explains your agreement to cover any losses or damages Ouchi-Sensei.com might incur due to your use of the Service or violation of these terms.",
            "content": "You agree to indemnify, defend, and hold harmless Ouchi-Sensei.com and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from: (a) your use of the Service; (b) your User Content; (c) your violation of this Agreement; (d) your violation of any rights of another, including any Student; or (e) your violation of any applicable laws, rules, or regulations. Ouchi-Sensei.com reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with Ouchi-Sensei.com in asserting any available defenses."
          },
          "section14": {
            "title": "14. Modification of Terms",
            "description": "This section describes Ouchi-Sensei.com's right to change these Terms of Use, how modifications will be communicated, and how your continued use signifies acceptance of changes.",
            "rightToModify": {
              "title": "14.1. Right to Modify",
              "description": "Ouchi-Sensei.com reserves the right, at its sole discretion, to modify or replace any part of this Agreement at any time."
            },
            "notification": {
              "title": "14.2. Notification",
              "description": "We will provide notice of any significant changes to this Agreement by posting the revised Agreement on the Ouchi-Sensei.com website and updating the \"Last Updated\" date at the top of this Agreement. We may also, but are not obligated to, send a notification to your registered email address."
            },
            "effectiveDate": {
              "title": "14.3. Effective Date",
              "description": "The modified Agreement will become effective from the date it is posted on the Ouchi-Sensei.com website."
            },
            "acceptance": {
              "title": "14.4. Acceptance of Modifications",
              "description": "Your continued use of or access to the Service following the posting of any changes to this Agreement constitutes acceptance of those changes. If you do not agree to the new terms, you must stop using the Service. It is your responsibility to check this Agreement periodically for changes."
            }
          },
          "section15": {
            "title": "15. Governing Law and Jurisdiction",
            "description": "This section specifies that Japanese law governs this Agreement and that legal disputes will be handled in Tokyo courts.",
            "law": "This Agreement and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of Japan, without regard to its conflict of law provisions.",
            "jurisdiction": "You agree that any legal action or proceeding between you and Ouchi-Sensei.com arising out of or relating to this Agreement or the Service shall be brought exclusively in the Tokyo District Court in Tokyo, Japan, and you hereby consent to the personal jurisdiction and venue in such courts."
          },
          "section16": {
            "title": "16. Severability",
            "description": "This section explains that if one part of the Agreement is found to be unenforceable, the rest of the Agreement remains valid.",
            "content": "If any provision of this Agreement is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Agreement will continue in full force and effect."
          },
          "section17": {
            "title": "17. Entire Agreement",
            "description": "This section states that these Terms of Use, along with the Privacy Policy, represent the complete understanding between you and Ouchi-Sensei.com regarding the Service.",
            "content": "This Agreement, together with our Privacy Policy (which is incorporated herein by reference), constitutes the entire agreement between you and Ouchi-Sensei.com with respect to your use of the Service as a Language Teacher and supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between you and Ouchi-Sensei.com with respect to the Service."
          },
          "section18": {
            "title": "18. No Waiver",
            "description": "This section clarifies that if Ouchi-Sensei.com doesn't enforce a part of this Agreement, it doesn't mean we waive our right to enforce it later.",
            "content": "No waiver by Ouchi-Sensei.com of any term or condition set forth in this Agreement shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Ouchi-Sensei.com to assert a right or provision under this Agreement shall not constitute a waiver of such right or provision."
          },
          "section19": {
            "title": "19. Assignment",
            "description": "This section explains that you cannot transfer your rights or obligations under this Agreement without our consent, but Ouchi-Sensei.com can.",
            "content": "You may not assign or transfer this Agreement (or any of your rights or obligations under this Agreement) without Ouchi-Sensei.com's prior written consent. Any attempted assignment or transfer without complying with the foregoing will be void. Ouchi-Sensei.com may freely assign or transfer this Agreement. This Agreement inures to the benefit of and is binding upon the parties and their respective legal representatives, successors, and assigns."
          },
          "section20": {
            "title": "20. Contact Information",
            "description": "This section provides information on how to contact Ouchi-Sensei.com for questions regarding this Agreement.",
            "content": "If you have any questions about this Agreement, please contact us at:",
            "contactLink": "Contact Us Form",
            "email": "(or email: support@ouchisensei.com)"
          },
          "footer": {
            "terms": "Terms of Use",
            "company": "Company",
            "contact": "Contact Us",
            "copyright": "© {year} Ouchi Sensei. All rights reserved."
          }
        }
      
    },
  },
  ja: {
    translation: {
      hero_title: "外国人の先生を自分で探す！",
      hero_subtitle: "システム利用料3,300円のみ！",
      hero_description: "16ヶ国語以上対応！地域、年齢、性別でお近くのカフェやオンラインで、理想のネイティブ先生を探してマンツーマンレッスン。",
      hero_language_label: "レッスン言語",
      hero_language_placeholder: "学びたい言語を選択",
      hero_area_label: "レッスン地域",
      hero_area_placeholder: "例: 東京都、新宿駅、オンライン",
      hero_search_button: "今すぐ簡単検索",
      hero_meta: "登録講師数XXXX人以上！ 安心の個人契約で低価格レッスン",
      features_title: "おうち先生ドットコムが選ばれる3つの理由",
      features_1_title: "豊富な言語と講師陣",
      features_1_desc: "英語はもちろん、アジアやヨーロッパの言語まで16ヶ国語以上に対応。経験豊かなネイティブ講師やバイリンガル講師が多数登録しています。",
      features_2_title: "自由なレッスンスタイル",
      features_2_desc: "カフェでの対面レッスン、ご自宅への家庭教師、またはオンラインレッスンなど、あなたのライフスタイルに合わせて場所と時間を選べます。",
      features_3_title: "リーズナブルな料金体系",
      features_3_desc: "入会金・年会費は無料！レッスン料は講師と直接交渉なので、質の高いマンツーマンレッスンを低価格で受講可能です。",
      map_title: "お近くの先生を地図から探す",
      map_subtitle: "日本全国47都道府県、あなたの街にもきっと良い先生がいます。",
      new_teachers_title: "新しく登録した先生",
      teacher_profile_button: "プロフィールを見る",
      more_teachers_button: "もっと先生を探す",
      howto_title: "おうち先生ドットコム 簡単ご利用ステップ",
      howto_1_title: "先生を探す",
      howto_1_desc: "学びたい言語やエリア、キーワードで希望の先生を検索します。",
      howto_2_title: "プロフィール確認",
      howto_2_desc: "先生の経歴、料金、口コミなどをチェックして、気になる先生を見つけます。",
      howto_3_title: "連絡する",
      howto_3_desc: "システム利用料をお支払い後、先生に直接連絡を取り、レッスンの詳細を相談・決定します。",
      howto_4_title: "レッスン開始！",
      howto_4_desc: "カフェやオンラインなど、決めた場所と時間にレッスンをスタート！",
      howto_guide_button: "詳しいご利用ガイドはこちら",
      service_title: "おうち先生ドットコムで理想の語学レッスンを始めよう",
      service_1_title: "自分のペースで学べるマンツーマンレッスン",
      service_1_desc: "おうち先生ドットコムは、あなたの希望にぴったりの語学講師を見つけるためのプラットフォームです。日本全国、47都道府県で、英語・英会話をはじめ、中国語、韓国語、フランス語など、16以上の言語に対応した先生を検索できます。大手英会話スクールで教えている先生や、教師経験豊富な先生も多数登録。日常会話からビジネスシーン、資格試験対策まで、あなたのレベルと目的に合わせたパーソナルレッスンが実現します。",
      service_2_title: "直接交渉でリーズナブルに",
      service_2_desc: "レッスン内容やスケジュール、料金はすべて先生と直接相談して決められます。そのため、一般的な語学学校のような高額な初期費用や教材費はかかりません。カフェやオンラインなど、リラックスできる環境で、質の高いレッスンをお得に受けられるのが大きな魅力です。新しい先生も続々登録中！あなたの「学びたい」を全力でサポートします。",
      service_links_languages: "対応言語から探す",
      service_links_area: "エリアから探す",
      service_links_online: "オンラインレッスン対応の先生を探す",
      notes_title: "ご利用にあたっての注意点",
      notes_desc: "当サイトは語学レッスンを目的とした個人のマッチングプラットフォームです。講師の斡旋や人材派遣サービスではありません。先生とのやり取りやレッスン契約は、ご自身の責任において行っていただきます。初めてご利用の方は、必ず「よくある質問」と「ご利用規約」をご確認ください。",
      pricing_cta_title: "低料金で始める、ネイティブ講師とのマンツーマンレッスン",
      pricing_cta_desc: "英会話スクールの高額な費用に疑問を感じていませんか？おうち先生ドットコムなら、入会金・年会費は一切不要。先生の連絡先を入手するためのシステム利用料のみで、あとは講師と直接レッスン料を交渉。驚くほどリーズナブルに、あなたのペースで質の高いレッスンを始められます。",
      pricing_cta_fee_label: "システム利用料 (連絡先入手時のみ)",
      pricing_cta_fee_note: "※入会金・月会費は一切無料",
      pricing_cta_fee_price: "3,300円 <span class=\"tax-note\">(税込3,630円)</span>",
      pricing_cta_search_button: "今すぐあなたにぴったりの先生を検索！",
      pricing_cta_more: "料金についてもっと詳しく",
      about_teachers_title: "どんな先生が登録しているの？",
      about_teachers_1: "おうち先生ドットコムには、日本国内在住の多様なバックグラウンドを持つネイティブおよびノンネイティブの講師が登録しています。レッスン言語を母国語とする外国人講師が中心ですが、国際的な環境で育ったバイリンガル講師や、海外生活経験の長い日本人講師も活躍中です。",
      about_teachers_2: "ALT（外国語指導助手）や大手英会話スクールでの指導経験を持つプロフェッショナルな講師から、フレンドリーで話しやすい学生講師まで、様々なタイプの先生があなたを待っています。全ての先生が、プロフィールを通じて自身のスキルや経験を公開し、熱意を持って生徒さんを探しています。",
      about_teachers_register: "講師として登録したい方はこちら",
      more_info_title: "おうち先生ドットコムをもっと知る",
      more_info_guide: "使い方ガイド",
      more_info_faq: "よくある質問",
      more_info_fees: "ご利用料金",
      more_info_search: "今すぐ先生を探す",
      benefits_title: "おうち先生ドットコムがあなたに最適な理由",
      benefits_1: "入会金・月額/年会費は一切無料！",
      benefits_2: "低料金で質の高いマンツーマンレッスンを実現",
      benefits_3: "経験豊富で質の高い講師を、他の生徒さんの評価で確認可能",
      benefits_4: "運営による定期的なプロフィールチェックで安心",
      benefits_5: "好きな時間に好きな場所で、フレキシブルに学べる",
      benefits_6: "専用アプリ不要！ウェブサイトで簡単検索",
      benefits_search_button: "さっそく先生を探してみる",
      fit_title: "こんな方にピッタリ！",
      fit_1: "語学スクールの高額な費用を避けたい方",
      fit_2: "自分で先生とコミュニケーションを取り、格安でレッスンを受けたい方",
      fit_3: "カフェや自宅、オンラインなど自由なスタイルで学びたい方",
      fit_4: "対面での実践的な会話練習を重視する方",
      fit_5: "旅行やビジネス、資格取得など明確な目的がある方",
      not_fit_title: "もしかしたら不向きかも…",
      not_fit_1: "手厚いカウンセリングや固定カリキュラムを望む方",
      not_fit_2: "先生との直接のやり取りを避けたい方",
      not_fit_3: "Web操作やメール連絡が苦手な方",
      fit_faq: "利用が不安な方はFAQもご確認ください",
      language_list_title: "学びたい言語から先生を探す",
      // Language names
      lang_english: "英語",
      lang_chinese_mandarin: "中国語(北京語)",
      lang_korean: "韓国語",
      lang_french: "フランス語",
      lang_german: "ドイツ語",
      lang_italian: "イタリア語",
      lang_portuguese: "ポルトガル語",
      lang_russian: "ロシア語",
      lang_thai: "タイ語",
      lang_vietnamese: "ベトナム語",
      lang_indonesian: "インドネシア語",
      lang_burmese: "ビルマ語",
      lang_tagalog: "タガログ語",
      lang_taiwanese: "台湾語",
      lang_arabic: "アラビア語",
      logo_alt: "おうち先生ドットコム",
      nav_find_teachers: "先生を探す",
      nav_first_time_users: "はじめての方へ",
      nav_about_fees: "料金について",
      nav_usage_flow: "ご利用の流れ",
      nav_example_email: "メール文例（英語）",
      nav_faq: "よくある質問",
      nav_teacher_site: "講師向けサイト",
      nav_contact: "お問い合わせ",
      nav_my_teacher_cart: "マイ先生カート",
      nav_login: "ログイン",
      nav_usage_fees: "ご利用料金",
      nav_usage_flow_mobile: "ご利用の流れ",
      nav_example_email_lesson: "メール文例（レッスン依頼）",
      // Footer
      footer_title: "おうち先生ドットコム",
      footer_description: "あなたにぴったりの外国語講師を見つけて、マンツーマンレッスンを始めましょう。",
      footer_sitemap: "サイトマップ",
      footer_top: "トップ",
      footer_find_teacher: "先生を探す",
      footer_fees: "料金について",
      footer_usage_flow: "ご利用の流れ",
      footer_sample_email: "メール文例（英語）",
      footer_support: "サポート",
      footer_faq: "よくある質問",
      footer_contact: "お問い合わせ",
      footer_teacher_register: "Teacher Register",
      footer_operator_info: "運営者情報",
      footer_company: "運営会社",
      footer_tokutei: "特定商取引法に基づく表記",
      footer_terms: "利用規約",
      footer_privacy: "プライバシーポリシー",
      footer_copyright: "© 2025 おうち先生ドットコム. All Rights Reserved.",
      aboutfees: {
        hero_title: "あなたにぴったりのネイティブ先生と、",
        hero_subtitle: "お得にマンツーマンレッスン",
        hero_desc: "語学学習を始めたいあなたを応援する、明確でリーズナブルな料金システムをご提供します",
        why_affordable_title: "なぜ、こんなにお得なの？",
        no_membership_fee_title: "入会金・年会費・月会費",
        no_membership_fee_highlight: "一切無料！",
        no_membership_fee_desc: "必要なのは、素晴らしい先生と繋がるためのシステム利用料だけ。高額な初期費用や継続的な支払いに悩むことなく、安心して語学学習をスタートできます。",
        direct_platform_title: "先生と生徒を",
        direct_platform_highlight: "直接つなぐ",
        direct_platform_after_highlight: "プラットフォーム",
        direct_platform_desc: "私たちは、先生と生徒さんが直接つながるプラットフォームを提供することで、余計なコストを徹底的に排除。だからこそ、この低価格で質の高い出会いを実現できるのです。",
        simple_plan_title: "シンプルだから選びやすい",
        system_fee_title: "システム利用料",
        system_fee_desc: "先生の連絡先入手料",
        system_fee_price: "3,300",
        system_fee_yen: "円",
        system_fee_tax: "(税込 3,630円)",
        system_fee_feature1: "最大5名までの先生の連絡先",
        system_fee_feature2: "人数に関わらず一律料金",
        system_fee_feature3: "入会費・年会費・月会費は無料",
        cta_find_teacher_now: "今すぐ先生を探し始める",
        cta_find_teacher_page: "先生検索ページへ",
        system_fee_note_strong: "【ご確認ください】",
        system_fee_note: "上記はプラットフォームのシステム利用料です。先生へのレッスン料は、別途先生に直接お支払いいただきます。レッスン料は先生ごとに異なりますので、各先生のプロフィールページで詳細をご確認ください。レッスン開始前に、先生と直接条件等をご確認ください。",
        payment_methods_title: "お支払い方法",
        payment_methods_subtitle: "（安全・簡単な決済）",
        stripe_title: "Stripe（ストライプ）",
        stripe_easy_title: "簡単・安全・スピーディー！",
        stripe_easy_desc1: "クレジットカード情報を当サイトに伝えることなく、安全にお支払いが完了します。",
        stripe_easy_desc2: "Stripeアカウントをお持ちでない方も、主要クレジットカードで簡単にお支払い可能です。",
        stripe_benefit: "決済完了後、土日祝日に関わらず24時間すぐに先生の連絡先をご確認いただけます。",
        stripe_what_is: "Stripe（ストライプ）とは？",
        receipt_title: "領収書について",
        receipt_desc1: "おうち先生ドットコムでは、独自の領収書は発行しておりません。",
        receipt_desc2: "お支払い方法に応じて、以下が正式な領収書としてご利用いただけます。",
        receipt_stripe_title: "Stripe（クレジットカード）の場合",
        receipt_stripe_desc: "クレジットカード会社発行の「ご利用明細書」、または決済時にStripeから送信される「受領書（メール）」をご利用ください。",
        support_title: "安心のサポート体制",
        support_subtitle: "万が一、レッスンが決まらなくても大丈夫！",
        support_desc1: "お申し込み後、選択した全ての先生に連絡を取ったにも関わらず、体験レッスン（初回レッスン）の調整がつかなかった場合、ご安心ください。",
        support_desc2: "お申し込み日より60日間は、追加料金なしで他の先生の連絡先を追加提供させていただきます。",
        support_desc3_1: "このような場合は、お気軽に当サイトの",
        support_desc3_link: "「お問い合わせフォーム」",
        support_desc3_2: "よりご連絡ください。",
        important_notes_title: "ご利用前に必ずご確認ください（重要事項）",
        important_notes_1_title: "1. サービス内容について",
        important_notes_1_desc1: "当サービスは、生徒と先生をつなぐオンラインプラットフォームの提供を目的としています。人材斡旋・派遣サービス、オンライン語学教室の運営、先生の紹介・仲介サービスとは異なり、登録されている先生方との間で直接的な雇用契約や業務委託契約等は一切ございません。",
        important_notes_1_desc2_1: "初めてご利用になる場合は特に、ご希望のサービス内容と当サイトのサービス内容に相違がないか、必ず",
        important_notes_1_desc2_link1: "「よくあるご質問（FAQ）」",
        important_notes_1_desc2_2: "ページおよび",
        important_notes_1_desc2_link2: "「ご利用規約」",
        important_notes_1_desc2_3: "ページを事前に全てご確認ください。",
        important_notes_2_title: "2. レッスン等の確約について",
        important_notes_2_desc1: "本サービスは、ご希望条件に完全に合致するレッスンが見つかること、レッスン依頼メールに対する先生からの返信があること、または連絡先を入手した全ての先生とのレッスンが成立することを保証するものではありません。先生とのコミュニケーションはお客様ご自身で積極的に行っていただく必要がございます。",
        important_notes_3_title: "3. お申し込み後の変更・キャンセルについて",
        important_notes_3_desc1: "お申し込み完了後、お客様都合による先生の変更（追加を含む）やキャンセルは原則として承っておりません。",
        important_notes_3_desc2: "デジタルコンテンツというサービスの性質上、一度お支払いいただいたシステム利用料のご返金は、理由の如何を問わず承っておりません。あらかじめご了承ください。",
        important_notes_4_title: "4. 連絡先の有効期限・メールについて",
        important_notes_4_desc1_1: "入手した先生の連絡先は、お客様のマイアカウント内「入手した先生の連絡先」ページにて、お申し込み日より",
        important_notes_4_desc1_strong: "30日間",
        important_notes_4_desc1_2: "ご確認いただけます。",
        important_notes_4_desc2: "稀に、特定のメールアドレス間（例：Yahoo!メール、OCNメールなど）でメールの送受信が正常に行えない場合がございます。その場合は、お手数ですが別のメールアドレスから先生にご連絡をお試しください。このようなメールの送受信トラブルに関しましては、当サイト側での個別対応は致しかねます。",
        final_cta_title1: "さあ、あなたにぴったりの先生を見つけて、",
        final_cta_title2: "新しい語学体験を始めましょう！",
        final_cta_desc: "ご不明な点がございましたら、「よくあるご質問（FAQ）」をご覧ください。",
        final_cta_button: "今すぐ先生を探す！",
        final_cta_link: "よくあるご質問（FAQ）を見る",
        AboutFeesHeader: "ご利用料金",
      },
      courseflow: {
        // Header
        header_title: "ご利用の流れ",
        header_desc_1: "豊富な経験を持つネイティブスピーカーやバイリンガルの先生と、オンラインまたは対面で、あなたのペースでレッスンを始めませんか？",
        header_desc_2: "ここでは、理想の先生を見つけてレッスンを開始するまでの簡単な6つのステップをご紹介します。",
        // Hero
        hero_title: "さあ、先生探しの旅へ！",
        hero_subtitle: "あなたにぴったりの先生が、きっと見つかります",
        hero_btn: "今すぐ先生を探す",
        hero_img_alt: "楽しそうにタブレットでオンライン外国語レッスンを受ける日本人女性と、画面越しの笑顔の外国人講師",
        // Notice
        notice_title: "【！】ご利用前に必ずご確認ください",
        notice_desc_1: "おうち先生ドットコムは、生徒と先生をつなぐオンラインプラットフォームです。私たちは場所や機会を提供しますが、人材派遣・斡旋や先生の紹介を行うサービスではありません。",
        notice_desc_2: "先生との契約やレッスンの詳細は、すべてご自身で直接交渉・決定していただきます。",
        notice_desc_3: "ご利用を開始する前に、必ず以下のページを全てご確認ください。",
        notice_faq: "よくある質問 (FAQ)",
        notice_terms: "ご利用規約",
        // Steps
        steps_title: "カンタン6ステップ！ご利用の流れ",
        step_1_title: "STEP 1: 先生を探す",
        step_1_img_alt: "虫眼鏡で先生のプロフィールを探しているシンプルなイラスト",
        step_1_desc_1: "まずは、",
        step_1_link: "先生検索ページ",
        step_1_desc_2: "であなたの希望に合う先生を探しましょう。",
        step_1_point: "ポイント:",
        step_1_point_desc: "言語、レベル、場所、オンライン/対面などの条件で絞り込めます。",
        step_1_hint: "ヒント:",
        step_1_hint_desc: "条件を変えて何度か検索してみると、思わぬ素敵な先生に出会えるかもしれません。",
        step_2_title: "STEP 2: 気になる先生をカートに入れる",
        step_2_img_alt: "ショッピングカートに先生の写真が入っているシンプルなイラスト",
        step_2_desc: "先生のプロフィールをチェック！レッスン方針や自己紹介、生徒からのレビューなどを参考にしましょう。",
        step_2_point: "ポイント:",
        step_2_point_desc: "プロフィール上部の「最終更新日」が新しい先生は、積極的に生徒を探している可能性が高く、おすすめです。",
        step_2_action: "アクション:",
        step_2_action_desc: "「マイ先生カートへ追加」ボタンをクリック！複数の先生を比較検討できます。",
        step_3_title: "STEP 3: 連絡先入手を申し込む",
        step_3_img_alt: "パソコンの画面に会員登録フォームが表示されているシンプルなイラスト",
        step_3_desc: "カートページから申し込み手続きへ進みます。",
        step_3_first: "初めての方:",
        step_3_first_desc: "アカウント情報と登録者情報を入力してください。",
        step_3_registered: "登録済みの方:",
        step_3_registered_desc: "ログインしてください。",
        step_3_note: "注意:",
        step_3_note_desc_1: "携帯メールアドレス（docomo, au, softbankなど）をご利用の場合、",
        step_3_note_desc_2: "（例）からのメールを受信できるよう設定をご確認ください。特定の形式のメールアドレスは登録できない場合があります。",
        step_4_title: "STEP 4: 連絡先を入手する (お支払い)",
        step_4_img_alt: "クレジットカードと銀行のアイコンが並んでいるシンプルなイラスト",
        step_4_desc: "入力情報を確認し、利用規約に同意したら、お申し込みを確定します。",
        step_4_payment: "お支払い方法:",
        step_4_payment_stripe: "Stripe（ストライプ）: 24時間いつでも、すぐにご確認いただけます。",
        step_4_confirm: "確認方法:",
        step_4_confirm_desc_1: "お支払い完了後、マイアカウント内の「",
        step_4_confirm_link: "入手した先生の連絡先",
        step_4_confirm_desc_2: "」ページから30日間確認可能です。",
        step_5_title: "STEP 5: 先生に連絡する",
        step_5_img_alt: "メールの封筒が飛んでいるシンプルなイラスト",
        step_5_desc: "いよいよ先生とのコンタクト開始！入手した連絡先（主にメールアドレス）宛に、レッスン依頼のメールを送りましょう。",
        step_5_point: "ポイント:",
        step_5_point_sample: "初めて先生へ連絡する際のサンプルメール",
        step_5_point_sample_desc: "もご活用ください。",
        step_5_point_subject: "件名には「おうち先生ドットコムから」と明記するとスムーズです。",
        step_5_point_language: "外国籍の先生には、英語またはレッスン希望言語で連絡しましょう。",
        step_5_negotiation: "交渉:",
        step_5_negotiation_desc: "レッスン場所、日時、費用などを先生と直接話し合って決めます。",
        step_5_note: "注意:",
        step_5_note_link: "お問い合わせフォーム",
        step_5_note_desc: "からご連絡ください。（3日経っても返信がない場合）",
        step_6_title: "STEP 6: 初回レッスンを受ける",
        step_6_img_alt: "二人の人物が握手しているシンプルなイラスト",
        step_6_desc: "事前に決めた内容で、初回レッスンを受けます。",
        step_6_place: "場所:",
        step_6_place_desc: "初回はカフェなど、公共の場が原則です。安全のため、ご自宅でのレッスン依頼は慎重に（特に異性の先生の場合）。",
        step_6_fee: "レッスン料:",
        step_6_fee_desc_1: "レッスン終了後に",
        step_6_fee_desc_2: "都度払い",
        step_6_fee_desc_3: "を徹底しましょう。前払いは避け、毎回レッスン後に支払うことで、金銭トラブルを防ぎましょう。",
        step_6_continue: "継続:",
        step_6_continue_desc: "レッスンが気に入ったら、今後のスケジュールなどを先生と相談し、本レッスンを依頼します。",
        // Tips
        tips_title: "先生とスムーズに進める3つのコツ",
        tips_1_title: "丁寧な初回連絡:",
        tips_1_desc_1: "自己紹介と学習目的を明確に伝えましょう。（",
        tips_1_link: "サンプルメール",
        tips_1_desc_2: "参照）",
        tips_2_title: "条件は明確に:",
        tips_2_desc: "レッスン料、時間、場所、キャンセルルールは、メールなど記録に残る形で確認しましょう。",
        tips_3_title: "安全第一:",
        tips_3_desc_1: "初回レッスンは公共の場で。レッスン料は",
        tips_3_desc_2: "都度払い",
        tips_3_desc_3: "を徹底しましょう。",
        // FAQ
        faq_title: "よくあるご質問 (FAQ)",
        faq_img_alt: "大きなクエスチョンマークと吹き出しのQ&Aアイコン",
        faq_1_q: "支払い方法は？",
        faq_1_a: "銀行振込とPayPal（ペイパル）がご利用いただけます。PayPalなら即時に連絡先を確認できるためおすすめです。",
        faq_2_q: "先生から返信がきません。",
        faq_2_a_1: "3日以上返信がない場合は、先生のIDまたはお名前、メール送信日などを添えて",
        faq_2_a_link: "お問い合わせフォーム",
        faq_2_a_2: "よりご連絡ください。再度連絡を取るか、別の先生を探すことを検討しましょう。",
        faq_3_q: "レッスン料以外に必要な費用はありますか？",
        faq_3_a: "当サイトへのお支払いは、先生の連絡先入手料金のみです。レッスン料や、カフェでのレッスン時のご自身の飲食代、交通費などは別途必要となり、先生と直接ご相談いただきます。",
        faq_4_q: "オンラインレッスンは可能ですか？",
        faq_4_a: "はい、多くの先生がオンラインレッスンに対応しています。検索時に「オンライン」で絞り込むか、先生のプロフィールをご確認ください。",
        faq_5_q: "先生との間でトラブルが起きたら？",
        faq_5_a_1: "当サイトは個人間の契約には介入できません。トラブルを避けるためにも、事前に",
        faq_5_a_link: "ご利用規約",
        faq_5_a_2: "をよく読み、レッスン条件（料金、場所、時間、キャンセルポリシーなど）を先生と書面（メールなど記録に残る形）で確認しておくことを強くお勧めします。",
        faq_more: "もっとFAQを見る...",
        // Final CTA
        final_cta_title: "さあ、あなただけの先生を見つけよう！",
        final_cta_desc: "準備はできましたか？ 世界への扉を開く、新しい学びの旅を始めましょう！",
        final_cta_btn: "今すぐ先生を探す"
      },
      sampleemail: {
        // Japanese Section
        title_jp: "英語・日本語メールテンプレート集",
        subtitle_jp: "先生・生徒間の連絡をスムーズに！",
        intro_jp1: "外国人講師との語学レッスン、または日本人学習者とのレッスンを始める際、丁寧で分かりやすいコミュニケーションは信頼関係を築くための第一歩です。このページでは、レッスンに関する様々な状況で使える英語と日本語のメールテンプレートを、インタラクティブな形式でご用意しました。",
        intro_jp2: "各テンプレートは簡単に言語を切り替えたり、内容をコピーしたりすることができます。これらのテンプレートを参考に、あなた自身の言葉を加えて、心のこもったメッセージを作成しましょう。",
        // English Section
        title_en: "English/Japanese Email Template Collection",
        subtitle_en: "Smooth communication between teachers and students!",
        intro_en1: "When starting a language lesson with a foreign teacher or with a Japanese learner, polite and clear communication is the first step in building a trusting relationship. On this page, we have prepared an interactive email template in English and Japanese that you can use in a variety of lesson-related situations.",
        intro_en2: "Each template allows you to easily switch languages and copy content. Use these templates as a guide and add your own words to create a heartfelt message.",
        // Manners Section
        manners_title: "メールテンプレートを使う上での基本マナー",
        manners_subject_title: "件名 (Subject Line)",
        manners_subject_desc: "一目で内容がわかるように具体的に記載しましょう。プラットフォーム名（例：おうち先生）やご自身の名前を入れると、相手に分かりやすくなります。",
        manners_subject_jp_label: "日本語例：",
        manners_subject_jp: "【おうち先生より】〇〇（あなたの名前）より初回レッスンのお願い",
        manners_subject_en_label: "英語例：",
        manners_subject_en: "Lesson Request from [Your Name] via Ouchi Sensei",
        manners_polite_title: "丁寧な言葉遣い (Polite Language)",
        manners_polite_desc: "相手に敬意を払い、丁寧な言葉を選びましょう。特に依頼や交渉の際は、相手の立場を尊重する表現を心がけることが重要です。過度な要求や一方的な表現は避けましょう。",
        manners_response_title: "返信の目安 (Response Time)",
        manners_response_desc: "先生も生徒も、様々な事情ですぐに返信できない場合があります。一般的に24時間から48時間程度は返信を待つのがマナーとされています。数日経っても返信がない場合は、迷惑メールフォルダを確認後、再度丁寧な言葉で連絡してみましょう。",
        // For Students Section
        for_students_title: "【生徒向け】先生への連絡メールテンプレート集",
        for_students_desc: "先生への最初の連絡から、レッスン条件の相談、お礼まで、様々なシチュエーションで使えるテンプレートです。各項目をクリックして内容を確認し、ご活用ください。",
        // For Teachers Section
        for_teachers_title: "【先生向け】生徒への連絡メールテンプレート集",
        for_teachers_title_en: "（Template collection of contact e-mail messages to students for teachers）",
        for_teachers_desc: "生徒からの連絡への返信や、レッスンに関する確認事項など、先生が生徒と円滑にコミュニケーションを取るためのテンプレートです。",
        for_teachers_desc_en: "（This template is used for teachers to communicate smoothly with students, such as replying to student communications and confirming lesson-related information.）",
        // Important Notes Section
        important_notes_title: "メール送信時の重要注意事項",
        important_notes_main: "当サービスはオンラインプラットフォームのご提供のみとなり、人材派遣・斡旋業や先生紹介サービスのようなもではありません。",
        important_notes_check1: "初めてのご利用の場合には、必ずご利用前に",
        important_notes_faq: "よくある質問 FAQ",
        important_notes_check2: "ページと",
        important_notes_terms: "ご利用規約",
        important_notes_check3: "ページを全てご確認ください。",
        important_notes_li1: "外国籍の先生へ初めてレッスンを依頼する際には英語またはその他のレッスン言語でメールを送信してください。",
        important_notes_li2: "レッスン依頼メールの件名には、おうち先生ドットコムを利用していることが先生にわかるように記載してください。",
        important_notes_li3a: "OCNメールアドレス",
        important_notes_li3b: "や",
        important_notes_li3c: "niftyメールアドレス",
        important_notes_li3d: "をお使いの方はご注意ください。特に外国籍の先生がお使いのメールアドレスとの間で、送信されたはずのメールが相手側には届かないということがかなり頻繁に起こるようです。",
        important_notes_li4a: "Yahoo Japanメールアドレス",
        important_notes_li4b: "より送信されたメールが届かないというケースも報告されています（2016年10月時点の情報に基づく記載あり）。",
        important_notes_li5a: "携帯メールアドレス",
        important_notes_li5b: "から送信されているメールには返信できないことがあるというご連絡を先生方よりいただくことがあります。PCメールアドレスからの受信拒否設定にご注意ください。",
        // FAQ Section
        faq_title: "よくある質問（FAQ）",
        faq_desc: "メールのやり取りやテンプレート利用に関して、よく寄せられる質問とその回答です。",
        faq_q1: "メールを送りましたが、先生/生徒から返信がありません。どうすればいいですか？",
        faq_a1: "返信には24～48時間程度かかる場合があります。数日待っても返信がない場合は、まず迷惑メールフォルダをご確認ください。それでも見当たらない場合は、再度丁寧な言葉遣いで連絡してみましょう。プラットフォームによっては、相手の最終ログイン日時などが確認できる場合もあります。あまりにも長期間返信がない場合は、他の先生/生徒を探すこともご検討ください。",
        faq_q2: "料金や条件の交渉は、必ず応じてもらえますか？",
        faq_a2: "交渉はあくまで「相談」であり、必ずしも全ての先生/生徒が応じられるわけではありません。提示されている条件は、先生/生徒が様々な要素を考慮して設定したものです。相手の状況を尊重し、丁寧にお願いすることが大切です。もし交渉が難しい場合でも、その旨を丁寧に伝えてくれるはずです。",
        faq_q3: "テンプレートはそのまま使ってもいいですか？",
        faq_a3: "はい、テンプレートは自由にご利用いただけます。ただし、よりパーソナルで心のこもったメッセージにするために、ご自身の言葉や状況に合わせて適宜修正することをおすすめします。特に、お名前や具体的な希望日時、学習目的などを具体的に記述することで、よりスムーズなコミュニケーションに繋がります。",
        // Related Links Section
        related_links_title: "関連リンク",
        related_links_find_teacher: "先生を探す",
        related_links_teacher_register: "Teacher Register",
        related_links_terms: "ご利用規約",
        related_links_faq: "よくある質問 FAQ",
      },
      faq: {
        page_title: "よくあるご質問",
        page_desc: "おうち先生ドットコムのご利用に関する疑問や不安を解決し、安心して外国語学習を始めていただけるようサポートします。",
        category_service: "サービス全般について",
        category_fees: "料金・お支払いについて",
        category_teacher_lesson: "先生・レッスンについて",
        category_usage: "登録・ご利用方法について",
        category_troubleshooting: "トラブルシューティング・その他",
        category_service_img_alt: "ノートパソコンでオンラインレッスンを受けている人と、対面で会話する人のイラストのプレースホルダー",
        answer_label: "A:",
        important_note: "おうち先生ドットコムは人材派遣・人材斡旋・先生紹介サービスなどではありません。",
        important_note2: "おうち先生ドットコムでは、登録されている先生との間に雇用関係や契約などは設けておらず、オンラインプラットフォームのご提供のみがサービス内容となっております。",
        terms_link: "ご利用規約",
        contact_link: "お問い合わせフォーム",
        sample_email_link: "初めて先生へ連絡する場合の英文サンプルメール",
        price_link: "【ご利用料金】ページ",
        negotiation_sample_link: "先生と相談・交渉したいときの英文サンプルメール",
        contact_form_link: "お問い合わせフォーム",
        privacy_policy_link: "プライバシーポリシー",
        my_account_link: "入手した先生の連絡先(※ログインが必要です)",
        search_link: "先生を探す",
        contact_page_link: "お問い合わせ",
        
        // Service Category Questions
        q1: "このサイトと先生の紹介サービスや派遣サービスとの違いは何ですか？",
        a1: "おうち先生ドットコムは人材派遣・人材斡旋・先生紹介サービスなどではありません。おうち先生ドットコムでは、登録されている先生との間に雇用関係や契約などは設けておらず、オンラインプラットフォームのご提供のみがサービス内容となっております。語学生徒をお探しの先生が、ご自身でプロフィールを掲載することのできるオンラインプラットフォームのみを当サイトにてご用意させていただいており、レッスンに関することはご利用者様（生徒）と先生との間のみで個人的におこなっていただいております。ご利用者様（生徒）には先生へ直接連絡を取っていただくことにより低料金での先生探しを実現するためのサービスです。※初めてのご利用の場合には、ご希望のサービス内容と当サービス内容との間に相違がないように必ずご利用前にご利用規約もご確認ください。また、当サービス内容にご不明点などがございましたら、ご利用前にお問い合わせフォームよりお問い合わせください。",
        
        q2: "語学レッスン以外の目的でこのサイトを利用できますか？",
        a2: "申し訳ございません。語学レッスン以外の目的でのご利用は固くお断りしております。通訳や翻訳の依頼、ビジネスパートナー探し、個人的な出会いを目的とした場合でもご利用いただくことはできません。",
        
        q3: "どのような先生が登録していますか？",
        a3: "ネイティブスピーカーの先生から、日本人で特定の言語に堪能な先生まで、様々なバックグラウンドを持つ先生が登録しています。先生方はご自身でプロフィールを作成し、得意な言語、レッスン可能な地域や時間帯、レッスン料金などを公開しています。プロフィールをよくご確認いただき、ご自身に合った先生をお探しください。",
        
        q4: "登録している先生は「おうち先生ドットコム」と雇用契約を結んでいる講師なのですか？",
        a4: "いいえ、おうち先生ドットコムは先生と生徒様が出会うためのプラットフォームを提供するサービスです。登録している先生は個人として生徒様を募集するために当サイトを利用しており、「おうち先生ドットコム」との間に雇用契約や業務委託契約はありません。レッスンに関する契約や条件は、すべて生徒様と先生との間で直接決定していただきます。",
        
        q5: "外国語が全く話せず、先生への依頼メールも外国語で書けません。代わりにレッスンスケジュールなどを調整してもらえますか？",
        a5: "申し訳ございませんが、おうち先生ドットコムでは先生との連絡やスケジュールの調整代行は行っておりません。先生へのご連絡は生徒様ご自身で行っていただくシステムとなっております。多くの先生は日本語でのコミュニケーションに対応可能ですが、簡単な英文メールのテンプレートもご用意しておりますので、初めて先生へ連絡する場合の英文サンプルメールをご活用ください。ご不安な場合は、まず日本語で連絡可能か先生のプロフィールをご確認いただくか、お問い合わせください。",
        
        // Fees Category Questions
        q6: "このサービスにかかる費用を教えてください？",
        a6: "おうち先生ドットコムをご利用するための入会金、年会費などは一切かかりません。システム利用料として先生の連絡先を入手する際に、3,300円（税込3,630円、一律料金で最大5名様まで）の連絡先入手料がかかります。この料金で、選んだ先生方の連絡先情報（主にメールアドレス）を30日間ご確認いただけます。レッスン料は、レッスン終了後に先生へ直接お支払いください。個人間での金銭的なトラブルを避けるためにも、レッスン料は前払いではなく必ず毎回のレッスン終了後にお支払いいただくことを推奨しています。※デジタルコンテンツというサービスの性質上、システム利用料のご返金は承っておりませんため予めご了承ください。詳細は【ご利用料金】ページをご確認ください。",
        
        q7: "レッスン料の支払いについて教えてください。",
        a7: "おうち先生ドットコムはオンラインプラットフォームのご提供のみとなっておりますため、レッスン料のお支払いを含めレッスンに関するやり取りには介入しておりません。レッスン料は毎レッスンの終了後に直接先生へお支払いください。また、レッスン料に関するトラブルを防ぐためにも、必ずレッスンの開始以前に先生との間でレッスン料、支払い方法、交通費の有無など詳細をお取り決めください。",
        
        q8: "どのような支払い方法がありますか？ (システム利用料)",
        a8: "システム利用料（連絡先入手料）のお支払いには、クレジットカード決済をご利用いただけます。お支払い完了後すぐに先生の連絡先をご確認いただけます。",
        
        q9: "先生の交通費を払う必要はありますか？",
        a9: "おうち先生ドットコムでは先生と生徒さんのマッチング率を高めるために特に交通費の規定は設けておりません。先生にメールでレッスン依頼をする際にレッスンを受けたい駅名（地名）をお伝えいただき、先生と直接ご相談の上、決定していただいております。一般的にはレッスン希望地が先生の自宅または勤務地付近から遠い場合や、先生が生徒さんのご希望の場所まで出向く際に交通費がかかるようなケースでは実費をお願いされていることが多いようです。交渉については、先生と相談・交渉したいときの英文サンプルメールもご活用ください。",
        
        q10: "カフェでのレッスンを希望しています。先生の飲み物代も支払わなければならないのですか？",
        a10: "先生が｢おごってくれるのかな？｣と勘違いしないためにも、ご自身のお飲み物のみを注文し、レジで店員さんに｢別々｣で支払うことをお伝えください。｢先生の飲み物代は生徒が支払わなくては｣とついつい先生の分も一度支払ってしまい、その後毎回レッスンの度に支払う義務を感じてしまうケースがあるようです。金銭的にも精神的にも負担にならないように、初めからご自身の飲み物代だけを支払うようにしてください。※カフェでレッスンを行う際の先生のお飲み物代に関する厳密な規定は設けておりません。それらの条件をプロフィールの【メッセージ】欄に記入している先生もおりますが、先生が生徒様にレッスン以外の費用をお願いする場合は基本的に全て双方のお話によってお決めていただいております。",
        
        q11: "領収書は発行できますか？",
        a11: "システム利用料（連絡先入手料）については、クレジットカード会社発行の「ご利用明細書」、または決済時にStripeから送信される「受領書（メール）」をご利用ください。",
        
        q12: "紹介費用を支払った後、連絡先は一度にまとめて入手するのですか、それとも必要な時に都度、個別に教えてもらえますか？",
        a12: "システム利用料（連絡先入手料）は、お申し込みごと（最大5名様まで選択可能）に発生します。一度お支払いいただくと、選択した先生方全員の連絡先をマイページから30日間ご確認いただけます。都度1名様ずつ連絡先を入手するシステムではございません。効率的に複数の先生と比較検討していただくため、一度に複数の先生を選択することをお勧めしております。",
        
        q13: "個人で外国語教室を運営しています。生徒募集のためにこのサイトを利用する場合、法人向けの特別な料金プランはありますか？",
        a13: "現在、個人様、法人様（語学教室運営者様など）問わず、一律のシステム利用料でサービスをご提供しております。特別な法人向け料金プランは設けておりませんが、多くの語学教室様にも先生探しのプラットフォームとしてご活用いただいております。",
        
        q14: "グループレッスンの料金はどのように設定されていますか？友人や家族と一緒にレッスンを受けたいです。",
        a14: "システム利用料は、代表者様がお申し込みいただければ個人レッスンと同様です。先生に直接お支払いいただくレッスン料は、グループの人数や先生によって異なります。先生のプロフィールにグループレッスンに関する記載（料金、対応人数など）があるかご確認ください。記載がない場合や詳細が不明な場合は、連絡先入手後に先生に直接お問い合わせいただくことをお勧めします。先生によっては、1人あたりの料金を設定している場合や、グループ全体の料金を設定している場合がありますので、事前にしっかりと確認しましょう。",
        
        // Teacher & Lesson Category Questions
        q15: "英語もしくはその他の外国語が全くできませんが、このサービスを利用できますか？",
        a15: "はい、ご利用いただけます。多くの先生が日本語でのコミュニケーションに対応可能です。先生のプロフィールに「日本語でレッスンが可能」「日本語でメール連絡が可能」といった記載があるかご確認ください。ただし、先生の日本語レベルは自己申告であるため、重要な連絡（レッスン料金や時間など）については、事前に先生の日本語レベルをご自身で確認することをお勧めします。外国籍の先生や日本語以外が母国語の先生へレッスン依頼メールを送る際には、簡単な英語またはその先生が教える言語をお使いいただく方がスムーズな場合があります。初めての連絡で不安な場合は、以下のサンプルメールをご活用ください。初めて先生へ連絡する場合の英文サンプルメール",
        
        q16: "外国語初心者ですが、いきなりネイティブスピーカーの先生からレッスンを受けても大丈夫でしょうか？",
        a16: "はい、初心者の方でもネイティブスピーカーの先生からレッスンを受けることは非常に効果的です。正しい発音や自然な言い回しに最初から触れることで、より実践的な語学力が身につきやすいというメリットがあります。多くの先生は初心者向けの指導経験も豊富ですので、ご自身のレベルや不安な点を正直に伝えて、レッスン内容を相談してみてください。先生のプロフィールで「初心者歓迎」などの記載があるかも確認してみましょう。",
        
        q17: "先生の｢連絡先｣とは具体的にどのようなものですか？",
        a17: "主にPCメールアドレスをご利用いただけます。先生によっては、携帯電話番号やその他の連絡手段（LINE、Skypeなど）を公開している場合もあります。ただし、初回のレッスン依頼は、行き違いを防ぐためにもメールでのご連絡をお願いしております。",
        
        q18: "連絡先を入手した全ての先生へ同時にレッスン依頼メールを送信しても良いですか？",
        a18: "はい、問題ありません。効率的に先生を見つけるために、多くの方が連絡先を入手した複数の先生へ同時にレッスン依頼メールを送信されています。",
        
        q19: "連絡先を入手した先生全員とのレッスンを必ず受けられますか？",
        a19: "当サービスはレッスンの確実性を保障するものではありません。レッスンに関することは全て先生と生徒様の個人間でのやり取りとなります。一度のお申し込みで複数の先生をお選びいただけますが、レッスンの場所やスケジュールなどの条件が合わないケースを含め、必ずしも連絡先を入手していただいた全ての先生とのレッスンを実現できるとは限りません。※特に先生が異性の場合、先生ご自身がレッスンをお断りになられるようなケースや、または途中からメールへの返信がなくなるケースにつきましては、当サイトではご対応できません。また、レッスン依頼メールにご利用者様の自己紹介や具体的な依頼内容の記載がない際、異性の先生はレッスンをお断りになられることが多いようですが、そのような際にも当サイトではご対応できません。",
        
        q20: "最大5名の先生の連絡先を入手した場合、複数の先生と同時にレッスンを受けることは可能ですか？それとも1人の先生に絞る必要がありますか？",
        a20: "はい、複数の先生と同時にレッスンを進めることも、体験レッスン後に1人の先生に絞ることも、どちらも可能です。生徒様のご希望や学習スタイルに合わせて自由に決めていただけます。複数の先生から異なる視点やアプローチで学ぶことも有効な学習方法の一つです。",
        
        q21: "レッスンはどのような場所で行われますか？",
        a21: "レッスン場所は先生と生徒様の間で相談して決定します。一般的には、カフェ、生徒様のご自宅、先生のご自宅、オンラインなどが利用されます。先生のプロフィールにレッスン可能な場所が記載されていることが多いので、ご確認ください。初回のレッスンは、お互いを知るために公共の場所（カフェなど）で行うことを推奨しています。",
        
        q22: "自宅または先生宅でのレッスンはできますか？",
        a22: "生徒様や先生のご自宅でのレッスンをご希望される場合でも、多くの方は、お互いをまだよく知らない段階では、カフェなどの公的な場所でのレッスンを希望されることが多いようです。プロフィールのレッスン場所に【先生の自宅】や【生徒の自宅】が選択されている場合でも、先生によっては、信頼関係が築かれるまでの間は、自宅などのプライベートな場所でのレッスンをお断りしているケースもあります。そのため、初回のレッスンは原則として、駅周辺のカフェなど公然の場所でおこなっていただくことを推奨しております。ご自宅でのレッスンをご希望の場合でも、レッスン依頼メールには体験レッスンで希望する公然の場所の詳細を記載してください。※当サービスはレッスンの確実性を保障するものではありません。また、先生が異性の場合には、初対面でのご自宅レッスンは双方にとって慎重な判断が求められます。",
        
        q23: "オンラインレッスンは可能ですか？注意点はありますか？",
        a23: "はい、多くの先生がオンラインレッスンに対応しています。先生のプロフィールで「オンラインレッスン可」となっているかご確認ください。オンラインレッスンの場合、使用するツール（Zoom, Skypeなど）、レッスンの進め方、教材などを事前に先生とよく相談して決めてください。安定したインターネット環境と、カメラ・マイク付きのデバイス（PC、タブレット、スマートフォンなど）が必要となります。",
        
        q24: "子供のレッスンは可能ですか？",
        a24: "未成年者がレッスンを受ける場合は、保護者の方が代わりにお申込みいただき、保護者の方の同伴及び責任のもとでレッスンを受けていただくことになります。※レッスン受講者が3歳以下のお子様の場合は、現在、当サイトをご利用いただくことはできません。※例えば、「英語を使って数学を教えてほしい」など、レッスン言語以外の科目を目的としている場合や、「外国語でベビーシッターをしてほしい」という場合には、当サイトをご利用いただくことはできません。",
        
        q25: "急いで先生を見つけてレッスンを開始したいのですが、申し込み当日にレッスンを受けることは可能ですか？",
        a25: "先生のスケジュールや返信のタイミングによりますが、お申し込み当日にレッスンを開始することは難しい場合が多いです。先生への連絡、スケジュールの調整などを含めると、通常レッスン開始までには数日から1週間程度、場合によってはそれ以上かかることもあります。お急ぎの場合は、その旨を先生への最初の連絡でお伝えいただくとともに、複数の先生に同時に連絡を取るなど、余裕をもったスケジュールで先生をお探しいただくことをお勧めします。",
        
        q26: "海外出張や旅行の直前に、1回だけの単発レッスンをお願いすることはできますか？",
        a26: "先生によっては単発レッスンに対応している場合もありますが、多くの先生は継続的なレッスンを希望されています。",
        
        q27: "初回レッスンの際に、先生と携帯電話番号などの緊急連絡先を交換した方が良いですか？",
        a27: "はい、初回レッスン時やその後のやり取りの中で、お互いの同意のもと、携帯電話番号やLINEなどの緊急連絡先を交換しておくことをお勧めします。レッスンの急なキャンセルや遅刻、待ち合わせ場所での行き違いなど、緊急時の連絡がスムーズに行えるようになります。ただし、個人情報の交換はご自身の責任において慎重に行ってください。",
        
        // Usage Category Questions
        q28: "会員登録は無料ですか？",
        a28: "はい、生徒様の会員登録は無料です。入会金や年会費は一切かかりません。先生の連絡先を入手する際にのみ、システム利用料が発生します。",
        
        q29: "先生の｢連絡先｣はいつどのように確認できますか？",
        a29: "システム利用料のお支払い完了後、ログインした状態でマイ・アカウント内の【入手した先生の連絡先(※ログインが必要です)】ページにてお申し込み日より30日間ご確認いただけます。銀行振り込みをご利用の場合は通常1～2営業日以内、クレジットカード決済をご利用の場合はお支払い完了後、即時または数十分以内にご確認いただけます。",
        
        q30: "連絡先入手の申し込み後、待っていれば先生から連絡がきますか？",
        a30: "いいえ。おうち先生ドットコムではご利用者様（生徒様）から先生に直接ご連絡を取っていただくシステムとなっております。レッスンを受けてみたい先生には、入手した連絡先を元にご利用者様からご連絡ください。初めて先生へ連絡する際のメールの書き方に困ったら、こちらのサンプルメールをご参考ください。",
        
        q31: "私の地域には多数の先生が登録しているのですがどの先生を選べばいいのか分かりません。",
        a31: "先生をお選びの際には、以下の点をご参考にしてください：プロフィールの最終更新日: 新しい先生は積極的に生徒さんをお探しのため、返信が早かったり条件が合いやすい傾向があります。新規登録の先生には\"New\"マーク、プロフィール更新済みの先生には\"Updated\"マークが付いています。教えられる言語・レベル: ご自身の学びたい言語やレベルに合っているか。レッスン場所・形態: ご希望の場所（カフェ、オンラインなど）に対応しているか。レッスン料金: 予算に合っているか。自己紹介・メッセージ: 先生の人柄や指導方針が垣間見えることがあります。レビュー・評価 (もしあれば): 他の生徒からの評価も参考になります。（※当サイトの機能としてレビューがない場合はこの項目は削除）複数の先生のプロフィールを比較検討し、気になる先生がいたら積極的に連絡を取ってみましょう。",
        
        q32: "「マイページ」（会員専用ページ）では何ができますか？",
        a32: "「マイページ」（または「マイ・アカウント」）は、会員登録された生徒様専用のページです。主に以下の機能をご利用いただけます：登録情報の確認・変更・退会システム利用料お支払い後に、入手した先生の連絡先の確認（30日間）ご利用にはログインが必要です。",
        
        q33: "システム利用料を支払う前に、先生にレッスンの内容や条件について質問することはできますか？",
        a33: "できません。先生のプロフィールページにて、レッスン可能な日時や場所、レッスンの進め方など、事前にご確認ください。",
        
        // Troubleshooting Category Questions
        q34: "先生からの返事は通常どれくらいで来ますか？また、返事が来ない場合どうすればいいですか？",
        a34: "多くの先生は3日以内に返信してくださいますが、先生の状況によってはそれ以上かかる場合もあります。3日～1週間程度待っても返事がない場合は、まずは迷惑メールフォルダをご確認ください。レッスン条件が合わないなど、先生も様々なご事情をお持ちなので、それでも連絡がない場合は他の先生へご連絡ください。※特定のメールサービス（OCN、nifty、Yahoo! Japan、@i.softbank.jpなど）をご利用の場合、特に外国籍の先生との間でメールが届かない、または迷惑メールとして処理される事例が報告されています。別のメールアドレスからの再送もご検討ください。※携帯メールアドレスから送信する場合、PCからのメール受信拒否設定になっていないかご確認ください。",
        
        q35: "連絡先を入手した先生全員に連絡しましたがスケジュールや条件が合わなかったためどの先生とも体験レッスンを受けることができませんでした。",
        a35: "ご不便をおかけし申し訳ありません。お申し込み日より60日間のサポート期間内であれば、１回に限り追加料金なしで５名まで先生の連絡先を追加提供させていただきます。その際は、お問い合わせフォームより、これまでの経緯と新たにご希望の先生（もし見つかっていればそのIDなど）を当サイトまでご連絡ください。ただし、当サービスはレッスンの確実性を保障するものではありません。先生の少ない地域など、ご対応できない場合がございます。その場合でもシステム利用料のご返金ございません。",
        
        q36: "複数の先生の連絡先を入手し、1人の先生とはレッスンが決まりましたが、他の先生とは条件が合いませんでした。条件が合わなかった先生の代わりに、別の先生の連絡先を教えてもらうことはできますか？",
        a36: "いいえ、サポート対象とはなりません。当サービスはレッスンの確実性を保障するものではありません。その場合でもシステム利用料のご返金ございません。",
        
        q37: "先生にレッスン依頼をしたら、５名全員に現在新規の生徒を募集していないと言われました。または、プロフィールに記載している条件とは別の条件を提示されました。",
        a37: "ご不便をおかけし申し訳ありません。お申し込み日より60日間のサポート期間内であれば、１回に限り追加料金なしで５名まで先生の連絡先を追加提供させていただきます。その際は、お問い合わせフォームより、これまでの経緯と新たにご希望の先生（もし見つかっていればそのIDなど）を当サイトまでご連絡ください。ただし、当サービスはレッスンの確実性を保障するものではありません。先生の少ない地域など、ご対応できない場合がございます。その場合でもシステム利用料のご返金ございません。",
        
        q38: "先生との間でトラブルがあった場合、運営はどこまでサポートしてくれますか？",
        a38: "おうち先生ドットコムは、先生と生徒様が出会うための連絡先を提供するサービスであり、レッスン契約やレッスン中の出来事に関しては、原則として先生と生徒様の当事者間で解決していただくようお願いしております。ただし、利用規約に違反する行為や悪質なトラブルが疑われる場合は、お問い合わせフォームより詳細な情報提供をお願いいたします。",
        
        q39: "レッスン日時の変更や急なキャンセルをしたい場合、おうち先生ドットコムに連絡すれば対応してもらえますか？",
        a39: "申し訳ございませんが、レッスンに関するスケジュール調整、キャンセル連絡などは、すべて生徒様と先生との間で直接行っていただく必要がございます。おうち先生ドットコムが仲介することはできません。緊急の連絡にも対応できるよう、事前に先生と連絡方法（メール、電話、メッセージアプリなど）を確認し、取り決めておくことをお勧めします。",
        
        q40: "退会方法を教えてください。",
        a40: "退会をご希望の場合は、ログイン後、マイページ内の「アカウント設定」または「退会手続き」の項目からお手続きいただけます。もし該当の項目が見当たらない場合は、お問い合わせフォームより退会希望の旨をご連絡ください。なお、一度退会されますと、過去の利用履歴や入手した先生の情報などはご確認いただけなくなりますのでご注意ください。",
        
        q41: "個人情報はどのように保護されますか？",
        a41: "当サイトは、ご利用者様の個人情報を適切に保護するため、プライバシーポリシーを定めて遵守しております。詳細はプライバシーポリシーのページをご確認ください。先生との連絡先の交換やレッスンに関するやり取りは、生徒様ご自身の責任において行っていただく形となりますが、サイト運営上取得した個人情報については厳重に管理いたします。",
        
        // Additional questions from the HTML
        q42: "先生との間でトラブルがあった場合、運営はどこまでサポートしてくれますか？",
        a42: "おうち先生ドットコムは、先生と生徒様が出会うための連絡先を提供するサービスであり、レッスン契約やレッスン中の出来事に関しては、原則として先生と生徒様の当事者間で解決していただくようお願いしております。ただし、利用規約に違反する行為や悪質なトラブルが疑われる場合は、お問い合わせフォームより詳細な情報提供をお願いいたします。",
        
        q43: "レッスン日時の変更や急なキャンセルをしたい場合、おうち先生ドットコムに連絡すれば対応してもらえますか？",
        a43: "申し訳ございませんが、レッスンに関するスケジュール調整、キャンセル連絡などは、すべて生徒様と先生との間で直接行っていただく必要がございます。おうち先生ドットコムが仲介することはできません。緊急の連絡にも対応できるよう、事前に先生と連絡方法（メール、電話、メッセージアプリなど）を確認し、取り決めておくことをお勧めします。",
        
        q44: "退会方法を教えてください。",
        a44: "退会をご希望の場合は、ログイン後、マイページ内の「アカウント設定」または「退会手続き」の項目からお手続きいただけます。もし該当の項目が見当たらない場合は、お問い合わせフォームより退会希望の旨をご連絡ください。なお、一度退会されますと、過去の利用履歴や入手した先生の情報などはご確認いただけなくなりますのでご注意ください。",
        
        q45: "個人情報はどのように保護されますか？",
        a45: "当サイトは、ご利用者様の個人情報を適切に保護するため、プライバシーポリシーを定めて遵守しております。詳細はプライバシーポリシーのページをご確認ください。先生との連絡先の交換やレッスンに関するやり取りは、生徒様ご自身の責任において行っていただく形となりますが、サイト運営上取得した個人情報については厳重に管理いたします。",
        
        // CTA Section
        cta_title: "疑問は解決しましたか？",
        cta_desc: "もし上記以外にご不明な点がございましたら、お気軽にお問い合わせください。",
        cta_desc2: "あなたにぴったりの先生を見つけて、外国語学習を始めましょう！",
        cta_button: "先生を探す",
        cta_button_secondary: "お問い合わせ",
      },
      "ContactForm.Title": "お問い合わせ",
      "ContactForm.Description": "ご質問・ご相談などお気軽にご連絡ください。下記フォームにご記入の上、送信してください。",
      "ContactForm.ThankYou": "お問い合わせありがとうございます。追ってご連絡いたします。",
      "ContactForm.NameLabel": "お名前 *",
      "ContactForm.PrimaryEmailLabel": "メールアドレス（必須）",
      "ContactForm.AlternativeEmailLabel": "予備メールアドレス",
      "ContactForm.SubjectLabel": "件名 *",
      "ContactForm.MessageLabel": "お問い合わせ内容 *",
      "ContactForm.SendButton": "送信する",
      privacy: {
        header: "プライバシーポリシー",
        intro1: "有限会社ドットコムビジネス（以下「当社」といいます。）は、当社が運営するサービス（以下「本サービス」といいます。）をご利用になるお客様（以下「お客様」といいます。）の個人情報及びプライバシーを適切に保護することを、当社の事業活動の基本であるとともに、重大な社会的責務であると認識しています。",
        intro2: "当社は、この責務を果たすため、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の関係法令・ガイドライン等を遵守し、本ポリシーに定める通り個人情報保護方針を定め、役員及び従業員に周知徹底し、適切に取り扱います。このページでは、各条項を分かりやすくご確認いただけます。",
        establishedLabel: "制定日:",
        lastRevisedLabel: "最終改定日:",
        establishedDate: "2024年5月25日",
        lastRevisedDate: "2025年5月25日",
        footer: "有限会社ドットコムビジネス. All Rights Reserved.",
        section1: {
          title: "第1条 (適用範囲)",
          content: `<p>本ポリシーは、お客様による本サービスの利用に関してお客様から取得する全ての個人情報に適用されます。本サービスからリンクされた他の事業者または個人のウェブサイト及びサービスにおける個人情報の取扱いについては、本ポリシーの適用範囲外とし、当社は一切の責任を負いません。各リンク先のプライバシーポリシーをご確認ください。</p>`
        },
        section2: {
          title: "第2条 (個人情報の定義)",
          content: `<p>本ポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定める個人情報をいい、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）、又は個人識別符号が含まれるものをいいます。</p>`
        },
        section3: {
          title: "第3条 (個人情報の取得)",
          content: `<p>当社は、適法かつ公正な手段により、以下の情報をはじめとするお客様の個人情報を取得します。</p>
            <ol>
                <li>お客様から直接ご提供いただく情報：
                    <ul>
                        <li>氏名、フリガナ、性別、生年月日、住所、電話番号、メールアドレス</li>
                        <li>アカウント情報（ユーザーID、パスワード）</li>
                        <li>お支払いに関する情報（クレジットカード情報、銀行口座情報等）※当社が直接保持せず、決済代行会社が取り扱う場合があります。</li>
                        <li>レッスン受講に関する情報（希望言語、学習目的、受講履歴等）</li>
                        <li>講師としてご登録いただく場合の情報（経歴、資格、本人確認書類、報酬振込先口座情報等）</li>
                        <li>お問い合わせ時やアンケートご回答時にご提供いただく情報</li>
                    </ul>
                </li>
                <li>本サービスの利用に伴い自動的に取得する情報：
                    <ul>
                        <li>Cookie情報、IPアドレス、ブラウザ種類、OS、閲覧履歴、検索履歴、端末情報（機種名、OSバージョン等）、広告識別子（IDFA、AAID等）</li>
                        <li>サービス利用状況に関する情報（ログイン状況、レッスン予約・キャンセル履歴、通信ログ等）</li>
                        <li>位置情報（お客様の同意を得た場合に限ります）</li>
                    </ul>
                </li>
            </ol>`
        },
        section4: {
          title: "第4条 (個人情報の利用目的)",
          content: `<p>当社は、取得した個人情報を以下の目的のために利用します。お知らせした目的の範囲を超えて利用する場合には、あらかじめお客様の同意を得るものとします。</p>
            <ol>
                <li>本サービスの提供・運営・管理のため (会員登録、本人認証、レッスン予約、料金請求、お問い合わせ対応等)</li>
                <li>本サービスの維持・改善及び新たなサービスの開発のため (利用状況分析、アンケート実施、新機能開発等)</li>
                <li>お客様へのご連絡・お知らせのため (重要なお知らせ、キャンペーン案内、メールマガジン配信等)</li>
                <li>広告配信及びマーケティングのため (属性に応じた広告表示、効果測定等)</li>
                <li>求人・採用活動のため</li>
                <li>その他上記利用目的に付随する目的のため</li>
            </ol>`
        },
        section5: {
          title: "第5条 (個人情報の第三者提供)",
          content: `<p>当社は、次に掲げる場合を除き、あらかじめお客様の同意を得ることなく、個人情報を第三者（当社及び当社との直接利害関係者以外の者をいいます。）に提供することはありません。</p>
            <ol>
                <li>法令に基づく場合</li>
                <li>人の生命、身体又は財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき</li>
                <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                <li>利用目的の達成に必要な範囲内において、個人情報の取扱いの全部又は一部を委託する場合（この場合、当社は委託先に対し、必要かつ適切な監督を行います。）</li>
                <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                <li>お客様個人を識別することができない統計データとして開示する場合</li>
                <li>お客様の同意がある場合</li>
            </ol>`
        },
        section6: {
          title: "第6条 (個人データの共同利用)",
          content: `<p>当社は、以下の範囲内で個人データを共同利用することがあります。</p>
            <ol>
                <li>共同利用する個人データの項目：第3条に定めるお客様から取得する個人情報のうち、共同利用の目的達成に必要な最小限の項目（氏名、住所、電話番号、メールアドレス、契約内容・申込履歴等）</li>
                <li>共同利用する者の範囲：有限会社ドットコムビジネス、その他、上記利用目的の達成に必要な範囲で当社が指定するグループ会社（該当する場合、別途通知または公表します）</li>
                <li>共同利用の目的：第4条に定める利用目的の範囲内</li>
                <li>個人データの管理について責任を有する者の名称：有限会社ドットコムビジネス（住所及び代表者名については、当社ウェブサイトの会社概要ページをご確認ください。）</li>
            </ol>`
        },
        section7: {
          title: "第7条 (個人データの越境移転)",
          content: `<p>当社は、本サービスの提供にあたり、お客様の個人データを日本国外の事業者（外国にある講師、業務委託先、クラウドサービス提供事業者等を含みます。）に提供する場合があります。</p>
            <p>その場合、当社は、以下のいずれかの措置を講じます。</p>
            <ol>
                <li>お客様からあらかじめ外国にある第三者への個人データの提供を認める旨の同意を得る。</li>
                <li>当該第三者が個人情報保護法に基づき個人情報取扱事業者が講ずべきこととされている措置に相当する措置を継続的に講ずるために必要な体制を整備していることを確認する。</li>
                <li>当該第三者が我が国と同等の水準にあると認められる個人情報保護制度を有している国として個人情報保護委員会規則で定める国にある場合。</li>
            </ol>
            <p>当社が個人データを提供する可能性のある外国の名称、当該外国における個人情報の保護に関する制度、及び当該第三者が講ずる個人情報の保護のための措置に関する情報提供をご希望のお客様は、第14条のお問い合わせ窓口までご連絡ください。</p>`
        },
        section8: {
          title: "第8条 (個人情報の安全管理措置)",
          content: `<p>当社は、お客様からご提供いただいた個人情報を正確かつ最新の状態に保ち、不正アクセス、紛失、破壊、改ざん、漏洩等の危険を防止するため、組織的、人的、物理的、技術的な安全管理措置を講じます。詳細についてはお問い合わせください。</p>
            <ul>
                <li>組織的安全管理措置: 管理責任者の設置、規程整備、報告連絡体制の整備等</li>
                <li>人的安全管理措置: 従業員への定期的な研修、秘密保持義務等</li>
                <li>物理的安全管理措置: 入退室管理、機器制限、施錠管理等</li>
                <li>技術的安全管理措置: アクセス制御、不正アクセス対策等</li>
            </ul>`
        },
        section9: {
          title: "第9条 (個人情報の保存期間)",
          content: `<p>当社は、個人情報を利用目的の達成に必要な期間または法令等で定められた保存期間が終了した後は、速やかに当該個人情報を廃棄します。</p>`
        },
        section10: {
          title: "第10条 (保有個人データの開示・訂正・利用停止等)",
          content: `<p>お客様は、当社が保有するご自身の個人情報について、利用目的の通知、開示、訂正・追加・削除、利用停止・消去、第三者提供の停止（以下「開示等」といいます。）を請求することができます。</p>
            <p>開示等の請求を希望される場合は、第14条のお問い合わせ窓口までご連絡ください。当社所定の手続き（本人確認書類の提出、手数料のお支払い（開示請求及び利用目的の通知請求の場合、1件あたり1,000円（税別））等）をご案内いたします。</p>
            <p>ご請求がお客様ご本人によるものであることが確認できた場合に限り、合理的な期間及び範囲で対応いたします。ただし、法令に基づき開示等に応じられない場合がございます。</p>`
        },
        section11: {
          title: "第11条 (Cookie（クッキー）及びその他の技術の利用について)",
          content: `<h3>1. Cookieの利用:</h3>
            <p>当社のウェブサイトでは、お客様の利便性向上、利用状況の分析、広告配信等のためにCookieを利用しています。お客様はブラウザ設定でCookieを無効化できますが、一部サービスが利用できなくなる場合があります。</p>
            <h3>2. アクセス解析ツール:</h3>
            <p>当社は、Google Analyticsを利用しています。収集された情報はGoogle LLCのプライバシーポリシーに基づき管理されます。オプトアウトも可能です。</p>
            <ul>
                <li>Google Analytics利用規約: <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" class="text-[#4a7d1d] hover:underline">リンク</a></li>
                <li>Googleプライバシーポリシー: <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer" class="text-[#4a7d1d] hover:underline">リンク</a></li>
                <li>Google Analyticsオプトアウトアドオン: <a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer" class="text-[#4a7d1d] hover:underline">リンク</a></li>
            </ul>
            <h3>3. 行動ターゲティング広告:</h3>
            <p>当社は、第三者配信事業者の広告サービスを利用しています。お客様は各事業者のサイトでオプトアウトできます。</p>
            <p>（例）Googleによる広告のオプトアウト: <a href="http://www.google.co.jp/policies/privacy/ads/" target="_blank" rel="noopener noreferrer" class="text-[#4a7d1d] hover:underline">リンク</a></p>`
        },
        section12: {
          title: "第12条 (責任の制限)",
          content: `<p>本サービスの利用は、お客様の責任において行われるものとします。当社ウェブサイト及び当社ウェブサイトにリンクが設定されている他のウェブサイトから取得された各種情報の利用によって生じたいかなる損害（直接損害、間接損害、逸失利益等すべて）に対しても、当社は理由の如何を問わず、一切の責任を負わないものとします。ただし、当社の故意又は重過失による場合はこの限りではありません。</p>`
        },
        section13: {
          title: "第13条 (本プライバシーポリシーの変更・改定)",
          content: `<p>当社は、法令の改正、事業内容の変更、お客様からのご要望等に対応するため、本ポリシーを適宜見直し、改定することがあります。</p>
            <p>本ポリシーを変更した場合には、当社ウェブサイト上での掲示その他適切な方法によりお客様にお知らせいたします。重要な変更にあたっては、事前にお客様に通知し、同意を得る場合があります。</p>
            <p>変更後のプライバシーポリシーは、当社ウェブサイトに掲載されたときから効力を生じるものとします。お客様におかれましては、定期的に本ポリシーの最新の内容をご確認くださいますようお願いいたします。</p>`
        },
        section14: {
          title: "第14条 (お問い合わせ窓口)",
          content: `<p>当社の個人情報の取扱いに関するご質問、ご相談、苦情、開示等のご請求につきましては、下記窓口までご連絡ください。</p>
            <p><strong>有限会社ドットコムビジネス お客様相談窓口</strong></p>
            <p>住所: 〒350-1124 埼玉県川越市新宿町1-13-16</p>
<!--            <p>電話番号: <a href="tel:03-6912-7762" class="text-[#4a7d1d] hover:underline">03-6912-7762</a></p>
            <p>FAX番号: 03-6912-7817</p>-->
            <p>受付時間: 午前10:00～午後5:00（土日、祝祭日、年末年始および夏期休暇期間など当社休業日を除く）</p>
            <p>お問い合わせフォーム: <a href="contact.html" target="_blank" rel="noopener noreferrer" class="text-[#4a7d1d] hover:underline">お問い合わせフォーム</a></p>
            <p>お問い合わせの際は、お申込み時の氏名、メールアドレス等、ご本人様確認に必要な情報をお知らせください。</p>`
        },
        section15: {
          title: "第15条 (準拠法及び管轄裁判所)",
          content: `<p>本ポリシーの解釈にあたっては、日本法を準拠法とします。</p>
            <p>本ポリシーに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>`
        },
       
      },
      terms: {
        header: "ご利用規約",
        intro: "おうち先生ドットコム（以下、本サービス）をご利用いただく前に、必ず以下のご利用規約（以下、本規約）をお読みください。お客様が本サービスをご利用になることにより、本規約の全ての条項に同意したものとみなします。",
        section1: {
          title: "第1条（本規約の適用および変更）",
          content: `<p>1. 本規約は、本サービスの提供および利用に関して、本サービスを提供する[運営者名または会社名]（以下、当社）と利用者（第3条で定義します）との間に適用されるものとします。</p>
<p>2. 当社は、利用者の事前の承諾を得ることなく、当社が必要と判断した場合に、本規約を変更できるものとします。変更後の本規約は、本サービスサイト上に掲載された時点から効力を生じるものとし、利用者が本規約の変更後に本サービスを利用した場合には、変更後の本規約に同意したものとみなします。</p>
<p>3. 本規約に定めのない事項については、当社が別途定める細則、ガイドライン、注意事項等（以下総称して「個別規約」といいます）が適用されるものとし、個別規約は本規約の一部を構成するものとします。本規約の定めと個別規約の定めが異なる場合には、特段の定めのない限り、個別規約の定めが優先して適用されるものとします。</p>`
        },
        section2: {
          title: "第2条（サービス概要）",
          content: `<p>1. 本サービスは、語学の指導を希望する個人または法人（以下、先生）と、語学の学習を希望する個人または法人（以下、生徒）に対し、オンライン上でマッチングの機会を提供するプラットフォームサービスです。</p>
<p>2. 本サービスは、先生と生徒間のマッチングの機会を提供するものであり、当社が先生を雇用し、または生徒に対して語学レッスンを提供するものではありません。したがって、当社は<span class="important">人材紹介サービス、人材斡旋サービス、人材派遣サービス、またはオンライン語学教室の運営を行うものではありません。</span></p>
<p>3. 生徒は、本サービスを通じて入手した先生の連絡先情報を基に、先生と直接連絡を取り、レッスン契約の締結、レッスン内容・日時・場所・料金等の諸条件の決定、レッスン料の支払い等を自己の責任において行うものとします。<span class="important">当社は、先生と生徒間の連絡、交渉、契約締結、レッスン実施その他一切の事項に関与しません。</span></p>`
        },
        section3: {
          title: "第3条（用語の定義）",
          content: `<p>本規約において使用する用語の定義は、以下のとおりとします。</p>
<ul>
<li>(1) 「利用者」とは、本規約に同意の上、本サービスを利用する全ての個人または法人をいいます。生徒および先生を含みます。</li>
<li>(2) 「生徒」とは、本サービスを利用して語学の先生を探し、レッスン受講を希望する利用者をいいます。</li>
<li>(3) 「先生」とは、本サービスに登録し、語学の指導を提供することを希望する利用者をいいます。</li>
<li>(4) 「登録情報」とは、利用者が本サービスの利用に際して当社に提供する情報をいいます。</li>
<li>(5) 「システム利用料」とは、生徒が先生の連絡先情報を入手するために、本サービス利用の対価として当社に支払う料金をいいます。</li>
</ul>`
        },
        section4: {
          title: "第4条（登録されている先生について）",
          content: `<p>1. 本サービスに登録されている先生は、学校や企業等の組織を介さず、フリーランスとして個人で語学を教えることを希望する日本在住の方です。</p>
<p>2. 当社と登録されている先生との間には、<span class="important">雇用契約、業務委託契約、代理店契約その他いかなる契約関係も存在しません。</span></p>
<p>3. 当社は、先生のスケジュール管理、教授スキル、経歴、その他先生に関する一切の情報について、その正確性、完全性、有用性等を保証するものではなく、<span class="important">身元確認作業も原則として行っておりません。</span>利用者は、自己の責任において先生を選定するものとします。</p>`
        },
        section5: {
          title: "第5条（先生プロフィール）",
          content: `<p>1. 本サービスに掲載されている全ての先生プロフィールは、先生自身が登録したものです。先生プロフィールに掲載されている情報（経歴、資格、レッスン可能言語、レッスン料金の目安等を含むがこれらに限られない）は、<span class="important">先生の自己申告によるものであり、当社がその内容の信頼性、正確性を確認または保証するものではありません。</span></p>
<p>2. 当社は、先生プロフィールを定期的に確認し、不適切な内容や明らかに虚偽と判断される情報が含まれている場合には、先生への通知なしに修正または削除を行うことがあります。ただし、これは当社の義務ではなく、かかる措置によってプロフィールの信頼性や正確性が保証されるものではありません。</p>`
        },
        section6: {
          title: "第6条（利用者資格）",
          content: `<p>1. 本サービスは、語学教師を探している個人または法人（生徒）、および語学を教えたい個人または法人（先生）が利用できます。</p>
<p>2. 生徒として本サービスを利用する場合、<span class="important">未成年者単独でのお申込みはできません。</span>未成年者がレッスンを受ける場合は、親権者または法定代理人（以下、保護者）の方が本規約に同意の上、代わりにお申込みいただき、レッスンには保護者の方の同伴および責任のもとで参加していただく必要があります。</p>
<p>3. 利用者は、先生との連絡（電子メール送受信等）や本サービスの利用に必要なコンピューター、スマートフォン等の端末、インターネット接続環境、および基本的な操作スキルを有していることを前提とします。メールソフト・メールアカウントの設定方法や、端末機の操作方法に関するサポートは当社では行いません。</p>
<p>4. 外国籍の先生や母国語が日本語ではない先生とのコミュニケーションには、原則として英語またはその他の外国語の能力が必要となる場合があります。</p>
<p>5. <span class="important">レッスン受講者が3歳以下のお子様の場合は、安全管理の観点から本サービスをご利用いただくことはできません。</span></p>`
        },
        section7: {
          title: "第7条（生徒登録・変更・アカウントの削除について）",
          content: `<p>1. 生徒が先生の連絡先情報を入手するためには、当社所定の方法により登録者情報を入力し、生徒アカウントを作成する必要があります。レッスン受講者が未成年者の場合、または利用者が語学教室や法人の場合を除き、レッスン受講者本人の情報で登録を行うものとします。</p>
<p>2. 初回のお申込み手続き完了後、自動的に生徒アカウントが作成されます。アカウントの維持に関する入会金、年会費等は一切不要です。</p>
<p>3. 登録情報は、氏名など一部の項目を除き、登録後もマイページ等で変更することができます。</p>
<p>4. 生徒アカウントの削除を希望する場合、利用者は当社所定の方法（お問い合わせフォーム等）によりその旨を連絡するものとします。アカウント削除の際には、本人確認のため、そのアカウントの登録メールアドレスからの連絡が必要となります。</p>`
        },
        section8: {
          title: "第8条（システム利用料（先生の連絡先入手料））",
          content: `<p>1. 生徒は、先生の連絡先情報を入手するにあたり、当社に対し、別途定めるシステム利用料を支払うものとします。現在のシステム利用料は、<span class="important">先生5名分の連絡先につき3,300円（税込3,630円）</span>です。</p>
<p>2. 当社は、システム利用料を予告なしに変更する場合があります。変更後の料金は、本サービスサイト上に表示された時点から適用されるものとします。</p>
<p>3. システム利用料は、デジタルコンテンツ（先生の連絡先情報）の提供というサービスの性質上、<span class="important">理由の如何を問わず、お支払い完了後の返金には一切応じられません。</span>あらかじめご了承ください。</p>
<p>4. お申込み（システム利用料の支払い）完了後に、選択した先生の変更や追加はできません。</p>`
        },
        section9: {
          title: "第9条（先生の連絡先情報）",
          content: `<p>1. 生徒が入手できる先生の連絡先情報は、原則としてPC用のメールアドレスです。ただし、先生がその他の連絡手段（携帯電話番号、携帯メールアドレス、SNSアカウント等）を希望し登録している場合は、それらの情報も提供される場合があります。</p>
<p>2. 先生の連絡先情報は、システム利用料のお支払い完了後、生徒用アカウントページにて<span class="important">お申込み日より30日間閲覧可能です。</span>期間経過後は閲覧できなくなりますのでご注意ください。</p>
<p>3. 先生が電話番号を連絡先として提示している場合でも、レッスン依頼や条件交渉等の重要な連絡は、記録保持および誤解防止のため、できる限りメールで行うことを推奨します。</p>`
        },
        section10: {
          title: "第10条（先生への連絡）",
          content: `<p>1. 生徒は、入手した連絡先情報に基づき、自己の責任において先生へ直接メール等で連絡を取るものとします。</p>
<p>2. 生徒が先生へ連絡しても返信がない場合、または返信に時間を要する場合、これは先生の状況や意思によるものであり、当社が先生の状況を確認したり、返信を催促したりすることはできません。また、先生からの連絡がないことについて、当社は一切の責任を負いません。</p>
<p>3. 母国語が日本語ではない先生との連絡は、原則として英語または当該先生が指定する言語で行うものとします。ただし、先生プロフィールに「日本語での連絡可能」等の記載がある場合は、日本語での連絡が可能な場合がありますので、初回連絡時に先生に直接ご確認ください。</p>
<p>4. レッスン依頼メールを送信してから3営業日（先生の活動状況により異なる場合があります）を目安にしても先生からの返信がない場合、生徒は当社のお問い合わせフォームより、該当する先生のIDまたは氏名、レッスン依頼メールの送信日時、送信元メールアドレスを明記の上、状況を連絡することができます。当社は、状況に応じて先生への確認連絡を試みることがありますが、返信を保証するものではありません。</p>
<p>5. 特定のメールアドレス間（例：OCN、nifty、Yahoo! Japanのメールアドレスと一部の海外プロバイダ間など）でメールの送受信が正常に行えないケースが稀に報告されています。このような技術的な問題について、当社は対応できません。別のメールアドレスから再度連絡を試みてください。</p>`
        },
        section11: {
          title: "第11条（レッスン料の支払い等）",
          content: `<p>1. レッスン料は、第4条2項に記載の通り、当社と先生との間に雇用関係等が存在しないため、<span class="important">レッスン実施後に生徒から先生へ直接支払うものとします。</span></p>
<p>2. レッスン料の金額、支払い方法、支払い時期、キャンセルポリシー等の諸条件については、必ず初回レッスンを開始する前に、生徒と先生の間で十分に協議し、合意するものとします。体験レッスンの料金の有無、交通費等の実費負担についても同様です。</p>
<p>3. 当社は、生徒と先生間の金銭授受には一切関与せず、いかなる責任も負いません。個人間の金銭トラブルを避けるため、<span class="important">レッスン料は前払いではなく、毎回のレッスン終了後に支払うことを推奨します。</span></p>`
        },
        section12: {
          title: "第12条（代わりの先生の連絡先の無料再追加）",
          content: `<p>1. 本サービスは、生徒が連絡先を入手した全ての先生とのレッスン成立を保証するものではありません。そのため、一度のお申込みで複数の先生（最大5名）を選択できるシステムとなっています。</p>
<p>2. 万が一、選択した全ての先生に連絡を取ったにもかかわらず、いずれの先生とも体験レッスン（初回レッスン）の合意に至らなかった場合、生徒は、システム利用料お支払い日より<span class="important">60日以内</span>に限り、当社に対し、所定の手続きにより代わりの先生の連絡先（規定数）の無料再追加を申請することができます。</p>
<p>3. ただし、以下のいずれかのケースに該当する場合、先生がレッスンを断った場合や条件が合わなかった場合を含め、<span class="important">無料再追加の対象外</span>となります。</p>
<ul>
<li>(1) 利用者（生徒）が英会話スクール、語学教室、またはその他の法人・団体である場合。</li>
<li>(2) 営利目的（例：生徒自身が語学講師で、他の講師の指導方法を調査する目的など）で本サービスを利用していると当社が判断した場合。</li>
<li>(3) 個人的な語学学習以外の目的（例：翻訳・通訳業務の依頼、スカウト、ビジネスパートナー探しなど）での利用の場合。</li>
<li>(4) 先生のプロフィールに記載されているレッスン可能地域や条件（例：オンラインレッスンのみ可、女性生徒のみ可など）から著しく逸脱した条件でレッスンを依頼した場合。</li>
<li>(5) レッスン場所として、最寄り駅から徒歩圏内（目安として徒歩10分以内）ではない自宅でのレッスンを依頼し、先生が対応困難と判断した場合（ただし、先生が自宅訪問レッスンを積極的に受け入れている場合は除く）。</li>
<li>(6) その他、生徒側の要求が社会通念上、非合理的または過大であると当社が判断した場合。</li>
</ul>`
        },
        section13: {
          title: "第13条（禁止事項）",
          content: `<p>利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
<ul>
<li>(1) 純粋な語学レッスンのための先生を見つける目的以外で本サービスを利用する行為（例：翻訳・通訳の依頼、外国語でのベビーシッター依頼、外国語を用いた専門分野の家庭教師依頼、宗教・政治活動への勧誘、営業活動、恋愛目的など）。</li>
<li>(2) 当社または第三者の著作権、商標権、プライバシー権、名誉権、その他の権利を侵害する行為、または侵害するおそれのある行為。</li>
<li>(3) 法令または公序良俗に違反する行為。</li>
<li>(4) 先生や他の利用者に対して、暴言、誹謗中傷、脅迫、セクシャルハラスメント、ストーカー行為、その他迷惑となる行為。</li>
<li>(5) レッスン中またはその前後において、先生とアルコールを伴う飲食をする行為（ただし、双方の合意があり、公共の場での食事等、社会通念上相当と認められる範囲を除く）。</li>
<li>(6) 先生が体験レッスンを通常より低い料金設定で行っている場合に、継続的なレッスン受講の意思なく、一度限りのレッスン受講を目的として依頼する行為。</li>
<li>(7) 先生プロフィールに記載されている1時間あたりのレッスン料を下回る金額でのレッスンを要求する行為（1時間未満のレッスンの場合も、1時間あたりの料金を基準とする）。</li>
<li>(8) 異性の先生との初回のレッスンを、公共の場所以外（自宅、ホテル客室など密室性の高い場所）で依頼する行為。2回目以降も、双方の明確な合意がない限り、公共の場所でのレッスンを原則とする。</li>
<li>(9) 本サービスを通じて入手した先生の連絡先情報、その他先生に関する個人情報を、当該先生の許可なく第三者に開示、漏洩、または提供する行為（有償・無償を問わない）。</li>
<li>(10) 利用者自身のユーザー名およびパスワードを第三者に譲渡、貸与、または使用させる行為。</li>
<li>(11) 短期間に多数の異性の先生に対してのみ連絡先入手を申し込み、または連絡を取る行為で、語学学習以外の目的が疑われると当社が合理的に判断した場合。</li>
<li>(12) 当社のサーバーやネットワークシステムに支障を与える行為、またはそのおそれのある行為。</li>
<li>(13) BOT、クローラー、スパイダー等の自動化された手段を用いて本サービスの情報にアクセスする行為。</li>
<li>(14) その他、当社が本サービスの運営上、不適切と判断する行為。</li>
</ul>`
        },
        section14: {
          title: "第14条（サポート）",
          content: `<p>1. 本サービスに関するご質問やサポートは、原則として当社ウェブサイト上の<span class="important">お問い合わせフォームを通じてのみ</span>受け付けます。電話や来訪によるサポートは提供しておりません。</p>
<p>2. 本サービスのシステム利用に関するサポート期間は、<span class="important">システム利用料のお支払い日より60日間</span>とします。期間終了後の問い合わせには対応できない場合があります。</p>
<p>3. 当社は、利用者の識別および管理を、登録メールアドレスおよびお申込み番号によって行います。お問い合わせの際は、これらの情報をお知らせください。いずれかの情報が不明な場合や、登録者本人以外からの問い合わせと判断される場合には、対応できないことがあります。</p>
<p>4. 特定のお申込みに関するお問い合わせは、原則として該当アカウントの登録メールアドレスからのご連絡に対してのみ対応します。</p>
<p>5. レッスン依頼メールに返信がない先生に関するお問い合わせの際、該当する先生のID、メール送信日時、送信元メールアドレス等の必要情報を提供いただけない場合は対応できません。また、当社に対し虚偽の申告（例：実際にはメールを送っていないのに送ったと申告する等）が発覚した場合、一切のサポートを中止し、今後の利用をお断りすることがあります。</p>
<p>6. レッスン以外の目的で先生に連絡したことが発覚した場合、レッスン料を先生に支払わなかった場合、または正当な理由なく約束したレッスンに無断で現れなかった場合などは、サポート期間内であっても一切のサポートを即時に中止し、今後の利用をお断りすることがあります。</p>
<p>7. 特に先生が異性の場合において、先生側からレッスンを断られたり、途中から返信が途絶えたりするケースについては、その理由が先生個人の判断やプライバシーに関わる可能性があるため、当社が詳細な調査や介入を行うことは困難であり、原則として対応できません。</p>
<p>8. 生徒用アカウントに関するサポートは、日本語のみで提供します。</p>`
        },
        section15: {
          title: "第15条（個人情報）",
          content: `<p>1. 当社は、本サービスの利用によって取得した利用者の個人情報を、当社が別途定める「プライバシーポリシー」に従い適切に取り扱います。</p>
<p>2. 利用者は、本サービスを利用する前に、プライバシーポリシーを必ず確認し、その内容に同意した上で本サービスを利用するものとします。</p>
<p>3. 原則として、利用者の個人情報を本人の同意なく第三者に開示または提供することはありません。ただし、法令等に基づき裁判所、警察機関等の公的機関から開示要請があった場合、または人の生命、身体、財産の保護のために必要がある場合で、本人の同意を得ることが困難である場合など、個人情報保護法で認められる場合には、この限りではありません。</p>`
        },
        section16: {
          title: "第16条（知的財産権）",
          content: `<p>1. 本サービスおよび本サービスに関連する一切のコンテンツ（ウェブサイトのデザイン、テキスト、画像、ロゴ、ソフトウェア等を含むがこれらに限られない）に関する著作権、商標権、その他一切の知的財産権は、当社または当社にライセンスを許諾している権利者に帰属します。</p>
<p>2. 利用者は、当社の事前の書面による承諾なしに、これらの知的財産権を複製、送信、譲渡、貸与、翻訳、翻案、改変、転載、または再利用してはならないものとします。</p>
<p>3. 先生がレッスンで使用する教材や、先生が独自に作成したコンテンツに関する知的財産権は、当該先生または正当な権利者に帰属します。生徒は、これらの知的財産権を先生の許可なく不適切に利用してはなりません。</p>`
        },
        section17: {
          title: "第17条（免責事項）",
          content: `<p>1. 当社は、本サービスが提供する情報（先生のプロフィール情報、他の利用者からの口コミ情報等を含むがこれらに限られない）の完全性、正確性、最新性、有用性、信頼性、適法性、特定目的への適合性等について、<span class="important">いかなる保証も行うものではありません。</span></p>
<p>2. 当社は、本サービスが利用者の期待するレベルの語学力向上や、特定の試験合格等の目的達成を保証するものではありません。</p>
<p>3. 当社は、先生が提供するレッスンの内容、質、スケジュール、料金、その他レッスンに関する一切の事項について保証するものではなく、何らの責任も負いません。<span class="important">レッスンに関するトラブルや紛争は、生徒と先生の当事者間で解決するものとします。</span></p>
<p>4. 当社は、本サービスの提供にあたり、システムのバグ、エラー、中断、遅延、データの消失・破損、第三者による不正アクセスやデータの改ざん・流出等が生じないことを保証するものではありません。</p>
<p>5. 利用者は、自己の責任と費用において、本サービスを利用するために必要な通信機器、ソフトウェア、インターネット接続環境等を準備し、維持するものとします。通信環境の障害等に起因する問題について、当社は責任を負いません。</p>
<p>6. 本サービスの利用に起因して、または本サービスを利用できなかったことに起因して、利用者または第三者に何らかの損害（直接損害、間接損害、派生損害、逸失利益等を含むがこれらに限られない）が発生した場合であっても、当社は、<span class="important">当社の故意または重過失による場合を除き、一切の賠償責任を負わないものとします。</span></p>
<p>7. 前項の規定にかかわらず、消費者契約法その他の法令の適用により、当社の損害賠償責任を免責する規定が無効とされる場合、当社は、利用者に現実に生じた通常の損害の範囲内においてのみ、かつ、当該損害の原因となったシステム利用料の額を上限として、賠償責任を負うものとします。</p>`
        },
        section18: {
          title: "第18条（当社の権利・サービスの停止・変更・終了）",
          content: `<p>1. 登録中の先生から特定の利用者に関する照会があった場合、当社は、必要に応じて当該利用者の登録状況や利用履歴の一部（ただし、個人情報保護法を遵守する範囲で）を当該先生に報告できるものとします。</p>
<p>2. 当社は、利用者間のトラブル解決を促進するため、または本サービスの健全な運営のために必要と判断した場合、利用者の氏名および登録メールアドレスを、当該利用者が連絡を取っている、または取ろうとしている相手方の先生または生徒に伝えることがあります。</p>
<p>3. 先生と生徒の間でトラブルが発生した場合、当社は、当社の判断で当該先生の登録を一時停止または抹消することがありますが、利用者が当社に対して特定の先生への対処（登録抹消、指導等）を要求する権利を有するものではありません。また、当社はその措置の理由を開示する義務を負いません。</p>
<p>4. 利用者が本規約に違反したと当社が判断した場合、または利用者の登録情報に虚偽がある、もしくはその可能性があると当社が判断した場合、当社は、事前の通知または催告なしに、当該利用者に対する本サービスの全部または一部の提供を停止し、または利用者アカウントを削除することができるものとします。この場合、利用者は本サービスに関する一切の権利を失い、支払済みのシステム利用料等の返金も行われません。</p>
<p>5. 当社は、以下のいずれかの事由が生じた場合、利用者に事前に通知することなく、本サービスの全部または一部の提供を一時的に停止することができるものとします。</p>
<ul>
<li>(1) 本サービス用設備の保守または工事のため、やむを得ない場合。</li>
<li>(2) 天災、地変、火災、停電、戦争、暴動、テロ、その他不可抗力により、本サービスの提供ができなくなった場合。</li>
<li>(3) その他、運用上または技術上、当社が本サービスの一時的な停止が必要と判断した場合。</li>
</ul>
<p>6. 当社は、経営上の判断や事業戦略の変更等により、利用者に1ヶ月前までに通知することにより、本サービスの全部または一部を恒久的に変更または終了することができるものとします。ただし、緊急の場合はこの限りではありません。この場合、当社は利用者に対していかなる責任も負わないものとします。</p>`
        },
        section19: {
          title: "第19条（反社会的勢力の排除）",
          content: `<p>1. 利用者は、自身が暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋、社会運動等標榜ゴロ、特殊知能暴力集団その他これらに準ずる者（以下総称して「反社会的勢力」といいます）に該当しないこと、および次の各号のいずれにも該当しないことを表明し、かつ将来にわたっても該当しないことを確約します。</p>
<ul>
<li>(1) 反社会的勢力が経営を支配していると認められる関係を有すること。</li>
<li>(2) 反社会的勢力が経営に実質的に関与していると認められる関係を有すること。</li>
<li>(3) 自己、自社もしくは第三者の不正の利益を図る目的または第三者に損害を加える目的をもってするなど、不当に反社会的勢力を利用していると認められる関係を有すること。</li>
<li>(4) 反社会的勢力に対して資金等を提供し、または便宜を供与するなどの関与をしていると認められる関係を有すること。</li>
<li>(5) 役員または経営に実質的に関与している者が反社会的勢力と社会的に非難されるべき関係を有すること。</li>
</ul>
<p>2. 利用者は、自らまたは第三者を利用して次の各号の一にでも該当する行為を行わないことを確約します。</p>
<ul>
<li>(1) 暴力的な要求行為。</li>
<li>(2) 法的な責任を超えた不当な要求行為。</li>
<li>(3) 取引に関して、脅迫的な言動をし、または暴力を用いる行為。</li>
<li>(4) 風説を流布し、偽計を用いまたは威力を用いて当社の信用を毀損し、または当社の業務を妨害する行為。</li>
<li>(5) その他前各号に準ずる行為。</li>
</ul>
<p>3. 当社は、利用者が反社会的勢力に該当し、もしくは前二項各号のいずれかに該当する、またはそのおそれがあると判断した場合、事前の通知または催告なしに、当該利用者に対する本サービスの全部または一部の提供を停止し、または利用者アカウントを削除することができるものとします。この場合、利用者は本サービスに関する一切の権利を失い、支払済みのシステム利用料等の返金も行われません。また、当社はかかる解除によって利用者に生じた損害について、一切の賠償責任を負わないものとします。</p>`
        },
        section20: {
          title: "第20条（損害賠償）",
          content: `<p>1. 利用者が本規約に違反したことにより、または本サービスの利用に関連して、当社または第三者（他の利用者を含む）に損害を与えた場合、当該利用者はその損害（弁護士費用を含む）を賠償する責任を負うものとします。</p>`
        },
        section21: {
          title: "第21条（分離可能性）",
          content: `<p>本規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定および一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。</p>`
        },
        section22: {
          title: "第22条（準拠法および管轄裁判所）",
          content: `<p>1. 本規約および本サービスの利用に関する準拠法は、日本法とします。</p>
<p>2. 本規約または本サービスの利用に関して、利用者と当社との間で紛争が生じた場合、協議により円満解決を図るものとしますが、協議によって解決できない場合は、<span class="important">東京簡易裁判所または東京地方裁判所</span>を第一審の専属的合意管轄裁判所とします。</p>`
        },
        section23: {
          title: "第23条（補足）",
          content: `<p>1. 本サービスをご利用いただくにあたり、本規約と併せて、当サイトの「よくある質問（FAQ）」ページも必ずお読みいただき、本サービスのシステムおよび内容について十分にご理解いただいた上でお申込みください。</p>
<p>2. 本規約は、当社の運営方針の変更、法令の改正、社会情勢の変化等により、予告なしに改正される場合があります。変更後の本規約は、本ページ（本サービスサイト内の利用規約掲載ページ）に掲載された時点で効力を生じるものとし、当該掲載を以って利用者への告知とします。利用者は、定期的に本ページを確認し、最新の利用規約に同意の上、本サービスを利用するものとします。</p>`
        },
        footerEnd: "以上",
        effectiveDate: "[施行日：2025年5月25日]"
      },
      nav_are_you_new: "はじめての方へ",
      nav_first_time_users: "初めての方へ",
      nav_login: "ログイン",
      nav_faq: "よくある質問",
      nav_tips_for_finding: "日本で生徒を見つけるコツ",
      nav_example_email: "メール文例",
      stnav_teacher_site: "生徒用サイト",
      nav_contact: "お問い合わせ",
      menu: "メニュー",
      techerhero_title: "あなたの言語を日本で教えましょう。",
      Teacherhero_subtitle: "あなたのやり方で。<1>無料で。</1>",
      techerhero_description: "何千人もの熱心な学習者とつながり、あなたの情熱を共有しましょう。今すぐOuchi Senseiで無料の教師プロフィールを作成！",
      hero_cta: "▶今すぐ無料で教師プロフィールを作成！",
      hero_note: "所要時間は10〜15分！クレジットカード不要。",
      what_is_title: "Ouchi Senseiとは？",
      what_is_subtitle: "日本で教えるためのゲートウェイ。空き時間を有意義に使い、語学講師として副収入を得ましょう！",
      feature_free: "先生は完全無料",
      feature_free_desc: "プロフィール作成、レッスン掲載、生徒との連絡がすべて無料・手数料なしで利用できます。",
      feature_direct: "直接連絡",
      feature_direct_desc: "生徒と直接やり取りして、レッスン日程や内容を自由に決められます。",
      feature_nationwide: "全国対応",
      feature_nationwide_desc: "東京・大阪など全国どこでも、あなたを探している生徒がいます。",
      why_choose_title: "Ouchi Senseiを選ぶ理由",
      why_choose_subtitle: "あなたの成功のために設計されたプラットフォームで、教える力を最大限に発揮しましょう。",
      choose_rate: "料金は自分で設定",
      choose_rate_desc: "レッスン料金は自分で決めて、収入を最大化できます。",
      choose_flexible: "柔軟なスケジュール",
      choose_flexible_desc: "都合の良い時・場所で教えられます（オンライン・対面両方対応）。",
      choose_style: "あなたの教え方で",
      choose_style_desc: "レッスン内容は自由に設計。厳しいルールはありません。",
      choose_setup: "簡単プロフィール作成",
      choose_setup_desc: "数分でプロフィール公開、生徒を集めましょう。",
      choose_payment: "直接支払い",
      choose_payment_desc: "生徒から直接支払い。手数料は一切かかりません。",
      choose_any_language: "どんな言語でも教えられる",
      choose_any_language_desc: "英語、スペイン語、中国語、フランス語など、さまざまな言語に対応！",
      get_started_title: "3ステップで簡単スタート",
      get_started_subtitle: "Ouchi Senseiへの登録と生徒探しはとても簡単です。",
      step1_title: "無料アカウント作成",
      step1_desc: "基本情報でサインアップ。簡単・迅速・完全無料（約5分）",
      step2_title: "プロフィール作成",
      step2_desc: "スキル・経験・料金・空き状況をアピール（約10分）",
      step3_title: "生徒とつながる！",
      step3_desc: "プロフィール公開（通常24時間以内）。生徒から直接連絡が来ます。",
      opportunities_title: "日本全国で教えるチャンス",
      opportunities_subtitle: "東京の賑やかな街から京都の歴史的な寺院まで、全国各地でチャンスが広がっています！Ouchi Senseiは主要都市・地域の生徒とあなたをつなぎます。",
      opportunities_explore: "東京、横浜、大阪、京都、名古屋、札幌、福岡など、さまざまな場所で教えるチャンス！",
      opportunities_online: "オンラインレッスンもOK！",
      opportunities_online_desc: "対面レッスン希望の生徒が多いですが、オンラインレッスンも提供可能。自宅から全国の生徒に教えられます。",
      teach_languages_title: "多様な言語を教えられる",
      teach_languages_subtitle: "これらの言語以外も大歓迎！日本の生徒は学びたがっています。",
      teach_languages_and_others: "他にも多数！あなたが教えられる言語を待っている生徒がきっといます。",
      demand_title: "熱意ある先生が求められています",
      demand_short: "日本では熱心な語学教師の需要が非常に高いです。プロ経験も大切ですが、親しみやすさや効果的な指導法も重視されます。",
      demand_read_more: "続きを読む",
      demand_long: "日本では熱心な語学教師の需要が非常に高いです。プロ経験も大切ですが、親しみやすさや効果的な指導法も重視されます。資格がなくても、情熱や生徒との信頼関係があれば成功できます。サポート精神や学びを助けたい気持ちも大切です。",
      demand_long2: "必ずしも学位や資格は必要ありません。言語への情熱、優れたコミュニケーション力、サポート精神があれば、Ouchi Senseiでやりがいのある講師活動ができます。",
      demand_read_less: "閉じる",
      demand_cta: "▶スキルをシェア - 無料で参加！",
      faq_title: "よくある質問",
      faq_subtitle: "疑問はありませんか？よくあるご質問をまとめました。",
      faq_q1: "Ouchi Senseiは本当に無料ですか？",
      faq_a1: "はい、完全無料です！プロフィール作成、サービス掲載、生徒との連絡はすべて無料。登録料・手数料・隠れた費用は一切ありません。",
      faq_q2: "講師になるのに資格は必要ですか？",
      faq_a2: "TEFLやTESOLなどの資格があれば有利ですが、必須ではありません。ネイティブや流暢な話者で、教える情熱とコミュニケーション力があれば大歓迎。資格・経験はプロフィールに明記してください。",
      faq_q3: "報酬の受け取り方法は？",
      faq_a3: "生徒と直接支払い条件を決めてください。Ouchi Senseiは支払いに関与しないため、報酬は全額受け取れます。",
      faq_q4: "オンラインで教えられますか？",
      faq_a4: "はい！対面・オンライン両方対応可能。プロフィールで選択できます。全国の生徒にアプローチできます。",
      faq_q5: "プロフィールはどれくらいで公開されますか？",
      faq_a5: "プロフィール送信後、運営が審査します。通常24〜48時間で承認・公開されます。",
      signup_title: "日本での講師デビュー、今すぐ始めませんか？",
      signup_subtitle: "あなたの生徒が待っています。自分のペースでスキルを活かし、収入を得るチャンスを逃さないでください。",
      signup_cta: "▶今すぐ無料で教師プロフィールを作成！",
      signup_note: "日本で活躍する先生が続々参加中！",
      footer_terms: "利用規約",
      footer_company: "会社概要",
      footer_contact: "お問い合わせ",
      footer_copyright: "© 2025 おうち先生. 無断転載を禁じます。",
      language_english: "英語",
      language_chinese: "中国語",
      language_korean: "韓国語",
      language_french: "フランス語",
      language_spanish: "スペイン語",
      language_german: "ドイツ語",
      language_italian: "イタリア語",
      language_portuguese: "ポルトガル語",
      language_russian: "ロシア語",
      language_tagalog: "タガログ語",
      language_vietnamese: "ベトナム語",
      language_indonesian: "インドネシア語",
      language_myanmar: "ミャンマー語",
      language_philippines: "フィリピン語",
      language_taiwanese: "台湾語",
      language_arabic: "アラビア語",
      // --- TeacherFindingStudents Page ---
      tfs_title: "日本での教師としての可能性を広げよう！",
      tfs_subtitle: "生徒を惹きつけ、充実した講師キャリアを築くためのプロのコツを紹介します。",
      tfs_cta: "成功の7つの鍵を見る",
      tfs_why_title: "なぜこのコツが重要なのか",
      tfs_why_body: "競争の激しい市場では、よく作り込まれたプロフィールが最強の武器です。単なる掲載情報ではなく、日本の生徒にとってのあなたの自己紹介です。人気講師は明確さ・プロ意識・生徒理解を常に示しています。このガイドであなたのプロフィールも魅力的に変身させましょう！",
      tfs_keys_title: "魅力的なプロフィールの7つの鍵",
      tfs_keys_subtitle: "各ポイントをクリックすると詳細アドバイスが表示されます。シンプルな掲載から、学びへの招待状に変えましょう！",
      tfs_considerations_title: "注意事項",
      tfs_considerations_profile: "定期的な更新は推奨しますが、<1>検索結果の上位表示だけを目的に短期間で何度も（例：1日に数回）プロフィールを更新するのはご遠慮ください。</1> このような行為はフラグが立ち、一時的に非公開となる場合があります。意味のある月1回程度の更新が最適です。",
      tfs_considerations_authentic: "あなたらしさをプロフィールで表現しましょう。誠実さは信頼を生み、あなたに合った生徒と出会えます。",
      tfs_considerations_culture: "日本のコミュニケーション文化を理解し尊重することで、生徒との関係がより良好で強固になります。",
      tfs_next_title: "もっと多くの生徒を集めませんか？",
      tfs_next_body: "これで素晴らしいプロフィール作成のコツはバッチリです！少しの工夫で、やりがいのある講師活動と素敵な生徒との出会いが待っています。",
      tfs_next_update: "今すぐプロフィールを更新！",
      tfs_next_register: "初めての方はこちら（講師登録）",
      tfstips: [
        {
          icon: "📷",
          title: "キー1: プロフェッショナルな写真の力",
          question: "あなたのプロフィール写真は良い第一印象を与えていますか？",
          crucialInfo: "鮮明で親しみやすく、プロフェッショナルな写真は、あなたのプロフィールに人間味を与えます。生徒が安心して連絡しやすくなります。写真付きプロフィールは閲覧される確率が大幅に高まります。",
          actionSteps: [
            "最近撮影した高画質な写真をアップロードしましょう。",
            "顔がはっきり見える明るい写真を選びましょう。",
            "自然な笑顔が大きな印象を与えます。",
            "サングラス、集合写真、カジュアルすぎる場所での写真は避けましょう。"
          ],
          note: "<em>写真のアップロードで問題があれば、お問い合わせフォームからご連絡ください。サポートいたします！</em>",
          actionable_steps: "実践ステップ："
        },
        {
          icon: "💰",
          title: "キー2: 戦略的なレッスン料金設定",
          question: "あなたのレッスン料金は競争力があり、妥当ですか？",
          crucialInfo: "料金は多くの生徒にとって重要な要素です。高すぎると敬遠され、安すぎると価値が伝わりません。",
          actionSteps: [
            "自分の言語・経験レベルの平均相場を調べましょう。例：英語のマンツーマンは多くの日本人生徒が1時間あたり<strong>2,500～3,500円</strong>を想定しています。",
            "資格・経験・自分の強みを考慮しましょう。",
            "『自分が生徒なら、このレッスンにいくら払うか？』と考えてみましょう。",
            "1時間あたりの料金を明記しましょう。"
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "🚉",
          title: "キー3: 駅選択で露出を最大化",
          question: "通えるすべてのエリアで生徒にアプローチできていますか？",
          crucialInfo: "多くの日本人生徒は利便性から特定の駅で先生を探します。当サイトは主要エリアごとに駅別ページを用意しています（関東：東京・神奈川・千葉・埼玉、関西：大阪・兵庫・京都・奈良など）。",
          actionSteps: [
            "本当に通えるすべての駅を<strong>選択</strong>しましょう。",
            "選択した駅が多いほど、プロフィールの露出が広がります（サイト内・検索エンジン両方）。",
            "移動時間や交通費も現実的に考慮しましょう。"
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "📝",
          title: "キー4: 魅力的な自己紹介文を作成（まずは日本語で！）",
          question: "あなたのプロフィールは先生としての魅力を伝えていますか？",
          crucialInfo: "日本人生徒はプロフィールをとてもよく読みます。人柄・指導スタイル・経験を知りたいのです。ありきたりや未記入はスルーされがちです。",
          actionSteps: [
            "<strong>日本語で書く、または日本語バージョンを必ず用意</strong>しましょう。完璧でなくても努力は伝わります。翻訳ツール＋日本語話者のチェックもおすすめ。",
            "基本情報だけでなく、すべての項目をしっかり埋めましょう。",
            "『生徒へのメッセージ』欄には、",
            "  <ul class='list-disc list-inside ml-4'><li>指導方針や情熱</li><li>経歴や経験</li><li>趣味や興味（親近感UP）</li><li>レッスンで得られること</li></ul>",
            "『みなさん、連絡お待ちしています！』のような一般的な表現は避け、具体的に書きましょう。"
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "🧑‍🏫",
          title: "キー5: あなた独自のレッスンスタイルを明記",
          question: "生徒はあなたのレッスンの雰囲気をイメージできていますか？",
          crucialInfo: "指導方法や教材を明確に伝えることで、生徒が自分に合うか判断しやすくなります。",
          actionSteps: [
            "普段どのようにレッスンを進めるか説明しましょう。",
            "使用教材（テキスト・ネット教材・オリジナル・ニュース・動画など）を明記しましょう。",
            "会話・文法・語彙などの配分や進め方も伝えましょう。",
            "カスタマイズレッスンの有無も記載しましょう。",
            "ビジネス英語・試験対策・会話特化など、専門分野があれば明記しましょう。"
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "🔄",
          title: "キー6: プロフィールを常に新鮮＆アクティブに",
          question: "最後にログイン・更新したのはいつですか？",
          crucialInfo: "プロフィールを更新すると『Updated』マークが4週間表示されます。アクティブな先生は生徒に好印象。90日以上未更新のプロフィールは一時的に非表示となります。",
          actionSteps: [
            "定期的にログインし、月1回は何かしら更新しましょう（例：文章の言い回し変更や新しい空き時間追加など）。",
            "生徒・システム両方にアクティブさをアピールできます。"
          ],
          note: null,
          actionable_steps: "実践ステップ："
        },
        {
          icon: "💬",
          title: "キー7: 生徒からの連絡には迅速＆丁寧に対応",
          question: "問い合わせに素早く、丁寧に返信できていますか？",
          crucialInfo: "生徒から連絡が来たら、迅速かつ丁寧な返信が大切です。誠実さ・熱意・信頼感が伝わります。返信が遅いとチャンスを逃すことも。",
          actionSteps: [
            "メッセージは毎日チェックしましょう。",
            "生徒からの問い合わせには24時間以内の返信を心がけましょう。",
            "『ご連絡ありがとうございます。後ほど詳しく返信します』など、簡単な返事でも早めに送りましょう。",
            "常に親切・丁寧・プロ意識を持って対応しましょう。"
          ],
          note: null,
          actionable_steps: "実践ステップ："
        }
      ],
      tfs_important_title: "注意事項",
      tfs_considerations_profile_title: "プロフィール更新について：",
      tfs_considerations_authentic_title: "自分らしさを大切に：",
      tfs_considerations_culture_title: "文化的な違いを尊重：",
      tfs_actionable_steps: "実践ステップ：",
      "teacherfaq": {
        "hero": {
          "imageAlt": "Ouchi-Sensei.comで教師が協力し、学生が学ぶ",
          "title": "あなたの質問にお答えします",
          "description": "日本でOuchi-Sensei.comを使って言語を教えるために必要なすべての情報をご覧ください。私たちはあなたの成功をサポートします！",
          "ctaButton": "今すぐ教える"
        },
        "gettingStarted": {
          "title": "開始とプロフィール",
          "description": "このセクションでは、Ouchi-Sensei.comでアカウントの作成、教師プロフィールの設定、その他の初期の考慮事項について説明します。",
          "q1": {
            "question": "アカウントと教師プロフィールはどのように作成しますか？",
            "answer": {
              "part1": "まず、",
              "register": "登録",
              "part2": "してください。アカウントを作成したら、アカウントページの",
              "editProfile": "プロフィール編集ページ（ログインしてください）",
              "part3": "セクションで教師プロフィールを作成できます。"
            }
          },
          "q2": {
            "question": "教師プロフィールを公開するには、日本にどのくらい滞在する予定が必要ですか？",
            "answer": {
              "part1": "教師プロフィールを公開するには、日本に",
              "duration": "少なくとも60日間"
            }
          },
          "q3": {
            "question": "チューターになるために必要な資格は何ですか？",
            "answer": "Ouchi-Sensei.comでチューターになるために特定の資格は必要ありません。ただし、指導経験や関連する認定資格があると、より多くの生徒を引き付けることができます。"
          },
          "q4": {
            "question": "日本語を全く話せません。それでも登録できますか？",
            "answer": "もちろんです、ぜひご登録ください。日本の生徒のほとんどは会話スキルを向上させる教師を探しているため、教える言語で会話することができます。"
          },
          "q5": {
            "question": "教師プロフィールはどこで、いつ公開されますか？",
            "answer": {
              "part1": "あなたの教師プロフィールは、",
              "studentsPage": "生徒ページ",
              "part2": "に通常提出後24時間以内に公開されます。そして、教師検索結果に",
              "duration": "最終更新後90日間"
            }
          },
          "q6": {
            "question": "より多くの生徒を引き付けるために教師プロフィールを改善するにはどうすればいいですか？",
            "answer": {
              "part1": "より多くの生徒を引き付けるには、プロフィールが完全で最新であることを確認してください。指導経験、教授法、特別なスキルや資格の詳細を含めてください。写真や魅力的な自己紹介を追加することも、プロフィールをより魅力的にします。",
              "tipsPage": "こちらのページ",
              "part2": "で、生徒を見つけるための追加のヒントを提供しています。"
            }
          },
          "q7": {
            "question": "Ouchi-Sensei.comからビザを取得できますか？",
            "answer": "いいえ。私たちは生徒を見つける機会を提供するオンラインマッチングサービスのみを提供しています。"
          }
        },
        "lessonsTeaching": {
          "title": "レッスンと指導",
          "description": "レッスンの場所、料金、期間、提供方法に関する情報。",
          "q1": {
            "question": "レッスンはどこで行われますか？",
            "answer": "レッスンは通常、駅近くのカフェなどの公共の場所で行われます。特に生徒が異性の場合や、お互いを知るまでは、公共の場でレッスンを行ってください。アルコールを含むレッスンは禁止されています。"
          },
          "q2": {
            "question": "1回のレッスンでいくら請求すべきですか？",
            "answer": {
              "part1": "これはあなたの裁量によります。アカウントページの",
              "editProfile": "プロフィール編集ページ（ログインしてください）",
              "part2": "セクションで、適切と思う料金を選択できます。教師と生徒がレッスン開始前に料金を確認することをお勧めします。"
            }
          },
          "q3": {
            "question": "複数回のレッスンで割引を提供しています。生徒にどうやって知らせますか？",
            "answer": "現在、Ouchi-Sensei.comのレッスン料金フィールドはすべて時間単位です。別の料金体系がある場合は、教師プロフィールの「生徒へのメッセージ」フィールドに料金の詳細を記載してください。"
          },
          "q4": {
            "question": "レッスンの時間が1時間ではなく、システムは時間単位の料金しか許可していません。",
            "answer": "Ouchi-Sensei.comのレッスン料金フィールドは現在、時間単位の料金に基づいて設定されています。レッスンの時間や料金体系が異なる場合は、レッスン料金フィールドで時間換算の料金を選択し、「生徒へのメッセージ」フィールドで実際の価格詳細を明確に説明してください。"
          }
        },
        "connectingStudents": {
          "title": "生徒とのつながり",
          "description": "生徒があなたに連絡する方法、おすすめ、初期のコミュニケーションの処理に関する詳細。",
          "q1": {
            "question": "生徒はどのように私に連絡しますか？",
            "answer": {
              "part1": "生徒は通常、あなたの連絡先情報を取得した後、登録されたメールアドレスにメールを送信して初めて連絡します。プロフィールページで生徒が追加の連絡先情報にアクセスすることを許可している場合、電話などの他の手段を使用する場合もあります。",
              "contactUs": "お問い合わせ",
              "part2": "※レッスンリクエストのメールが自動的にスパムまたはジャンクメールボックスに分類される場合があるため、定期的に確認してください。"
            }
          },
          "q2": {
            "question": "連絡してきた生徒がOuchi-Sensei.comのメンバーかどうかをどうやって確認できますか？",
            "answer": {
              "part1": "生徒の名前とメールアドレスを",
              "contactUs": "お問い合わせ",
              "part2": "フォームでご連絡ください。できるだけ早く確認してご連絡いたします。"
            }
          },
          "q3": {
            "question": "情報が少ない生徒から連絡がありました。彼/彼女に会うべきですか？",
            "answer": {
              "part1": "生徒に直接、彼/彼女についてもっと尋ねることができます。特に生徒が異性の場合、快適でない場合は、プライベートレッスンのためリクエストを断ることができます。疑わしい人物を見つけた場合は、",
              "contactUs": "お問い合わせ",
              "part2": "フォームを使用して報告してください。"
            }
          },
          "q4": {
            "question": "生徒が私を推薦するにはどうすればいいですか？（おすすめ機能）",
            "answer": "Ouchi-Sensei.comには、プラットフォームを通じて教師の連絡先情報をリクエストした生徒が教師を推薦できる「おすすめ」機能があります。推薦した生徒の数が表示されます。「おすすめ」ボタンは、連絡先情報をリクエストした生徒にのみプロフィールに表示されます。推薦するには、生徒はログインしてあなたのプロフィールページを訪れる必要があります。"
          }
        },
        "paymentsFees": {
          "title": "支払いと料金",
          "description": "Ouchi-Sensei.comの使用コストと生徒からの支払い受取方法に関する情報。",
          "q1": {
            "question": "この教師-生徒マッチングサービスの費用はいくらですか？",
            "answer": {
              "part1": "無料です。教師には",
              "freeForTeachers": "完全に無料"
            }
          },
          "q2": {
            "question": "どのように支払いを受けますか？",
            "answer": {
              "part1": "生徒は",
              "paymentMethod": "各レッスンの終了時に現金で",
              "part2": "支払います。注：教師は生徒に前払いを求めないでください。"
            }
          }
        },
        "rulesSupportAccount": {
          "title": "プラットフォームルール、サポート、アカウント管理",
          "description": "プラットフォームルール、可用性の管理、アカウント設定、サポートの取得方法に関するガイダンス。",
          "q1": {
            "question": "プラットフォームでの可用性をどのように更新しますか？",
            "answer": {
              "part1": "アカウントにログインし、",
              "editProfile": "プロフィール編集ページ",
              "part2": "に移動して、指導可能な時間と場所を指定できます。"
            }
          },
          "q2": {
            "question": "技術的な問題に遭遇した場合、どうすればいいですか？",
            "answer": {
              "part1": "技術的な問題が発生した場合は、",
              "contactUs": "お問い合わせ",
              "part2": "フォームを通じてサポートチームにご連絡ください。迅速に対応いたします。"
            }
          }
        },
        "cta": {
          "title": "言語スキルを共有する準備はできていますか？",
          "description": "Ouchi-Sensei.comの才能ある言語教師のコミュニティに参加し、今日から日本で生徒とのつながりを始めましょう。上の質問で回答が見つからなかった場合、サポートチームが対応します。",
          "registerButton": "教師として登録",
          "contactButton": "サポートに連絡"
        }
      },
      "teacherterms": {
        "header": {
          "siteName": "Ouchi-Sensei.com",
          "title": "対話型利用規約",
          "description": "ようこそ！このページでは「言語教師のための利用規約」をご紹介します。すべてのセクションを読むために下にスクロールしてください。",
          "lastUpdated": "最終更新日: {date}"
        },
        "section1": {
          "title": "1. 定義",
          "description": "このセクションでは、契約全体で使用される主要な用語の意味を明確にし、共通の理解を確保します。",
          "definitions": {
            "service": "「サービス」",
            "serviceDescription": "Ouchi-Sensei.comが提供する、言語教師と潜在的な生徒を言語レッスンでつなぐオンラインプラットフォームを指します。",
            "teacher": "「言語教師」（または「教師」、「あなた」、「あなたの」）",
            "teacherDescription": "サービスに登録して生徒に言語指導サービスを提供する個人。",
            "student": "「生徒」",
            "studentDescription": "サービスを利用して言語教師を見つける個人。",
            "ouchiSensei": "「Ouchi-Sensei.com」（または「私たち」、「当社」、「我々」）",
            "ouchiSenseiDescription": "ウェブサイトの運営者およびサービスの提供者。",
            "profile": "「プロフィール」",
            "profileDescription": "言語教師がサービス上で生徒を引き付けるために表示する情報。",
            "userContent": "「ユーザーコンテンツ」",
            "userContentDescription": "ユーザーが提出したコンテンツで、テキスト、画像、プロフィール内の情報を含むがこれに限定されません。"
          }
        },
        "section2": {
          "title": "2. サービスについて",
          "description": "このセクションでは、Ouchi-Sensei.comが提供するサービスの目的、範囲、適格性、性質について説明します。",
          "purpose": {
            "title": "2.1. 目的",
            "description": "サービスは、教師が指導サービスを記載したプロフィールを作成および公開することで、日本で言語教師と生徒をつなぐことを目的としています。"
          },
          "scope": {
            "title": "2.2. 範囲",
            "description": "サービスは主に、日本国内での言語トレーニングの品質と手頃な価格を向上させることを目的としています。"
          },
          "eligibility": {
            "title": "2.3. 適格性",
            "description": "サービスは日本に居住する個人のみに利用可能です。"
          },
          "nature": {
            "title": "2.4. サービスの性質",
            "description": "Ouchi-Sensei.comは中立的なプラットフォームとして機能します。私たちは採用代理店や人事サービス代理店ではありません。言語教師と生徒間の契約や取引に直接参加したり、当事者となることはありません。言語レッスンに関するすべての契約上の取り決めは、教師と生徒の間でのみ行われます。Ouchi-Sensei.comは、レッスンの内容、スケジュール、支払い、または教師と生徒の間の相互作用の他の側面について責任を負いません。"
          }
        },
        "section3": {
          "title": "3. 言語教師の適格性",
          "description": "このセクションでは、言語教師としてサービスに登録および使用するために個人が満たす必要がある具体的な基準を概説します。",
          "intro": "言語教師としてサービスに登録および使用するには、以下の基準を満たす必要があります：",
          "residency": {
            "title": "3.1. 居住および労働許可",
            "items": {
              "passport": "日本に居住を許可する有効なパスポートとビザを所持していること。",
              "registrationCard": "有効な外国人登録証（または在留カード/永住者カード）を所持しているか、日本国籍/国民であること。",
              "workAuthorization": "日本で労働または報酬を得る活動に従事することを法的に許可する有効なビザまたは許可（例：適切な労働ビザ、配偶者ビザでの労働許可、日本国籍）を所持していること。日本の移民法を遵守する責任はあなたにあります。"
            }
          },
          "minimumStay": {
            "title": "3.2. 最小滞在期間",
            "description": "プロフィールがサービス上で公開された日から少なくとも60日間連続して日本に物理的に滞在する予定であること。"
          },
          "availability": {
            "title": "3.3. 利用可能性",
            "description": "レッスンに対応可能であり、プロフィールで選択した地理的エリアに、プロフィール公開日から少なくとも60日間連続して滞在する予定であること。"
          },
          "individualTeachers": {
            "title": "3.4. 個人教師のみ",
            "description": "サービスは個人の言語教師向けです。語学学校、代理店、または組織が提供する事前に手配されたグループレッスンは登録できません。"
          }
        },
        "section4": {
          "title": "4. 使用目的",
          "description": "このセクションでは、サービスの許容される使用を定義し、許可されていない活動を列挙します。",
          "legitimateUse": {
            "title": "4.1. 正当な使用",
            "description": "あなたは、日本で言語レッスンの生徒を本気で真剣に探す目的でのみサービスを使用することに同意します。"
          },
          "prohibitedUses": {
            "title": "4.2. 禁止された使用",
            "intro": "あなたは、以下を含むがこれに限定されない他の目的でサービスを使用してはなりません：",
            "items": {
              "otherServices": "言語レッスン以外のサービスの勧誘。",
              "promotingBusinesses": "他のビジネスやウェブサイトの宣伝。",
              "illegalActivities": "違法、不道徳、または詐欺的な活動。",
              "harassment": "ハラスメント、差別、または不適切なコミュニケーションの任何の形態。"
            }
          }
        },
        "section5": {
          "title": "5. サービス料金とレッスン料金",
          "description": "このセクションでは、教師に対するサービス料金、プラットフォームと教師の雇用関係の性質、レッスン料金の透明性に関するルールについて詳述します。",
          "serviceFee": {
            "title": "5.1. 教師向けサービス料金",
            "description": "Ouchi-Sensei.comは現在、言語教師がサービスに登録したり、基本機能を使用して生徒とつながるために料金を請求していません。将来、セクション14（規約の変更）に記載されているように、事前通知をもって料金を導入または既存の料金ポリシーを変更する権利を留保します。"
          },
          "noEmployment": {
            "title": "5.2. 雇用関係の不存在",
            "description": "あなたは独立した請負業者であり、Ouchi-Sensei.comの従業員、エージェント、パートナー、または合弁事業者ではないことを認めます。雇用給付を受ける権利はありません。"
          },
          "lessonPayments": {
            "title": "5.3. レッスン支払い",
            "description": "言語教師は生徒から直接レッスン料金を受け取ります。Ouchi-Sensei.comはこれらの金銭取引に関与しません。支払いの条件（例：料金、方法、タイミング）は、教師と生徒が直接合意する必要があります。"
          },
          "feeTransparency": {
            "title": "5.4. 料金の透明性",
            "items": {
              "noUpfrontFees": "入学金、複数レッスンの事前支払い（生徒と明確に合意した定められたブロックを除く）、または生徒を縛る強制的な月額/年額料金構造を必要とするレッスンを宣伝することは禁止されています。都度払いまたはレッスンごと/少数のレッスンブロックごとの支払いが推奨されます。",
              "feeConsistency": "プロフィールに表示されるレッスン料金（および教材や交通費などの他の開示された料金）と、生徒に実際に請求される金額に相違があってはなりません。",
              "updateNotice": "レッスン料金やその他の追加料金を変更する場合、プロフィールを速やかに更新し、現在の生徒に合理的な通知を提供する必要があります。"
            }
          }
        },
        "section6": {
          "title": "6. 言語教師が提供する情報",
          "description": "このセクションでは、言語教師が提供する情報の取り扱い方法、公開される情報、保護される情報、生徒と共有される情報、および情報の正確性に対する教師の責任について説明します。",
          "publicInfo": {
            "title": "6.1. 公開される情報",
            "description": "言語教師のプロフィールに提供されるほとんどの情報（例：名、指導経験、資格、レッスンの詳細、指導場所、写真）は、Ouchi-Sensei.comのウェブサイトで公開され、サービスとプラットフォームの宣伝のためにそのソーシャルネットワークアカウントを通じて共有される場合があります。"
          },
          "protectedInfo": {
            "title": "6.2. 保護される情報",
            "description": "あなたの姓、完全な住所、個人電話番号、主要なメールアドレスは、プロフィール上で公開されません。"
          },
          "sharedInfo": {
            "title": "6.3. 生徒と共有される情報",
            "items": {
              "emailLastName": "サービスを通じてあなたに連絡する正式なリクエストを行った生徒には、あなたのメールアドレスと姓が提供されます。",
              "additionalContact": "プロフィール設定を通じて、追加の連絡先情報（例：携帯電話番号、代替メールアドレス）を生徒と共有することを許可することができます。これらの設定の管理はあなたの責任です。"
            }
          },
          "accuracy": {
            "title": "6.4. 情報の正確性",
            "description": "あなたが登録フォームおよびプロフィールで提供するすべての情報の正確性、完全性、合法性について、あなたが単独で責任を負います。この情報を最新に保つことに同意します。"
          }
        },
        "section7": {
          "title": "7. 言語教師の責任",
          "description": "このセクションでは、サービスの使用における言語教師の義務と責任について、情報の正確性、専門的行動、アカウントのセキュリティ、プロフィール内容、生徒のプライバシー、可用性、対応性、法的遵守をカバーします。",
          "intro": "サービスを使用する言語教師として、あなたは以下に同意します：",
          "accurateInfo": {
            "title": "7.1. 正確な情報の提供",
            "description": "Ouchi-Sensei.comに提出するすべての情報（登録およびプロフィールを含む）が、真実、正確、最新、完全であることを保証します。いかなる場合でも、虚偽、誤解を招く、または欺瞞的な情報を提供してはなりません。"
          },
          "professionalConduct": {
            "title": "7.2. 専門的行動",
            "items": {
              "respect": "すべての生徒および潜在的な生徒に対して、敬意、プロフェッショナリズム、礼儀を持って接すること。",
              "agreements": "あなたと生徒の間で交わされたレッスン、スケジュール、料金、行動に関するすべての合意を遵守すること。",
              "environment": "安全で適切な学習環境を維持すること。"
            }
          },
          "accountSecurity": {
            "title": "7.3. アカウントのセキュリティ",
            "items": {
              "passwordConfidentiality": "登録時に発行されたパスワードの機密性を維持する責任があります。",
              "noDisclosure": "IDやパスワードを第三者に開示してはなりません。",
              "accountActivity": "アカウント下で行われるすべての活動に対して責任を負います。アカウントの不正使用があった場合は、ただちにOuchi-Sensei.comに通知してください。"
            }
          },
          "profileRestrictions": {
            "title": "7.4. プロフィール内容の制限",
            "items": {
              "noContactInfo": "直接の連絡先情報（例：メールアドレス、電話番号、個人ウェブサイトのリンク、ソーシャルメディアのハンドル）を、そのような情報のために特別に指定されたプロフィールフィールドに含めてはなりません。サービスは生徒があなたに連絡するための安全な方法を提供します。",
              "personalProfile": "あなたが個人的に提供する言語レッスンのプロフィールのみを公開してください。他の個人または団体のプロフィールを作成することはできません。"
            }
          },
          "studentPrivacy": {
            "title": "7.5. 生徒情報のプライバシー",
            "description": "サービスを通じて受け取った生徒の個人情報を、レッスンを行うために厳密に必要であり、生徒および適用される法律で許可されている場合を除き、第三者と共有または販売してはなりません。"
          },
          "availability": {
            "title": "7.6. 利用可能性の管理",
            "description": "レッスンに対応できない期間がある場合、プロフィールのステータスを「非公開」または「利用不可」に設定して、生徒を誤解させないようにする必要があります。"
          },
          "responsiveness": {
            "title": "7.7. 対応性",
            "description": "サービスを通じて受け取った生徒からのレッスンリクエストに、可能な限り迅速に、理想的には48時間以内に返信してください。利用できない場合やリクエストに興味がない場合は、礼儀正しく速やかに生徒に通知してください。"
          },
          "legalCompliance": {
            "title": "7.8. 法的遵守",
            "items": {
              "workObligations": "指導活動から生じるすべての仕事関連の義務（例：所得税の申告と支払い、健康保険、年金拠出（スーパーアニュエーション）、および日本におけるその他の法的または財政的責任）について、あなたが単独で責任を負います。",
              "lawCompliance": "サービスの使用および指導サービスの提供に関連して、適用されるすべての地方、国、国際的な法律および規制を遵守してください。"
            }
          }
        },
        "section8": {
          "title": "8. Ouchi-Sensei.comの責任と権利",
          "description": "このセクションでは、Ouchi-Sensei.comの役割、ユーザーのプロフィールとコンテンツに関する権利、アカウントの終了、推奨および当局との協力に関する立場について説明します。",
          "role": {
            "title": "8.1. 私たちの役割",
            "description": "Ouchi-Sensei.comの主な責任は、言語教師がプロフィールを作成し、潜在的な生徒とつながることを可能にするオンラインプラットフォームを提供することです。"
          },
          "cooperation": {
            "title": "8.2. 当局との協力",
            "description": "Ouchi-Sensei.comは、違法行為、ハラスメント、またはその他の重大な不正行為の調査の際、法律で要求される場合またはサービスとそのユーザーの安全性と完全性を保護するために、必要に応じて政府機関または法執行機関にユーザーの情報を提供する権利を留保します。"
          },
          "profileModeration": {
            "title": "8.3. プロフィールの管理",
            "items": {
              "reviewEdit": "言語教師のプロフィールまたはユーザーコンテンツが虚偽または誤解を招く情報、禁止された連絡先情報、不適切な声明を含む、または本契約または適用される法律のいずれかに違反していると判断された場合、当社の単独の裁量でその内容を確認、編集、または削除する権利を留保します。",
              "refuseRegistration": "言語教師の登録リクエストまたはプロフィールの公開を理由なく拒否する権利を留保します。"
            }
          },
          "accountTermination": {
            "title": "8.4. アカウントの終了",
            "items": {
              "misconduct": "生徒からの重大な問題、不正行為、または苦情の信頼できる報告がある場合。",
              "breach": "教師が本契約のいずれかの条項に違反した場合。",
              "harmfulConduct": "教師の行動がOuchi-Sensei.comの評判や運営、またはユーザーの安全性に有害であると判断された場合。"
            }
          },
          "profileUse": {
            "title": "8.5. プロフィール情報の使用",
            "description": "Ouchi-Sensei.comは、Ouchi-Sensei.comオンラインサービスおよび関連するソーシャルネットワークアカウントの運営および宣伝を目的として、言語教師のプロフィール内のすべての情報（姓、完全な住所、電話番号、メールアドレスなどのプライベートとして指定された情報を除き、特定の生徒と共有することが許可されていない場合）を公開表示する権利を有します。"
          },
          "postRemoval": {
            "title": "8.6. プロフィール削除後の連絡先情報",
            "description": "Ouchi-Sensei.comは、教師のプロフィールが削除または非公開となった後、進行中のレッスンまたは最近のリクエストのための継続的なコミュニケーションを促進するために、最大5週間、以前に連絡を開始した生徒に教師の許可された連絡先情報を提供し続ける権利を留保します。"
          },
          "noEndorsement": {
            "title": "8.7. 推奨の不存在",
            "description": "Ouchi-Sensei.comでの教師のプロフィールの公開は、その教師の資格、スキル、またはレッスンの質の推奨、保証、または承認を意味しません。生徒は教師を選択する際に独自の判断を下すようアドバイスされています。"
          }
        },
        "section9": {
          "title": "9. 禁止された活動",
          "description": "このセクションでは、すべてのユーザーに安全、合法、敬意を持った環境を確保するために、サービスを使用する際に厳しく禁止されている活動を明示的に列挙します。",
          "intro": "本契約に記載されている他の禁止事項に加えて、サービスまたはそのコンテンツを使用することは禁止されています：",
          "items": {
            "unlawfulPurpose": "違法な目的または他者に違法な行為の実行または参加を勧誘するために。",
            "lawViolation": "国際、連邦、州、または地方の規制、規則、法律、または条例に違反するために。",
            "ipInfringement": "当社または他者の知的財産権を侵害または違反するために。",
            "harassment": "性別、性的指向、宗教、民族、人種、年齢、出身国、または障害に基づいてハラスメント、虐待、侮辱、危害、名誉毀損、中傷、軽蔑、脅迫、または差別するために。",
            "falseInfo": "虚偽または誤解を招く情報を提出するために。",
            "maliciousCode": "サービス、関連ウェブサイト、他のウェブサイト、またはインターネットの機能や運用に影響を与える可能性のあるウイルスまたはその他の悪意のあるコードをアップロードまたは送信するために。",
            "privacyViolation": "他者の明示的な同意なしに個人情報を収集または追跡するために。",
            "spam": "スパム、フィッシング、ファーミング、口実、スパイダー、クロール、またはスクレイピングのために。",
            "obscenePurpose": "わいせつまたは不道徳な目的のために。",
            "securityInterference": "サービス、関連ウェブサイト、他のウェブサイト、またはインターネットのセキュリティ機能を妨害または回避するために。",
            "multipleAccounts": "単一の個人に対して複数のアカウントを作成したり、身元や資格を偽るために。",
            "bypassMeasures": "サービスへのアクセスを防止または制限するために使用される措置を回避しようとすること。"
          },
          "termination": "禁止された使用に違反した場合、サービス使用の終了権を留保します。"
        },
        "section10": {
          "title": "10. 知的財産",
          "description": "このセクションでは、Ouchi-Sensei.comのコンテンツの所有権、ユーザーに付与される限定ライセンス、使用制限、ユーザーが提出したコンテンツに対する権利について説明します。",
          "ourContent": {
            "title": "10.1. 当社のコンテンツ",
            "description": "Ouchi-Sensei.comウェブサイトで提供されるすべてのコンテンツ（テキスト、グラフィック、ロゴ、画像、ソフトウェア、およびその編集物（サービス上のすべてのコンテンツの収集、配置、組み立てを意味する）を含むがこれに限定されない）は、Ouchi-Sensei.comまたはそのコンテンツ提供者の所有物であり、日本および国際的な著作権およびその他の知的財産法によって保護されています。"
          },
          "limitedLicense": {
            "title": "10.2. 限定ライセンス",
            "description": "Ouchi-Sensei.comは、本契約に厳密に従って、言語教師としての個人的、非商業的使用のためにサービスにアクセスおよび使用するための限定、非独占的、譲渡不可、取り消し可能なライセンスを付与します。"
          },
          "restrictions": {
            "title": "10.3. 制限",
            "description": "サービスのいずれかの部分または含まれるソフトウェアをコピー、変更、配布、販売、リース、または派生作品を作成したり、法律がこれらの制限を禁止している場合または当社の書面による許可がない限り、ソフトウェアのソースコードを逆エンジニアリングまたは抽出しようとしてはなりません。"
          },
          "userContent": {
            "title": "10.4. ユーザーコンテンツ",
            "description": "ユーザーコンテンツ（プロフィール情報や写真など）を提出することにより、Ouchi-Sensei.comに対して、サービスおよびOuchi-Sensei.com（およびその後継者および関連会社）のビジネスに関連して、ユーザーコンテンツを使用、複製、配布、派生作品の作成、表示、実行するための世界的、非独占的、ロイヤリティフリー、サブライセンス可能、譲渡可能なライセンスを付与します。これには、サービスの一部または全体（およびその派生作品）をあらゆるメディア形式およびメディアチャネルを通じて宣伝および再配布することが含まれますが、これに限定されません。このライセンスは、サービス使用を停止した場合でも、主にアーカイブ、宣伝、法的目的のために継続します。あなたは、このライセンスを付与するために必要なすべての権利を有することを表明し保証します。"
          }
        },
        "section11": {
          "title": "11. 期間および終了",
          "description": "このセクションでは、本契約の期間、言語教師またはOuchi-Sensei.comによる終了方法、およびその終了の効果について説明します。",
          "term": {
            "title": "11.1. 期間",
            "description": "本契約は、サービスへの登録が成功した時点で開始し、あなたまたはOuchi-Sensei.comによって終了されるまで有効です。"
          },
          "terminationByYou": {
            "title": "11.2. あなたによる終了",
            "description": "アカウントを無効化し、サービスの使用をすべて停止することで、いつでも本契約を終了することができます。無効化は通常、アカウント設定を通じて行うことができます。"
          },
          "terminationByUs": {
            "title": "11.3. Ouchi-Sensei.comによる終了",
            "items": {
              "breach": "本契約の違反。",
              "legalLiability": "あなたの行動があなた、ユーザー、または当社に法的責任を引き起こす可能性があると判断した場合。",
              "misconduct": "アカウントに関連して不正行為または詐欺的な活動が疑われる場合。",
              "inactivity": "長期間の非活動の場合。",
              "integrity": "サービスの完全性と運営を保護するために必要と判断されるその他の理由。"
            }
          },
          "effectOfTermination": {
            "title": "11.4. 終了の効果",
            "description": "終了時、サービスの使用権は直ちに終了します。プロフィールおよびユーザーコンテンツは削除される場合がありますが、アーカイブ、法的、または運用目的で法律で許可されている一部の情報は保持される場合があります。本契約の性質上、終了後も存続すべき条項（所有権、免責事項、補償、責任の制限を含むがこれに限定されない）は終了後も存続します。"
          }
        },
        "section12": {
          "title": "12. 保証の免責と責任の制限",
          "description": "この重要なセクションでは、サービスが「現状のまま」提供され、保証がないこと、およびサービスの使用から生じる損害に対するOuchi-Sensei.comの責任の制限を概説します。",
          "asIsService": {
            "title": "12.1. 現状のままのサービス",
            "description": "サービスは「現状のまま」および「利用可能な状態で」提供されます。Ouchi-Sensei.comは、明示または黙示を問わず、商品性、特定目的への適合性、権利、非侵害の黙示保証を含むがこれに限定されないすべての保証を明示的に否認します。"
          },
          "noGuarantee": {
            "title": "12.2. 保証なし",
            "items": {
              "requirements": "サービスがあなたの要件または期待を満たすこと。",
              "uninterrupted": "サービスが中断なく、タイムリーに、安全に、エラーなく提供されること。",
              "results": "サービス使用から得られる結果（生徒を見つけるなど）が正確、信頼できる、または保証されること。",
              "quality": "サービスを通じて取得した製品、サービス、情報、またはその他の資料の品質があなたの期待を満たすこと。",
              "errors": "ソフトウェアのエラーが修正されること。"
            }
          },
          "userInteractions": {
            "title": "12.3. ユーザー間の相互作用",
            "description": "あなたは生徒との相互作用および合意について単独で責任を負います。Ouchi-Sensei.comは、オンラインまたはオフラインを問わず、サービスユーザー（教師および生徒を含む）の行動について責任を負いません。生徒のバックグラウンドチェックは行いません。"
          },
          "limitationOfLiability": {
            "title": "12.4. 責任の制限",
            "items": {
              "access": "サービスのアクセスまたは使用、またはアクセスまたは使用できないこと。",
              "thirdPartyConduct": "サービス上の第三者の行動またはコンテンツ（中傷的、攻撃的、違法な他のユーザーまたは第三者の行動を含むがこれに限定されない）。",
              "content": "サービスから取得したコンテンツ。",
              "unauthorizedAccess": "あなたの送信またはコンテンツの不正アクセス、使用、または変更。",
              "disputes": "あなたと生徒の間で生じる紛争または問題。"
            }
          },
          "maxLiability": {
            "title": "12.5. 最大責任",
            "description": "本契約に含まれるいかなる内容にもかかわらず、いかなる原因および行動の形式にかかわらず、当社のあなたに対する総責任は、責任が発生する事由の直前の3か月間にあなたがOuchi-Sensei.comに支払った金額（もしあれば）、またはそのような支払いがない場合は100円（¥100）に常に制限されます。"
          },
          "jurisdictionalExceptions": {
            "title": "12.6. 管轄地の例外",
            "description": "一部の管轄地では、特定の保証の除外または間接的もしくは結果的損害に対する責任の制限または除外が認められていません。したがって、上記の制限の一部はあなたに適用されない場合があります。"
          }
        },
        "section13": {
          "title": "13. 補償",
          "description": "このセクションでは、サービスの使用または本規約の違反によりOuchi-Sensei.comが被る可能性のある損失または損害を補償することに同意することを説明します。",
          "content": "あなたは、以下の結果として生じるすべての請求、責任、損害、損失、費用、または手数料（合理的な弁護士費用を含む）から、Ouchi-Sensei.comおよびその関連会社、役員、取締役、従業員、エージェント、ライセンサーを補償し、防御し、無害に保つことに同意します：(a) サービスの使用、(b) あなたのユーザーコンテンツ、(c) 本契約の違反、(d) 生徒を含む他者の権利の侵害、または(e) 適用される法律、規則、または規制の違反。Ouchi-Sensei.comは、自己負担で、あなたが補償の対象となる事項の独占的な防御および管理を担う権利を留保し、その場合、あなたはOuchi-Sensei.comが主張する利用可能な防御に協力します。"
        },
        "section14": {
          "title": "14. 規約の変更",
          "description": "このセクションでは、Ouchi-Sensei.comが利用規約を変更する権利、変更の通知方法、および継続使用が変更の受諾を意味する方法について説明します。",
          "rightToModify": {
            "title": "14.1. 変更の権利",
            "description": "Ouchi-Sensei.comは、単独の裁量で、いつでも本契約の一部を変更または置き換える権利を留保します。"
          },
          "notification": {
            "title": "14.2. 通知",
            "description": "本契約の重大な変更については、改訂された契約をOuchi-Sensei.comウェブサイトに掲載し、本契約の「最終更新日」を更新することで通知します。登録されたメールアドレスに通知を送信する場合もありますが、義務ではありません。"
          },
          "effectiveDate": {
            "title": "14.3. 発効日",
            "description": "改訂された契約は、Ouchi-Sensei.comウェブサイトに掲載された日から有効となります。"
          },
          "acceptance": {
            "title": "14.4. 変更の受諾",
            "description": "本契約の変更の掲載後にサービスを継続して使用またはアクセスすることは、それらの変更を受諾したことを意味します。新しい規約に同意しない場合、サービスの使用を停止する必要があります。本契約の変更を定期的に確認するのはあなたの責任です。"
          }
        },
        "section15": {
          "title": "15. 準拠法および管轄",
          "description": "このセクションでは、本契約が日本の法律に準拠し、法的紛争は東京の裁判所で処理されることを指定します。",
          "law": "本契約およびそれに関連する、またはその主題または形成に起因するすべての紛争または請求（非契約的な紛争または請求を含む）は、日本の法律に準拠し、解釈され、法律の抵触に関する規定に関係なく適用されます。",
          "jurisdiction": "あなたは、本契約またはサービスに起因するまたは関連するあなたとOuchi-Sensei.com間の法的措置または手続きが、日本の東京地方裁判所にのみ提起されることに同意し、これらの裁判所の人的管轄権および会場に同意します。"
        },
        "section16": {
          "title": "16. 分離可能性",
          "description": "このセクションでは、契約の一部が執行不能と判断された場合、契約の残りの部分は有効であると説明します。",
          "content": "本契約のいずれかの条項が管轄裁判所によって無効、違法、または執行不能と判断された場合、その条項は最小限の範囲で排除または制限され、契約の残りの条項は完全な効力を持ち続けます。"
        },
        "section17": {
          "title": "17. 完全合意",
          "description": "このセクションでは、利用規約およびプライバシーポリシーが、サービスに関するあなたとOuchi-Sensei.comの完全な理解を表すと述べています。",
          "content": "本契約は、プライバシーポリシー（これにより参照により組み込まれる）と併せて、言語教師としてのサービスの使用に関するあなたとOuchi-Sensei.com間の完全な合意を構成し、電子、口頭、または書面によるすべての以前または同時の通信および提案に優先します。"
        },
        "section18": {
          "title": "18. 権利放棄なし",
          "description": "このセクションでは、Ouchi-Sensei.comが本契約の一部を執行しない場合でも、後で執行する権利を放棄しないことを明確にします。",
          "content": "Ouchi-Sensei.comによる本契約に定められたいずれかの条項または条件の放棄は、その条項または条件のさらなるまたは継続的な放棄、または他の条項または条件の放棄とはみなされず、Ouchi-Sensei.comが本契約に基づく権利または条項を主張しないことは、その権利または条項の放棄を構成しません。"
        },
        "section19": {
          "title": "19. 譲渡",
          "description": "このセクションでは、あなたがOuchi-Sensei.comの同意なしに本契約の権利または義務を譲渡または移転できないが、Ouchi-Sensei.comは可能であると説明します。",
          "content": "あなたは、Ouchi-Sensei.comの事前の書面による同意なしに本契約（または本契約に基づくあなたの権利または義務）を譲渡または移転することはできません。上述に準拠しない譲渡または移転の試みは無効です。Ouchi-Sensei.comは本契約を自由に譲渡または移転することができます。本契約は、当事者およびそれぞれの法的代表者、承継者、譲受人に利益をもたらし、拘束力を持ちます。"
        },
        "section20": {
          "title": "20. 連絡先情報",
          "description": "このセクションでは、本契約に関する質問のためにOuchi-Sensei.comに連絡する方法について情報を提供します。",
          "content": "本契約に関する質問がある場合は、以下までご連絡ください：",
          "contactLink": "お問い合わせフォーム",
          "email": "（またはメール：support@ouchisensei.com）"
        },
        "footer": {
          "terms": "利用規約",
          "company": "会社概要",
          "contact": "お問い合わせ",
          "copyright": "© {year} Ouchi Sensei. すべての権利を留保します。"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ja",
    fallbackLng: "ja",
    supportedLngs: ["en", "ja"],
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;