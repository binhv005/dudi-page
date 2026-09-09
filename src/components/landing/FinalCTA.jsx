import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';
import { trackEvent } from '../../utils/tracking';

export default function FinalCTA() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="py-10 sm:py-12 lg:py-14 bg-white/40 dark:bg-white/[0.02] text-[#0F172A] dark:text-[#F8FAFC] relative overflow-hidden border-b border-[#E2E8F0]/80 dark:border-[#1E293B] transition-colors duration-300"
      aria-label="Kêu gọi hành động cuối trang"
    >
      {/* Background Red Atmospheric Shape with Smooth Entrance & Gentle Breathing */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[360px] sm:h-[440px] bg-gradient-to-r from-[#E31B23]/12 via-[#C9141C]/8 to-[#E31B23]/10 dark:from-[#7F1018]/25 dark:via-[#A9141E]/16 dark:to-[#7F1018]/20 rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ease-out animate-tech-float-1 z-0 ${isInView ? 'scale-100 opacity-100' : 'scale-80 opacity-0'
          }`}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">

        {/* Section Badge */}
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F1F5F9] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[11px] font-mono tracking-widest text-[#D71920] uppercase shadow-2xs transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
        >
          <span>09 / KHỞI ĐỘNG DỰ ÁN</span>
        </div>

        {/* Heading Reveal */}
        <h2
          className={`text-xl sm:text-2xl lg:text-[2.1rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2] max-w-3xl mx-auto text-balance transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          style={{ transitionDelay: '100ms' }}
        >
          Website cũ không nhất thiết phải làm lại từ đầu.
        </h2>

        {/* Subheading Reveal */}
        <p
          className={`text-xs sm:text-sm text-[#5F6368] dark:text-[#94A3B8] max-w-xl mx-auto leading-relaxed transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '200ms' }}
        >
          DUDI giúp bạn xác định đúng phần cần cập nhật. Báo giá trước, chốt danh sách đầu việc trước khi viết code.
        </p>

        {/* Action Buttons Reveal */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href="#form-tu-van"
            onClick={() => trackEvent('cta_click', { location: 'final_cta_primary' })}
            className="btn-primary w-full sm:w-auto !text-xs sm:!text-sm !font-semibold !py-2.5 !px-6 flex items-center justify-center gap-2 group shadow-sm shadow-[#D71920]/20 cursor-pointer"
          >
            <span>Gửi website để kiểm tra</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={COMPANY_CONFIG.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('zalo_click', { location: 'final_cta_secondary' })}
            className="btn-secondary w-full sm:w-auto !text-xs sm:!text-sm !font-semibold !py-2.5 !px-6 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D71920]" />
            <span>Nhắn Zalo</span>
          </a>
        </div>

        {/* Fineprint Reveal */}
        <div
          className={`pt-3 transition-all duration-600 ease-out ${isInView ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-[11px] font-mono text-[#5F6368] dark:text-[#94A3B8]">
            * Báo giá trước · Chốt phạm vi trước · Bảo hành 30 ngày
          </p>
        </div>

      </div>
    </section>
  );
}
