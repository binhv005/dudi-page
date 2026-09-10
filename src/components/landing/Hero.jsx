import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { HERO_DATA, COMPANY_CONFIG } from '../../data/landingData';
import { trackEvent } from '../../utils/tracking';

export default function Hero() {
  const videoUrl = "https://res.cloudinary.com/ai1z2oaj/video/upload/v1788936158/c84fe2644ceb4921b341305699dbbc76.mp4";

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen w-full flex items-center overflow-hidden bg-[#0A0A0B]"
      aria-label="Giới thiệu dịch vụ nâng cấp và sửa lỗi website DUDI"
    >
      {/* LAYER 1: Background Video Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video minh họa công nghệ DUDI Software"
          className="w-full h-full object-cover object-[52%_center] sm:object-[60%_center] lg:object-[58%_center] scale-[1.08] origin-center filter brightness-[0.98] contrast-[1.02]"
        >
          <source src={videoUrl} type="video/mp4" />
          <track kind="captions" src="data:text/vtt;charset=utf-8,WEBVTT" label="Tiếng Việt" default />
        </video>
      </div>

      {/* LAYER 2: Ultra-Soft Corner Shadow Blend to guarantee zero watermark visibility on any resolution */}
      <div
        className="absolute -bottom-10 -right-10 w-44 h-44 sm:w-56 sm:h-56 bg-gradient-to-tl from-[#0A0A0B]/90 via-[#3a060a]/50 to-transparent rounded-full blur-2xl pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* LAYER 3: Localized Left Negative-Space Gradient (Character area on right remains clear) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block bg-gradient-to-r from-[#0A0A0B]/95 via-[#0A0A0B]/60 via-48% to-transparent"
        aria-hidden="true"
      />
      {/* Mobile localized bottom gradient */}
      <div
        className="absolute inset-0 z-10 pointer-events-none md:hidden bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/70 via-55% to-transparent"
        aria-hidden="true"
      />

      {/* Localized Cinematic Soft Red Atmosphere (Strongest Section - Soft diffuse light in negative space) */}
      <div
        className="absolute top-1/4 -left-16 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] bg-gradient-to-br from-[#E31B23]/18 via-[#C9141C]/10 to-transparent dark:from-[#7F1018]/28 dark:via-[#A9141E]/16 dark:to-transparent rounded-full blur-[150px] pointer-events-none z-10 animate-tech-float-1"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/3 w-[400px] sm:w-[500px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-[#C9141C]/10 via-[#E31B23]/5 to-transparent dark:from-[#7F1018]/18 dark:via-transparent rounded-full blur-[130px] pointer-events-none z-10 animate-tech-float-2"
        aria-hidden="true"
      />

      {/* LAYER 3: Hero Content - Positioned Comfortably in Left Negative Space */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 md:pt-28 md:pb-16 flex flex-col justify-end md:justify-center h-full">
        <div className="max-w-[560px]">

          {/* Controlled H1 - Fluid & Balanced */}
          <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[1.18] font-extrabold text-white tracking-tight mb-3.5 text-balance">
            Website cũ, chậm hoặc khó ra khách?
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-200 to-white">
              DUDI giúp cập nhật đúng phần cần thiết.
            </span>
          </h1>

          {/* Controlled Description */}
          <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed font-normal mb-5 max-w-[480px] text-pretty">
            Kiểm tra toàn diện, xác định đúng điểm nghẽn, báo rõ phạm vi và chi phí trước khi thực hiện. Giá cố định từ <strong className="text-white font-semibold">500.000đ/gói</strong>.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#form-tu-van"
              onClick={() => trackEvent('cta_click', { location: 'hero_primary' })}
              className="btn-primary text-xs sm:text-sm font-semibold !py-2.5 !px-5.5 group flex items-center justify-center gap-2 shadow-md shadow-[#D71920]/25 cursor-pointer"
              id="hero-primary-cta"
            >
              <span>{HERO_DATA.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={COMPANY_CONFIG.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('zalo_click', { location: 'hero_secondary' })}
              className="btn-secondary !bg-black/30 !border-white/20 !text-white hover:!bg-black/50 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 backdrop-blur-sm !py-2.5 !px-5 cursor-pointer"
              id="hero-secondary-cta"
            >
              <MessageSquare className="w-4 h-4 text-red-400" />
              <span>{HERO_DATA.secondaryCtaText}</span>
            </a>
          </div>

        </div>
      </div>

      {/* LAYER 4: Minimal Scroll Indicator */}
      <a
        href="#about-dudi"
        aria-label="Cuộn xuống nội dung"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors duration-150 group focus-visible:outline-none cursor-pointer"
      >
        <span className="text-[9px] font-mono tracking-widest uppercase opacity-75 group-hover:opacity-100">
          Khám phá
        </span>
        <div className="w-4 h-6 rounded-full border border-white/30 flex items-start justify-center p-0.5 group-hover:border-white/60">
          <div className="w-1 h-1.5 rounded-full bg-[#D71920] animate-bounce" />
        </div>
      </a>
    </section>
  );
}
