import React from 'react';
import { ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';
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
      {/* Deep Red Atmospheric Cyber Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Moving Glow Orb */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none animate-tech-float-1 z-0" 
        aria-hidden="true"
      />

      {/* Tech Geometric Background Mesh (Watermark) */}
      <div
        className="absolute -right-20 -bottom-20 w-[450px] sm:w-[560px] h-[480px] sm:h-[600px] opacity-[0.12] mix-blend-screen pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-geometric-bg.webp"
          alt=""
          className="w-full h-full object-contain rotate-12 filter brightness-150"
          loading="lazy"
        />
      </div>

      {/* Subtle Glow Overlay Expanding on View */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent pointer-events-none transition-transform duration-1000 ease-out z-0"
        style={{
          transform: inView ? 'scale(1)' : 'scale(0.8)',
          opacity: inView ? 1 : 0.4,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-2 sm:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Col: Headings & Highlights */}
            <div className={`lg:col-span-7 space-y-3 transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/25 border border-white/20 text-[9px] sm:text-[10px] font-mono tracking-widest text-white uppercase backdrop-blur-sm shadow-2xs">
                <RefreshCw className="w-3 h-3 animate-spin text-white" style={{ animationDuration: '8s' }} />
                <span>DỊCH VỤ ĐỘC LẬP / REBUILD</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-[1.85rem] font-extrabold text-white tracking-tight leading-[1.25]">
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
