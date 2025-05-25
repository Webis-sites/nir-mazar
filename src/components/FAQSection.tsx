'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'איפה מתקיימים השיעורים?',
    answer: 'אני מלמד באשדוד ובאזור. אנחנו קובעים יחד נקודת איסוף שנוחה לך – מהבית, מהלימודים או מכל מקום אחר. אני מגיע אליך ואדאג לגרום לך להרגיש בבית מהשנייה הראשונה.'
  },
  {
    question: 'על איזה רכב אתה מלמד?',
    answer: 'אני מלמד על רכב חדש ויוקרתי מסוג XPENG G6 – רכב חשמלי, נוח, שקט ובטיחותי מאוד. זו לא רק חוויית נהיגה – זו הצצה לעולם התחבורה של העתיד. כבר מהשיעור הראשון תרגישו איך זה לנהוג ברכב מתקדם, עם שליטה מלאה וביטחון.'
  },
  {
    question: 'כמה שיעורים צריך כדי לגשת לטסט?',
    answer: 'הממוצע הארצי נע סביב 28–35 שיעורים. אבל אצלי? אתם לא ניגשים לטסט רק כשאתם "מספיק טובים" – אתם ניגשים כשאתם יותר טובים מהטסטר. אני דואג שכשיגיע הרגע – אתם תהיו לא רק מוכנים, אלא בטוחים, שקטים, ויודעים בדיוק מה לעשות על הכביש.'
  },
  {
    question: 'אתה מלמד רק מתחילים?',
    answer: 'ממש לא. אני עובד גם עם מתחילים מהשלב הראשון, אבל גם עם נהגים בעלי רישיון שרוצים לחזור לעניינים – בין אם זו חזרה אחרי תקופה שלא נהגו, חיזוק הביטחון, או שיעור רענון ממוקד. יש גם אימונים מיוחדים למצבים מורכבים – כמו חנייה בעיר, נהיגה בין-עירונית ועוד.'
  },
  {
    question: 'צריך ניסיון קודם לפני השיעור הראשון?',
    answer: 'ממש לא. כל אחד מתחיל בדיוק מאיפה שהוא נמצא – אני אתאים את עצמי אליך, לא להפך. השיעורים נבנים בקצב האישי שלך, בלי לחץ, עם הרבה הקשבה, סבלנות, והכוונה צמודה מהרגע הראשון.'
  },
  {
    question: 'אפשר ללמוד גם תיאוריה תוך כדי השיעורים?',
    answer: 'בוודאי. אני משלב הסברים תיאורטיים דרך הסיטואציות שאנחנו פוגשים על הכביש. זה לא "רק לזכור את החומר" – אלא להבין אותו דרך הנהיגה עצמה. כמובן שגם תקבל ממני טיפים מעולים ללמידה עצמאית ויעילה בבית.'
  },
  {
    question: 'מאיזה גיל אפשר להתחיל ללמוד נהיגה?',
    answer: 'מגיל 16.5 אפשר להתחיל את תהליך קבלת הטופס הירוק. אחרי הבדיקות הנדרשות – נצא לדרך. ואני איתך שלב-שלב, עד הטסט ואחריו.'
  },
  {
    question: 'מה זה "לומדים בחיוך"?',
    answer: 'זו לא סיסמה – זו גישה. אני מאמין שכשיש אווירה טובה, לומדים טוב יותר. בלי לחץ, בלי תחושת כישלון – רק ביטחון, תחושת הצלחה, והכי חשוב – חיוך על הפנים. יש בי המון סבלנות ואהבה למקצוע הזה , אני נהנה לעזור לכל אחד ואחת - זה מביא לי סיפוק אדיר לראות אתכם משתפרים ומצליחים ברמה שאפילו אתם לא תיארתם לעצמכם.'
  },
  {
    question: 'איך יודעים מתי מוכנים לטסט?',
    answer: 'אתה תדע – וגם אני. אנחנו נגיע לרגע הזה יחד, מתוך תהליך ברור, עם חזרות, הכוונה והכנה מדויקת. אני לא אשלח אותך לטסט לפני שאתה בשל. המטרה שלי היא לא רק שתעבור – אלא שתדע לנהוג באמת, בביטחון, ובעיקר – בראש שקט.'
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 px-4 bg-white" dir="rtl">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary-600">שאלות נפוצות</h2>
        <ul className="text-right space-y-4 text-lg leading-relaxed">
          {faqs.map((faq, idx) => (
            <li key={idx} className="border-b border-gray-200 pb-4">
              <button
                className="w-full flex justify-between items-center text-right font-bold focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors text-lg"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{idx + 1}. {faq.question}</span>
                <span className={`transform transition-transform duration-200 ml-2 ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 text-base pr-2 ${openIndex === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                style={{ pointerEvents: openIndex === idx ? 'auto' : 'none' }}
                aria-hidden={openIndex !== idx}
              >
                {faq.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;