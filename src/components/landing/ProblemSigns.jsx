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
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section
      ref={sectionRef}
      id="problem-signs"
      className="py-10 sm:py-12 lg:py-14 bg-white/40 dark:bg-white/[0.02] text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Dấu hiệu website cần nâng cấp"
    >
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
          <div className={`lg:col-span-5 lg:sticky lg:top-20 space-y-4 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D71920] uppercase shadow-2xs">
              <span>01 / CHẨN ĐOÁN WEBSITE</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-[1.85rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2]">
              Website của bạn đang gặp vấn đề ở đâu?
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 leading-relaxed max-w-[420px]">
              Nhận diện chính xác điểm nghẽn để sửa đúng chỗ, tránh lãng phí thời gian và ngân sách xây lại không cần thiết.
            </p>

            {/* Quick Diagnostic Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] shadow-2xs">
                <div className="flex items-center gap-1.5 text-[#D71920] mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono font-bold uppercase">30+ Tiêu chí</span>
                </div>
                <p className="text-[11px] text-[#64748B] dark:text-slate-400 leading-tight">Rà soát toàn diện code, tốc độ & giao diện</p>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono font-bold uppercase">0đ Chi phí</span>
                </div>
                <p className="text-[11px] text-[#64748B] dark:text-slate-400 leading-tight">Kiểm tra và báo rõ lộ trình ban đầu</p>
              </div>
            </div>

            {/* Expert Diagnostic Advice Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] dark:border-[#1F2937] pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0F172A] dark:text-white font-bold">Lời khuyên từ DUDI</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 dark:text-slate-400">#audit</span>
              </div>

              <p className="text-xs text-[#0F172A] dark:text-slate-200 leading-relaxed">
                Đa số website chỉ cần tinh chỉnh đúng <strong>1–2 điểm nghẽn mấu chốt</strong> để tải nhanh gấp đôi và giữ chân khách hàng hiệu quả mà không cần đập đi xây lại.
              </p>

              <a
                href="#form-tu-van"
                className="w-full btn-primary !text-xs !font-semibold !py-2.5 flex items-center justify-center gap-1.5 group shadow-sm"
              >
                <span>Gửi website nhận chẩn đoán miễn phí</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Staggered Diagnostic Items */}
          <div className="lg:col-span-7">
            <div className="border-t border-[#E2E8F0] dark:border-[#1E293B]">
              {PROBLEM_SIGNS.items.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Gauge;
                const isHovered = hoveredIndex === index;
                const formattedNum = String(index + 1).padStart(2, '0');
                const delayMs = 100 + index * 90;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    style={{
                      transitionDelay: inView ? `${delayMs}ms` : '0ms',
                    }}
                    className={`group relative py-3 sm:py-3.5 border-b border-[#E2E8F0] dark:border-[#1E293B] cursor-pointer transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      } ${isHovered ? 'bg-white dark:bg-[#111827] pl-4' : 'hover:bg-white/60 dark:hover:bg-[#111827]/60 pl-2'
                      }`}
                  >
                    {/* Active left indicator line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-[#D71920] transition-all duration-200 ${isHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'
                        }`}
                    />

                    <div className="flex items-start gap-3 sm:gap-4 pr-2">
                      {/* Number */}
                      <span className={`font-mono text-xs sm:text-sm font-bold transition-colors mt-0.5 ${isHovered ? 'text-[#D71920]' : 'text-gray-400 group-hover:text-[#0F172A] dark:group-hover:text-white'
                        }`}>
                        {formattedNum}
                      </span>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3 mb-0.5">
                          <h3 className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${isHovered ? 'text-[#D71920]' : 'text-[#0F172A] dark:text-slate-100'
                            }`}>
                            {item.title}
                          </h3>
                          <div className={`p-1 rounded-full transition-all ${isHovered ? 'bg-red-50 dark:bg-red-950/40 text-[#D71920] shadow-2xs' : 'text-gray-400 group-hover:text-[#0F172A] dark:group-hover:text-white'
                            }`}>
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed pr-3">
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
