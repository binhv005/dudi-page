import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Building2, ShieldCheck, FileText, X, Check } from 'lucide-react';
import { COMPANY_CONFIG, NAV_LINKS } from '../../data/landingData';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handlePhoneClick = (e) => {
    // If on desktop (screen width >= 768px), copy phone to clipboard
    if (window.innerWidth >= 768) {
      e.preventDefault();
      const rawNumber = COMPANY_CONFIG.hotline.replace(/\s+/g, ' ').trim();
      navigator.clipboard?.writeText(rawNumber);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer className="bg-[#111111] dark:bg-[#070A0F] text-[#CBD5E1] text-xs sm:text-sm border-t border-[#222222] dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300">
      {/* Subtle top red line accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D71920] to-transparent opacity-70" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Legal Info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[#D71920] flex flex-col items-center justify-center text-white leading-none px-1 py-1 shadow-md shrink-0">
                <span className="text-[13px] tracking-tight font-extrabold uppercase text-white">DUDI</span>
                <span className="text-[8px] font-bold lowercase tracking-wider text-white">software</span>
              </div>
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">DUDI Software</span>
            </div>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-md">
              {COMPANY_CONFIG.tagline}
            </p>

            <div className="pl-3.5 border-l-2 border-[#3B82F6] space-y-1 py-0.5">
              <h3 className="font-bold text-white text-xs sm:text-sm tracking-wide">
                {COMPANY_CONFIG.legalName}
              </h3>
              <p className="text-[11px] sm:text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider">
                {COMPANY_CONFIG.legalNameEn}
              </p>
              <p className="text-xs text-[#CBD5E1] font-medium pt-0.5">
                MST: <span className="font-mono text-white font-semibold">{COMPANY_CONFIG.taxCode}</span>
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="relative inline-block pb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Danh mục
              </h3>
              <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#EF4444] rounded-full" />
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#CBD5E1] hover:text-white transition-colors py-0.5 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Links */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="relative inline-block pb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Liên hệ
              </h3>
              <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#3B82F6] rounded-full" />
            </div>
            
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Address 1 */}
              <div className="flex items-start gap-2.5 text-[#E2E8F0]">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 text-white">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-snug pt-0.5">{COMPANY_CONFIG.addresses[0]}</span>
              </div>

              {/* Address 2 */}
              <div className="flex items-start gap-2.5 text-[#E2E8F0]">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 text-white">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-snug pt-0.5">{COMPANY_CONFIG.addresses[1]}</span>
              </div>

              {/* Phone (Copy on desktop / Call on mobile) */}
              <div>
                <a
                  href={COMPANY_CONFIG.hotlineTel}
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2.5 text-white hover:text-[#38BDF8] transition-colors group cursor-pointer"
                  title="Nhấn để sao chép số điện thoại"
                >
                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    copiedPhone ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-white/10 border-white/20 text-white group-hover:text-white group-hover:bg-white/20'
                  }`}>
                    {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Phone className="w-3.5 h-3.5" />}
                  </div>
                  <span className="font-bold text-sm sm:text-base tracking-wide text-white">{COMPANY_CONFIG.hotline}</span>
                  {copiedPhone && (
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full animate-in fade-in duration-150">
                      Đã sao chép!
                    </span>
                  )}
                </a>
              </div>

              {/* Email (Navigate to Gmail) */}
              <div>
                <a
                  href={COMPANY_CONFIG.emailMailto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#E2E8F0] hover:text-[#38BDF8] transition-colors group cursor-pointer"
                  title="Gửi email cho DUDI qua Gmail"
                >
                  <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white group-hover:text-white group-hover:bg-white/20 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-white">{COMPANY_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#CBD5E1]">
          <p className="text-[#CBD5E1]">
            © {new Date().getFullYear()} {COMPANY_CONFIG.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="text-[#CBD5E1] hover:text-white transition-colors focus-visible:outline-none cursor-pointer"
            >
              Chính sách bảo mật
            </button>
            <span className="text-[#4B5563]">|</span>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="text-[#CBD5E1] hover:text-white transition-colors focus-visible:outline-none cursor-pointer"
            >
              Điều khoản dịch vụ
            </button>
          </div>
        </div>
      </div>

      {/* Privacy / Terms Modal (Dark Themed) */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#18181B] border border-[#27272A] rounded-xl max-w-md w-full p-5 sm:p-6 space-y-3.5 shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-3.5 right-3.5 p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-white/10 cursor-pointer transition-colors"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-[#EF4444]">
              <FileText className="w-4 h-4" />
              <h3 className="text-base font-bold text-white">
                {activeModal === 'privacy' ? 'Chính sách bảo mật thông tin' : 'Điều khoản & Phạm vi dịch vụ'}
              </h3>
            </div>

            <div className="text-xs text-[#A1A1AA] space-y-2 leading-relaxed max-h-60 overflow-y-auto pr-2">
              {activeModal === 'privacy' ? (
                <>
                  <p>1. <strong className="text-white">Bảo mật thông tin khách hàng:</strong> DUDI cam kết bảo mật 100% thông tin liên hệ, dữ liệu kinh doanh và mã nguồn website của khách hàng.</p>
                  <p>2. <strong className="text-white">Quyền truy cập:</strong> DUDI chỉ yêu cầu các quyền truy cập cần thiết để kiểm tra và xử lý lỗi theo phạm vi đã thống nhất. Khách hàng được khuyến nghị đổi mật khẩu sau khi nghiệm thu.</p>
                  <p>3. <strong className="text-white">Cam kết sao lưu:</strong> Toàn bộ dữ liệu được sao lưu dự phòng trước khi triển khai bất kỳ can thiệp kỹ thuật nào.</p>
                </>
              ) : (
                <>
                  <p>1. <strong className="text-white">Nguyên tắc phạm vi:</strong> DUDI làm việc căn cứ theo danh sách hạng mục và chi phí đã chốt tại Bước 03. Các yêu cầu phát sinh ngoài phạm vi sẽ được báo giá bổ sung trước khi làm.</p>
                  <p>2. <strong className="text-white">Chính sách bảo hành:</strong> Bảo hành 30 ngày cho các lỗi phát sinh trực tiếp từ hạng mục do DUDI thực hiện và bàn giao.</p>
                  <p>3. <strong className="text-white">Quy định thanh toán:</strong> Tạm ứng 50% khi chốt phạm vi và thanh toán 50% còn lại sau khi nghiệm thu.</p>
                </>
              )}
            </div>

            <div className="pt-1 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="btn-primary !text-xs !py-1.5 !px-3.5 cursor-pointer"
              >
                Đã hiểu & Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
