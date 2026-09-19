import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2, AlertCircle, Loader2, ArrowRight, Building, Calendar
} from 'lucide-react';
import { FORM_DATA, COMPANY_CONFIG } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';
import { trackEvent } from '../../utils/tracking';
import { sendLeadEmail } from '../../services/emailService';

const TIMELINE_OPTIONS = [
  { value: "Càng sớm càng tốt (1–3 ngày)", label: "Càng sớm càng tốt (1–3 ngày)" },
  { value: "Trong 1–2 tuần tới", label: "Trong 1–2 tuần tới" },
  { value: "Trong tháng này", label: "Trong tháng này" },
  { value: "Chưa gấp / Cần tư vấn thêm", label: "Chưa gấp / Cần tư vấn thêm" },
];

export default function LeadForm({ selectedPackage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    companyName: '',
    email: '',
    websiteUrl: '',
    desiredTimeline: 'Càng sớm càng tốt (1–3 ngày)',
    issueSummary: '',
    packageInterest: selectedPackage || 'Chưa biết / cần tư vấn',
    consent: true,
    websiteUrlHoneypot: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [leadCode, setLeadCode] = useState('');
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const inputRefs = {
    fullName: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    websiteUrl: useRef(null),
    issueSummary: useRef(null),
    consent: useRef(null),
  };

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({ ...prev, packageInterest: selectedPackage }));
    }
  }, [selectedPackage]);

  const handleFieldChange = (field, value) => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackEvent('form_start', { form_id: 'lead_form' });
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const errors = {};

    // 1. Full name: 2 - 80 characters
    const trimmedName = formData.fullName.trim();
    if (!trimmedName) {
      errors.fullName = 'Vui lòng nhập họ và tên của bạn';
    } else if (trimmedName.length < 2 || trimmedName.length > 80) {
      errors.fullName = 'Họ và tên cần từ 2 đến 80 ký tự';
    }

    // 2. Phone: 9 - 12 digits after normalization
    const normalizedPhone = formData.phone.replace(/[\s.-]/g, '');
    const phoneDigitsOnly = normalizedPhone.replace(/\D/g, '');
    const phoneRegex = /^(0|84|\+84)[3|5|7|8|9][0-9]{7,9}$/;

    if (!normalizedPhone) {
      errors.phone = 'Vui lòng nhập số điện thoại hoặc Zalo';
    } else if (phoneDigitsOnly.length < 9 || phoneDigitsOnly.length > 12 || !phoneRegex.test(normalizedPhone)) {
      errors.phone = 'Số điện thoại không hợp lệ (VD: 0987654321, 9–12 số)';
    }

    // 3. Email (optional, standard format if provided)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Địa chỉ email không đúng định dạng';
      }
    }

    // 4. Website URL (optional, valid URL if provided)
    if (formData.websiteUrl.trim()) {
      const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
      if (!urlPattern.test(formData.websiteUrl.trim())) {
        errors.websiteUrl = 'URL website không hợp lệ (VD: https://tenmien.com hoặc tenmien.com)';
      }
    }

    // 5. Issue summary: 10 - 1000 characters
    const trimmedIssue = formData.issueSummary.trim();
    if (!trimmedIssue) {
      errors.issueSummary = 'Vui lòng mô tả vấn đề cần kiểm tra';
    } else if (trimmedIssue.length < 10) {
      errors.issueSummary = 'Mô tả quá ngắn (tối thiểu 10 ký tự)';
    } else if (trimmedIssue.length > 1000) {
      errors.issueSummary = 'Mô tả quá dài (tối đa 1000 ký tự)';
    }

    // 6. Consent required
    if (!formData.consent) {
      errors.consent = 'Vui lòng xác nhận đồng ý để DUDI liên hệ hỗ trợ';
    }

    setFormErrors(errors);

    // Auto-focus first error field
    const firstErrorKey = Object.keys(errors)[0];
    if (firstErrorKey && inputRefs[firstErrorKey]?.current) {
      inputRefs[firstErrorKey].current.focus();
    }

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Anti-spam Honeypot Check
    if (formData.websiteUrlHoneypot) {
      return;
    }

    trackEvent('form_submit', {
      package: formData.packageInterest,
      timeline: formData.desiredTimeline,
    });

    if (!validate()) {
      trackEvent('form_error', { error_fields: Object.keys(formErrors) });
      return;
    }

    setStatus('submitting');

    // ⚡ [Firebase Realtime] Gửi trực tiếp về Dashboard Vercel (https://dudi-tonghop.vercel.app/#dashboard)
    try {
      const fbLeadId = 'DUDI-' + Math.floor(100000 + Math.random() * 900000);
      const fbCreatedAt = new Date().toISOString();
      const fbUrl = 'https://firestore.googleapis.com/v1/projects/dudi-leads/databases/(default)/documents/leads/' + fbLeadId + '?key=AIzaSyBv2l4OH6dtaBqCx5D_rxtDT2HkMPfZ3kA';
      
      const fbPayload = {
        fields: {
          id: { stringValue: fbLeadId },
          customerName: { stringValue: formData.fullName.trim() || "Khách hàng" },
          phone: { stringValue: formData.phone.trim() || "Chưa cung cấp" },
          email: { stringValue: formData.email.trim() || "Chưa cung cấp" },
          company: { stringValue: formData.companyName.trim() || formData.websiteUrl.trim() || "Khách cá nhân" },
          serviceId: { stringValue: 'dudi-page' },
          serviceName: { stringValue: 'Sửa & Nâng Cấp Website' },
          budget: { stringValue: formData.packageInterest || "500.000đ" },
          source: { stringValue: 'Website Sửa & Nâng Cấp Web' },
          sourceUrl: { stringValue: typeof window !== 'undefined' ? window.location.href : '' },
          status: { stringValue: 'new' },
          priority: { stringValue: 'high' },
          createdAt: { stringValue: fbCreatedAt },
          requirements: { stringValue: "Web: " + formData.websiteUrl + " | Tiến độ: " + formData.desiredTimeline + " | Vấn đề: " + formData.issueSummary }
        }
      };

      fetch(fbUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fbPayload)
      }).catch(err => console.warn('Firebase sync warning:', err));
    } catch (fbErr) {
      console.warn('Firebase error:', fbErr);
    }
  

    const randomCode = 'DUDI-' + Math.floor(100000 + Math.random() * 900000);

    // Gửi trực tiếp toàn bộ dữ liệu qua Google Apps Script Webhook
    try {
      await sendLeadEmail(formData, randomCode);
    } catch (err) {
      console.error('Email sending error:', err);
    }

    setLeadCode(randomCode);
    setStatus('success');
    trackEvent('form_success', {
      lead_id: randomCode,
      package: formData.packageInterest,
    });
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      companyName: '',
      email: '',
      websiteUrl: '',
      desiredTimeline: 'Càng sớm càng tốt (1–3 ngày)',
      issueSummary: '',
      packageInterest: 'Chưa biết / cần tư vấn',
      consent: true,
      websiteUrlHoneypot: '',
    });
    setFormErrors({});
    setStatus('idle');
    setHasStartedForm(false);
  };

  return (
    <section
      ref={sectionRef}
      id="form-tu-van"
      className="min-h-[85vh] lg:min-h-[88vh] py-14 sm:py-18 lg:py-24 xl:py-28 bg-white/75 dark:bg-[#090A0F]/80 backdrop-blur-xs text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0] dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300 flex flex-col justify-center"
      aria-label="Form gửi yêu cầu tư vấn và kiểm tra website"
    >
      <div className="app-container relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* Left Column: Split-Screen Typography & Direct Contact */}
          <div
            className={`lg:col-span-5 space-y-4 xl:space-y-6 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <h2 className="text-[clamp(1.4rem,2.2vw+0.6rem,2.5rem)] font-black text-[#0F172A] dark:text-white tracking-tight leading-[1.2] text-balance">
              Gửi website. <br className="hidden sm:inline" />
              <span className="text-[#D71920]">DUDI kiểm tra trước.</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-lg xl:max-w-xl">
              Điền thông tin để kỹ sư DUDI xem qua hiện trạng website và gửi bạn báo cáo đánh giá kèm phạm vi & chi phí rõ ràng.
            </p>

            <div className="space-y-2.5 sm:space-y-3 xl:space-y-3.5 pt-1">
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm lg:text-base text-[#0F172A] dark:text-[#F1F5F9]">
                <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#D71920] shrink-0 mt-0.5" />
                <span>Không thu bất kỳ khoản phí kiểm tra ban đầu nào</span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm lg:text-base text-[#0F172A] dark:text-[#F1F5F9]">
                <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#D71920] shrink-0 mt-0.5" />
                <span>Báo giá và chốt đầu việc trước khi viết code</span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm lg:text-base text-[#0F172A] dark:text-[#F1F5F9]">
                <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#D71920] shrink-0 mt-0.5" />
                <span>Bảo mật tuyệt đối mã nguồn và dữ liệu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Spacious Red Form Card */}
          <div className="lg:col-span-7 flex justify-center items-center w-full">
            <div
              className={`w-full max-w-[680px] xl:max-w-[760px] 2xl:max-w-[820px] bg-gradient-to-br from-[#D71920] via-[#C9141C] to-[#991016] border border-red-400/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 xl:p-9 shadow-2xl shadow-red-950/30 text-white transition-all duration-500 ease-out relative ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              {/* Top-Right Mascot Assistant */}
              <div className="absolute -top-7 sm:-top-8 xl:-top-10 right-4 pointer-events-none z-20 select-none">
                <img
                  src="/form-mascot.webp"
                  alt="DUDI Mascot Assistant"
                  width={1148}
                  height={817}
                  loading="lazy"
                  decoding="async"
                  className="w-14 sm:w-16 xl:w-20 h-auto object-contain drop-shadow-md select-none"
                />
              </div>

              {status === 'success' ? (
                <div className="py-6 sm:py-8 text-center space-y-3.5" role="status" aria-live="polite">
                  <div className="w-12 h-12 bg-white text-[#D71920] rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-extrabold text-white">
                      Tiếp Nhận Thành Công!
                    </h3>
                    <p className="text-xs sm:text-sm text-red-100 max-w-sm mx-auto">
                      {FORM_DATA.successMessage}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/20 border border-white/20 max-w-xs mx-auto text-center shadow-2xs backdrop-blur-xs">
                    <span className="text-[10px] sm:text-xs font-mono text-red-200 uppercase tracking-widest block font-bold">Mã yêu cầu (Lead ID)</span>
                    <span className="text-base sm:text-lg font-mono font-bold text-white block mt-0.5">{leadCode}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-white text-[#D71920] hover:bg-slate-100 rounded-xl text-xs sm:text-sm font-bold shadow-md cursor-pointer transition-colors"
                  >
                    Gửi thêm yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-2.5 sm:space-y-3.5 xl:space-y-4">

                  {/* Honeypot hidden input for spam protection */}
                  <input
                    type="text"
                    name="websiteUrlHoneypot"
                    value={formData.websiteUrlHoneypot}
                    onChange={(e) => setFormData({ ...formData, websiteUrlHoneypot: e.target.value })}
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Row 1: Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="form-fullname" className="block text-[11px] sm:text-xs xl:text-[13px] font-mono uppercase tracking-wider text-white mb-1 font-bold">
                        Họ và tên <span className="text-amber-300">*</span>
                      </label>
                      <input
                        ref={inputRefs.fullName}
                        type="text"
                        id="form-fullname"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => handleFieldChange('fullName', e.target.value)}
                        aria-invalid={!!formErrors.fullName}
                        aria-describedby={formErrors.fullName ? 'fullname-error' : undefined}
                        className={`w-full px-3.5 sm:px-4 py-2 sm:py-2.5 xl:py-3.5 rounded-xl bg-white text-[#0F172A] placeholder-gray-400 text-xs sm:text-sm xl:text-base transition-all shadow-xs focus:outline-none ${formErrors.fullName ? 'ring-2 ring-amber-300' : 'focus:ring-2 focus:ring-white'
                          }`}
                      />
                      {formErrors.fullName && (
                        <p id="fullname-error" className="mt-1 text-[10.5px] text-amber-200 bg-black/30 px-2 py-0.5 rounded flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{formErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone / Zalo */}
                    <div>
                      <label htmlFor="form-phone" className="block text-[11px] sm:text-xs xl:text-[13px] font-mono uppercase tracking-wider text-white mb-1 font-bold">
                        Số điện thoại / Zalo <span className="text-amber-300">*</span>
                      </label>
                      <input
                        ref={inputRefs.phone}
                        type="tel"
                        id="form-phone"
                        required
                        placeholder="0987 654 321"
                        value={formData.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                        className={`w-full px-3.5 sm:px-4 py-2 sm:py-2.5 xl:py-3.5 rounded-xl bg-white text-[#0F172A] placeholder-gray-400 text-xs sm:text-sm xl:text-base transition-all shadow-xs focus:outline-none ${formErrors.phone ? 'ring-2 ring-amber-300' : 'focus:ring-2 focus:ring-white'
                          }`}
                      />
                      {formErrors.phone && (
                        <p id="phone-error" className="mt-1 text-[10.5px] text-amber-200 bg-black/30 px-2 py-0.5 rounded flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{formErrors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                    {/* Company Name */}
                    <div>
                      <label htmlFor="form-company" className="block text-[11px] sm:text-xs xl:text-[13px] font-mono uppercase tracking-wider text-white mb-1 font-bold">
                        Tên doanh nghiệp <span className="text-red-200 font-normal">(Tùy chọn)</span>
                      </label>
                      <input
                        type="text"
                        id="form-company"
                        placeholder="Công ty TNHH ABC"
                        value={formData.companyName}
                        onChange={(e) => handleFieldChange('companyName', e.target.value)}
                        className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 xl:py-3.5 rounded-xl bg-white text-[#0F172A] placeholder-gray-400 text-xs sm:text-sm xl:text-base transition-all shadow-xs focus:ring-2 focus:ring-white focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="form-email" className="block text-[11px] sm:text-xs xl:text-[13px] font-mono uppercase tracking-wider text-white mb-1 font-bold">
                        Email <span className="text-red-200 font-normal">(Nhận báo cáo PDF)</span>
                      </label>
                      <input
                        ref={inputRefs.email}
                        type="email"
                        id="form-email"
                        placeholder="example@company.com"
                        value={formData.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                        className={`w-full px-3.5 sm:px-4 py-2 sm:py-2.5 xl:py-3.5 rounded-xl bg-white text-[#0F172A] placeholder-gray-400 text-xs sm:text-sm xl:text-base transition-all shadow-xs focus:outline-none ${formErrors.email ? 'ring-2 ring-amber-300' : 'focus:ring-2 focus:ring-white'
                          }`}
                      />
                      {formErrors.email && (
                        <p id="email-error" className="mt-1 text-[10.5px] text-amber-200 bg-black/30 px-2 py-0.5 rounded flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Website URL & Package Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                    {/* Website URL */}
                    <div>
                      <label htmlFor="form-website" className="block text-[11px] sm:text-xs xl:text-[13px] font-mono uppercase tracking-wider text-white mb-1 font-bold">
                        URL Website hiện tại <span className="text-red-200 font-normal">(Nếu có)</span>
                      </label>
                      <input
                        ref={inputRefs.websiteUrl}
                        type="text"
                        id="form-website"
                        placeholder="https://ten-mien.com"
                        value={formData.websiteUrl}
                        onChange={(e) => handleFieldChange('websiteUrl', e.target.value)}
                        aria-invalid={!!formErrors.websiteUrl}
                        aria-describedby={formErrors.websiteUrl ? 'website-error' : undefined}
                        className={`w-full px-3.5 sm:px-4 py-2 sm:py-2.5 xl:py-3.5 rounded-xl bg-white text-[#0F172A] placeholder-gray-400 text-xs sm:text-sm xl:text-base transition-all shadow-xs focus:outline-none ${formErrors.websiteUrl ? 'ring-2 ring-amber-300' : 'focus:ring-2 focus:ring-white'
                          }`}
                      />
                      {formErrors.websiteUrl && (
                        <p id="website-error" className="mt-1 text-[10.5px] text-amber-200 bg-black/30 px-2 py-0.5 rounded flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{formErrors.websiteUrl}</span>
                        </p>
                      )}
                    </div>

                    {/* Package Interest */}
                    <div>
                      <label htmlFor="form-package" className="block text-[11px] sm:text-xs xl:text-[13px] font-mono uppercase tracking-wider text-white mb-1 font-bold">
                        Gói dịch vụ quan tâm
                      </label>
                      <select
                        id="form-package"
                        value={formData.packageInterest}
                        onChange={(e) => {
                          handleFieldChange('packageInterest', e.target.value);
                          trackEvent('package_select', { package: e.target.value });
                        }}
                        className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 xl:py-3.5 rounded-xl bg-white text-[#0F172A] text-xs sm:text-sm xl:text-base transition-all shadow-xs focus:ring-2 focus:ring-white focus:outline-none cursor-pointer"
                      >
                        {FORM_DATA.packagesOptions.map((pkg) => (
                          <option key={pkg.value} value={pkg.value} className="bg-white text-[#0F172A]">
                            {pkg.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Desired Timeline */}
                  <div>
                    <label htmlFor="form-timeline" className="block text-[11px] sm:text-xs xl:text-[13px] font-mono uppercase tracking-wider text-white mb-1 font-bold">
                      Thời gian mong muốn hoàn thành
                    </label>
                    <select
                      id="form-timeline"
                      value={formData.desiredTimeline}
                      onChange={(e) => handleFieldChange('desiredTimeline', e.target.value)}
                      className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 xl:py-3.5 rounded-xl bg-white text-[#0F172A] text-xs sm:text-sm xl:text-base transition-all shadow-xs focus:ring-2 focus:ring-white focus:outline-none cursor-pointer"
                    >
                      {TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-white text-[#0F172A]">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5: Standalone & Expandable Issue Summary (Textarea) */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="form-issue" className="block text-[11px] sm:text-xs xl:text-[13px] font-mono uppercase tracking-wider text-white font-bold">
                        Vấn đề cần xử lý <span className="text-amber-300">*</span>
                      </label>
                      <span className="text-[10px] sm:text-xs font-mono text-red-200">
                        {formData.issueSummary.length}/1000 ký tự
                      </span>
                    </div>
                    <textarea
                      ref={inputRefs.issueSummary}
                      id="form-issue"
                      required
                      rows={3}
                      placeholder="Mô tả chi tiết vấn đề website đang gặp phải (VD: Website chậm, lỗi giao diện trên mobile, lỗi nút bấm hoặc form liên hệ...)"
                      value={formData.issueSummary}
                      onChange={(e) => handleFieldChange('issueSummary', e.target.value)}
                      aria-invalid={!!formErrors.issueSummary}
                      aria-describedby={formErrors.issueSummary ? 'issue-error' : undefined}
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 xl:py-3.5 rounded-xl bg-white text-[#0F172A] placeholder-gray-400 text-xs sm:text-sm xl:text-base leading-relaxed transition-all shadow-xs focus:outline-none resize-y min-h-[85px] sm:min-h-[95px] xl:min-h-[110px] ${
                        formErrors.issueSummary ? 'ring-2 ring-amber-300' : 'focus:ring-2 focus:ring-white'
                      }`}
                    />
                    {formErrors.issueSummary && (
                      <p id="issue-error" className="mt-1 text-[10.5px] text-amber-200 bg-black/30 px-2 py-0.5 rounded flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{formErrors.issueSummary}</span>
                      </p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        ref={inputRefs.consent}
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleFieldChange('consent', e.target.checked)}
                        className="w-4 h-4 rounded border-white/60 bg-white text-[#D71920] focus:ring-2 focus:ring-white cursor-pointer shrink-0"
                      />
                      <span className="text-xs sm:text-[13px] xl:text-sm text-white/95 leading-tight">
                        {FORM_DATA.consentText}
                      </span>
                    </label>
                    {formErrors.consent && (
                      <p className="mt-1 text-[10.5px] text-amber-200 bg-black/30 px-2 py-0.5 rounded flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{formErrors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-white hover:bg-slate-50 text-[#D71920] active:scale-[0.99] text-xs sm:text-sm xl:text-base font-extrabold py-3 sm:py-3.5 xl:py-4 px-4 rounded-xl shadow-lg shadow-black/20 flex items-center justify-center gap-2 group cursor-pointer transition-all duration-200 disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#D71920]" />
                          <span>Đang gửi thông tin tiếp nhận...</span>
                        </>
                      ) : (
                        <>
                          <span>{FORM_DATA.submitBtnText}</span>
                          <ArrowRight className="w-4 h-4 text-[#D71920] transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
