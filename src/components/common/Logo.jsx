import React from 'react';

/**
 * Reusable DUDI Software Brand Logo Component
 * Matches official branding:
 * - "DUDI SOFTWARE" (DUDI in dynamic dark/light or white, SOFTWARE in red)
 * - "TECHNOLOGY SOLUTIONS HUB" (sub-headline with wide tracking)
 */
export default function Logo({ 
  scrolled = false, 
  className = '' 
}) {
  // Determine text color for "DUDI" based on scrolled state / background
  const dudiTextColor = scrolled 
    ? 'text-[#0F172A] dark:text-white' 
    : 'text-white';

  return (
    <div className={`flex flex-col justify-center select-none ${className}`}>
      {/* Main Brand Title */}
      <div className="flex items-baseline gap-1.5 leading-none font-sans font-black tracking-tight">
        <span className={`text-lg sm:text-xl lg:text-[22px] font-black transition-colors duration-200 ${dudiTextColor}`}>
          DUDI
        </span>
        <span className="text-lg sm:text-xl lg:text-[22px] font-black text-[#EF4444] transition-colors duration-200">
          SOFTWARE
        </span>
      </div>

      {/* Subtitle / Slogan */}
      <span className="text-[7.5px] sm:text-[8px] lg:text-[8.5px] font-bold uppercase tracking-[0.22em] text-[#8E9DAE] dark:text-[#94A3B8] leading-none mt-1 transition-colors duration-200">
        TECHNOLOGY SOLUTIONS HUB
      </span>
    </div>
  );
}

