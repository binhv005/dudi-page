import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/landingData';

export default function FloatingContact() {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = (e) => {
    // Check if device is mobile / touch screen
    const isTouchOrMobile = 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) ||
      (typeof window !== 'undefined' && window.innerWidth < 768);

    if (isTouchOrMobile) {
      // On Mobile: allow natural navigation to tel: link (triggers native phone dialer)
      return;
    }

    // On Desktop: prevent navigation and copy phone number to clipboard
    e.preventDefault();
    const phoneToCopy = COMPANY_CONFIG.hotline || "0909 163 821";

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(phoneToCopy);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = phoneToCopy;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Failed to copy', err);
      }
      textArea.remove();
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <aside 
      aria-label="Liên hệ nhanh" 
      className="fixed bottom-20 md:bottom-7 right-4 sm:right-6 z-50 flex flex-col gap-3 items-end pointer-events-none"
    >
      {/* 1. Floating Phone Call Button (Calls on mobile, copies on desktop) */}
      <div className="relative flex items-center justify-end group pointer-events-auto">
        {/* Animated Ripple Wave - Compact */}
        <div 
          className="absolute inset-0 rounded-full bg-[#D71920]/25 dark:bg-[#D71920]/30 animate-contact-ripple -z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 rounded-full bg-[#D71920]/20 dark:bg-[#D71920]/25 animate-contact-ripple-delayed -z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Hover Tooltip / Copy Toast Notification (Desktop) */}
        <div 
          role="tooltip"
          className={`flex items-center absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white rounded-md shadow-md border border-[#E2E8F0] dark:border-[#334155] !whitespace-nowrap !text-nowrap w-max min-w-max transition-all duration-200 pointer-events-none ${
            copied
              ? 'opacity-100 translate-x-0 !border-emerald-500 ring-2 ring-emerald-500/20 shadow-emerald-500/10'
              : 'hidden md:flex opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
          }`}
        >
          {copied ? (
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 !whitespace-nowrap !text-nowrap">
              <Check className="w-3.5 h-3.5" />
              <span>Đã sao chép: {COMPANY_CONFIG.hotline}</span>
            </span>
          ) : (
            <span className="text-[11px] font-bold font-mono tracking-tight text-[#D71920] !whitespace-nowrap !text-nowrap">
              Sao chép: {COMPANY_CONFIG.hotline}
            </span>
          )}
        </div>

        <a
          href={COMPANY_CONFIG.hotlineTel}
          onClick={handlePhoneClick}
          aria-label={`Gọi hotline DUDI: ${COMPANY_CONFIG.hotline}`}
          title={`Click để gọi trên điện thoại hoặc sao chép trên máy tính: ${COMPANY_CONFIG.hotline}`}
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#D71920] to-[#FF3838] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(215,25,32,0.4)] hover:shadow-[0_6px_20px_rgba(215,25,32,0.55)] hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
        >
          {copied ? (
            <Check className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white animate-in zoom-in-75 duration-200 drop-shadow-xs" />
          ) : (
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5.5 h-5.5 sm:w-6 sm:h-6 animate-phone-wiggle drop-shadow-xs"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              <path d="M16.5 3.5a8.5 8.5 0 015 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M14 6.5a4.5 4.5 0 013 3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          )}
        </a>
      </div>

      {/* 2. Floating Zalo Chat Button */}
      <div className="relative flex items-center justify-end group pointer-events-auto">
        {/* Animated Ripple Wave - Compact */}
        <div 
          className="absolute inset-0 rounded-full bg-[#0068FF]/25 dark:bg-[#0068FF]/30 animate-contact-ripple -z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 rounded-full bg-[#0068FF]/20 dark:bg-[#0068FF]/25 animate-contact-ripple-delayed -z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Hover Tooltip (Appears to the left on desktop hover) */}
        <div 
          role="tooltip"
          className="hidden md:flex items-center absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white rounded-md shadow-md border border-[#E2E8F0] dark:border-[#334155] !whitespace-nowrap !text-nowrap w-max min-w-max opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
        >
          <span className="text-[11px] font-bold tracking-tight text-[#0068FF] !whitespace-nowrap !text-nowrap">
            Chat Zalo
          </span>
        </div>

        <a
          href={COMPANY_CONFIG.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo trực tiếp với DUDI"
          title="Chat Zalo tư vấn miễn phí"
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#0068FF] to-[#0084FF] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(0,104,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,104,255,0.55)] hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {/* Official stylized Zalo text logo */}
          <span className="font-extrabold text-[14px] sm:text-[15px] tracking-tight text-white font-sans select-none drop-shadow-xs">
            Zalo
          </span>
        </a>
      </div>
    </aside>
  );
}
