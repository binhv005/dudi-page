import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Cuộn lên đầu trang"
      className="fixed bottom-48 md:bottom-40 right-4 sm:right-6 z-40 p-2.5 sm:p-3 bg-white dark:bg-[#1E293B] text-[#111111] dark:text-white hover:text-white hover:bg-[#D71920] dark:hover:bg-[#D71920] rounded-full shadow-md border border-[#E5E7EB] dark:border-[#334155] transition-all hover:scale-105 active:scale-95 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  );
}
