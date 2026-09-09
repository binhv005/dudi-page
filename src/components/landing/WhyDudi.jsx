import React from 'react';
import { FileCheck2, SearchCheck, BadgeDollarSign, ShieldCheck } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const proofPoints = [
  {
    id: "scope",
    num: "01",
    title: "Rõ phạm vi",
    desc: "Biết chính xác mình nhận được gì trước khi bắt đầu.",
    icon: FileCheck2,
  },
  {
    id: "audit",
    num: "02",
    title: "Kiểm tra trước",
    desc: "Đánh giá chi tiết hiện trạng trước khi đề xuất giải pháp.",
    icon: SearchCheck,
  },
  {
    id: "pricing",
    num: "03",
    title: "Báo giá sau",
    desc: "Chi phí cố định theo gói, không phát sinh bất ngờ.",
    icon: BadgeDollarSign,
  },
  {
    id: "warranty",
    num: "04",
    title: "Bảo hành 30 ngày",
    desc: "Hỗ trợ kỹ thuật nhanh chóng cho hạng mục đã bàn giao.",
    icon: ShieldCheck,
  },
];

export default function WhyDudi() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="why-dudi"
      className="py-12 sm:py-14 lg:py-16 bg-white/75 dark:bg-[#090A0F]/80 backdrop-blur-xs text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Vì sao chọn dịch vụ DUDI"
    >
      {/* Tech Network Background Sphere (Watermark) */}
      <div
        className="absolute -right-24 -bottom-24 w-[460px] sm:w-[580px] h-[460px] sm:h-[580px] opacity-[0.08] dark:opacity-[0.14] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-network-bg.webp"
          alt=""
          className="w-full h-full object-contain rotate-[-20deg]"
          loading="lazy"
        />
      </div>

      {/* Ambient Red Glow */}
      <div
        className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#D71920]/8 via-[#EF4444]/4 to-transparent dark:from-[#D71920]/12 dark:via-[#EF4444]/6 dark:to-transparent rounded-full blur-[120px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Core Message (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            
            {/* Section Badge */}
            <div
              className={`transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F1F5F9] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[11px] font-mono tracking-widest text-[#D71920] uppercase shadow-2xs">
                <span>06 / CAM KẾT MINH BẠCH</span>
              </div>
            </div>

            {/* 3-Line Statement Typography */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#0F172A] dark:text-white leading-[1.2] tracking-tight">
              <span
                className={`block transition-all duration-500 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '60ms' }}
              >
                Rõ phạm vi.
              </span>
              <span
                className={`block transition-all duration-500 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '140ms' }}
              >
                Rõ chi phí.
              </span>
              <span
                className={`block text-[#D71920] transition-all duration-500 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '220ms' }}
              >
                Rõ người chịu trách nhiệm.
              </span>
            </h2>

            {/* Supporting Context */}
            <p
              className={`text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Mọi dự án nâng cấp và sửa lỗi website tại DUDI đều tuân thủ quy chuẩn minh bạch từ khảo sát, chốt báo giá cố định đến bảo hành kỹ thuật sau bàn giao.
            </p>

            {/* Trust Micro-Badge */}
            <div
              className={`pt-2 transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '380ms' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 text-[11px] sm:text-xs font-semibold text-[#D71920] dark:text-red-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
                <span>Không phát sinh chi phí ngoài phạm vi đã chốt</span>
              </div>
            </div>

          </div>

          {/* Right Column: 2x2 Grid of 4 Cards (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {proofPoints.map((point, index) => {
                const IconComp = point.icon;

                return (
                  <div
                    key={point.id}
                    className={`p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#151821] border border-[#E2E8F0] dark:border-[#262B38] hover:border-[#D71920]/40 dark:hover:border-[#D71920]/50 hover:shadow-md transition-all duration-300 group ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${200 + index * 80}ms` }}
                  >
                    {/* Card Top: Number & Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#D71920] bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded border border-red-100 dark:border-red-900/30">
                        {point.num}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white dark:bg-[#1E2330] border border-[#E2E8F0] dark:border-[#2D3344] flex items-center justify-center text-[#64748B] dark:text-slate-400 group-hover:text-[#D71920] group-hover:border-red-200 transition-colors shadow-2xs">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base font-bold text-[#0F172A] dark:text-white tracking-tight mb-1.5 group-hover:text-[#D71920] transition-colors">
                      {point.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-[13px] text-[#64748B] dark:text-slate-400 leading-relaxed">
                      {point.desc}
                    </p>
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
