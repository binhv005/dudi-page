import React, { useState } from 'react';
import { Gauge, Smartphone, LayoutTemplate, FileEdit, SendHorizontal, TrendingDown, ArrowUpRight } from 'lucide-react';
import { PROBLEM_SIGNS } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';

const iconMap = {
  Gauge,
  Smartphone,
  LayoutTemplate,
  FileEdit,
  SendHorizontal,
  TrendingDown,
};

export default function ProblemSigns() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      ref={sectionRef}
      id="problem-signs"
      className="py-8 sm:py-10 lg:py-11 bg-[#F8FAFC]/75 dark:bg-[#0D0F17]/80 backdrop-blur-xs text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Dấu hiệu website cần nâng cấp"
    >
      {/* Tech Geometric Background Mesh (Watermark) */}
      <div
        className="absolute -right-16 -top-16 w-[420px] sm:w-[540px] h-[480px] sm:h-[600px] opacity-[0.07] dark:opacity-[0.12] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-geometric-bg.webp"
          alt=""
          className="w-full h-full object-contain rotate-12"
          loading="lazy"
        />
      </div>

      {/* Localized Red Ambient Mesh Glow Aura */}
      <div
        className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-gradient-to-l from-[#D71920]/8 via-[#EF4444]/4 to-transparent dark:from-[#D71920]/6 dark:via-transparent rounded-full blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Subtle Diagnostic Scanner Line Beam */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D71920]/30 via-40% via-[#D71920]/50 to-transparent pointer-events-none z-0 animate-scan-beam"
        aria-hidden="true"
      />

      {/* Subtle Diagnostic Grid Background Accent */}
      <div
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.15] pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(215, 25, 32, 0.08) 1px, transparent 0)
          `,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">

          {/* LEFT: Staggered Diagnostic Items (01 - 06) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              className="space-y-2 sm:space-y-2.5 xl:space-y-3.5"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {PROBLEM_SIGNS.items.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Gauge;
                const isHovered = hoveredIndex === index;
                const formattedNum = String(index + 1).padStart(2, '0');
                const delayMs = 60 + index * 60;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    style={{
                      transitionDelay: inView ? `${delayMs}ms` : '0ms',
                    }}
                    className={`group relative py-3 sm:py-3.5 xl:py-4.5 px-4 sm:px-5 xl:px-6 rounded-2xl cursor-pointer transition-all duration-250 ease-out border ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                      } ${isHovered
                        ? 'bg-gradient-to-r from-[#D71920] via-[#C9141C] to-[#B51017] text-white shadow-xl shadow-red-950/25 border-transparent scale-[1.01]'
                        : 'bg-white/80 dark:bg-[#1A1D24] text-[#0F172A] dark:text-[#F8FAFC] border-transparent hover:border-[#E2E8F0] dark:hover:border-[#2A303C]'
                      }`}
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4 xl:gap-5">
                      {/* Number */}
                      <span className={`font-mono text-sm sm:text-base xl:text-lg font-bold transition-colors mt-0.5 ${isHovered ? 'text-red-200' : 'text-[#D71920]'
                        }`}>
                        {formattedNum}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className={`text-sm sm:text-base xl:text-lg font-bold tracking-tight transition-colors truncate ${isHovered ? 'text-white' : 'text-[#0F172A] dark:text-slate-100 group-hover:text-[#D71920]'
                            }`}>
                            {item.title}
                          </h3>
                          <div className={`p-1.5 xl:p-2 rounded-full transition-all shrink-0 ${isHovered
                            ? 'bg-white text-[#D71920] shadow-sm scale-105'
                            : 'text-[#D71920] bg-red-50 dark:bg-red-950/30'
                            }`}>
                            <IconComponent className="w-4 h-4 xl:w-5 xl:h-5" />
                          </div>
                        </div>

                        <p className={`text-xs sm:text-[13px] xl:text-[15px] leading-relaxed pr-2 transition-colors ${isHovered ? 'text-red-100' : 'text-[#64748B] dark:text-slate-400'
                          }`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Editorial Statement & Diagnostic Inspector Block */}
          <div className={`lg:col-span-5 lg:sticky lg:top-24 space-y-4 xl:space-y-6 order-1 lg:order-2 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
            <h2 className="text-[clamp(1.25rem,1.8vw+0.6rem,2.15rem)] font-black text-[#0F172A] dark:text-white tracking-tight leading-[1.2]">
              Website của bạn đang gặp vấn đề ở đâu?
            </h2>

            {/* Unified Diagnostic & Advice Red Card */}
            <div className="relative p-5 sm:p-6 xl:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#D71920] via-[#C9141C] to-[#A81218] text-white border border-red-500/40 shadow-2xl shadow-red-950/25 space-y-3.5 sm:space-y-4 xl:space-y-5 overflow-hidden">
              {/* Subtle ambient light inside the card */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <p className="text-xs sm:text-sm xl:text-[15px] text-white/95 leading-relaxed relative z-10">
                Đa số website chỉ cần tinh chỉnh đúng <strong className="text-white font-bold underline decoration-white/40 decoration-1 underline-offset-2">1–2 điểm nghẽn mấu chốt</strong> để tải nhanh gấp đôi và giữ chân khách hàng hiệu quả mà không cần đập đi xây lại.
              </p>

              <a
                href="#form-tu-van"
                className="w-full bg-white text-[#D71920] hover:bg-red-50 active:scale-[0.99] font-extrabold text-xs sm:text-sm xl:text-base py-3 sm:py-3.5 xl:py-4 px-5 rounded-xl flex items-center justify-center gap-2 group shadow-lg transition-all duration-200 relative z-10 cursor-pointer"
              >
                <span>Gửi website nhận chẩn đoán miễn phí</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
