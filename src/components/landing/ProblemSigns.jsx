import React, { useState } from 'react';
import { Gauge, Smartphone, LayoutTemplate, FileEdit, SendHorizontal, TrendingDown, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';
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

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* Left Column: Editorial Statement & Diagnostic Inspector Block */}
          <div className={`lg:col-span-5 lg:sticky lg:top-20 space-y-3.5 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D71920] uppercase shadow-2xs">
              <span>01 / CHẨN ĐOÁN WEBSITE</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.25]">
              Website của bạn đang gặp vấn đề ở đâu?
            </h2>

            {/* Unified Diagnostic & Advice Red Card */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#D71920] via-[#C9141C] to-[#A81218] text-white border border-red-500/40 shadow-xl shadow-red-950/20 space-y-3.5 overflow-hidden">
              {/* Subtle ambient light inside the card */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/20 pb-2 relative z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-white font-bold">Lời khuyên từ DUDI</span>
                </div>
                <span className="text-[10px] font-mono text-white/80 bg-black/15 px-2 py-0.5 rounded-full border border-white/10">#audit_mien_phi</span>
              </div>

              {/* Quick Diagnostic Metrics Embedded */}
              <div className="grid grid-cols-2 gap-2 relative z-10">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                  <div className="flex items-center gap-1.5 text-white mb-0.5">
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span className="text-xs font-mono font-bold uppercase">30+ Tiêu chí</span>
                  </div>
                  <p className="text-[10.5px] text-white/85 leading-tight">Rà soát toàn diện code, tốc độ & UI</p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                  <div className="flex items-center gap-1.5 text-white mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                    <span className="text-xs font-mono font-bold uppercase">0đ Chi phí</span>
                  </div>
                  <p className="text-[10.5px] text-white/85 leading-tight">Kiểm tra & báo rõ lộ trình ban đầu</p>
                </div>
              </div>

              <p className="text-xs sm:text-[13px] text-white/95 leading-relaxed relative z-10">
                Đa số website chỉ cần tinh chỉnh đúng <strong className="text-white font-bold underline decoration-white/40 decoration-1 underline-offset-2">1–2 điểm nghẽn mấu chốt</strong> để tải nhanh gấp đôi và giữ chân khách hàng hiệu quả mà không cần đập đi xây lại.
              </p>

              <a
                href="#form-tu-van"
                className="w-full bg-white text-[#D71920] hover:bg-red-50 active:scale-[0.99] font-bold text-xs sm:text-[13px] py-2.5 sm:py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 group shadow-md transition-all duration-200 relative z-10 cursor-pointer"
              >
                <span>Gửi website nhận chẩn đoán miễn phí</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Staggered Diagnostic Items */}
          <div className="lg:col-span-7">
            <div
              className="space-y-1.5"
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
                    className={`group relative py-2.5 sm:py-3 px-3.5 sm:px-4.5 rounded-xl cursor-pointer transition-all duration-250 ease-out border ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                      } ${isHovered
                        ? 'bg-gradient-to-r from-[#D71920] via-[#C9141C] to-[#B51017] text-white shadow-md shadow-red-950/20 border-transparent scale-[1.008]'
                        : 'bg-white/80 dark:bg-[#1A1D24] text-[#0F172A] dark:text-[#F8FAFC] border-transparent hover:border-[#E2E8F0] dark:hover:border-[#2A303C]'
                      }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-3.5">
                      {/* Number */}
                      <span className={`font-mono text-xs sm:text-sm font-bold transition-colors mt-0.5 ${isHovered ? 'text-red-200' : 'text-[#D71920]'
                        }`}>
                        {formattedNum}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h3 className={`text-sm sm:text-[15px] font-bold tracking-tight transition-colors truncate ${isHovered ? 'text-white' : 'text-[#0F172A] dark:text-slate-100 group-hover:text-[#D71920]'
                            }`}>
                            {item.title}
                          </h3>
                          <div className={`p-1.5 rounded-full transition-all shrink-0 ${isHovered
                            ? 'bg-white text-[#D71920] shadow-sm scale-105'
                            : 'text-[#D71920] bg-red-50 dark:bg-red-950/30'
                            }`}>
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <p className={`text-xs sm:text-[12.5px] leading-relaxed pr-2 transition-colors ${isHovered ? 'text-red-100' : 'text-[#64748B] dark:text-slate-400'
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

        </div>
      </div>
    </section>
  );
}
