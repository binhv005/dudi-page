import React from 'react';
import { Globe, ArrowUpRight, ShieldCheck, Zap, Smartphone, Check } from 'lucide-react';
import { CASE_STUDIES } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';

export default function CaseStudies() {
  const [sectionRef, inView] = useInView({ threshold: 0.12 });
  const case01 = CASE_STUDIES.items[0];
  const case02 = CASE_STUDIES.items[1];

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="py-12 sm:py-14 lg:py-16 bg-gradient-to-br from-[#8A0C13] via-[#B8151D] to-[#6E0A0F] text-white border-y border-[#D71920]/40 relative overflow-hidden transition-colors duration-300"
      aria-label="Các dự án DUDI đã thực hiện"
    >
      {/* Deep Red Tech Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Tech Background Images at Corners */}
      {/* Top-Left Corner */}
      <div
        className="absolute -left-20 -top-16 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] opacity-[0.16] mix-blend-screen pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-geometric-bg.webp"
          alt=""
          className="w-full h-full object-contain filter brightness-150"
          loading="lazy"
        />
      </div>

      {/* Top-Right Corner */}
      <div
        className="absolute -right-20 -top-16 w-[480px] sm:w-[600px] h-[340px] sm:h-[420px] opacity-[0.15] mix-blend-screen pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-hexagon-bg.webp"
          alt=""
          className="w-full h-full object-contain filter brightness-150"
          loading="lazy"
        />
      </div>

      {/* Bottom-Left Corner */}
      <div
        className="absolute -left-16 -bottom-16 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] opacity-[0.16] mix-blend-screen pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-network-bg.webp"
          alt=""
          className="w-full h-full object-contain filter brightness-150"
          loading="lazy"
        />
      </div>

      {/* Bottom-Right Corner */}
      <div
        className="absolute -right-16 -bottom-16 w-[420px] sm:w-[540px] h-[340px] sm:h-[420px] opacity-[0.14] mix-blend-screen pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-geometric-bg.webp"
          alt=""
          className="w-full h-full object-contain rotate-180 filter brightness-150"
          loading="lazy"
        />
      </div>

      {/* Ambient Moving Glow Orbs */}
      <div 
        className="absolute -top-10 left-1/3 w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl pointer-events-none z-0" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-10 right-1/4 w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl pointer-events-none z-0" 
        aria-hidden="true"
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className={`mb-8 sm:mb-10 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 text-[10px] sm:text-[11px] font-mono tracking-widest text-white uppercase mb-2.5 shadow-2xs backdrop-blur-xs">
            <span>03 / DỰ ÁN THỰC TẾ</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-white tracking-tight">
                {CASE_STUDIES.heading}
              </h2>
              <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-xl leading-relaxed">
                {CASE_STUDIES.subheading}
              </p>
            </div>

            <a
              href="https://www.dudisoftware.com/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-[#D71920] hover:bg-red-50 text-xs font-bold transition-all shadow-md shrink-0 self-start md:self-end group"
            >
              <Globe className="w-4 h-4 text-[#D71920]" />
              <span>dudisoftware.com/projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D71920] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ─── CASE 01: Travel Tour (Website tour du lịch - Odyssey Ha Giang Loop) ─── */}
        <div
          style={{ transitionDelay: inView ? '100ms' : '0ms' }}
          className={`pb-12 mb-12 border-b border-white/20 transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

            {/* Left Showcase Column with Live Website Preview Image (5 cols on lg) - Image First */}
            <div className="lg:col-span-5 flex justify-center items-center relative order-2 lg:order-1">
              <a
                href="https://www.odysseyhagiangloop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-2xl overflow-hidden border-2 border-white/25 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-white/40 transition-all duration-300 group/card block bg-slate-900"
              >
                {/* Browser window top bar */}
                <div className="bg-[#0F172A] px-3.5 py-2 flex items-center justify-between border-b border-slate-700/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 truncate max-w-[200px]">
                    https://www.odysseyhagiangloop.com/
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/card:text-white transition-colors" />
                </div>

                {/* Screenshot Image of odysseyhagiangloop.com */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                  <img
                    src="/odysseyhagiang.webp"
                    alt="Odyssey Ha Giang Loop Website Preview (odysseyhagiangloop.com)"
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500 select-none"
                  />

                  {/* Hover Overlay Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-bold inline-flex items-center gap-1.5 bg-[#D71920] px-3 py-1 rounded-lg shadow-md">
                      <span>Truy cập odysseyhagiangloop.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="bg-white px-3.5 py-2.5 flex items-center justify-between border-t border-slate-200 text-xs">
                  <span className="font-bold text-[#0F172A] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                    <span>Odyssey Ha Giang Loop - Giao diện thực tế</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#D71920] font-bold">Live Web ↗</span>
                </div>
              </a>
            </div>

            {/* Right Info Column (7 cols on lg) - Clean, uncluttered layout */}
            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              
              {/* Top Row: Case Index + Status + Price */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/20">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/15 border border-white/20 text-white text-[11px] font-mono font-bold tracking-wider uppercase">
                    DỰ ÁN 01
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {case01.statusBadge}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">{case01.price}</span>
                  <span className="text-xs text-red-200 font-medium">/ trọn gói</span>
                </div>
              </div>

              {/* Title & Live Link */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Website Odyssey Ha Giang Loop
                </h3>

                <a
                  href="https://www.odysseyhagiangloop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/15 hover:bg-white text-white hover:text-[#D71920] border border-white/25 text-xs font-bold transition-all shadow-sm group/link"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>odysseyhagiangloop.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-2 pt-1">
                <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-red-200">
                  Hạng mục thực hiện:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {case01.scopeItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5 font-bold" />
                      <p className="text-xs sm:text-[13px] text-white/95 leading-snug font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights Bar (Clean white translucent pills) */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/15 backdrop-blur-xs">
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  Tăng tốc tải trang
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/15 backdrop-blur-xs">
                  <Smartphone className="w-3.5 h-3.5 text-blue-300" />
                  Chuẩn hóa Mobile
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/15 backdrop-blur-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  Bảo hành 30 ngày
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* ─── CASE 02: Packaging & Printing (Website bao bì - Cao Nguyên Xanh) ─── */}
        <div
          style={{ transitionDelay: inView ? '200ms' : '0ms' }}
          className={`transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

            {/* Left Info Column (7 cols on lg) - Clean, uncluttered layout */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Top Row: Case Index + Status + Price */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/20">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/15 border border-white/20 text-white text-[11px] font-mono font-bold tracking-wider uppercase">
                    DỰ ÁN 02
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {case02.statusBadge}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">{case02.price}</span>
                  <span className="text-xs text-red-200 font-medium">/ trọn gói</span>
                </div>
              </div>

              {/* Title & Live Link to caonguyenxanh.com.vn */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Website Bao Bì Cao Nguyên Xanh
                </h3>

                <a
                  href="https://caonguyenxanh.com.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/15 hover:bg-white text-white hover:text-[#D71920] border border-white/25 text-xs font-bold transition-all shadow-sm group/link"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>caonguyenxanh.com.vn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-2 pt-1">
                <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-red-200">
                  Hạng mục thực hiện:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {case02.scopeItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5 font-bold" />
                      <p className="text-xs sm:text-[13px] text-white/95 leading-snug font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/15 backdrop-blur-xs">
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  Tăng tốc tải trang
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/15 backdrop-blur-xs">
                  <Smartphone className="w-3.5 h-3.5 text-blue-300" />
                  Chuẩn hóa Mobile
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/15 backdrop-blur-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  Bảo hành 30 ngày
                </span>
              </div>

            </div>

            {/* Right Showcase Column with Live Website Preview Image (5 cols on lg) */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <a
                href="https://caonguyenxanh.com.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-2xl overflow-hidden border-2 border-white/25 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-white/40 transition-all duration-300 group/card block bg-slate-900"
              >
                {/* Browser window top bar */}
                <div className="bg-[#0F172A] px-3.5 py-2 flex items-center justify-between border-b border-slate-700/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 truncate max-w-[200px]">
                    https://caonguyenxanh.com.vn/
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/card:text-white transition-colors" />
                </div>

                {/* Screenshot Image of caonguyenxanh.com.vn */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                  <img
                    src="/caonguyenxanh.webp"
                    alt="Cao Nguyen Xanh Website Preview (caonguyenxanh.com.vn)"
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500 select-none"
                  />

                  {/* Hover Overlay Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-bold inline-flex items-center gap-1.5 bg-[#D71920] px-3 py-1 rounded-lg shadow-md">
                      <span>Truy cập caonguyenxanh.com.vn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="bg-white px-3.5 py-2.5 flex items-center justify-between border-t border-slate-200 text-xs">
                  <span className="font-bold text-[#0F172A] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                    <span>Cao Nguyên Xanh - Giao diện thực tế</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#D71920] font-bold">Live Web ↗</span>
                </div>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Callout Link */}
        <div className="mt-8 pt-5 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-red-100">
            <Globe className="w-4 h-4 text-white shrink-0" />
            <span>Khám phá thêm các dịch vụ phần mềm và dự án tiêu biểu tại hệ sinh thái DUDI.</span>
          </div>
          <a
            href="https://www.dudisoftware.com/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white hover:text-red-200 inline-flex items-center gap-1 transition-colors group shrink-0 underline underline-offset-4"
          >
            <span>Xem tất cả dự án tại dudisoftware.com/projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
