import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FULL_REDESIGN_DATA } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';
import { trackEvent } from '../../utils/tracking';

export default function FullRedesign({ onSelectPackage }) {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });

  return (
    <section 
      ref={sectionRef}
      id="full-redesign"
      className="relative py-8 sm:py-12 lg:py-14 bg-gradient-to-r from-[#7F1018] via-[#C9141C] to-[#600A0F] dark:from-[#4E080C] dark:via-[#7F1018] dark:to-[#380407] text-white border-y border-[#D71920]/30 dark:border-[#7F1018]/50 overflow-hidden"
      aria-label="Dịch vụ làm mới website toàn bộ"
    >
      {/* Decorative Technical Background Elements */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Tech Geometric Background Mesh */}
      <div
        className="absolute -right-20 -top-20 w-[420px] sm:w-[540px] h-[360px] sm:h-[480px] opacity-[0.14] mix-blend-screen pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-geometric-bg.webp"
          alt=""
          className="w-full h-full object-contain filter brightness-150"
          loading="lazy"
        />
      </div>

      <div 
        className="absolute -left-20 -bottom-20 w-[420px] sm:w-[540px] h-[360px] sm:h-[480px] opacity-[0.12] mix-blend-screen pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-geometric-bg.webp"
          alt=""
          className="w-full h-full object-contain rotate-180 filter brightness-150"
          loading="lazy"
        />
      </div>

      <div className="app-container relative z-10">
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 bg-black/15 border border-white/20 backdrop-blur-xs relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Col: Headings & Highlights */}
            <div className={`lg:col-span-7 space-y-3 transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <h2 className="text-[clamp(1.25rem,1.8vw+0.6rem,2rem)] font-extrabold text-white tracking-tight leading-[1.25]">
                Website quá cũ hoặc cần làm mới toàn bộ?
              </h2>

              <p className="text-xs sm:text-sm text-red-100 max-w-xl leading-relaxed font-normal">
                Khảo sát hiện trạng code cũ, tái thiết kế nhận diện thương hiệu và xây dựng nền tảng mới tối ưu chuyển đổi.
              </p>

              {/* Compact Highlights Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/20 border border-white/15 text-[11px] text-white/95 backdrop-blur-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-300 shrink-0" />
                  Khảo sát & tư vấn kiến trúc mới
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/20 border border-white/15 text-[11px] text-white/95 backdrop-blur-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-300 shrink-0" />
                  Thiết kế chuẩn UI/UX & thương hiệu
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/20 border border-white/15 text-[11px] text-white/95 backdrop-blur-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-300 shrink-0" />
                  Báo giá minh bạch, không phát sinh
                </span>
              </div>
            </div>

            {/* Right Col: Price Highlight & CTA Card */}
            <div 
              style={{ transitionDelay: inView ? '200ms' : '0ms' }}
              className={`lg:col-span-5 transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="p-4 sm:p-5 rounded-2xl bg-black/25 border border-white/20 backdrop-blur-sm space-y-3.5 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-red-200 font-semibold">
                    Khảo sát & Xây mới
                  </span>
                  <span className="text-[10px] font-mono bg-white/15 px-2 py-0.5 rounded text-white font-medium">
                    Dự án độc lập
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    Từ 10 triệu
                  </span>
                  <span className="text-xs font-mono text-red-200">/dự án</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    trackEvent('package_select', { package: FULL_REDESIGN_DATA.formValue, location: 'full_redesign_section' });
                    onSelectPackage(FULL_REDESIGN_DATA.formValue);
                  }}
                  className="btn-secondary !bg-white !text-[#8F0F16] hover:!bg-red-50 !border-white w-full !text-xs !font-bold !py-2.5 !px-4 flex items-center justify-center gap-1.5 group shadow-md cursor-pointer"
                >
                  <span>Yêu cầu tư vấn làm lại toàn bộ</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[10px] text-red-200/80 text-center">
                  * Báo giá theo khối lượng công việc thực tế, không gộp trong gói 500k–5tr.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
