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
      className="py-6 sm:py-8 lg:py-8 bg-transparent text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300 flex flex-col justify-center"
      aria-label="Quy trình làm việc tại DUDI"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* ─── DESKTOP & TABLET BALANCED ARC LAYOUT ─── */}
        <div className={`hidden lg:grid grid-cols-12 gap-6 xl:gap-8 items-center transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          
          {/* LEFT: Hero Circular Card with Mascot peeking on corner (5 cols) */}
          <div className="col-span-5 flex justify-center items-center">
            <div className="relative w-[250px] h-[250px] xl:w-[280px] xl:h-[280px] rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.45)] flex flex-col items-center justify-center p-5 text-center select-none transition-transform duration-300 hover:scale-[1.01]">
              
              {/* Mascot Peeking snugly on Top-Right Rim */}
              <div 
                className="absolute -top-4 -right-1 xl:-top-5 xl:-right-2 w-16 h-16 xl:w-20 xl:h-20 pointer-events-none z-20 transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src="/form-mascot.webp" 
                  alt="DUDI Mascot" 
                  className="w-full h-full object-contain drop-shadow-md transform rotate-6"
                />
              </div>

              {/* Top pill badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/50 text-[9.5px] font-mono tracking-widest text-[#D71920] uppercase font-bold mb-2 shadow-2xs">
                <span>04 / QUY TRÌNH CHUẨN</span>
              </div>

              {/* Headline */}
              <h2 className="text-lg xl:text-xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2] mb-1.5">
                Quy trình <br /> 6 bước tối ưu
              </h2>

              {/* Subtitle */}
              <p className="text-[11px] xl:text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-[200px] mb-2.5">
                Minh bạch từng chặng. Bấm vào từng bước để xem chi tiết.
              </p>

              {/* Direct Action Link */}
              <a 
                href="#form-tu-van"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#D71920] hover:text-[#8F0F16] transition-colors group cursor-pointer"
              >
                <span>Nhận tư vấn ngay</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

            </div>
          </div>

          {/* RIGHT: SVG Curved Arc with Interactive Step Rows (7 cols) */}
          <div className="col-span-7 relative py-1">
            
            {/* Background SVG Arc Connecting All Steps */}
            <div className="absolute left-0 top-0 bottom-0 w-28 pointer-events-none">
              <svg 
                viewBox="0 0 120 440" 
                preserveAspectRatio="none" 
                className="w-full h-full overflow-visible"
              >
                {/* Smooth continuous curved arc line */}
                <path
                  d="M 20,10 C 95,80 95,360 20,430"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="2.5"
                  className="dark:stroke-[#334155] opacity-90"
                />
              </svg>
            </div>

            {/* 6 Step Rows positioned along the curved arc */}
            <div className="space-y-1.5 xl:space-y-2 relative z-10">
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
                    {/* Main Row Header */}
                    <div className="flex items-center gap-2.5 xl:gap-3.5">
                      
                      {/* 1. Step Icon Badge */}
                      <div className={`relative w-8.5 h-8.5 xl:w-9.5 xl:h-9.5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 z-10 ${
                        isSelected 
                          ? 'bg-[#D71920] text-white ring-3 ring-[#D71920]/25 shadow-sm scale-105' 
                          : 'bg-white dark:bg-[#1E293B] border border-red-200/90 dark:border-red-900/50 shadow-2xs ring-1 ring-red-50 dark:ring-red-950/40 text-[#D71920] dark:text-[#EF4444] group-hover:scale-105 group-hover:border-[#D71920]'
                      }`}>
                        <IconComp className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
                      </div>

                      {/* 2. Step Number */}
                      <div className="shrink-0 w-6 xl:w-7 text-center">
                        <span className={`text-base xl:text-lg font-black font-mono tracking-tight transition-colors ${
                          isSelected ? 'text-[#D71920] dark:text-[#EF4444]' : 'text-[#D71920]/80 dark:text-[#EF4444]/90 group-hover:text-[#D71920]'
                        }`}>
                          {step.stepNumber}
                        </span>
                      </div>

                      {/* 3. Step Title & Quick Info */}
                      <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className={`text-xs xl:text-sm font-bold tracking-tight transition-colors ${
                              isSelected ? 'text-[#D71920] dark:text-[#EF4444]' : 'text-[#0F172A] dark:text-white group-hover:text-[#D71920]'
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
                            <p className="text-[11px] xl:text-xs text-[#64748B] dark:text-[#94A3B8] leading-tight truncate max-w-[300px] xl:max-w-md mt-0.5">
                              {step.dudiRole}
                            </p>
                          )}
                        </div>

                        {/* Chevron Indicator */}
                        <div className={`p-0.5 rounded-full text-[#94A3B8] transition-transform duration-300 ${
                          isSelected ? 'rotate-90 text-[#D71920]' : 'group-hover:translate-x-0.5'
                        }`}>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                    </div>

                    {/* Expandable Step Detail Panel */}
                    {isSelected && (
                      <div className="mt-1.5 ml-10 xl:ml-12 mr-2 p-2.5 rounded-lg bg-white/95 dark:bg-[#0F172A]/95 border border-red-100 dark:border-red-950 shadow-2xs space-y-1 text-xs animate-fadeIn backdrop-blur-xs">
                        
                        {/* DUDI Role */}
                        <div className="flex items-start gap-1.5 text-[#334155] dark:text-[#CBD5E1]">
                          <Sparkles className="w-3 h-3 text-[#D71920] shrink-0 mt-0.5" />
                          <div className="text-[11.5px] leading-tight">
                            <strong className="text-[#0F172A] dark:text-white font-semibold">DUDI thực hiện: </strong>
                            <span>{step.dudiRole}</span>
                          </div>
                        </div>

                        {/* Client Input */}
                        <div className="flex items-start gap-1.5 text-[#475569] dark:text-[#94A3B8]">
                          <UserCheck className="w-3 h-3 text-[#2563EB] shrink-0 mt-0.5" />
                          <div className="text-[11.5px] leading-tight">
                            <strong className="text-[#0F172A] dark:text-white font-semibold">Khách hàng cung cấp: </strong>
                            <span>{step.clientInput}</span>
                          </div>
                        </div>

                        {/* Output */}
                        <div className="flex items-start gap-1.5 text-[#475569] dark:text-[#94A3B8]">
                          <CheckCircle2 className="w-3 h-3 text-[#16A34A] shrink-0 mt-0.5" />
                          <div className="text-[11.5px] leading-tight">
                            <strong className="text-[#0F172A] dark:text-white font-semibold">Kết quả bàn giao: </strong>
                            <span className="text-[#16A34A] dark:text-[#4ADE80] font-medium">{step.output}</span>
                          </div>
                        </div>

                        {/* Special highlight notice */}
                        {step.highlightNotice && (
                          <div className="pt-0.5 text-[10.5px] font-medium text-[#D71920] italic border-t border-red-50 dark:border-red-950/60">
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
              <img src="/form-mascot.webp" alt="Mascot" className="w-8 h-8 object-contain inline-block" />
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
                  className="relative cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    
                    {/* Icon Node */}
                    <div className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected 
                        ? 'bg-[#D71920] text-white shadow-sm' 
                        : 'bg-white dark:bg-[#1E293B] border border-red-200 dark:border-red-900/50 text-[#D71920] dark:text-[#EF4444] shadow-xs'
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
                            isSelected ? 'text-[#D71920]' : 'text-[#0F172A] dark:text-white'
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
                          isSelected ? 'rotate-90 text-[#D71920]' : ''
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
        <div className={`flex flex-wrap items-center justify-center gap-4 sm:gap-7 pt-3.5 border-t border-[#E5E7EB]/80 dark:border-[#1E293B] mt-4 sm:mt-5 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          
          <div className="flex items-center gap-1.5 text-xs text-[#0F172A] dark:text-[#E2E8F0]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
            <span><strong>Báo giá trước:</strong> Không phát sinh phụ phí</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#0F172A] dark:text-[#E2E8F0]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
            <span><strong>Phạm vi rõ:</strong> Chốt văn bản trước khi code</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#0F172A] dark:text-[#E2E8F0]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
            <span><strong>Bảo hành 30 ngày:</strong> Hỗ trợ chu đáo</span>
          </div>

        </div>

      </div>
    </section>
  );
}


