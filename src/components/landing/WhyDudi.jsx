import React from 'react';
import { FileCheck2, SearchCheck, BadgeDollarSign, ShieldCheck } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const proofPoints = [
  {
    id: "scope",
    num: "01",
    tag: "MINH BẠCH",
    title: "Rõ phạm vi",
    desc: "Biết chính xác mình nhận được gì trước khi bắt đầu.",
    icon: FileCheck2,
    accentColor: "#0284C7",
    topTextColor: "text-[#0284C7] dark:text-[#38BDF8]",
    topBg: "bg-[#EAF5FE] dark:bg-[#0C1E36]",
    cardBorder: "border-sky-200/80 dark:border-sky-500/30 hover:border-sky-400 dark:hover:border-sky-400",
    shadowColor: "hover:shadow-sky-950/10",
  },
  {
    id: "audit",
    num: "02",
    tag: "CHUYÊN NGHIỆP",
    title: "Kiểm tra trước",
    desc: "Đánh giá chi tiết hiện trạng trước khi đề xuất giải pháp.",
    icon: SearchCheck,
    accentColor: "#D946EF",
    topTextColor: "text-[#D946EF] dark:text-[#F472B6]",
    topBg: "bg-[#FDF0F9] dark:bg-[#250E28]",
    cardBorder: "border-fuchsia-200/80 dark:border-fuchsia-500/30 hover:border-fuchsia-400 dark:hover:border-fuchsia-400",
    shadowColor: "hover:shadow-fuchsia-950/10",
  },
  {
    id: "pricing",
    num: "03",
    tag: "CỐ ĐỊNH",
    title: "Báo giá trước",
    desc: "Chi phí cố định theo gói, không phát sinh bất ngờ.",
    icon: BadgeDollarSign,
    accentColor: "#EA580C",
    topTextColor: "text-[#EA580C] dark:text-[#FB923C]",
    topBg: "bg-[#FFF4E5] dark:bg-[#2D1404]",
    cardBorder: "border-orange-200/80 dark:border-orange-500/30 hover:border-orange-400 dark:hover:border-orange-400",
    shadowColor: "hover:shadow-orange-950/10",
  },
  {
    id: "warranty",
    num: "04",
    tag: "AN TÂM",
    title: "Bảo hành 30 ngày",
    desc: "Hỗ trợ kỹ thuật nhanh chóng cho hạng mục đã bàn giao.",
    icon: ShieldCheck,
    accentColor: "#D71920",
    topTextColor: "text-[#D71920] dark:text-[#F87171]",
    topBg: "bg-[#FEECEC] dark:bg-[#2B0B0E]",
    cardBorder: "border-red-200/80 dark:border-red-500/30 hover:border-red-400 dark:hover:border-red-400",
    shadowColor: "hover:shadow-red-950/10",
  },
];

export default function WhyDudi() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="why-dudi"
      className="py-12 sm:py-14 lg:py-16 xl:py-20 bg-white/75 dark:bg-[#090A0F]/80 backdrop-blur-xs text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#D71920]/6 via-[#EF4444]/3 to-transparent dark:from-[#D71920]/10 dark:via-[#EF4444]/5 dark:to-transparent rounded-full blur-[120px] pointer-events-none z-0"
        aria-hidden="true"
      ></div>

      <div className="app-container relative z-10">
        
        {/* Section Header */}
        <div className={`mb-10 sm:mb-12 xl:mb-14 text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto space-y-3 xl:space-y-4 transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <h2 className="text-[clamp(1.35rem,2vw+0.6rem,2.4rem)] font-black text-[#0F172A] dark:text-white leading-[1.2] tracking-tight text-balance">
            Rõ phạm vi. Rõ chi phí. <span className="text-[#D71920]">Rõ người chịu trách nhiệm.</span>
          </h2>

          <p className="text-xs sm:text-sm xl:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-2xl xl:max-w-3xl mx-auto">
            Mọi dự án nâng cấp và sửa lỗi website tại DUDI đều tuân thủ quy chuẩn minh bạch từ khảo sát, chốt báo giá cố định đến bảo hành kỹ thuật sau bàn giao.
          </p>

          <div className="pt-1">
            <div className="inline-flex items-center gap-2 px-4 xl:px-5 py-1.5 xl:py-2 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 text-[11px] sm:text-xs xl:text-sm font-semibold text-[#D71920] dark:text-red-300 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
              <span>Không phát sinh chi phí ngoài phạm vi đã chốt</span>
            </div>
          </div>
        </div>

        {/* 1 Horizontal Row of 4 Clean Modern Cards without Pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 xl:gap-7">
          {proofPoints.map((point, index) => {
            const IconComp = point.icon;

            return (
              <div
                key={point.id}
                className={`rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111622] border-2 ${point.cardBorder} shadow-md ${point.shadowColor} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out group flex flex-col p-6 sm:p-7 xl:p-8 relative ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${150 + index * 80}ms` }}
              >
                {/* Header: Number, Tag & Icon */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <span className={`text-base sm:text-lg font-black font-mono tracking-widest ${point.topTextColor}`}>
                      {point.num}
                    </span>
                    <span className="opacity-30 font-mono text-xs">•</span>
                    <span className={`text-xs sm:text-sm font-extrabold font-mono tracking-wider ${point.topTextColor}`}>
                      {point.tag}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div 
                    className={`w-11 h-11 xl:w-12 xl:h-12 rounded-2xl flex items-center justify-center ${point.topBg} border border-black/5 dark:border-white/10 shadow-2xs transition-transform duration-300 group-hover:scale-110`}
                    style={{ color: point.accentColor }}
                  >
                    <IconComp className="w-5.5 h-5.5 xl:w-6 xl:h-6" />
                  </div>
                </div>

                {/* Body: Title & Description */}
                <div className="space-y-2 sm:space-y-2.5 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl xl:text-[22px] font-bold text-[#0F172A] dark:text-white tracking-tight leading-snug group-hover:text-[#D71920] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] xl:text-[14.5px] text-[#64748B] dark:text-slate-300 font-normal leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
