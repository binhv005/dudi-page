import React from 'react';
import { CheckCircle2, Globe, MonitorCheck, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';
import { preventOrphans } from '../../utils/textUtils';

export default function CaseStudies() {
  const [sectionRef, inView] = useInView({ threshold: 0.12 });
  const case01 = CASE_STUDIES.items[0];
  const case02 = CASE_STUDIES.items[1];

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="py-10 sm:py-12 lg:py-14 bg-white/40 dark:bg-white/[0.02] text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Các dự án DUDI đã thực hiện"
    >
      {/* Localized Red Ambient Mesh Glow Aura */}
      <div 
        className="absolute bottom-10 -left-20 w-[480px] h-[480px] bg-gradient-to-tr from-[#D71920]/8 via-[#EF4444]/4 to-transparent dark:from-[#D71920]/6 dark:via-transparent rounded-full blur-3xl pointer-events-none z-0" 
        aria-hidden="true"
      />

      <div className="max-w-[880px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className={`mb-7 sm:mb-9 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D71920] uppercase mb-2 shadow-2xs">
            <span>03 / DỰ ÁN THỰC TẾ</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-[1.85rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight">
                {CASE_STUDIES.heading}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-0.5 max-w-xl leading-relaxed">
                {CASE_STUDIES.subheading}
              </p>
            </div>

            <a
              href="https://www.dudisoftware.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-xs font-semibold text-[#0F172A] dark:text-white hover:text-[#D71920] dark:hover:text-[#EF4444] hover:border-[#D71920] transition-colors shadow-2xs shrink-0 self-start md:self-end group"
            >
              <Globe className="w-3.5 h-3.5 text-[#D71920]" />
              <span>dudisoftware.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#D71920] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* CASE 01: Packaging */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center mb-8 pb-8 border-b border-[#E5E7EB] dark:border-[#1E293B]">

          {/* Case 01 Text Info */}
          <div
            style={{ transitionDelay: inView ? '100ms' : '0ms' }}
            className={`md:col-span-7 space-y-3 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div
              style={{ transitionDelay: inView ? '120ms' : '0ms' }}
              className={`flex items-center gap-2 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#D71920]/25">01</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                {case01.statusBadge}
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
                {case01.category}
              </h3>
              <div className="mt-0.5 flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold text-[#D71920]">{case01.price}</span>
                <span className="text-xs font-mono text-[#64748B] dark:text-slate-400 uppercase font-bold">({case01.priceUnit})</span>
              </div>
            </div>

            <div
              style={{ transitionDelay: inView ? '320ms' : '0ms' }}
              className={`space-y-1.5 pt-0.5 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
            >
              <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 font-bold">
                {case01.scopeTitle}
              </p>
              <div className="space-y-1">
                {case01.scopeItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-[13px] text-[#0F172A] dark:text-slate-200 leading-relaxed sm:whitespace-nowrap">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case 01 Mascot Visual */}
          <div
            style={{
              transitionDelay: inView ? '180ms' : '0ms',
            }}
            className={`md:col-span-5 flex items-center justify-center md:justify-end transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div className="relative flex items-center justify-center p-1">
              <div
                className="absolute w-40 h-40 sm:w-48 sm:h-48 bg-[#D71920]/8 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <img
                src="/leftside.webp"
                alt="DUDI Mascot - Case Study Website Bao bì"
                width={617}
                height={864}
                loading="lazy"
                decoding="async"
                className="w-auto h-auto max-h-[220px] sm:max-h-[250px] lg:max-h-[270px] object-contain drop-shadow-md select-none transition-transform duration-300 hover:scale-105 relative z-10"
              />
            </div>
          </div>

        </div>

        {/* CASE 02: Travel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center">

          {/* Case 02 Mascot Character Image */}
          <div
            style={{
              transitionDelay: inView ? '300ms' : '0ms',
            }}
            className={`md:col-span-5 order-2 md:order-1 flex items-center justify-center md:justify-start transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div className="relative flex items-center justify-center p-1">
              <div
                className="absolute w-40 h-40 sm:w-48 sm:h-48 bg-[#D71920]/8 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <img
                src="/tai-xuong-1.webp"
                alt="DUDI Mascot - Case Study Website Du Lịch"
                width={267}
                height={385}
                loading="lazy"
                decoding="async"
                className="w-auto h-auto max-h-[210px] sm:max-h-[240px] lg:max-h-[260px] object-contain drop-shadow-md select-none transition-transform duration-300 hover:scale-105 relative z-10"
              />
            </div>
          </div>

          {/* Case 02 Text Info */}
          <div
            style={{ transitionDelay: inView ? '240ms' : '0ms' }}
            className={`md:col-span-7 space-y-3 order-1 md:order-2 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div
              style={{ transitionDelay: inView ? '260ms' : '0ms' }}
              className={`flex items-center gap-2 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#D71920]/25">02</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                {case02.statusBadge}
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
                {case02.category}
              </h3>
              <div className="mt-0.5 flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold text-[#D71920]">{case02.price}</span>
                <span className="text-xs font-mono text-[#64748B] dark:text-slate-400 uppercase font-bold">({case02.priceUnit})</span>
              </div>
            </div>

            <div
              style={{ transitionDelay: inView ? '360ms' : '0ms' }}
              className={`space-y-1.5 pt-0.5 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
            >
              <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 font-bold">
                {case02.scopeTitle}
              </p>
              <div className="space-y-1">
                {case02.scopeItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-[13px] text-[#0F172A] dark:text-slate-200 leading-relaxed sm:whitespace-nowrap">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Callout Link */}
        <div className="mt-8 pt-5 border-t border-[#E5E7EB] dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#64748B] dark:text-slate-400">
            <Globe className="w-4 h-4 text-[#D71920] shrink-0" />
            <span>Khám phá thêm các dịch vụ phần mềm và dự án tiêu biểu tại hệ sinh thái DUDI.</span>
          </div>
          <a
            href="https://www.dudisoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#D71920] hover:text-[#8F0F16] dark:hover:text-[#EF4444] inline-flex items-center gap-1 transition-colors group shrink-0"
          >
            <span>Truy cập dudisoftware.com</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
