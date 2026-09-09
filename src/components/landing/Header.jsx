import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare, Sun, Moon } from 'lucide-react';
import { COMPANY_CONFIG, NAV_LINKS } from '../../data/landingData';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'py-2.5 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_1px_8px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
          : 'py-3.5 bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          
          {/* Brand Logo (visual height ~28-32px) */}
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
          <nav className="hidden lg:flex items-center gap-7" aria-label="Điều hướng chính">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:text-[#D71920] ${
                  scrolled 
                    ? 'text-[#64748B] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white' 
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Hotline/Zalo + Theme Toggle + Compact CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-md transition-all cursor-pointer border ${
                scrolled
                  ? 'text-[#0F172A] dark:text-slate-300 bg-[#F1F5F9] dark:bg-[#1E293B] border-[#E2E8F0] dark:border-[#334155] hover:bg-slate-200 dark:hover:bg-slate-700'
                  : 'text-white bg-black/30 hover:bg-black/50 border-white/20 backdrop-blur-sm'
              }`}
              title={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
              aria-label="Đổi giao diện sáng/tối"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-[#3B82F6] transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

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
            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-1.5 rounded-md transition-all cursor-pointer border ${
                scrolled
                  ? 'text-[#0F172A] dark:text-slate-300 bg-[#F1F5F9] dark:bg-[#1E293B] border-[#E2E8F0] dark:border-[#334155]'
                  : 'text-white bg-black/30 border-white/20'
              }`}
              aria-label="Đổi giao diện sáng/tối"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#3B82F6]" />
              )}
            </button>

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
          <div className="flex flex-col space-y-2 pt-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200 hover:text-[#D71920] dark:hover:text-[#D71920] py-1.5 border-b border-gray-100 dark:border-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
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
