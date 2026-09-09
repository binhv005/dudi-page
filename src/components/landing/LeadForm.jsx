import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2, AlertCircle, Phone, MessageSquare, Loader2, ArrowRight, Building, Calendar
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
  const [copiedPhone, setCopiedPhone] = useState(false);
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
      className="py-10 sm:py-12 lg:py-14 bg-transparent text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0] dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Form gửi yêu cầu tư vấn và kiểm tra website"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* Left Column: Split-Screen Typography & Direct Contact */}
          <div
            className={`lg:col-span-5 space-y-3.5 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F1F5F9] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D71920] uppercase shadow-2xs">
              <span>08 / TIẾP NHẬN YÊU CẦU</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.18]">
              Gửi website.<br />
              <span className="text-[#D71920]">DUDI kiểm tra trước.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-[420px]">
              Điền thông tin cơ bản để kỹ sư DUDI xem qua hiện trạng website và gửi bạn báo cáo đánh giá kèm phạm vi & chi phí rõ ràng.
            </p>

            <div className="space-y-2 pt-1">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9]">
                <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <span>Không thu bất kỳ khoản phí kiểm tra ban đầu nào</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9]">
                <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <span>Báo giá và chốt đầu việc trước khi viết code</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9]">
                <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <span>Bảo mật tuyệt đối mã nguồn và dữ liệu khách hàng</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#1E293B] space-y-1.5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-bold">Kênh liên hệ trực tiếp:</p>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <a
                  href={COMPANY_CONFIG.hotlineTel}
                  onClick={(e) => {
                    trackEvent('phone_click', { location: 'form_section' });
                    if (window.innerWidth >= 768) {
                      e.preventDefault();
                      navigator.clipboard?.writeText(COMPANY_CONFIG.hotline.replace(/\s+/g, ' ').trim());
                      setCopiedPhone(true);
                      setTimeout(() => setCopiedPhone(false), 2000);
                    }
                  }}
                  className="flex items-center gap-1.5 text-[#0F172A] dark:text-[#F8FAFC] hover:text-[#D71920] font-semibold transition-colors cursor-pointer"
                  title="Nhấn để sao chép số điện thoại"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>{COMPANY_CONFIG.hotline}</span>
                  {copiedPhone && (
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 px-1.5 py-0.5 rounded animate-in fade-in duration-150">
                      Đã chép!
                    </span>
                  )}
                </a>
                <a
                  href={COMPANY_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('zalo_click', { location: 'form_section' })}
                  className="flex items-center gap-1.5 text-[#0F172A] dark:text-[#F8FAFC] hover:text-[#D71920] font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>Zalo DUDI</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form with Accessible Inputs & Staggered Reveal */}
          <div
            className={`lg:col-span-7 bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] rounded-2xl p-4 sm:p-5.5 shadow-2xs transition-all duration-500 ease-out relative ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Top-Right Mascot Assistant */}
            <div className="absolute -top-10 sm:-top-12 right-2 sm:right-4 pointer-events-none z-20 select-none">
              <img
                src="/form-mascot.webp"
                alt="DUDI Mascot Assistant"
                width={1148}
                height={817}
                loading="lazy"
                decoding="async"
                className="w-16 sm:w-20 lg:w-24 h-auto object-contain drop-shadow-md select-none"
              />
            </div>

            {status === 'success' ? (
              <div className="py-5 text-center space-y-3.5" role="status" aria-live="polite">
                <div className="w-10 h-10 bg-red-50 dark:bg-red-950/50 text-[#D71920] rounded-full flex items-center justify-center mx-auto border border-red-100 dark:border-red-900/50 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#111111] dark:text-white">
                    Tiếp Nhận Thành Công!
                  </h3>
                  <p className="text-xs text-[#5F6368] dark:text-[#94A3B8] max-w-sm mx-auto">
                    {FORM_DATA.successMessage}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] max-w-xs mx-auto text-center shadow-2xs">
                  <span className="text-[10px] font-mono text-[#5F6368] dark:text-[#94A3B8] uppercase tracking-widest block font-bold">Mã yêu cầu (Lead ID)</span>
                  <span className="text-base font-mono font-bold text-[#D71920] block mt-0.5">{leadCode}</span>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-secondary !text-xs !font-semibold !py-1.5 !px-3.5 cursor-pointer"
                >
                  Gửi thêm yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-3">

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

                {/* Field Group 1: Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="form-fullname" className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] dark:text-[#E2E8F0] mb-1 font-bold">
                      Họ và tên <span className="text-[#D71920]">*</span>
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
                      className={`w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1E293B] border text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-xs sm:text-sm transition-colors ${formErrors.fullName ? 'border-[#D71920] ring-1 ring-[#D71920]' : 'border-[#E5E7EB] dark:border-[#334155] focus:border-[#D71920] dark:focus:border-[#D71920]'
                        }`}
                    />
                    {formErrors.fullName && (
                      <p id="fullname-error" className="mt-1 text-[11px] text-[#D71920] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{formErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone / Zalo */}
                  <div>
                    <label htmlFor="form-phone" className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] dark:text-[#E2E8F0] mb-1 font-bold">
                      Số điện thoại / Zalo <span className="text-[#D71920]">*</span>
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
                      className={`w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1E293B] border text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-xs sm:text-sm transition-colors ${formErrors.phone ? 'border-[#D71920] ring-1 ring-[#D71920]' : 'border-[#E5E7EB] dark:border-[#334155] focus:border-[#D71920] dark:focus:border-[#D71920]'
                        }`}
                    />
                    {formErrors.phone && (
                      <p id="phone-error" className="mt-1 text-[11px] text-[#D71920] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{formErrors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Field Group 2: Company Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="form-company" className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] dark:text-[#E2E8F0] mb-1 font-bold">
                      Tên doanh nghiệp <span className="text-[#5F6368] dark:text-[#94A3B8] font-normal">(Không bắt buộc)</span>
                    </label>
                    <input
                      type="text"
                      id="form-company"
                      placeholder="Công ty TNHH ABC"
                      value={formData.companyName}
                      onChange={(e) => handleFieldChange('companyName', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] focus:border-[#D71920] dark:focus:border-[#D71920] text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="form-email" className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] dark:text-[#E2E8F0] mb-1 font-bold">
                      Email <span className="text-[#5F6368] dark:text-[#94A3B8] font-normal">(Nhận báo cáo PDF)</span>
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
                      className={`w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1E293B] border text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-xs sm:text-sm transition-colors ${formErrors.email ? 'border-[#D71920] ring-1 ring-[#D71920]' : 'border-[#E5E7EB] dark:border-[#334155] focus:border-[#D71920] dark:focus:border-[#D71920]'
                        }`}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="mt-1 text-[11px] text-[#D71920] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Field Group 3: Website URL & Desired Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Website URL */}
                  <div>
                    <label htmlFor="form-website" className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] dark:text-[#E2E8F0] mb-1 font-bold">
                      URL Website hiện tại <span className="text-[#5F6368] dark:text-[#94A3B8] font-normal">(Chưa có để trống)</span>
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
                      className={`w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1E293B] border text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-xs sm:text-sm transition-colors ${formErrors.websiteUrl ? 'border-[#D71920] ring-1 ring-[#D71920]' : 'border-[#E5E7EB] dark:border-[#334155] focus:border-[#D71920] dark:focus:border-[#D71920]'
                        }`}
                    />
                    {formErrors.websiteUrl && (
                      <p id="website-error" className="mt-1 text-[11px] text-[#D71920] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{formErrors.websiteUrl}</span>
                      </p>
                    )}
                  </div>

                  {/* Desired Timeline */}
                  <div>
                    <label htmlFor="form-timeline" className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] dark:text-[#E2E8F0] mb-1 font-bold">
                      Thời gian mong muốn
                    </label>
                    <select
                      id="form-timeline"
                      value={formData.desiredTimeline}
                      onChange={(e) => handleFieldChange('desiredTimeline', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] focus:border-[#D71920] dark:focus:border-[#D71920] text-[#111111] dark:text-white text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      {TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#1E293B] text-[#111111] dark:text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Field Group 4: Package Interest */}
                <div>
                  <label htmlFor="form-package" className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] dark:text-[#E2E8F0] mb-1 font-bold">
                    Gói dịch vụ quan tâm
                  </label>
                  <select
                    id="form-package"
                    value={formData.packageInterest}
                    onChange={(e) => {
                      handleFieldChange('packageInterest', e.target.value);
                      trackEvent('package_select', { package: e.target.value });
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] focus:border-[#D71920] dark:focus:border-[#D71920] text-[#111111] dark:text-white text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    {FORM_DATA.packagesOptions.map((pkg) => (
                      <option key={pkg.value} value={pkg.value} className="bg-white dark:bg-[#1E293B] text-[#111111] dark:text-white">
                        {pkg.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field Group 5: Issue Summary */}
                <div>
                  <label htmlFor="form-issue" className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] dark:text-[#E2E8F0] mb-1 font-bold">
                    Vấn đề cần xử lý <span className="text-[#D71920]">* (10–1000 ký tự)</span>
                  </label>
                  <textarea
                    ref={inputRefs.issueSummary}
                    id="form-issue"
                    rows="2.5"
                    required
                    placeholder="VD: Website tải chậm trên điện thoại, form đặt hàng bị lỗi không nhận được email..."
                    value={formData.issueSummary}
                    onChange={(e) => handleFieldChange('issueSummary', e.target.value)}
                    aria-invalid={!!formErrors.issueSummary}
                    aria-describedby={formErrors.issueSummary ? 'issue-error' : undefined}
                    className={`w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1E293B] border text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-xs sm:text-sm transition-colors ${formErrors.issueSummary ? 'border-[#D71920] ring-1 ring-[#D71920]' : 'border-[#E5E7EB] dark:border-[#334155] focus:border-[#D71920] dark:focus:border-[#D71920]'
                      }`}
                  />
                  {formErrors.issueSummary && (
                    <p id="issue-error" className="mt-1 text-[11px] text-[#D71920] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{formErrors.issueSummary}</span>
                    </p>
                  )}
                </div>

                {/* Field Group 6: Consent Checkbox */}
                <div>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      ref={inputRefs.consent}
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleFieldChange('consent', e.target.checked)}
                      className="w-3.5 h-3.5 rounded border-[#E5E7EB] dark:border-[#334155] dark:bg-[#1E293B] text-[#D71920] focus:ring-[#D71920] focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-xs text-[#5F6368] dark:text-[#94A3B8] leading-relaxed">
                      {FORM_DATA.consentText}
                    </span>
                  </label>
                  {formErrors.consent && (
                    <p className="mt-1 text-[11px] text-[#D71920] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{formErrors.consent}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full !text-xs sm:!text-sm !font-semibold !py-2.5 flex items-center justify-center gap-1.5 group shadow-sm shadow-[#D71920]/20 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Đang gửi thông tin tiếp nhận...</span>
                      </>
                    ) : (
                      <>
                        <span>{FORM_DATA.submitBtnText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
