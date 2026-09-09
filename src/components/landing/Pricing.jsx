import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_DATA } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';
import { trackEvent } from '../../utils/tracking';

const comparisonMatrix = [
  {
    feature: "Phạm vi xử lý lỗi",
    basic: "1–2 lỗi cụ thể",
    standard: "Toàn trang & nhiều lỗi",
    advanced: "Chuyên sâu toàn bộ trang",
  },
  {
    feature: "Cải thiện UI & Responsive Mobile",
    basic: "1 trang đích",
    standard: "Đồng bộ toàn website",
    advanced: "Tái cấu trúc UI/UX",
  },
  {
    feature: "Tối ưu tốc độ tải trang & nén asset",
    basic: "Cơ bản",
    standard: "Tối ưu toàn diện",
    advanced: "Chuyên sâu Core Web Vitals",
  },
  {
    feature: "Sửa lỗi form, nút bấm & tương tác",
    basic: "1 form chính",
    standard: "Toàn bộ form & thông báo",
    advanced: "Form phức tạp / Logic lọc",
  },
  {
    feature: "Kiểm tra SEO kỹ thuật cơ bản",
    basic: "Không bao gồm",
    standard: "Thẻ Heading, Meta, Sitemap",
    advanced: "Dữ liệu có cấu trúc & Audit",
  },
  {
    feature: "Thời gian bàn giao",
    basic: "1 – 2 ngày làm việc",
    standard: "3 – 5 ngày làm việc",
    advanced: "5 – 7 ngày làm việc",
  },
  {
    feature: "Số vòng phản hồi & tinh chỉnh",
    basic: "1 vòng phản hồi",
    standard: "2 vòng phản hồi",
    advanced: "3 vòng phản hồi",
  },
  {
    feature: "Bảo hành kỹ thuật phát sinh",
    basic: "30 ngày",
    standard: "30 ngày",
    advanced: "30 ngày + HD Quản trị",
  },
];

