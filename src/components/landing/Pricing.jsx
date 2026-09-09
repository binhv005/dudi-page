import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Check, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [showMatrix, setShowMatrix] = useState(false);
  const [basicPkg, standardPkg, advancedPkg] = PRICING_DATA.packages;

  const handleSelect = (pkgValue) => {
    trackEvent('package_select', { package: pkgValue, location: 'pricing_table' });
    onSelectPackage(pkgValue);
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-6 sm:py-8 lg:py-8 bg-[#F8FAFC]/75 dark:bg-[#0D0F17]/80 backdrop-blur-xs text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300 flex flex-col justify-center"
      aria-label="Bảng giá dịch vụ nâng cấp website DUDI"
    >
      {/* Left Side Tech Hexagon Watermark */}
      <div
        className="absolute -left-20 -top-16 w-[450px] sm:w-[580px] h-[320px] sm:h-[400px] opacity-[0.06] dark:opacity-[0.11] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-hexagon-bg.webp"
          alt=""
          className="w-full h-full object-contain rotate-180"
          loading="lazy"
        />
      </div>

      {/* Right Side Tech Hexagon Watermark */}
      <div
        className="absolute -right-20 -bottom-16 w-[450px] sm:w-[580px] h-[320px] sm:h-[400px] opacity-[0.06] dark:opacity-[0.11] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-hexagon-bg.webp"
          alt=""
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Localized Red Ambient Mesh Flow Aura (Active in both Light & Dark mode) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[900px] h-[450px] bg-gradient-to-r from-[#D71920]/12 via-[#EF4444]/8 to-[#D71920]/10 dark:from-[#D71920]/16 dark:via-[#EF4444]/10 dark:to-transparent rounded-full blur-[120px] pointer-events-none z-0 animate-tech-float-1"
        aria-hidden="true"
      />

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-4 sm:mb-5 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D71920] uppercase mb-1.5 shadow-2xs">
            <span>05 / BẢNG GIÁ DỊCH VỤ</span>
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-[1.65rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight mb-1">
            {PRICING_DATA.heading}
          </h2>
          <p className="text-xs sm:text-[13px] text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            {PRICING_DATA.subheading}
          </p>
          <p className="text-[11px] font-mono text-[#D71920] mt-0.5 font-bold">
            * {PRICING_DATA.outOfScopeNotice}
          </p>
        </div>

        {/* 3 Tier Summary Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-3.5 sm:mb-4">

          {/* TIER 1: Basic */}
          <div
            style={{ transitionDelay: inView ? '100ms' : '0ms' }}
            className={`p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] shadow-2xs flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5 hover:shadow-xl hover:border-[#D71920]/50 dark:hover:border-[#EF4444]/50 transition-all duration-300 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[#64748B] dark:text-slate-400 font-bold group-hover:text-[#D71920] transition-colors">Gói Khởi Điểm</span>
                <span className="text-[10.5px] font-mono text-[#64748B] dark:text-slate-400">{basicPkg.duration}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white mt-0.5 group-hover:text-[#D71920] transition-colors">{basicPkg.packageName}</h3>
              <div className="mt-1.5 flex items-baseline gap-1">
                <span className="text-2xl sm:text-[26px] font-black text-[#0F172A] dark:text-white">{basicPkg.price}</span>
                <span className="text-[11px] font-mono text-[#64748B] dark:text-slate-400 uppercase font-bold">/{basicPkg.priceUnit}</span>
              </div>
              <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1 leading-relaxed">{basicPkg.summary}</p>

              {/* Highlights */}
              <ul className="mt-2.5 space-y-1 pt-2 border-t border-[#F1F5F9] dark:border-slate-800/80 text-[11.5px] text-[#475569] dark:text-slate-300">
                {basicPkg.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#D71920] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleSelect(basicPkg.formValue)}
              className="mt-3 w-full btn-secondary !text-xs !font-semibold !py-2 flex items-center justify-center gap-1.5 cursor-pointer group-hover:bg-[#D71920] group-hover:text-white group-hover:border-[#D71920] group-hover:shadow-md transition-all duration-200"
            >
              <span>{basicPkg.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* TIER 2: Standard (FEATURED RED CARD) */}
          <div
            style={{ transitionDelay: inView ? '220ms' : '0ms' }}
            className={`p-4 sm:p-4.5 rounded-xl bg-gradient-to-br from-[#D71920] via-[#C9141C] to-[#991016] text-white border-2 border-red-400/50 shadow-xl shadow-red-950/25 flex flex-col justify-between relative group cursor-pointer hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_22px_45px_rgba(215,25,32,0.35)] transition-all duration-300 ease-out ${inView ? 'opacity-100 translate-y-0 ring-4 ring-[#D71920]/20' : 'opacity-0 translate-y-6'
              }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white text-[#D71920] text-[9px] font-extrabold uppercase tracking-wider shadow-md group-hover:scale-105 transition-transform">
              {standardPkg.badgeText || "Được chọn nhiều"}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-red-200 font-bold">Gói Khuyên Dùng</span>
                <span className="text-[10.5px] font-mono text-red-100 font-bold">{standardPkg.duration}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">{standardPkg.packageName}</h3>
              <div className="mt-1.5 flex items-baseline gap-1">
                <span className="text-2xl sm:text-[26px] font-black text-white">{standardPkg.price}</span>
                <span className="text-[11px] font-mono text-red-200 uppercase font-bold">/{standardPkg.priceUnit}</span>
              </div>
              <p className="text-xs text-red-100 mt-1 leading-relaxed">{standardPkg.summary}</p>

              {/* Highlights */}
              <ul className="mt-2.5 space-y-1.5 pt-2 border-t border-white/20 text-[11.5px] text-white/95">
                {standardPkg.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleSelect(standardPkg.formValue)}
              className="mt-3.5 w-full bg-white text-[#D71920] hover:bg-slate-50 group-hover:shadow-lg active:scale-[0.99] text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-black/20 cursor-pointer transition-all duration-200"
            >
              <span>{standardPkg.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* TIER 3: Advanced */}
          <div
            style={{ transitionDelay: inView ? '340ms' : '0ms' }}
            className={`p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] shadow-2xs flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5 hover:shadow-xl hover:border-[#D71920]/50 dark:hover:border-[#EF4444]/50 transition-all duration-300 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[#64748B] dark:text-slate-400 font-bold group-hover:text-[#D71920] transition-colors">Gói Toàn Diện</span>
                <span className="text-[10.5px] font-mono text-[#64748B] dark:text-slate-400">{advancedPkg.duration}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white mt-0.5 group-hover:text-[#D71920] transition-colors">{advancedPkg.packageName}</h3>
              <div className="mt-1.5 flex items-baseline gap-1">
                <span className="text-2xl sm:text-[26px] font-black text-[#0F172A] dark:text-white">{advancedPkg.price}</span>
                <span className="text-[11px] font-mono text-[#64748B] dark:text-slate-400 uppercase font-bold">/{advancedPkg.priceUnit}</span>
              </div>
              <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1 leading-relaxed">{advancedPkg.summary}</p>

              {/* Highlights */}
              <ul className="mt-2.5 space-y-1 pt-2 border-t border-[#F1F5F9] dark:border-slate-800/80 text-[11.5px] text-[#475569] dark:text-slate-300">
                {advancedPkg.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#D71920] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleSelect(advancedPkg.formValue)}
              className="mt-3 w-full btn-secondary !text-xs !font-semibold !py-2 flex items-center justify-center gap-1.5 cursor-pointer group-hover:bg-[#D71920] group-hover:text-white group-hover:border-[#D71920] group-hover:shadow-md transition-all duration-200"
            >
              <span>{advancedPkg.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Toggle Button for Detailed Comparison Table */}
        <div className="text-center my-2">
          <button
            type="button"
            onClick={() => setShowMatrix(!showMatrix)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1E293B] hover:bg-[#E2E8F0] dark:hover:bg-[#334155] text-xs font-semibold text-[#0F172A] dark:text-white transition-colors cursor-pointer border border-[#E2E8F0] dark:border-[#334155]"
          >
            <span>{showMatrix ? "Thu gọn bảng so sánh chi tiết" : "Xem bảng so sánh chi tiết 8 hạng mục"}</span>
            {showMatrix ? <ChevronUp className="w-3.5 h-3.5 text-[#D71920]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#D71920]" />}
          </button>
        </div>

        {/* Clean Editorial Comparison Table (Collapsible) */}
        {showMatrix && (
          <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] dark:border-[#262B38] bg-white/95 dark:bg-[#111622]/95 shadow-md my-4 animate-fadeIn">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700/80 bg-[#0F172A] dark:bg-[#0A0D14] text-white">
                  <th className="py-4 px-4 sm:px-6 text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold w-[36%]">
                    Hạng mục so sánh
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-center w-[21%] border-r border-slate-800">
                    <div className="text-xs font-bold text-white">Cơ bản</div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">500.000đ</div>
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-center w-[22%] bg-gradient-to-b from-[#D71920] to-[#B31217] text-white relative shadow-md">
                    <div className="inline-flex items-center justify-center gap-1.5">
                      <span className="text-xs font-black tracking-wide">Tiêu chuẩn</span>
                      <span className="px-1.5 py-0.5 rounded text-[8.5px] font-extrabold bg-white text-[#D71920] uppercase tracking-wider shadow-2xs">Khuyên dùng</span>
                    </div>
                    <div className="text-xs sm:text-[12.5px] font-mono font-black text-red-100 mt-0.5">2.000.000đ</div>
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-center w-[21%] border-l border-slate-800">
                    <div className="text-xs font-bold text-white">Nâng cao</div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">5.000.000đ</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#262B38]/60 text-xs sm:text-[13px]">
                {comparisonMatrix.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#0F172A] dark:text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-center text-[#64748B] dark:text-slate-400">
                      {row.basic}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-center font-bold text-[#D71920] dark:text-red-400 bg-red-50/35 dark:bg-red-950/20 border-x border-red-100/80 dark:border-red-900/30">
                      {row.standard}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-center text-[#334155] dark:text-slate-300 font-medium">
                      {row.advanced}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom Trust Note */}
        <div className="mt-2 text-center">
          <p className="text-[11.5px] sm:text-xs text-[#64748B] dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Mọi gói đều có bảo hành kỹ thuật 30 ngày và xuất hóa đơn VAT điện tử nếu doanh nghiệp yêu cầu.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

