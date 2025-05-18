import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// פונקציה לעטיפת לוגים 
const logger = {
  info: (message, data) => {
    console.log(`[INFO][${new Date().toISOString()}] ${message}`, data ? data : '');
  },
  error: (message, error) => {
    console.error(`[ERROR][${new Date().toISOString()}] ${message}`, error ? error : '');
  }
};

// יצירת טרנספורטר להודעות מייל
const createMailTransporter = () => {
  try {
    logger.info('יוצר חיבור לשרת SMTP');
    
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.zoho.com',
      port: parseInt(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  } catch (error) {
    logger.error('שגיאה ביצירת חיבור לשרת SMTP', error);
    throw new Error('לא ניתן ליצור חיבור לשרת המייל');
  }
};

// יצירת תבנית HTML למייל
const createEmailTemplate = (data) => {
  const { name, email, phone, businessName, businessLocation, notes } = data;
  
  // צבעים מוגדרים מ-tailwind.config.js
  const colors = {
    primary: '#3b82f6',    // כחול
    secondary: '#10b981',  // ירוק
    background: '#f9fafb', // רקע לבן אפרפר
    text: '#333333',       // טקסט כהה
    lightText: '#666666'   // טקסט בהיר יותר
  };
  
  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid ${colors.primary}; border-radius: 10px; background-color: ${colors.background}; color: ${colors.text};">
      <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid ${colors.primary}; padding-bottom: 15px;">
        <h1 style="color: ${colors.primary}; margin: 0;">פנייה חדשה מהאתר</h1>
        <p style="color: ${colors.lightText}; margin: 10px 0 0 0;">התקבלה בתאריך: ${new Date().toLocaleString('he-IL')}</p>
      </div>
      
      <div style="background-color: rgba(59, 130, 246, 0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: ${colors.primary}; margin-top: 0; border-bottom: 1px solid rgba(59, 130, 246, 0.2); padding-bottom: 10px;">פרטי הפונה</h2>
        <p style="margin: 8px 0;"><strong style="color: ${colors.primary};">שם מלא:</strong> ${name}</p>
        <p style="margin: 8px 0;"><strong style="color: ${colors.primary};">מייל:</strong> <a href="mailto:${email}" style="color: ${colors.secondary};">${email}</a></p>
        ${phone ? `<p style="margin: 8px 0;"><strong style="color: ${colors.primary};">טלפון:</strong> <a href="tel:${phone}" style="color: ${colors.secondary};">${phone}</a></p>` : ''}
      </div>
      
      ${notes ? `
      <div style="background-color: rgba(59, 130, 246, 0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: ${colors.primary}; margin-top: 0; border-bottom: 1px solid rgba(59, 130, 246, 0.2); padding-bottom: 10px;">הערות</h2>
        <p style="margin: 8px 0; white-space: pre-line;">${notes.replace(/\n/g, '<br>')}</p>
      </div>
      ` : ''}
      
      <div style="text-align: center; margin-top: 30px; font-size: 12px; color: ${colors.lightText};">
        <p>הודעה זו נשלחה מטופס יצירת הקשר באתר ${process.env.SITE_NAME || 'האתר שלך'}</p>
      </div>
    </div>
  `;
};

// שליחת מייל
const sendEmail = async (data) => {
  try {
    const transporter = createMailTransporter();
    const htmlTemplate = createEmailTemplate(data);
    
    const { name, email, businessName } = data;
    
    logger.info(`מתחיל לשלוח מייל מ: ${email}, עבור: ${businessName || name}`);
    
    const mailOptions = {
      from: `"${process.env.SITE_NAME || 'האתר שלך'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      subject: `פנייה חדשה מהאתר: ${businessName || name}`,
      html: htmlTemplate,
      replyTo: email
    };

    // שליחת המייל
    const info = await transporter.sendMail(mailOptions);
    logger.info(`מייל נשלח בהצלחה`, { 
      messageId: info.messageId, 
      recipient: process.env.EMAIL_RECIPIENT,
      sender: email 
    });
    
    return info;
  } catch (error) {
    logger.error('שגיאה בשליחת המייל', error);
    throw error;
  }
};

// וידוא שהנתונים החיוניים קיימים
const validateContactData = (data) => {
  if (!data || typeof data !== 'object') {
    return { valid: false, message: 'נתונים לא תקינים' };
  }
  
  if (!data.name || !data.name.trim()) {
    return { valid: false, message: 'שדה שם הוא חובה' };
  }
  
  if (!data.email || !data.email.trim()) {
    return { valid: false, message: 'שדה מייל הוא חובה' };
  }
  
  // בדיקה בסיסית של תבנית אימייל
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, message: 'כתובת מייל לא תקינה' };
  }
  
  return { valid: true };
};

export async function POST(request) {
  logger.info('התקבלה בקשה חדשה לשליחת מייל');
  
  try {
    // קבלת נתונים מהבקשה
    const data = await request.json();
    logger.info('התקבלו נתונים מהטופס', { name: data.name, email: data.email });
    
    // וידוא שהנתונים החיוניים קיימים
    const validation = validateContactData(data);
    if (!validation.valid) {
      logger.error('שגיאת וידוא נתונים', { message: validation.message });
      return NextResponse.json(
        { error: validation.message },
        { status: 400 }
      );
    }

    // הכנת הנתונים לשליחה
    const emailData = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone?.trim(),
      businessName: data.businessName?.trim(),
      businessLocation: data.businessLocation?.trim(),
      notes: data.notes?.trim()
    };

    // שליחת המייל
    await sendEmail(emailData);
    
    logger.info('בקשת המייל הושלמה בהצלחה');
    
    // החזרת תשובה חיובית
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error('שגיאה בטיפול בבקשה', error);
    
    // בדיקה אם השגיאה היא מהסוג Error עם הודעה
    const errorMessage = error instanceof Error ? error.message : 'אירעה שגיאה בשליחת ההודעה';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 