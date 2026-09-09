const GOOGLE_SCRIPT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwGp72cZ_H9NnCwjy9wys2GrwKhzHUR9gh-3CUSktX7MnPHtu4__hibHVz9zCaLEd9f/exec';

/**
 * Gửi nội dung form tư vấn trực tiếp về email.
 * Ưu tiên Google Apps Script Webhook (gửi trực tiếp từ hệ thống Gmail nội bộ, không bao giờ bị chặn)
 */
export async function sendLeadEmail(formData, leadCode) {
  const webhookEndpoint = import.meta.env.VITE_FORM_ENDPOINT || GOOGLE_SCRIPT_WEBHOOK_URL;
  const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || 'vtb22522005@gmail.com';

  const payload = {
    _subject: `[Tư vấn website ${leadCode}] ${formData.fullName} - ${formData.phone}`,
    _template: 'table',
    _captcha: 'false',
    'Mã hồ sơ': leadCode,
    'Họ và tên': formData.fullName,
    'Số điện thoại / Zalo': formData.phone,
    'Tên doanh nghiệp': formData.companyName || 'Chưa cung cấp',
    'Email': formData.email || 'Chưa cung cấp',
    'Website hiện tại': formData.websiteUrl || 'Chưa có (Cần tạo mới)',
    'Thời gian mong muốn': formData.desiredTimeline,
    'Gói dịch vụ': formData.packageInterest,
    'Mô tả vấn đề': formData.issueSummary,
    'Thời gian gửi': new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
  };

  // 1. Gửi trực tiếp qua Google Apps Script Webhook
  if (webhookEndpoint) {
    try {
      await fetch(webhookEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });
      return { success: true };
    } catch (err) {
      console.warn('Google Script Webhook dispatch error, trying fallback:', err);
    }
  }

  // Fallback qua FormSubmit
  const endpoint = `https://formsubmit.co/ajax/${recipientEmail}`;
  const data = new FormData();
  Object.entries(payload).forEach(([key, val]) => data.append(key, val));

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: data,
    });

    const result = await response.json().catch(() => ({}));
    return { success: response.ok, result };
  } catch (error) {
    console.error('Không thể gửi email tự động:', error);
    return { success: false, error };
  }
}
