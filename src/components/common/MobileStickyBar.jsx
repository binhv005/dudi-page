import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/landingData';

export default function MobileStickyBar() {
  const scrollToForm = () => {
    const formElement = document.getElementById('form-tu-van');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-md border-t border-[#E5E7EB] dark:border-[#1E293B] p-2.5 px-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2">
      <a
        href={COMPANY_CONFIG.hotlineTel}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 bg-[#F8F8F5] dark:bg-[#1E293B] text-[#111111] dark:text-white text-xs font-bold rounded-xl border border-[#E5E7EB] dark:border-[#334155] min-h-[44px]"
      >
        <Phone className="w-4 h-4 text-[#D71920]" />
        <span>Gọi</span>
      </a>

      <a
        href={COMPANY_CONFIG.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 bg-red-50 dark:bg-red-950/40 text-[#D71920] text-xs font-bold rounded-xl border border-red-100 dark:border-red-900/50 min-h-[44px]"
      >
        <MessageSquare className="w-4 h-4 text-[#D71920]" />
        <span>Zalo</span>
      </a>

      <button
        type="button"
        onClick={scrollToForm}
        className="flex-[1.5] btn-primary text-xs font-bold !py-2.5 !px-3 min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-[#D71920]/20"
      >
        <span>Gửi website</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
