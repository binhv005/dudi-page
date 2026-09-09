import React from 'react';
import { useInView } from '../../hooks/useInView';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutIntro() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="about-dudi"
      className="py-10 sm:py-14 lg:py-16 bg-transparent text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Giới thiệu về DUDI"
    >

      {/* Subtle soft red atmospheric glow behind character on left */}
      <div
        className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[440px] h-[350px] sm:h-[440px] bg-gradient-to-br from-[#D71920]/10 via-[#EF4444]/6 to-transparent dark:from-[#D71920]/10 dark:via-transparent rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out z-0 ${isInView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT: The Character Standing Naturally & Pointing Right (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start items-center order-2 lg:order-1 mt-4 lg:mt-0">

            {/* Character Image Container - Free standing, Well-proportioned */}
            <div className="relative w-full max-w-[210px] sm:max-w-[240px] lg:max-w-[270px] flex items-center justify-center">
              <img
                src="/tai-xuong-1.webp"
                alt="DUDI Tech Mascot Assistant"
                className={`w-auto h-auto max-h-[230px] sm:max-h-[270px] lg:max-h-[300px] object-contain select-none pointer-events-none drop-shadow-2xl transition-all duration-1000 ease-out ${isInView
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                    : 'opacity-0 translate-y-8 scale-95 -rotate-2'
                  }`}
                width="270"
                height="338"
                loading="lazy"
              />
              <div
                className={`absolute -bottom-2 left-4 sm:left-8 bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-xs border border-[#E2E8F0] dark:border-[#334155] rounded-full px-2.5 py-0.5 text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] shadow-2xs flex items-center gap-1.5 transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                style={{ transitionDelay: '550ms' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>KỸ SƯ DUDI ONLINE</span>
              </div>
            </div>

            {/* Editorial Annotation Guide Line (Pointing from right-hand toward the headline) */}
            <div
              className={`hidden lg:block absolute -right-8 top-12 w-24 h-16 pointer-events-none transition-opacity duration-700 ease-out ${isInView ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ transitionDelay: '450ms' }}
              aria-hidden="true"
            >
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 60" fill="none">
                {/* Pointer indicator node at finger tip */}
                <circle cx="0" cy="30" r="3" fill="#D71920" className="animate-ping opacity-60" />
                <circle cx="0" cy="30" r="2.5" fill="#D71920" />
                {/* Dashed editorial connecting line towards headline */}
                <path
                  d="M0,30 C35,10 65,45 100,20"
                  stroke="#D71920"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  className="opacity-70"
                />
              </svg>
            </div>

          </div>

          {/* RIGHT: Large Editorial Typography & Highlights (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-3.5 lg:space-y-4 order-1 lg:order-2">

            {/* Section Badge */}
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F1F5F9] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D71920] uppercase shadow-2xs transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
              <span>ABOUT DUDI</span>
            </div>

            {/* Main Headline */}
            <h2
              className={`text-xl sm:text-2xl lg:text-[2.1rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2] transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              Không chỉ sửa website.<br />
              <span className="text-[#D71920]">DUDI giúp bạn sửa đúng vấn đề.</span>
            </h2>

            {/* Supporting Text */}
            <p
              className={`text-xs sm:text-sm text-[#5F6368] dark:text-[#94A3B8] leading-relaxed max-w-xl transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              DUDI tập trung kiểm tra, xác định phạm vi và nâng cấp những phần website thực sự cần thiết.
            </p>

            {/* Editorial Supporting Statement with Pill Tags */}
            <div
              className={`pt-0.5 transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 py-1.5 px-3 rounded-lg bg-[#F8F8F5] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-2xs text-[11px] sm:text-xs font-mono font-semibold text-[#111111] dark:text-[#F1F5F9]">
                <span className="flex items-center gap-1.5 text-[#D71920]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Rõ vấn đề
                </span>
                <span className="text-gray-300 dark:text-gray-600">•</span>
                <span className="flex items-center gap-1.5 text-[#111111] dark:text-[#F1F5F9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920]" />
                  Rõ phạm vi
                </span>
                <span className="text-gray-300 dark:text-gray-600">•</span>
                <span className="flex items-center gap-1.5 text-[#111111] dark:text-[#F1F5F9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920]" />
                  Rõ chi phí
                </span>
              </div>
            </div>

            {/* Quick Action Link */}
            <div
              className={`pt-1 transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="#form-tu-van"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#D71920] hover:text-[#8F0F16] dark:hover:text-[#EF4444] transition-colors group cursor-pointer"
              >
                <span>Gửi website để kỹ sư DUDI kiểm tra miễn phí</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
