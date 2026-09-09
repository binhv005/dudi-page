import React from 'react';
import { useInView } from '../../hooks/useInView';
import { ArrowRight, CheckCircle2, Search, Target, ShieldCheck, Zap } from 'lucide-react';

export default function AboutIntro() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  const PILLARS = [
    {
      icon: Search,
      title: 'Rõ vấn đề',
      desc: 'Chẩn đoán chính xác nguyên nhân gốc rễ, không phán đoán mơ hồ.',
      badge: 'Chẩn đoán',
    },
    {
      icon: Target,
      title: 'Rõ phạm vi',
      desc: 'Chốt danh mục đầu việc cụ thể và lộ trình trước khi viết code.',
      badge: 'Minh bạch',
    },
    {
      icon: ShieldCheck,
      title: 'Rõ chi phí',
      desc: 'Báo giá trọn gói rõ ràng, cam kết không phát sinh chi phí ẩn.',
      badge: 'Tối ưu',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about-dudi"
      className="py-12 sm:py-16 lg:py-20 bg-white/75 dark:bg-[#090A0F]/80 backdrop-blur-xs text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Giới thiệu về DUDI"
    >
      {/* Tech Network Background Sphere (Watermark) */}
      <div
        className="absolute -right-16 -top-16 w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] opacity-[0.08] dark:opacity-[0.14] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-network-bg.webp"
          alt=""
          className="w-full h-full object-contain rotate-45"
          loading="lazy"
        />
      </div>

      {/* Soft red atmospheric glow behind mascot */}
      <div
        className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] bg-gradient-to-br from-[#D71920]/12 via-[#EF4444]/6 to-transparent dark:from-[#D71920]/10 dark:via-transparent rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out z-0 ${
          isInView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* LEFT: Larger Free-standing Mascot */}
          <div className="hidden md:flex lg:col-span-5 relative justify-center lg:justify-start items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[370px] flex items-center justify-center">
              <img
                src="/tai-xuong-1.webp"
                alt="DUDI Tech Mascot Assistant"
                className={`w-auto h-auto max-h-[320px] sm:max-h-[380px] lg:max-h-[430px] object-contain select-none pointer-events-none drop-shadow-2xl transition-all duration-1000 ease-out ${
                  isInView
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                    : 'opacity-0 translate-y-8 scale-95 -rotate-2'
                }`}
                width="370"
                height="460"
                loading="lazy"
              />

              {/* Status Badge */}
              <div
                className={`absolute -bottom-1 left-4 sm:left-10 bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-xs border border-[#E2E8F0] dark:border-[#334155] rounded-full px-3 py-1 text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8] shadow-sm flex items-center gap-2 transition-all duration-600 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: '550ms' }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-[#0F172A] dark:text-white">KỸ SƯ DUDI ONLINE</span>
              </div>
            </div>

            {/* Editorial Connecting Line towards headline */}
            <div
              className={`hidden lg:block absolute -right-6 top-16 w-28 h-20 pointer-events-none transition-opacity duration-700 ease-out ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '450ms' }}
              aria-hidden="true"
            >
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 60" fill="none">
                <circle cx="0" cy="30" r="3" fill="#D71920" className="animate-ping opacity-60" />
                <circle cx="0" cy="30" r="2.5" fill="#D71920" />
                <path
                  d="M0,30 C35,10 65,45 100,20"
                  stroke="#D71920"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  className="opacity-75"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT: Typography & Enriched Value Cards */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 order-1 lg:order-2">

            {/* Section Badge */}
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200/80 dark:border-red-900/50 text-[11px] font-mono tracking-widest text-[#D71920] uppercase shadow-2xs transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
              <span>ABOUT DUDI</span>
            </div>

            {/* Main Headline */}
            <h2
              className={`text-2xl sm:text-3xl lg:text-[2.45rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.18] transition-all duration-600 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Không chỉ sửa website.<br />
              <span className="text-[#D71920]">DUDI giúp bạn sửa đúng vấn đề.</span>
            </h2>

            {/* Supporting Text */}
            <p
              className={`text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] leading-relaxed max-w-xl transition-all duration-600 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              DUDI tập trung kiểm tra, xác định chính xác phạm vi và nâng cấp những phần website thực sự cần thiết, giúp doanh nghiệp tiết kiệm đến 70% chi phí so với làm lại từ đầu.
            </p>

            {/* 3 Value Pillars Grid to fill whitespace */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 transition-all duration-600 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#15181E] border border-[#E2E8F0] dark:border-[#242A35] hover:border-red-300 dark:hover:border-red-900/60 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#D71920] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#0F172A] dark:text-white mb-1 group-hover:text-[#D71920] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#64748B] dark:text-slate-400 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Row */}
            <div
              className={`pt-2 flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-600 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="#form-tu-van"
                className="btn-primary !text-xs sm:!text-sm !font-bold !py-3 !px-5 inline-flex items-center gap-2 shadow-md hover:shadow-red-900/20"
              >
                <span>Gửi website để kỹ sư DUDI kiểm tra miễn phí</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
