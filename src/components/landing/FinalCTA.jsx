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
      <div className="app-container relative z-10">
        
        {/* Floating Card Container with Background Image */}
        <div 
          className={`relative rounded-3xl sm:rounded-[32px] 2xl:rounded-[40px] p-6 sm:p-10 lg:p-14 xl:p-18 2xl:p-22 border border-white/20 dark:border-white/15 shadow-2xl shadow-slate-950/20 overflow-hidden text-center transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
          }`}
        >
          {/* Card Background Image - Covers 100% of card */}
          <img
            src="/final-cta-bg.webp"
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
          <div className="relative z-10 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto space-y-4 sm:space-y-5 xl:space-y-6">
            {/* Heading Reveal */}
            <h2
              className={`text-[clamp(1.35rem,2.2vw+0.6rem,2.5rem)] font-extrabold text-white tracking-tight leading-[1.25] text-balance transition-all duration-600 ease-out drop-shadow-md ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Website cũ không nhất thiết phải làm lại từ đầu.
            </h2>

            {/* Subheading Reveal */}
            <p
              className={`text-xs sm:text-sm xl:text-base text-slate-100 max-w-lg xl:max-w-xl mx-auto leading-relaxed transition-all duration-600 ease-out font-medium drop-shadow-sm ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              DUDI giúp bạn xác định đúng phần cần cập nhật. Báo giá trước, chốt danh sách đầu việc trước khi viết code.
            </p>

            {/* Action Buttons Reveal */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-3 xl:gap-5 pt-2 sm:pt-3 xl:pt-5 transition-all duration-600 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <a
                href="#form-tu-van"
                onClick={() => trackEvent('cta_click', { location: 'final_cta_primary' })}
                className="w-full sm:w-auto bg-gradient-to-r from-[#D71920] to-[#B51017] hover:from-[#E31B23] hover:to-[#C9141C] text-white text-xs sm:text-sm xl:text-base 2xl:text-lg font-bold py-3 xl:py-4 2xl:py-5 px-7 xl:px-9 2xl:px-11 rounded-xl xl:rounded-2xl flex items-center justify-center gap-2 xl:gap-3 group shadow-lg shadow-red-950/30 hover:shadow-red-600/30 transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>Gửi website để kiểm tra</span>
                <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={COMPANY_CONFIG.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('zalo_click', { location: 'final_cta_secondary' })}
                className="w-full sm:w-auto bg-white/95 hover:bg-white text-[#0F172A] border border-white/40 text-xs sm:text-sm xl:text-base 2xl:text-lg font-bold py-3 xl:py-4 2xl:py-5 px-7 xl:px-9 2xl:px-11 rounded-xl xl:rounded-2xl flex items-center justify-center gap-2 xl:gap-3 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md active:scale-98"
              >
                <MessageSquare className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-[#D71920]" />
                <span>Nhắn Zalo</span>
              </a>
            </div>

            {/* Fineprint Reveal */}
            <div
              className={`pt-2 xl:pt-3 2xl:pt-4 transition-all duration-600 ease-out ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-[11px] xl:text-xs 2xl:text-sm font-mono text-slate-200 font-medium drop-shadow-sm">
                * Báo giá trước · Chốt phạm vi trước · Bảo hành 30 ngày
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
