import React, { useState } from 'react';
import {
  CheckCircle2, ShieldCheck, ArrowRight,
  Puzzle, Award, Settings2, Layers, SearchCheck, PackageCheck,
  ChevronRight, Sparkles, UserCheck
} from 'lucide-react';
import { PROCESS_DATA } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';

const stepConfig = [
  {
    icon: Puzzle,
    arcOffsetX: 'lg:translate-x-3 xl:translate-x-5',
  },
  {
    icon: SearchCheck,
    arcOffsetX: 'lg:translate-x-10 xl:translate-x-16',
  },
  {
    icon: Settings2,
    arcOffsetX: 'lg:translate-x-14 xl:translate-x-22',
  },
  {
    icon: Layers,
    arcOffsetX: 'lg:translate-x-14 xl:translate-x-22',
  },
  {
    icon: Award,
    arcOffsetX: 'lg:translate-x-10 xl:translate-x-16',
  },
  {
    icon: PackageCheck,
    arcOffsetX: 'lg:translate-x-3 xl:translate-x-5',
  },
];

export default function Process() {
  const [sectionRef, inView] = useInView({ threshold: 0.12 });
  const [selectedStep, setSelectedStep] = useState('01');

  const handleStepClick = (stepNumber) => {
    setSelectedStep(prev => prev === stepNumber ? null : stepNumber);
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-8 sm:py-10 lg:py-12 bg-white/75 dark:bg-[#090A0F]/80 backdrop-blur-xs text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300 flex flex-col justify-center"
      aria-label="Quy trình làm việc tại DUDI"
    >
      {/* Tech Geometric Background Mesh (Watermark) */}
      <div
        className="absolute -left-20 -bottom-20 w-[460px] sm:w-[580px] h-[500px] sm:h-[620px] opacity-[0.06] dark:opacity-[0.11] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-geometric-bg.webp"
          alt=""
          className="w-full h-full object-contain rotate-[-15deg]"
          loading="lazy"
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 w-full">

        {/* ─── DESKTOP & TABLET BALANCED ARC LAYOUT ─── */}
        <div className={`hidden lg:grid grid-cols-12 gap-6 xl:gap-10 items-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>

          {/* LEFT: Hero Circular Card with Mascot peeking on corner (5 cols) */}
          <div className="col-span-5 flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] xl:w-[335px] xl:h-[335px] rounded-full bg-gradient-to-br from-[#D71920] via-[#C9141C] to-[#991016] text-white border-2 border-red-400/50 shadow-2xl shadow-red-950/30 flex flex-col items-center justify-center p-6 text-center select-none transition-transform duration-300 hover:scale-[1.01]">
              
              {/* Mascot Peeking snugly on Top-Right Rim */}
              <div 
                className="absolute -top-1 -right-1 xl:-top-1.5 xl:-right-1.5 w-21 h-21 xl:w-25 xl:h-25 pointer-events-none z-20 transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src="/form-mascot.webp" 
                  alt="DUDI Mascot" 
                  className="w-full h-full object-contain drop-shadow-lg transform rotate-6"
                />
              </div>

              {/* Top pill badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#D71920] text-[10px] xl:text-[10.5px] font-mono tracking-widest uppercase font-extrabold mb-2.5 shadow-sm">
                <span>04 / QUY TRÌNH CHUẨN</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl xl:text-[28px] font-extrabold text-white tracking-tight leading-[1.2] mb-2">
                Quy trình <br /> 6 bước tối ưu
              </h2>

              {/* Subtitle */}
              <p className="text-xs xl:text-sm text-red-100 leading-relaxed max-w-[240px] mb-3.5">
                Minh bạch từng chặng. Bấm vào từng bước để xem chi tiết.
              </p>

              {/* Direct Action Link */}
              <a 
                href="#form-tu-van"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#D71920] hover:bg-slate-50 text-xs xl:text-[13px] font-extrabold shadow-md transition-all group cursor-pointer"
              >
                <span>Nhận tư vấn ngay</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

            </div>
          </div>

          {/* RIGHT: SVG Curved Arc with Interactive Step Rows (7 cols) */}
          <div className="col-span-7 relative py-1">

            {/* Background SVG Arc Connecting All Steps */}
            <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none">
              <svg
                viewBox="0 0 120 480"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
              >
                {/* Smooth continuous curved arc line */}
                <path
                  d="M 20,15 C 100,90 100,390 20,465"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="2.5"
                  className="dark:stroke-[#334155] opacity-90"
                />
              </svg>
            </div>

            {/* 6 Step Rows positioned along the curved arc with comfortable breathing room */}
            <div className="space-y-2 xl:space-y-2.5 relative z-10">
              {PROCESS_DATA.steps.map((step, index) => {
                const config = stepConfig[index] || stepConfig[0];
                const IconComp = config.icon;
                const isStep03 = step.stepNumber === '03';
                const isSelected = selectedStep === step.stepNumber;

                return (
                  <div
                    key={step.stepNumber}
                    onClick={() => handleStepClick(step.stepNumber)}
                    className={`group cursor-pointer transition-all duration-300 ${config.arcOffsetX}`}
                  >
                    {/* Main Row Container with Raised Hover Effect */}
                    <div className={`flex items-center gap-3 xl:gap-4 px-3.5 py-2 rounded-2xl border transition-all duration-300 ease-out ${
                      isSelected
                        ? 'bg-white dark:bg-[#161922] border-red-200 dark:border-red-900/60 shadow-md shadow-red-950/10 -translate-y-0.5'
                        : 'bg-transparent border-transparent hover:bg-white dark:hover:bg-[#161922] hover:border-[#E2E8F0] dark:hover:border-[#242A35] hover:shadow-lg hover:shadow-red-950/10 dark:hover:shadow-black/40 hover:-translate-y-1 hover:scale-[1.01]'
                    }`}>

                      {/* 1. Step Icon Badge */}
                      <div className={`relative w-9 h-9 xl:w-10 xl:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 z-10 ${
                        isSelected
                          ? 'bg-[#D71920] text-white ring-3 ring-[#D71920]/25 shadow-sm scale-105'
                          : 'bg-white dark:bg-[#1E293B] border border-red-200/90 dark:border-red-900/50 shadow-2xs text-[#D71920] dark:text-[#EF4444] group-hover:scale-110 group-hover:bg-[#D71920] group-hover:text-white group-hover:border-[#D71920] group-hover:shadow-md group-hover:shadow-red-950/20'
                      }`}>
                        <IconComp className="w-4.5 h-4.5 xl:w-5 xl:h-5 transition-transform group-hover:rotate-6" />
                      </div>

                      {/* 2. Step Number */}
                      <div className="shrink-0 w-7 xl:w-8 text-center">
                        <span className={`text-base xl:text-lg font-black font-mono tracking-tight transition-colors ${
                          isSelected 
                            ? 'text-[#D71920] dark:text-[#EF4444]' 
                            : 'text-[#D71920]/80 dark:text-[#EF4444]/90 group-hover:text-[#D71920]'
                        }`}>
                          {step.stepNumber}
                        </span>
                      </div>

                      {/* 3. Step Title & Quick Info */}
                      <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className={`text-xs sm:text-sm xl:text-[14.5px] font-bold tracking-tight transition-colors ${
                              isSelected 
                                ? 'text-[#D71920] dark:text-[#EF4444]' 
                                : 'text-[#0F172A] dark:text-white group-hover:text-[#D71920]'
                            }`}>
                              {step.title}
                            </h3>
                            {isStep03 && (
                              <span className="px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-[#D71920] text-white shadow-2xs">
                                CHỐT TRƯỚC KHI CODE
                              </span>
                            )}
                          </div>
                          {!isSelected && (
                            <p className="text-[11.5px] xl:text-xs text-[#64748B] dark:text-[#94A3B8] leading-tight truncate max-w-[320px] xl:max-w-md mt-0.5">
                              {step.dudiRole}
                            </p>
                          )}
                        </div>

                        {/* Chevron Indicator */}
                        <div className={`p-1 rounded-full text-[#94A3B8] transition-all duration-300 ${
                          isSelected 
                            ? 'rotate-90 text-[#D71920]' 
                            : 'group-hover:translate-x-1 group-hover:text-[#D71920]'
                        }`}>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                    </div>

                    {/* Expandable Step Detail Panel */}
                    {isSelected && (
                      <div className="my-2 ml-10 xl:ml-12 mr-2 p-3 rounded-xl bg-white/95 dark:bg-[#0F172A]/95 border border-red-100 dark:border-red-950 shadow-2xs space-y-1.5 text-xs animate-fadeIn backdrop-blur-xs">

                        {/* DUDI Role */}
                        <div className="flex items-start gap-2 text-[#334155] dark:text-[#CBD5E1]">
                          <Sparkles className="w-3.5 h-3.5 text-[#D71920] shrink-0 mt-0.5" />
                          <div className="text-xs leading-normal">
                            <strong className="text-[#0F172A] dark:text-white font-semibold">DUDI thực hiện: </strong>
                            <span>{step.dudiRole}</span>
                          </div>
                        </div>

                        {/* Client Input */}
                        <div className="flex items-start gap-2 text-[#475569] dark:text-[#94A3B8]">
                          <UserCheck className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                          <div className="text-xs leading-normal">
                            <strong className="text-[#0F172A] dark:text-white font-semibold">Khách hàng cung cấp: </strong>
                            <span>{step.clientInput}</span>
                          </div>
                        </div>

                        {/* Output */}
                        <div className="flex items-start gap-2 text-[#475569] dark:text-[#94A3B8]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <div className="text-xs leading-normal">
                            <strong className="text-[#0F172A] dark:text-white font-semibold">Kết quả bàn giao: </strong>
                            <span className="text-[#16A34A] dark:text-[#4ADE80] font-medium">{step.output}</span>
                          </div>
                        </div>

                        {/* Special highlight notice */}
                        {step.highlightNotice && (
                          <div className="pt-1 text-[11px] font-medium text-[#D71920] italic border-t border-red-50 dark:border-red-950/60">
                            * {step.highlightNotice}
                          </div>
                        )}

                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* ─── MOBILE & TABLET FALLBACK LAYOUT (< 1024px) ─── */}
        <div className="lg:hidden space-y-6">

          {/* Header Card for Mobile with Mascot */}
          <div className="relative text-center max-w-sm mx-auto space-y-2 pt-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/50 text-[10px] font-mono tracking-widest text-[#D71920] uppercase font-bold shadow-2xs">
              <span>04 / QUY TRÌNH CHUẨN</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl font-extrabold text-[#0F172A] dark:text-white">
                Quy trình 6 bước rõ ràng
              </h2>
              <img
                src="/form-mascot.webp"
                alt="DUDI Mascot"
                className="w-8 h-8 object-contain inline-block"
                width="32"
                height="32"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
              Minh bạch từng chặng. Chạm vào từng bước để xem chi tiết.
            </p>
          </div>

          {/* Step List on Mobile */}
          <div className="relative pl-3 sm:pl-6 space-y-3.5">

            {/* Vertical Guide Line */}
            <div className="absolute left-[24px] sm:left-[30px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#D71920]/40 via-[#D71920] to-[#D71920]/30" />

            {PROCESS_DATA.steps.map((step, index) => {
              const config = stepConfig[index] || stepConfig[0];
              const IconComp = config.icon;
              const isStep03 = step.stepNumber === '03';
              const isSelected = selectedStep === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  onClick={() => handleStepClick(step.stepNumber)}
                  className="relative cursor-pointer group"
                >
                  <div className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all duration-300 ${
                    isSelected
                      ? 'bg-white dark:bg-[#161922] border-red-200 dark:border-red-900/60 shadow-md shadow-red-950/10'
                      : 'bg-white/60 dark:bg-[#161922]/60 border-transparent hover:bg-white dark:hover:bg-[#161922] hover:border-[#E2E8F0] dark:hover:border-[#242A35] hover:shadow-md hover:-translate-y-0.5'
                  }`}>

                    {/* Icon Node */}
                    <div className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#D71920] text-white shadow-sm'
                        : 'bg-white dark:bg-[#1E293B] border border-red-200 dark:border-red-900/50 text-[#D71920] dark:text-[#EF4444] shadow-xs group-hover:bg-[#D71920] group-hover:text-white group-hover:scale-105'
                    }`}>
                      <IconComp className="w-4.5 h-4.5" />
                    </div>

                    {/* Number */}
                    <div className="shrink-0 w-6 pt-0.5">
                      <span className="text-sm font-extrabold text-[#D71920] dark:text-[#EF4444] font-mono">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-0.5 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-2">
                          <h3 className={`text-sm font-bold transition-colors ${
                            isSelected ? 'text-[#D71920]' : 'text-[#0F172A] dark:text-white group-hover:text-[#D71920]'
                          }`}>
                            {step.title}
                          </h3>
                          {isStep03 && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-[#D71920] text-white">
                              CHỐT 100%
                            </span>
                          )}
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform ${
                          isSelected ? 'rotate-90 text-[#D71920]' : 'group-hover:translate-x-0.5 group-hover:text-[#D71920]'
                        }`} />
                      </div>

                      {!isSelected && (
                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed line-clamp-1">
                          {step.dudiRole}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Expanded detail on mobile */}
                  {isSelected && (
                    <div className="mt-2 ml-10 p-3 rounded-lg bg-white/95 dark:bg-[#0F172A]/95 border border-red-100 dark:border-red-950 shadow-xs space-y-1.5 text-xs">
                      <div>
                        <strong className="text-[#0F172A] dark:text-white font-medium">DUDI thực hiện: </strong>
                        <span className="text-[#475569] dark:text-[#94A3B8]">{step.dudiRole}</span>
                      </div>
                      <div>
                        <strong className="text-[#0F172A] dark:text-white font-medium">Khách hàng cung cấp: </strong>
                        <span className="text-[#475569] dark:text-[#94A3B8]">{step.clientInput}</span>
                      </div>
                      <div>
                        <strong className="text-[#0F172A] dark:text-white font-medium">Kết quả: </strong>
                        <span className="text-[#16A34A] dark:text-[#4ADE80] font-medium">{step.output}</span>
                      </div>
                      {step.highlightNotice && (
                        <div className="text-[10px] text-[#D71920] italic pt-1 border-t border-red-50 dark:border-red-950">
                          * {step.highlightNotice}
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

        {/* ─── BOTTOM TRUST BAR ─── */}
        <div className={`flex flex-wrap items-center justify-center gap-5 sm:gap-8 pt-4 border-t border-[#E5E7EB]/80 dark:border-[#1E293B] mt-5 sm:mt-6 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>

          <div className="flex items-center gap-1.5 text-xs sm:text-[12.5px] text-[#0F172A] dark:text-[#E2E8F0]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
            <span><strong>Báo giá trước:</strong> Không phát sinh phụ phí</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs sm:text-[12.5px] text-[#0F172A] dark:text-[#E2E8F0]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
            <span><strong>Phạm vi rõ:</strong> Chốt văn bản trước khi code</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs sm:text-[12.5px] text-[#0F172A] dark:text-[#E2E8F0]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
            <span><strong>Bảo hành 30 ngày:</strong> Hỗ trợ chu đáo</span>
          </div>

        </div>

      </div>
    </section>
  );
}


