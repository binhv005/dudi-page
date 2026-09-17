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
      className="py-10 sm:py-14 lg:py-18 relative text-[#0F172A]"
      aria-label="Kêu gọi hành động cuối trang"
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Card Container with Background Image */}
        <div 
          className={`relative rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-14 border border-white/20 dark:border-white/15 shadow-2xl shadow-slate-950/20 overflow-hidden text-center transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
          }`}
        >
          {/* Card Background Image - Covers 100% of card */}
          <img
            src="/93e17df5abb3c5de7f89d8edd026bc5c.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
            style={{ margin: 0 }}
            loading="lazy"
          />

          {/* Seamless Dark Overlay - Covers 100% of card without any bottom gap */}
          <div 
            className="absolute inset-0 w-full h-full bg-[#0B1120]/45 dark:bg-[#060913]/60 backdrop-blur-[1px] pointer-events-none z-0"
            style={{ margin: 0 }}
            aria-hidden="true"
          />

          {/* Content Container */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-5">
            {/* Heading Reveal */}
            <h2
              className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-white tracking-tight leading-[1.25] text-balance transition-all duration-600 ease-out drop-shadow-md ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Website cũ không nhất thiết phải làm lại từ đầu.
            </h2>

            {/* Subheading Reveal */}
            <p
              className={`text-xs sm:text-sm text-slate-100 max-w-lg mx-auto leading-relaxed transition-all duration-600 ease-out font-medium drop-shadow-sm ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              DUDI giúp bạn xác định đúng phần cần cập nhật. Báo giá trước, chốt danh sách đầu việc trước khi viết code.
            </p>

            {/* Action Buttons Reveal */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 sm:pt-3 transition-all duration-600 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <a
                href="#form-tu-van"
                onClick={() => trackEvent('cta_click', { location: 'final_cta_primary' })}
                className="w-full sm:w-auto bg-gradient-to-r from-[#D71920] to-[#B51017] hover:from-[#E31B23] hover:to-[#C9141C] text-white text-xs sm:text-sm font-bold py-3 px-7 rounded-xl flex items-center justify-center gap-2 group shadow-lg shadow-red-950/30 hover:shadow-red-600/30 transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>Gửi website để kiểm tra</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={COMPANY_CONFIG.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('zalo_click', { location: 'final_cta_secondary' })}
                className="w-full sm:w-auto bg-white/95 hover:bg-white text-[#0F172A] border border-white/40 text-xs sm:text-sm font-bold py-3 px-7 rounded-xl flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md active:scale-98"
              >
                <MessageSquare className="w-4 h-4 text-[#D71920]" />
                <span>Nhắn Zalo</span>
              </a>
            </div>

            {/* Fineprint Reveal */}
            <div
              className={`pt-2 transition-all duration-600 ease-out ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-[11px] font-mono text-slate-200 font-medium drop-shadow-sm">
                * Báo giá trước · Chốt phạm vi trước · Bảo hành 30 ngày
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
