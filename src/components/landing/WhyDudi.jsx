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
      className="py-10 sm:py-12 lg:py-14 bg-transparent text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Vì sao chọn dịch vụ DUDI"
    >
      {/* Localized Red Ambient Mesh Flow Aura (Active in both Light & Dark mode) */}
      <div
        className="absolute top-1/2 -left-20 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-r from-[#D71920]/10 via-[#EF4444]/6 to-transparent dark:from-[#D71920]/14 dark:via-[#EF4444]/8 dark:to-transparent rounded-full blur-[130px] pointer-events-none z-0 animate-tech-float-2"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`max-w-2xl mb-5 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F1F5F9] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[11px] font-mono tracking-widest text-[#D71920] uppercase mb-2 shadow-2xs">
            <span>06 / CAM KẾT MINH BẠCH</span>
          </div>
        </div>

        {/* Large Statement Typography - 3-Line Reveal */}
        <div className="pb-6 mb-6 border-b border-[#E2E8F0] dark:border-[#1E293B] overflow-hidden">
          <h2 className="text-xl sm:text-2xl lg:text-[1.85rem] font-extrabold text-[#0F172A] dark:text-white leading-[1.25] tracking-tight max-w-3xl">
            <span
              className={`block transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              style={{ transitionDelay: '80ms' }}
            >
              Rõ phạm vi.
            </span>
            <span
              className={`block transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              Rõ chi phí.
            </span>
            <span
              className={`block text-[#D71920] transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              style={{ transitionDelay: '320ms' }}
            >
              Rõ người chịu trách nhiệm.
            </span>
          </h2>
        </div>

        {/* 4-Point Horizontal Editorial Rail */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0] dark:divide-[#1E293B]">
          {proofPoints.map((point, index) => {
            const IconComp = point.icon;

            return (
              <div
                key={point.id}
                className={`pt-3.5 md:pt-0 md:px-3.5 first:pl-0 last:pr-0 space-y-1.5 group transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                style={{ transitionDelay: `${400 + index * 90}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#D71920]">{point.num}</span>
                  <IconComp className="w-3.5 h-3.5 text-gray-400 dark:text-slate-400 group-hover:text-[#D71920] dark:group-hover:text-[#EF4444] transition-colors" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] dark:text-slate-100 tracking-tight group-hover:text-[#D71920] transition-colors">
                  {point.title}
                </h3>

                <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
