/**
 * שירות שליחת מיילים שמשתמש ב-API Route
 * זוהי גרסה קלה שלא משתמשת ב-nodemailer ישירות, ולכן מתאימה גם לצד הלקוח
 */

// פונקציה לעטיפת לוגים 
const logger = {
  info: (message, data) => {
    console.log(`[INFO][${new Date().toISOString()}] ${message}`, data ? data : '');
  },
  error: (message, error) => {
    console.error(`[ERROR][${new Date().toISOString()}] ${message}`, error ? error : '');
  }
};

/**
 * שליחת מייל באמצעות API Route
 * @param {Object} data - נתוני הפנייה
 * @param {string} data.name - שם הפונה
 * @param {string} data.email - כתובת המייל של הפונה
 * @param {string} [data.phone] - מספר טלפון (אופציונלי)
 * @param {string} [data.businessName] - שם העסק (אופציונלי)
 * @param {string} [data.businessLocation] - מיקום העסק (אופציונלי)
 * @param {string} [data.notes] - הערות נוספות (אופציונלי)
 * @returns {Promise} - Promise שמתרחש עם סיום שליחת המייל
 */
async function sendEmail(data) {
  try {
    logger.info(`מתחיל לשלוח מייל עבור: ${data.name}`);
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'שגיאה בשליחת המייל');
    }
    
    logger.info('המייל נשלח בהצלחה');
    return result;
  } catch (error) {
    logger.error('שגיאה בשליחת המייל', error);
    throw error;
  }
}

/**
 * וידוא שהנתונים החיוניים קיימים
 * @param {Object} data - נתוני הפנייה
 * @returns {Object} - אובייקט המכיל האם הבדיקה עברה בהצלחה והודעת שגיאה
 */
function validateContactData(data) {
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
}

module.exports = {
  sendEmail,
  validateContactData,
  logger
}; 