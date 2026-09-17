import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { COMPANY_CONFIG, NAV_LINKS, WEB_SYSTEM_LINKS } from '../../data/landingData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  // Split NAV_LINKS before FAQ (links before FAQ, and FAQ)
  const navLinksBeforeFAQ = NAV_LINKS.filter(l => l.href !== '#faq');
  const navLinkFAQ = NAV_LINKS.find(l => l.href === '#faq');

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'py-2.5 bg-white/95 dark:bg-[#090A0F]/95 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_1px_8px_rgba(0,0,0,0.03)]' 
          : 'py-3.5 bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] rounded-md group"
            aria-label="DUDI Software - Trang chủ"
          >
            <img 
              src="/logo-dudi.webp" 
              alt="DUDI Software Logo" 
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-150 group-hover:scale-102"
              width="120"
              height="32"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Điều hướng chính">
            
            {/* Links before FAQ: Vấn đề, Giải pháp, Case thực tế, Quy trình, Bảng giá */}
            {navLinksBeforeFAQ.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:text-[#D71920] ${
                  scrolled 
                    ? 'text-[#64748B] hover:text-[#0F172A] dark:text-slate-300 dark:hover:text-white' 
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Hệ thống web Dropdown Trigger (Positioned between Bảng giá and FAQ) */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:text-[#D71920] inline-flex items-center gap-1 py-2 cursor-pointer ${
                  dropdownOpen
                    ? 'text-[#D71920]'
                    : scrolled 
                      ? 'text-[#64748B] hover:text-[#0F172A] dark:text-slate-300 dark:hover:text-white' 
                      : 'text-white/85 hover:text-white'
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Hệ thống web</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#D71920]' : ''}`} />
              </button>

              {/* Dropdown Menu Card matching sample layout */}
              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 sm:w-52 bg-white dark:bg-[#111624] rounded-xl shadow-2xl shadow-slate-950/25 border border-[#E2E8F0] dark:border-[#262F45] overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150"
                  role="menu"
                >
                  {/* Subtle top pointer caret */}
                  <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white dark:bg-[#111624] rotate-45 border-t border-l border-[#E2E8F0] dark:border-[#262F45] pointer-events-none" />

                  <div className="flex flex-col relative z-10 divide-y divide-gray-100 dark:divide-slate-800/80">
                    {WEB_SYSTEM_LINKS.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 sm:py-3 text-[13px] sm:text-[13.5px] font-bold text-[#0F172A] dark:text-white hover:bg-[#D71920] hover:text-white transition-colors group cursor-pointer leading-tight tracking-tight"
                        role="menuitem"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Link */}
            {navLinkFAQ && (
              <a
                key={navLinkFAQ.href}
                href={navLinkFAQ.href}
                className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:text-[#D71920] ${
                  scrolled 
                    ? 'text-[#64748B] hover:text-[#0F172A] dark:text-slate-300 dark:hover:text-white' 
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {navLinkFAQ.label}
              </a>
            )}

          </nav>

          {/* Right Actions: Hotline/Zalo + Compact CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#form-tu-van"
              className="btn-primary !text-xs !font-semibold !py-2 !px-4 !min-h-[38px] flex items-center gap-1.5 group"
            >
              <span>Gửi website cần kiểm tra</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="#form-tu-van"
              className="btn-primary !text-xs !py-1.5 !px-3 !min-h-[34px]"
            >
              Kiểm tra
            </a>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] ${
                scrolled 
                  ? 'text-[#0F172A] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-[#0F172A] border-b border-[#E2E8F0] dark:border-[#1E293B] px-4 pt-2 pb-5 space-y-3 animate-in fade-in slide-in-from-top-1 duration-150 shadow-md">
          <div className="flex flex-col space-y-1 pt-1">
            
            {/* Links before FAQ on Mobile */}
            {navLinksBeforeFAQ.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200 hover:text-[#D71920] dark:hover:text-[#D71920] py-2 border-b border-gray-100 dark:border-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Accordion for Hệ thống web (Between Bảng giá & FAQ) */}
            <div className="border-b border-gray-100 dark:border-slate-800 pb-1">
              <button
                type="button"
                onClick={() => setMobileDropdownOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200 hover:text-[#D71920] py-2"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                  <span>Hệ thống web</span>
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileDropdownOpen ? 'rotate-180 text-[#D71920]' : ''}`} />
              </button>

              {mobileDropdownOpen && (
                <div className="flex flex-col divide-y divide-gray-100 dark:divide-slate-800 bg-slate-50 dark:bg-slate-900/60 rounded-xl my-1 overflow-hidden">
                  {WEB_SYSTEM_LINKS.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                      className="block px-3.5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-[#D71920] hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* FAQ Link on Mobile */}
            {navLinkFAQ && (
              <a
                key={navLinkFAQ.href}
                href={navLinkFAQ.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200 hover:text-[#D71920] dark:hover:text-[#D71920] py-2 border-b border-gray-100 dark:border-slate-800 transition-colors"
              >
                {navLinkFAQ.label}
              </a>
            )}

          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={COMPANY_CONFIG.hotlineTel}
              className="flex items-center justify-center gap-2 text-xs font-medium text-[#0F172A] dark:text-slate-200 py-2 rounded-md bg-[#F1F5F9] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Hotline: {COMPANY_CONFIG.hotline}</span>
            </a>

            <a
              href={COMPANY_CONFIG.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-medium text-[#0F172A] dark:text-slate-200 py-2 rounded-md bg-[#F1F5F9] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Nhắn Zalo tư vấn</span>
            </a>

            <a
              href="#form-tu-van"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center text-xs font-semibold !py-2.5"
            >
              Gửi website cần kiểm tra
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
