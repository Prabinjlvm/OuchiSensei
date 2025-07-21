import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function SampleEmail() {
  const { t } = useTranslation();
  useEffect(() => {
    // Inject accordion arrow CSS once
    if (!document.getElementById('accordion-arrow-style')) {
      const style = document.createElement('style');
      style.id = 'accordion-arrow-style';
      style.innerHTML = `
        details .accordion-arrow .arrow-svg { transition: transform 0.2s; }
        details[open] .accordion-arrow .arrow-svg { transform: rotate(90deg); }
      `;
      document.head.appendChild(style);
    }

    // Wait for containers to exist
    const interval = setInterval(() => {
      const student = document.getElementById("student-templates-container");
      const teacher = document.getElementById("teacher-templates-container");
      if (student && teacher) {
        clearInterval(interval);

        // Remove any previous script
        const prevScript = document.getElementById("email-template-script");
        if (prevScript) prevScript.remove();

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "email-template-script";
        script.innerHTML = `
        // Email Templates Data (from email_template_page_jp_v1)
        var emailTemplates = {
            student: [
                {
                    id: "student-first-request",
                    titleJP: "◆ 初回レッスン依頼",
                    titleEN: "First Lesson Request",
                    subjectJP: "初回レッスンのお願い - [あなたの名前]",
                    subjectEN: "First Lesson Request - [Your Name]",
                    bodyJP: \`[先生の名前]先生

はじめまして。[あなたの名前]と申します。
おうち先生ドットコムで先生のプロフィールを拝見し、ぜひ先生の[言語名]レッスンを受けたいと思い、ご連絡いたしました。

私は[あなたの現在のレベルや学習目的など簡単な自己紹介]です。
もしよろしければ、一度体験レッスンをお願いできますでしょうか。

先生のご都合の良い日時をいくつかお教えいただけますと幸いです。
こちらの希望は以下の通りです。
・[希望日1] [希望時間帯1]
・[希望日2] [希望時間帯2]
・[希望日3] [希望時間帯3]

お忙しいところ恐縮ですが、ご返信お待ちしております。

どうぞよろしくお願いいたします。

[あなたの名前]
[あなたの連絡先メールアドレス]\`,
                    bodyEN: \`Dear [Teacher's Name],

My name is [Your Name]. I saw your profile on Ouchi-Sensei.com and I am very interested in taking your [Language] lessons.

I am [briefly introduce yourself, e.g., a beginner hoping to improve my conversational skills / preparing for a trip to an English-speaking country].
If possible, I would like to request a trial lesson.

Could you please let me know your availability? My preferred dates and times are as follows:
- [Preferred Date 1], around [Preferred Time 1]
- [Preferred Date 2], around [Preferred Time 2]
- [Preferred Date 3], around [Preferred Time 3]

Thank you for your time and consideration. I look forward to hearing from you.

Sincerely,
[Your Name]
[Your Email Address]\`
                },
                {
                    id: "student-lesson-questions",
                    titleJP: "◆ レッスン内容に関する質問",
                    titleEN: "Questions about Lesson Content",
                    subjectJP: "レッスン内容に関するご質問 - [あなたの名前]",
                    subjectEN: "Inquiry about Lesson Content - [Your Name]",
                    bodyJP: \`[先生の名前]先生

いつもお世話になっております。[あなたの名前]です。
次回のレッスン内容について、いくつか質問させていただきたいのですが、よろしいでしょうか。

[具体的な質問内容を記載]
例：
・次回のレッスンでは、主にどのような教材を使用しますか？
・[特定のトピックやスキル]について重点的に学びたいのですが、可能でしょうか？

お忙しいところ恐縮ですが、ご返信いただけますと幸いです。

どうぞよろしくお願いいたします。

[あなたの名前]\`,
                    bodyEN: \`Dear [Teacher's Name],

I hope this email finds you well. This is [Your Name].
I have a few questions regarding the content for our next lesson, if you don't mind.

[Write your specific questions here]
Examples:
- What kind of materials will we be using mainly in the next lesson?
- I would like to focus on [specific topic or skill]. Would that be possible?

Thank you for your time. I look forward to your reply.

Sincerely,
[Your Name]\`
                },
                {
                    id: "student-negotiate-fees",
                    titleJP: "◆ レッスン料金の相談・交渉",
                    titleEN: "Negotiating Lesson Fees",
                    subsections: [
                        {
                            titleJP: "一回で数時間のレッスンを受けてみたいとき",
                            titleEN: "Requesting a discount for longer lessons",
                            bodyJP: \`おうち先生ドットコムでのプロフィールには1時間のレッスン料が[金額]円と記載されていましたが、一回のレッスンで[希望時間]時間分のレッスンを受けたいと思っています。もし可能であれば、少し割引をしていただくことは可能でしょうか？
例えば、一回[希望時間]時間のレッスンで[希望金額]円ではいかがでしょうか？\`,
                            bodyEN: \`I saw that your teaching profile on Ouchi-sensei says your lesson fee per hour is JPY [Amount]. However, I was wondering if you would be willing to consider a reduced hourly rate if I were to take [Number]-hour lessons each time.
For example, how about JPY [Proposed Amount] for a [Number]-hour lesson?\`
                        },
                        {
                            titleJP: "1週間に数回のレッスンを受けてみたいとき",
                            titleEN: "Requesting a discount for multiple lessons per week",
                            bodyJP: \`おうち先生ドットコムでのプロフィールには1時間のレッスン料が[金額]円と記載されていましたが、一週間に[希望回数]回レッスンを受けたいと思っています。もし可能であれば、少し割引をしていただくことは可能でしょうか？
例えば一回1時間当たり[希望金額]円ではいかがでしょうか？\`,
                            bodyEN: \`I saw that your teaching profile on Ouchi-sensei says your lesson fee per hour is JPY [Amount]. However, I was wondering if you would be willing to consider a reduced hourly rate if I were to take a 1-hour lesson [Number] times a week.
For example, how about JPY [Proposed Amount] per 1-hour lesson?\`
                        },
                        {
                            titleJP: "レッスン料が少し予算オーバーのとき",
                            titleEN: "When the lesson fee is slightly over budget",
                            bodyJP: \`おうち先生ドットコムでのプロフィールには1時間のレッスン料が[金額]円と記載されていましたが、大変恐縮ながら、私の予算と少し開きがございます。
もし可能であれば、1時間のレッスン料を[希望金額]円でご検討いただくことは可能でしょうか？\`,
                            bodyEN: \`I saw that your teaching profile on Ouchi-sensei says your lesson fee per hour is JPY [Amount].
While I am very interested in your lessons, this is slightly over my current budget.
Would it be possible to consider a rate of JPY [Proposed Amount] per one-hour lesson?\`
                        }
                    ]
                },
                 {
                    id: "student-negotiate-location",
                    titleJP: "◆ レッスン場所の相談・交渉",
                    titleEN: "Negotiating Lesson Location",
                    subsections: [
                        {
                            titleJP: "プロフィールに記載されていない駅でレッスンを受けてみたいとき",
                            titleEN: "Requesting lessons at a station not listed on profile",
                            bodyJP: \`おうち先生ドットコムでのプロフィールには[記載の駅名]駅がレッスン可能駅に選択されていました。職場が[希望駅名]駅の近くですので、もし可能であれば[希望駅名]駅付近でレッスンをしていただくことは可能でしょうか？
[記載の駅名]駅から[希望駅名]駅は[路線名]で[所要時間/駅数]程度です。
その際の往復交通費[金額]円は私が負担いたします。\`,
                            bodyEN: \`I saw that you have selected [Listed Station] station as an "Available Station for Lesson" on Ouchi-sensei. However, please let me know if I can take your lesson around [Desired Station] station as my workplace is close to [Desired Station] station.
[Desired Station] station is about [Number] stations / [Travel Time] away from [Listed Station] station by [Train Line name] line.
I will be happy to cover your round trip transportation cost of JPY [Amount] between these two stations.\`
                        }
                    ]
                },
                {
                    id: "student-negotiate-time",
                    titleJP: "◆ レッスン日時の相談・交渉",
                    titleEN: "Negotiating Lesson Time",
                     subsections: [
                        {
                            titleJP: "プロフィールに記載されていない時間帯にレッスンを受けてみたいとき",
                            titleEN: "Requesting lessons at a time not listed on profile",
                            bodyJP: \`おうち先生ドットコムでのプロフィールにはレッスン可能時間に[曜日]の[時間帯]が選択されていませんでした。
可能であれば[曜日]の[時間帯]が最も都合が付きやすいので、もし先生のスケジュールが変更していて現在[曜日]の[時間帯]が空いていらっしゃれば教えていただけますでしょうか？\`,
                            bodyEN: \`I saw that your teaching profile on Ouchi-sensei says that you are not available for lessons on [Day of week] [Time of day/evenings/mornings].
[Day of week] [Time of day/evenings/mornings] is the most convenient for me, so please let me know if your schedule has changed and you are currently available on [Day of week] [Time of day/evenings/mornings].\`
                        }
                    ]
                },
                {
                    id: "student-formal-request-after-trial",
                    titleJP: "◆ 体験レッスン後の正式依頼",
                    titleEN: "Formal Request After Trial Lesson",
                    subjectJP: "レッスン継続のお願い - [あなたの名前]",
                    subjectEN: "Request to Continue Lessons - [Your Name]",
                    bodyJP: \`[先生の名前]先生

先日は体験レッスン、誠にありがとうございました。
とても分かりやすく、楽しいレッスンでしたので、ぜひ今後も継続して先生のレッスンを受けさせていただきたいです。

つきましては、週[回数]回、[曜日]の[時間帯]でお願いできればと存じますがいかがでしょうか。
（または、先生のご都合の良い日時を改めてご相談させていただけますでしょうか。）

お忙しいところ恐縮ですが、ご返信お待ちしております。

どうぞよろしくお願いいたします。

[あなたの名前]\`,
                    bodyEN: \`Dear [Teacher's Name],

Thank you very much for the trial lesson the other day.
It was very easy to understand and enjoyable, and I would love to continue taking your lessons.

I would like to request lessons [Number] times a week, preferably on [Day of week] around [Time].
(Alternatively: Could we discuss your availability for regular lessons again?)

Thank you for your consideration. I look forward to hearing from you.

Sincerely,
[Your Name]\`
                },
                {
                    id: "student-cancel-reschedule",
                    titleJP: "◆ レッスンのキャンセル・日時変更のお願い",
                    titleEN: "Cancelling or Rescheduling a Lesson",
                    subjectJP: "【重要】[日付]のレッスンキャンセル（または日時変更）のお願い - [あなたの名前]",
                    subjectEN: "IMPORTANT: Lesson Cancellation (or Reschedule) Request for [Date] - [Your Name]",
                    bodyJP: \`[先生の名前]先生

いつもお世話になっております。[あなたの名前]です。
大変申し訳ございませんが、[日付]の[時間]に予定しておりましたレッスンですが、[理由を簡潔に記載]のため、キャンセルさせていただけますでしょうか。
（または、以下の日時に変更していただくことは可能でしょうか？ [希望日時1], [希望日時2]）

直前のご連絡となり、大変申し訳ございません。
ご確認のほど、よろしくお願いいたします。

[あなたの名前]\`,
                    bodyEN: \`Dear [Teacher's Name],

I hope this email finds you well. This is [Your Name].
I am writing to apologize as I need to cancel our lesson scheduled for [Date] at [Time] due to [briefly state reason].
(Alternatively: Would it be possible to reschedule it to one of the following dates/times? [New Date/Time 1], [New Date/Time 2])

I sincerely apologize for the short notice and any inconvenience this may cause.
Thank you for your understanding.

Sincerely,
[Your Name]\`
                },
                {
                    id: "student-thank-you",
                    titleJP: "◆ レッスン後のお礼",
                    titleEN: "Thank You Email After Lesson",
                    subjectJP: "本日のレッスンありがとうございました - [あなたの名前]",
                    subjectEN: "Thank You for Today's Lesson - [Your Name]",
                    bodyJP: \`[先生の名前]先生

本日はレッスンありがとうございました。
[具体的な感想や学んだことなど]。とても勉強になりました。
次回のレッスンも楽しみにしております。

引き続きどうぞよろしくお願いいたします。

[あなたの名前]\`,
                    bodyEN: \`Dear [Teacher's Name],

Thank you very much for the lesson today.
[Add specific positive feedback, e.g., I really enjoyed learning about X / It was very helpful to practice Y].
I'm looking forward to our next lesson.

Best regards,
[Your Name]\`
                }
            ],
            teacher: [
                {
                    id: "teacher-reply-accept",
                    titleJP: "◆ レッスン依頼への返信（承諾・日程提案）",
                    titleEN: "Replying to a Lesson Request - Accepting & Proposing Schedule",
                    subjectJP: "Re: 初回レッスンのお願い - [生徒の名前]様",
                    subjectEN: "Re: First Lesson Request - [Student's Name]",
                    bodyJP: \`[生徒の名前]様

はじめまして。[あなたの名前]です。
この度は、私の[言語名]レッスンにご興味をお持ちいただき、またご連絡いただきありがとうございます。

ぜひレッスンを担当させていただきたく存じます。
お問い合わせいただいた日時ですが、以下の日程でいかがでしょうか。
・[提案日1] [提案時間帯1]
・[提案日2] [提案時間帯2]
・[提案日3] [提案時間帯3]

上記以外でも調整可能ですので、ご希望がございましたらお気軽にお申し付けください。
お会いできるのを楽しみにしております。

どうぞよろしくお願いいたします。

[あなたの名前（先生）]
[連絡先など]\`,
                    bodyEN: \`Dear [Student's Name],

My name is [Your Name].
Thank you for your interest in my [Language] lessons and for contacting me.

I would be happy to be your teacher.
Regarding your requested dates and times, how about the following options?
- [Proposed Date 1], around [Proposed Time 1]
- [Proposed Date 2], around [Proposed Time 2]
- [Proposed Date 3], around [Proposed Time 3]

I am flexible, so please let me know if you have other preferences.
I look forward to meeting you.

Best regards,
[Your Name (Teacher)]
[Your Contact Info etc.]\`
                },
                {
                    id: "teacher-reply-negotiate",
                    titleJP: "◆ レッスン依頼への返信（条件確認・交渉提案）",
                    titleEN: "Replying to a Lesson Request - Confirming Conditions/Proposing Negotiation",
                    subjectJP: "Re: レッスン料金のご相談 - [生徒の名前]様",
                    subjectEN: "Re: Inquiry about Lesson Fee - [Student's Name]",
                    bodyJP: \`[生徒の名前]様

ご連絡ありがとうございます。[あなたの名前]です。
レッスン料金についてご相談いただき、ありがとうございます。

[生徒の提案]につきまして、[あなたの回答や代替案]。
例えば、[具体的な代替案や条件]ではいかがでしょうか。

ご検討いただけますと幸いです。
ご不明な点がございましたら、お気軽にお尋ねください。

どうぞよろしくお願いいたします。

[あなたの名前（先生）]\`,
                    bodyEN: \`Dear [Student's Name],

Thank you for your message. This is [Your Name].
I appreciate you reaching out to discuss the lesson fee.

Regarding your proposal of [Student's proposal], [Your response or counter-proposal].
For example, would you be open to [Specific counter-proposal or condition]?

Please let me know your thoughts.
Feel free to ask if you have any questions.

Best regards,
[Your Name (Teacher)]\`
                }
                // Add more teacher templates here following the same structure
            ]
        };

        (function () {
            const studentTemplatesContainer = document.getElementById('student-templates-container');
            const teacherTemplatesContainer = document.getElementById('teacher-templates-container');

            function createTemplateAccordion(template, lang = 'jp') {
                const details = document.createElement('details');
                details.className = 'bg-slate-50 rounded-lg group';
                details.id = template.id;

                const summary = document.createElement('summary');
                summary.className = 'flex justify-between items-center p-4 cursor-pointer font-semibold text-slate-800 group-hover:bg-slate-100 rounded-t-lg';
                summary.innerHTML = \`
                    <span>\${lang === 'jp' ? template.titleJP : template.titleEN}</span>
                    <span class="accordion-arrow">
                      <svg class="arrow-svg" width="30" height="30" viewBox="0 0 20 20" style="display:inline;vertical-align:middle;transition:transform 0.2s;" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="7,5 15,10 7,15" fill="#4a7d1d"/>
                      </svg>
                    </span>
                \`;
                details.appendChild(summary);

                const contentDiv = document.createElement('div');
                contentDiv.className = 'p-4 border-t border-slate-200';

                // Language toggle buttons
                const langToggleDiv = document.createElement('div');
                langToggleDiv.className = 'mb-4 flex space-x-2';

                const btnJP = document.createElement('button');
                btnJP.textContent = '日本語';
                btnJP.className = \`lang-toggle-btn px-3 py-1.5 rounded-md text-sm font-medium border\`;
                btnJP.dataset.lang = 'jp';

                const btnEN = document.createElement('button');
                btnEN.textContent = 'English';
                btnEN.className = \`lang-toggle-btn px-3 py-1.5 rounded-md text-sm font-medium border\`;
                btnEN.dataset.lang = 'en';

                // Set initial styles
                function setLangBtnStyles(activeLang) {
                  if (activeLang === 'jp') {
                    btnJP.style.backgroundColor = '#4a7d1d';
                    btnJP.style.color = '#fff';
                    btnJP.style.borderColor = '#4a7d1d';
                    btnEN.style.backgroundColor = '#fff';
                    btnEN.style.color = '#334155';
                    btnEN.style.borderColor = '#cbd5e1';
                  } else {
                    btnEN.style.backgroundColor = '#4a7d1d';
                    btnEN.style.color = '#fff';
                    btnEN.style.borderColor = '#4a7d1d';
                    btnJP.style.backgroundColor = '#fff';
                    btnJP.style.color = '#334155';
                    btnJP.style.borderColor = '#cbd5e1';
                  }
                }
                setLangBtnStyles(lang);

                btnJP.addEventListener('click', function(e) {
                  e.stopPropagation();
                  setLangBtnStyles('jp');
                  // ...your existing language toggle logic...
                });
                btnEN.addEventListener('click', function(e) {
                  e.stopPropagation();
                  setLangBtnStyles('en');
                  // ...your existing language toggle logic...
                });

                langToggleDiv.appendChild(btnJP);
                langToggleDiv.appendChild(btnEN);
                contentDiv.appendChild(langToggleDiv);

                if (template.subsections) {
                    template.subsections.forEach(subsection => {
                        const subsectionTitle = document.createElement('h4');
                        subsectionTitle.className = 'text-md font-semibold text-slate-700 mt-4 mb-2 subsection-title';
                        subsectionTitle.textContent = lang === 'jp' ? subsection.titleJP : subsection.titleEN;
                        contentDiv.appendChild(subsectionTitle);

                        const emailTextDiv = document.createElement('div');
                        emailTextDiv.className = 'email-text bg-white p-3 rounded-md border border-slate-200 text-sm text-slate-600 leading-relaxed whitespace-pre-wrap';
                        emailTextDiv.textContent = lang === 'jp' ? subsection.bodyJP : subsection.bodyEN;
                        contentDiv.appendChild(emailTextDiv);

                         // Copy button for subsection
                        const copyBtnContainer = document.createElement('div');
                        copyBtnContainer.className = 'mt-3 flex justify-end';
                        const copyBtn = document.createElement('button');
                        // For subsections
                        copyBtn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="vertical-align:middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>コピー\`;
                        copyBtn.className = 'copy-btn text-white text-xs font-medium py-1.5 px-3 rounded-md transition-colors flex items-center justify-center';
                        copyBtn.style.backgroundColor = '#4a7d1d';
                        copyBtn.style.borderColor = '#4a7d1d';
                        copyBtn.style.borderWidth = '1px';
                        copyBtn.dataset.textToCopy = (lang === 'jp' ? subsection.bodyJP : subsection.bodyEN);
                        copyBtnContainer.appendChild(copyBtn);
                        contentDiv.appendChild(copyBtnContainer);
                    });
                } else {
                    // For templates without subsections
                    const subjectLine = document.createElement('p');
                    subjectLine.className = 'text-sm font-semibold text-slate-700 mb-1 subject-line';
                    subjectLine.innerHTML = \`<strong>\${lang === 'jp' ? '件名：' : 'Subject:'}</strong> \${lang === 'jp' ? template.subjectJP : template.subjectEN}\`;
                    contentDiv.appendChild(subjectLine);
                    
                    const emailTextDiv = document.createElement('div');
                    emailTextDiv.className = 'email-text bg-white p-3 rounded-md border border-slate-200 text-sm text-slate-600 leading-relaxed whitespace-pre-wrap';
                    emailTextDiv.textContent = lang === 'jp' ? template.bodyJP : template.bodyEN;
                    contentDiv.appendChild(emailTextDiv);

                    // Copy button for main template
                    const copyBtnContainer = document.createElement('div');
                    copyBtnContainer.className = 'mt-3 flex justify-end';
                    const copyBtn = document.createElement('button');
                    // For main template (no subsections)
                    copyBtn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="vertical-align:middle;"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>コピー\`;
                    copyBtn.className = 'copy-btn text-white text-xs font-medium py-1.5 px-3 rounded-md transition-colors flex items-center justify-center';
                    copyBtn.style.backgroundColor = '#4a7d1d';
                    copyBtn.style.borderColor = '#4a7d1d';
                    copyBtn.style.borderWidth = '1px';
                    let fullTextToCopy = \`\${lang === 'jp' ? '件名：' : 'Subject:'} \${lang === 'jp' ? template.subjectJP : template.subjectEN}\\n\\n\${lang === 'jp' ? template.bodyJP : template.bodyEN}\`;
                    copyBtn.dataset.textToCopy = fullTextToCopy;
                    copyBtnContainer.appendChild(copyBtn);
                    contentDiv.appendChild(copyBtnContainer);
                }
                
                const copyFeedback = document.createElement('span');
                copyFeedback.className = 'copy-feedback ml-2 text-xs text-brandGreen-700 opacity-0 visibility-hidden transition-opacity duration-300';
                copyFeedback.textContent = 'コピーしました！';
                contentDiv.appendChild(copyFeedback);

                details.appendChild(contentDiv);
                return details;
            }
            
            function updateAccordionContent(detailsElement, templateData, newLang) {
                const summary = detailsElement.querySelector('summary span:first-child');
                summary.textContent = newLang === 'jp' ? templateData.titleJP : templateData.titleEN;

                const contentDiv = detailsElement.querySelector('.p-4.border-t');
                
                if (templateData.subsections) {
                    const subsectionTitles = contentDiv.querySelectorAll('.subsection-title');
                    const emailTexts = contentDiv.querySelectorAll('.email-text');
                    const copyBtns = contentDiv.querySelectorAll('.copy-btn');

                    templateData.subsections.forEach((subsection, index) => {
                        if (subsectionTitles[index]) subsectionTitles[index].textContent = newLang === 'jp' ? subsection.titleJP : subsection.titleEN;
                        if (emailTexts[index]) emailTexts[index].textContent = newLang === 'jp' ? subsection.bodyJP : subsection.bodyEN;
                        if (copyBtns[index]) copyBtns[index].dataset.textToCopy = newLang === 'jp' ? subsection.bodyJP : subsection.bodyEN;
                    });
                } else {
                    const subjectLine = contentDiv.querySelector('.subject-line');
                    const emailText = contentDiv.querySelector('.email-text');
                    const copyBtn = contentDiv.querySelector('.copy-btn');

                    if (subjectLine) subjectLine.innerHTML = \`<strong>\${newLang === 'jp' ? '件名：' : 'Subject:'}</strong> \${newLang === 'jp' ? templateData.subjectJP : templateData.subjectEN}\`;
                    if (emailText) emailText.textContent = newLang === 'jp' ? templateData.bodyJP : templateData.bodyEN;
                    if (copyBtn) {
                         let fullTextToCopy = \`\${newLang === 'jp' ? '件名：' : 'Subject:'} \${newLang === 'jp' ? templateData.subjectJP : templateData.subjectEN}\\n\\n\${newLang === 'jp' ? templateData.bodyJP : templateData.bodyEN}\`;
                         copyBtn.dataset.textToCopy = fullTextToCopy;
                    }
                }
            }


            emailTemplates.student.forEach(template => {
                studentTemplatesContainer.appendChild(createTemplateAccordion(template));
            });
            emailTemplates.teacher.forEach(template => {
                teacherTemplatesContainer.appendChild(createTemplateAccordion(template));
            });

            document.querySelectorAll('.template-category details, #student-templates-container details, #teacher-templates-container details').forEach(detailsElement => {
                const templateId = detailsElement.id;
                const templateData = emailTemplates.student.find(t => t.id === templateId) || emailTemplates.teacher.find(t => t.id === templateId);

                if (templateData) {
                    const langToggleBtns = detailsElement.querySelectorAll('.lang-toggle-btn');
                    langToggleBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.stopPropagation(); // Prevent accordion from closing
                            const newLang = btn.dataset.lang;
                            langToggleBtns.forEach(b => {
                                b.classList.remove('bg-brandGreen-700', 'text-white', 'border-brandGreen-700');
                                b.classList.add('bg-white', 'text-slate-700', 'border-slate-300', 'hover:bg-slate-100');
                            });
                            btn.classList.add('bg-brandGreen-700', 'text-white', 'border-brandGreen-700');
                            btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-300', 'hover:bg-slate-100');
                            
                            updateAccordionContent(detailsElement, templateData, newLang);
                        });
                    });

                    const copyBtns = detailsElement.querySelectorAll('.copy-btn');
                    const feedbackSpan = detailsElement.querySelector('.copy-feedback');
                    copyBtns.forEach(copyBtn => {
                        copyBtn.addEventListener('click', (e) => {
                            e.stopPropagation(); // Prevent accordion from closing
                            const text = copyBtn.dataset.textToCopy;
                            navigator.clipboard.writeText(text.trim()).then(() => {
                                if(feedbackSpan) {
                                    feedbackSpan.classList.add('show');
                                    setTimeout(() => {
                                        feedbackSpan.classList.remove('show');
                                    }, 2000);
                                }
                            }).catch(err => {
                                console.error('Failed to copy: ', err);
                                if(feedbackSpan) {
                                    feedbackSpan.textContent = 'コピー失敗';
                                    feedbackSpan.classList.add('show', 'text-red-600');
                                     setTimeout(() => {
                                        feedbackSpan.classList.remove('show', 'text-red-600');
                                        feedbackSpan.textContent = 'コピーしました！';
                                    }, 2000);
                                }
                            });
                        });
                    });
                }
            });
            
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
                // Close mobile menu when a link is clicked
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                    });
                });
            }

            // Smooth scroll for nav links
            document.querySelectorAll('header nav a, #mobile-menu a').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        const targetId = href.substring(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            const headerOffset = document.querySelector('header').offsetHeight || 64;
                            const elementPosition = targetElement.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            
                            window.scrollTo({
                                 top: offsetPosition,
                                 behavior: "smooth"
                            });
                        }
                    }
                });
            });

            // Set current year in footer
            const yearElem = document.getElementById('current-year');
            if(yearElem) yearElem.textContent = new Date().getFullYear();
        })();
    `;
        document.body.appendChild(script);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      const s = document.getElementById("email-template-script");
      if (s) s.remove();
    };
  }, []);

  return (
    <>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <section
          id="introduction"
          className="mb-12 md:mb-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-brandGreen-700 mb-4 text-center">
            {t("sampleemail.title_jp")}
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-brandGreen-600 mb-6 text-center">
            {t("sampleemail.subtitle_jp")}
          </h2>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            {t("sampleemail.intro_jp1")}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {t("sampleemail.intro_jp2")}
          </p>
        </section>
        <section
          id="introduction"
          className="mb-12 md:mb-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-brandGreen-700 mb-4 text-center">
            {t("sampleemail.title_en")}
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-brandGreen-600 mb-6 text-center">
            {t("sampleemail.subtitle_en")}
          </h2>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            {t("sampleemail.intro_en1")}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {t("sampleemail.intro_en2")}
          </p>
        </section>
        <section
          id="basic-manners"
          className="mb-12 md:mb-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-brandGreen-700 mb-6 border-b-2 border-brandGreen-200 pb-3">
            {t("sampleemail.manners_title")}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {t("sampleemail.manners_subject_title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("sampleemail.manners_subject_desc")}
              </p>
              <div className="mt-2 p-3 bg-slate-100 rounded-md text-sm">
                <p>
                  <strong>{t("sampleemail.manners_subject_jp_label")}</strong>
                  {t("sampleemail.manners_subject_jp")}
                </p>
                <p>
                  <strong>{t("sampleemail.manners_subject_en_label")}</strong>{t("sampleemail.manners_subject_en")}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {t("sampleemail.manners_polite_title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("sampleemail.manners_polite_desc")}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {t("sampleemail.manners_response_title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("sampleemail.manners_response_desc")}
              </p>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <section
            id="for-students"
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-brandGreen-700 mb-6 border-b-2 border-brandGreen-200 pb-3">
              {t("sampleemail.for_students_title")}
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t("sampleemail.for_students_desc")}
            </p>
            <div id="student-templates-container" className="space-y-3"></div>
          </section>
          <section
            id="for-teachers"
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-brandGreen-700 mb-6 border-b-2 border-brandGreen-200 pb-3">
              {t("sampleemail.for_teachers_title")}
              <br />
              {t("sampleemail.for_teachers_title_en")}
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t("sampleemail.for_teachers_desc")}
              <br />
              {t("sampleemail.for_teachers_desc_en")}
            </p>
            <div id="teacher-templates-container" className="space-y-3"></div>
          </section>
        </div>
        <section
          id="important-notes-section"
          className="mt-12 md:mt-16 bg-Ouchiw-50 border-l-4 border-Ouchiw-400 p-6 sm:p-8 rounded-r-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-Ouchiw-700 mb-6 flex items-center">
            <span className="text-3xl mr-3">⚠️</span>{t("sampleemail.important_notes_title")}
          </h2>
          <div className="space-y-4 text-Ouchiw-800">
            <p>
              <strong className="font-semibold">
                {t("sampleemail.important_notes_main")}
              </strong>
            </p>
            <p>
              {t("sampleemail.important_notes_check1")}
              <a
                href="faq.html"
                className="font-semibold text-Ouchiw-700 hover:text-Ouchiw-600 underline"
                title="よくある質問 FAQ"
              >
                {t("sampleemail.important_notes_faq")}
              </a>
              {t("sampleemail.important_notes_check2")}
              <a
                href="kiyaku.html"
                className="font-semibold text-Ouchiw-700 hover:text-Ouchiw-600 underline"
                title="ご利用規約"
              >
                {t("sampleemail.important_notes_terms")}
              </a>
              {t("sampleemail.important_notes_check3")}
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="font-semibold">
                  {t("sampleemail.important_notes_li1")}
                </strong>
              </li>
              <li>
                <strong className="font-semibold">
                  {t("sampleemail.important_notes_li2")}
                </strong>
              </li>
              <li>
                <strong className="font-semibold">{t("sampleemail.important_notes_li3a")}</strong>{t("sampleemail.important_notes_li3b")}
                <strong className="font-semibold">{t("sampleemail.important_notes_li3c")}</strong>
                {t("sampleemail.important_notes_li3d")}
              </li>
              <li>
                <strong className="font-semibold">{t("sampleemail.important_notes_li4a")}</strong>
                {t("sampleemail.important_notes_li4b")}
              </li>
              <li>
                <strong className="font-semibold">{t("sampleemail.important_notes_li5a")}</strong>
                {t("sampleemail.important_notes_li5b")}
              </li>
            </ul>
          </div>
        </section>
        <section
          id="faq"
          className="mt-12 md:mt-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-brandGreen-700 mb-6 border-b-2 border-brandGreen-200 pb-3">
            {t("sampleemail.faq_title")}
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            {t("sampleemail.faq_desc")}
          </p>
          <div className="space-y-4">
            <details className="bg-slate-50 rounded-lg group">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-slate-800 group-hover:bg-slate-100 rounded-t-lg">
                {t("sampleemail.faq_q1")}
                <span className="accordion-arrow text-brandGreen-700 transform transition-transform duration-200 ease-out">
                  ▶
                </span>
              </summary>
              <div className="p-4 border-t border-slate-200 text-slate-600 leading-relaxed">
                {t("sampleemail.faq_a1")}
              </div>
            </details>
            <details className="bg-slate-50 rounded-lg group">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-slate-800 group-hover:bg-slate-100 rounded-t-lg">
                {t("sampleemail.faq_q2")}
                <span className="accordion-arrow text-brandGreen-700 transform transition-transform duration-200 ease-out">
                  ▶
                </span>
              </summary>
              <div className="p-4 border-t border-slate-200 text-slate-600 leading-relaxed">
                {t("sampleemail.faq_a2")}
              </div>
            </details>
            <details className="bg-slate-50 rounded-lg group">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-slate-800 group-hover:bg-slate-100 rounded-t-lg">
                {t("sampleemail.faq_q3")}
                <span className="accordion-arrow text-brandGreen-700 transform transition-transform duration-200 ease-out">
                  ▶
                </span>
              </summary>
              <div className="p-4 border-t border-slate-200 text-slate-600 leading-relaxed">
                {t("sampleemail.faq_a3")}
              </div>
            </details>
          </div>
        </section>
        <section id="related-links-section" className="mt-12 md:mt-16">
          <h2 className="text-2xl font-semibold text-brandGreen-700 mb-6 border-b-2 border-brandGreen-200 pb-3">
            {t("sampleemail.related_links_title")}
          </h2>
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <a style={{backgroundColor:"#4a7d1d"}}
              href="#"
              className="block p-4 bg-brandGreen-600 text-white text-center rounded-lg hover:bg-brandGreen-700 transition-colors shadow-md"
            >
              {t("sampleemail.related_links_find_teacher")}
            </a>
            <a style={{backgroundColor:"#4a7d1d"}}
              href="en/index.html"
              className="block p-4 bg-brandGreen-600 text-white text-center rounded-lg hover:bg-brandGreen-700 transition-colors shadow-md"
            >
              {t("sampleemail.related_links_teacher_register")}
            </a>
            <a 
              href="kiyaku.html"
              className="block p-4 bg-slate-200 text-slate-700 text-center rounded-lg hover:bg-slate-300 transition-colors shadow-md"
            >
              {t("sampleemail.related_links_terms")}
            </a>
            <a 
              href="faq.html"
              className="block p-4 bg-slate-200 text-slate-700 text-center rounded-lg hover:bg-slate-300 transition-colors shadow-md"
            >
              {t("sampleemail.related_links_faq")}
            </a>
          </div>
        </section>
      </main>

    </>
  );
}