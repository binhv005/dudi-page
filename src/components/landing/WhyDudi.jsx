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
    image: "/proof-scope.jpg",
    alt: "Minh bạch và rõ ràng phạm vi công việc",
  },
  {
    id: "audit",
    num: "02",
    title: "Kiểm tra trước",
    desc: "Đánh giá chi tiết hiện trạng trước khi đề xuất giải pháp.",
    icon: SearchCheck,
    image: "/proof-audit.jpg",
    alt: "Kiểm tra chẩn đoán hiệu năng và lỗi website",
  },
  {
    id: "pricing",
    num: "03",
    title: "Báo giá trước",
    desc: "Chi phí cố định theo gói, không phát sinh bất ngờ.",
    icon: BadgeDollarSign,
    image: "/proof-pricing.jpg",
    alt: "Báo giá cố định và chốt đầu việc minh bạch",
  },
  {
    id: "warranty",
    num: "04",
    title: "Bảo hành 30 ngày",
    desc: "Hỗ trợ kỹ thuật nhanh chóng cho hạng mục đã bàn giao.",
    icon: ShieldCheck,
    image: "/proof-warranty.jpg",
    alt: "Đội ngũ kỹ sư hỗ trợ bảo hành 30 ngày",
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#D71920]/6 via-[#EF4444]/3 to-transparent dark:from-[#D71920]/10 dark:via-[#EF4444]/5 dark:to-transparent rounded-full blur-[120px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`mb-8 sm:mb-10 text-center max-w-4xl mx-auto space-y-3 transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <h2 className="text-xl sm:text-2xl md:text-[1.75rem] lg:text-[2.1rem] font-extrabold text-[#0F172A] dark:text-white leading-[1.2] tracking-tight sm:whitespace-nowrap">
            Rõ phạm vi. Rõ chi phí. <span className="text-[#D71920]">Rõ người chịu trách nhiệm.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Mọi dự án nâng cấp và sửa lỗi website tại DUDI đều tuân thủ quy chuẩn minh bạch từ khảo sát, chốt báo giá cố định đến bảo hành kỹ thuật sau bàn giao.
          </p>

          <div className="pt-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 text-[11px] sm:text-xs font-semibold text-[#D71920] dark:text-red-300 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
              <span>Không phát sinh chi phí ngoài phạm vi đã chốt</span>
            </div>
          </div>
        </div>

        {/* 1 Horizontal Row of 4 Cards (4 cols on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {proofPoints.map((point, index) => {
            const IconComp = point.icon;

            return (
              <div
                key={point.id}
                className={`rounded-2xl bg-[#F8FAFC] dark:bg-[#131722] border border-[#E2E8F0] dark:border-[#262B38] hover:border-[#D71920]/40 dark:hover:border-[#D71920]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${150 + index * 75}ms` }}
              >
                {/* Top Half: Embedded Image */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900 border-b border-[#E2E8F0] dark:border-[#262B38]/60">
                  <img
                    src={point.image}
                    alt={point.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Number & Icon Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/20 shadow-sm">
                      {point.num}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:text-[#D71920] group-hover:bg-white transition-colors shadow-sm">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Half: Content */}
                <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between space-y-1.5">
                  <h3 className="text-base font-bold text-[#0F172A] dark:text-white tracking-tight group-hover:text-[#D71920] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#64748B] dark:text-slate-400 leading-relaxed">
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