export default function Pricing({ onSelectPackage }) {
  const [sectionRef, inView] = useInView({ threshold: 0.12 });
  const [basicPkg, standardPkg, advancedPkg] = PRICING_DATA.packages;

  const handleSelect = (pkgValue) => {
    trackEvent('package_select', { package: pkgValue, location: 'pricing_table' });
    onSelectPackage(pkgValue);
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-10 sm:py-12 lg:py-14 bg-white/40 dark:bg-white/[0.02] text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Bảng giá dịch vụ nâng cấp website DUDI"
    >
      {/* Localized Red Ambient Mesh Flow Aura (Active in both Light & Dark mode) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[900px] h-[500px] bg-gradient-to-r from-[#D71920]/12 via-[#EF4444]/8 to-[#D71920]/10 dark:from-[#D71920]/16 dark:via-[#EF4444]/10 dark:to-transparent rounded-full blur-[120px] pointer-events-none z-0 animate-tech-float-1" 
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-6 sm:mb-8 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D71920] uppercase mb-2 shadow-2xs">
            <span>05 / BẢNG GIÁ DỊCH VỤ</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[1.85rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight mb-1.5">
            {PRICING_DATA.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            {PRICING_DATA.subheading}
          </p>
          <p className="text-xs font-mono text-[#D71920] mt-1 font-bold">
            * {PRICING_DATA.outOfScopeNotice}
          </p>
        </div>

        {/* 3 Tier Summary Rows with Staggered Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 sm:mb-8">

          {/* TIER 1: Basic */}
          <div
            style={{ transitionDelay: inView ? '100ms' : '0ms' }}
            className={`p-4 sm:p-5 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] shadow-2xs flex flex-col justify-between transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#64748B] dark:text-slate-400 font-bold">Gói Khởi Điểm</span>
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mt-0.5">{basicPkg.packageName}</h3>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white">{basicPkg.price}</span>
                <span className="text-xs font-mono text-[#64748B] dark:text-slate-400 uppercase font-bold">/{basicPkg.priceUnit}</span>
              </div>
              <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1 leading-relaxed">{basicPkg.summary}</p>
            </div>

            <button
              type="button"
              onClick={() => handleSelect(basicPkg.formValue)}
              className="mt-4 w-full btn-secondary !text-xs !font-semibold !py-2 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{basicPkg.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* TIER 2: Standard (FEATURED with subtle glow animation) */}
          <div
            style={{ transitionDelay: inView ? '220ms' : '0ms' }}
            className={`p-4 sm:p-5 rounded-xl bg-gradient-to-b from-red-50/70 to-white dark:from-red-950/30 dark:to-[#111827] border-2 border-[#D71920] shadow-sm flex flex-col justify-between relative transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0 ring-4 ring-[#D71920]/10' : 'opacity-0 translate-y-6'
              }`}
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#D71920] text-white text-[9px] font-bold uppercase tracking-wider shadow-2xs">
              {standardPkg.badgeText || "Được chọn nhiều"}
            </div>

            <div>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#D71920] font-bold">Gói Khuyên Dùng</span>
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mt-0.5">{standardPkg.packageName}</h3>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#D71920]">{standardPkg.price}</span>
                <span className="text-xs font-mono text-[#64748B] dark:text-slate-400 uppercase font-bold">/{standardPkg.priceUnit}</span>
              </div>
              <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1 leading-relaxed">{standardPkg.summary}</p>
            </div>

            <button
              type="button"
              onClick={() => handleSelect(standardPkg.formValue)}
              className="mt-4 w-full btn-primary !text-xs !font-semibold !py-2 flex items-center justify-center gap-1.5 shadow-sm shadow-[#D71920]/20 cursor-pointer"
            >
              <span>{standardPkg.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* TIER 3: Advanced */}
          <div
            style={{ transitionDelay: inView ? '340ms' : '0ms' }}
            className={`p-4 sm:p-5 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] shadow-2xs flex flex-col justify-between transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#64748B] dark:text-slate-400 font-bold">Gói Toàn Diện</span>
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mt-0.5">{advancedPkg.packageName}</h3>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white">{advancedPkg.price}</span>
                <span className="text-xs font-mono text-[#64748B] dark:text-slate-400 uppercase font-bold">/{advancedPkg.priceUnit}</span>
              </div>
              <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1 leading-relaxed">{advancedPkg.summary}</p>
            </div>

            <button
              type="button"
              onClick={() => handleSelect(advancedPkg.formValue)}
              className="mt-4 w-full btn-secondary !text-xs !font-semibold !py-2 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{advancedPkg.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Clean Editorial Comparison Table (Fades in) */}
        <div
          style={{ transitionDelay: inView ? '450ms' : '0ms' }}
          className={`hidden md:block overflow-hidden rounded-xl border border-[#E2E8F0] dark:border-[#1F2937] bg-white dark:bg-[#111827] shadow-2xs transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <div className="px-4 py-2.5 bg-[#F8FAFC] dark:bg-[#0F172A] border-b border-[#E2E8F0] dark:border-[#1F2937] grid grid-cols-12 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 font-bold">
            <div className="col-span-5">Hạng mục so sánh</div>
            <div className="col-span-2 text-center text-[#0F172A] dark:text-white">Cơ bản (500k)</div>
            <div className="col-span-3 text-center text-[#D71920] font-extrabold">Tiêu chuẩn (2tr)</div>
            <div className="col-span-2 text-center text-[#0F172A] dark:text-white">Nâng cao (5tr)</div>
          </div>

          <div className="divide-y divide-[#E2E8F0] dark:divide-[#1F2937]">
            {comparisonMatrix.map((row, idx) => (
              <div key={idx} className="px-4 py-2 grid grid-cols-12 items-center text-xs hover:bg-[#F8FAFC]/80 dark:hover:bg-slate-800/50 transition-colors">
                <div className="col-span-5 font-semibold text-[#0F172A] dark:text-slate-200">{row.feature}</div>
                <div className="col-span-2 text-center text-[#64748B] dark:text-slate-400 text-xs">{row.basic}</div>
                <div className="col-span-3 text-center font-bold text-[#D71920] text-xs bg-red-50/60 dark:bg-red-950/40 py-0.5 rounded border border-red-100 dark:border-red-900/40">
                  {row.standard}
                </div>
                <div className="col-span-2 text-center text-[#0F172A] dark:text-slate-200 text-xs">{row.advanced}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-4 text-center">
          <p className="text-xs text-[#64748B] dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Mọi gói đều có bảo hành kỹ thuật 30 ngày và xuất hóa đơn VAT điện tử nếu doanh nghiệp yêu cầu.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
