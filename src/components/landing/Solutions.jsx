import React, { useState, useRef, useEffect } from 'react';
import { 
  FileText, Sparkles, SmartphoneNfc, Zap, SearchCode, MailCheck, CodeXml, ShieldAlert, 
  CheckCircle2, ArrowRight, Layers, Activity, ChevronLeft, ChevronRight, MoveHorizontal
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';
import { preventOrphans } from '../../utils/textUtils';

const iconMap = {
  FileText,
  Sparkles,
  SmartphoneNfc,
  Zap,
  SearchCode,
  MailCheck,
  CodeXml,
  ShieldAlert,
};

const deliverablesMap = {
  content: [
    "Căn chỉnh hierarchy kiểu chữ, font-size và line-height đồng bộ",
    "Bố cục lại banner trang chủ và các khối nội dung giới thiệu",
    "Chuẩn hóa khung hình ảnh sản phẩm/bài viết không bị méo lệch",
  ],
  ui: [
    "Thiết kế lại các section lỗi thời theo phong cách hiện đại, tinh gọn",
    "Nâng cấp bảng màu thương hiệu chuẩn tương phản WCAG AA",
    "Tối ưu các nút bấm (CTA), hover effect và micro-interactions",
  ],
  mobile: [
    "Xử lý dứt điểm lỗi tràn ngang (horizontal scroll) trên điện thoại",
    "Tối ưu kích thước cảm ứng cho menu, dropdown và nút bấm >= 44px",
    "Kiểm tra tương thích chuẩn xác trên cả iOS Safari và Android Chrome",
  ],
  speed: [
    "Nén và chuyển đổi định dạng ảnh sang WebP/AVIF tối ưu",
    "Dọn dẹp mã CSS/JavaScript thừa và trì hoãn tải script bên thứ ba",
    "Cải thiện các chỉ số Core Web Vitals (LCP, FID, CLS)",
  ],
  seo: [
    "Khắc phục phân cấp thẻ Heading (H1 duy nhất, H2, H3 chuẩn)",
    "Bổ sung và tối ưu thẻ meta title, meta description, Open Graph",
    "Tạo mới hoặc kiểm tra sitemap.xml và file robots.txt chuẩn Google",
  ],
  form: [
    "Sửa lỗi không bấm gửi được hoặc submit xoay vòng vô tận",
    "Tích hợp gửi dữ liệu tự động về Email / Google Sheets / Telegram",
    "Cài đặt honeypot / reCAPTCHA ngăn chặn 99% tin nhắn rác (spam)",
  ],
  feature: [
    "Xử lý xung đột mã nguồn JavaScript, thư viện hoặc plugin",
    "Sửa lỗi bộ lọc danh mục sản phẩm, thanh tìm kiếm hoặc phân trang",
    "Tối ưu lại logic hiển thị giỏ hàng, popup hoặc modal",
  ],
  audit: [
    "Rà soát toàn bộ liên kết gãy 404 và lỗi tài nguyên không tải được",
    "Kiểm tra và xóa sạch cảnh báo đỏ trong Developer Console",
    "Rà soát cấu hình chứng chỉ bảo mật SSL/HTTPS cơ bản",
  ],
};

export default function Solutions() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });
  const [activeNode, setActiveNode] = useState('ui');
  const scrollRef = useRef(null);
  
  // Drag and Auto-scroll state
  const isDraggingRef = useRef(false);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const isPausedRef = useRef(false);
  const animationFrameRef = useRef(null);

  const currentItem = SOLUTIONS_DATA.items.find((i) => i.id === activeNode) || SOLUTIONS_DATA.items[1];
  const CurrentIcon = iconMap[currentItem.icon] || Sparkles;

  // Quadruple items to create truly seamless infinite loop
  const displayItems = [
    ...SOLUTIONS_DATA.items, 
    ...SOLUTIONS_DATA.items, 
    ...SOLUTIONS_DATA.items, 
    ...SOLUTIONS_DATA.items
  ];

  // Continuous Auto-scroll loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.75; // Smooth cinematic scroll speed

    const step = () => {
      if (!isDraggingRef.current && !isPausedRef.current && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Loop infinitely when reaching halfway
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft -= halfWidth;
        }
      }
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Mouse Drag Event Handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    setIsDraggingState(true);
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDraggingState(false);
  };

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setIsDraggingState(false);
    isPausedRef.current = false;
  };

  // Touch Drag Handlers (Mobile)
  const handleTouchStart = (e) => {
    isPausedRef.current = true;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const x = e.touches[0].pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setTimeout(() => {
      isPausedRef.current = false;
    }, 1500);
  };

  const handleItemClick = (itemId) => {
    if (!hasDraggedRef.current) {
      setActiveNode(itemId);
    }
  };

  const scrollByAmount = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="solutions" 
      className="py-5 sm:py-7 lg:py-8 bg-transparent text-[#0F172A] dark:text-[#F8FAFC] relative overflow-hidden border-b border-[#E2E8F0]/80 dark:border-[#1E293B] transition-colors duration-300 flex flex-col justify-center"
      aria-label="Giải pháp nâng cấp website DUDI"
    >
      {/* Localized Red Ambient Mesh Flow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-[#D71920]/8 via-[#F43F5E]/5 to-transparent dark:from-[#D71920]/6 dark:via-transparent rounded-full blur-3xl pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* Subtle Circuit Network Vector Background */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12] dark:opacity-[0.08] stroke-[#0F172A] dark:stroke-[#94A3B8] fill-none z-0" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M 80 180 H 380 V 380 H 780" strokeWidth="1" strokeDasharray="4 6" />
        <path d="M 850 120 V 320 H 550 V 520" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="380" cy="380" r="2.5" fill="#D71920" />
        <circle cx="550" cy="320" r="2.5" fill="#D71920" />
      </svg>

      <div className="max-w-[1160px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-3.5 sm:mb-4.5 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F1F5F9] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D71920] uppercase mb-1.5 shadow-2xs">
            <span>02 / BẢN ĐỒ CHẨN ĐOÁN</span>
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-[1.65rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight mb-1">
            {SOLUTIONS_DATA.heading}
          </h2>
          <p className="text-xs sm:text-[13px] text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            Hệ thống 8 điểm kiểm tra kỹ thuật giúp rà soát toàn diện và cải thiện chính xác từng hạng mục.
          </p>
        </div>

        {/* TOP: Continuous Auto-Running & Draggable Infinite Card Track */}
        <div className="mb-3.5 sm:mb-4.5 relative">
          {/* Draggable Row Container with Side Mask */}
          <div className="relative overflow-hidden rounded-xl">
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1.5 px-1 select-none ${
                isDraggingState ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {displayItems.map((item, idx) => {
                const IconComp = iconMap[item.icon] || FileText;
                const isActive = item.id === activeNode;

                return (
                  <button
                    key={`${item.id}-${idx}`}
                    type="button"
                    onClick={() => handleItemClick(item.id)}
                    className={`shrink-0 px-3.5 py-2 rounded-xl transition-all duration-200 ease-out flex items-center gap-2.5 border shadow-2xs cursor-pointer select-none group ${
                      isActive
                        ? 'bg-white dark:bg-[#1E293B] border-[#D71920] dark:border-[#D71920] shadow-sm text-[#D71920] ring-2 ring-[#D71920]/20'
                        : 'bg-[#F8FAFC] dark:bg-[#111827] border-[#E2E8F0] dark:border-[#1F2937] hover:bg-white dark:hover:bg-[#1E293B] hover:border-gray-300 dark:hover:border-slate-700 text-[#64748B] dark:text-slate-400'
                    }`}
                  >
                    {/* Compact Icon Badge */}
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-red-50 dark:bg-red-950/40 text-[#D71920]' 
                        : 'bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[#64748B] dark:text-slate-400 group-hover:text-[#0F172A] dark:group-hover:text-white'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>

                    {/* Name */}
                    <span className={`text-xs sm:text-[13px] font-semibold tracking-tight transition-colors whitespace-nowrap ${
                      isActive ? 'text-[#D71920] font-bold' : 'text-[#0F172A] dark:text-slate-200 group-hover:text-[#D71920]'
                    }`}>
                      {item.name}
                    </span>

                    {/* Active Indicator Dot */}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM: Full Width Technical Inspector Card */}
        <div 
          className={`bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] rounded-2xl p-4 sm:p-5 lg:p-5 relative shadow-xs transition-all duration-500 ease-out overflow-hidden ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Subtle Ambient Background Mesh */}
          <div className="absolute -right-16 -top-16 w-56 h-56 bg-[#D71920]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Top Inspector Status Bar */}
          <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#E2E8F0] dark:border-[#1E293B] mb-3.5 sm:mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D71920]" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono font-medium text-[#64748B] dark:text-slate-400 pl-1">
                radar://diagnostic/{activeNode}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 text-[10px] sm:text-[11px] font-mono text-[#D71920] font-bold uppercase tracking-wider shadow-2xs">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Tiêu chuẩn bàn giao</span>
            </div>
          </div>

          {/* Main 2-Column Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
            
            {/* Left Column: Category Identity & Quick Action */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 text-[#D71920] flex items-center justify-center shadow-2xs shrink-0">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#D71920] uppercase tracking-wider block">
                      Hạng mục #{activeNode.toUpperCase()}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] dark:text-white tracking-tight">
                      {currentItem.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-[#64748B] dark:text-slate-300 leading-relaxed">
                  {currentItem.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-1.5 pt-0.5">
                <a
                  href="#form-tu-van"
                  className="w-full btn-primary !text-xs sm:!text-[13px] !font-semibold !py-2 flex items-center justify-center gap-2 group shadow-sm cursor-pointer"
                >
                  <span>Kiểm tra hạng mục {currentItem.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center justify-between text-xs text-[#64748B] dark:text-slate-400 pt-0.5">
                  <span className="font-mono text-[10.5px]">Báo cáo sau 24h</span>
                  <a 
                    href="#pricing" 
                    className="font-bold text-[#D71920] hover:text-[#8F0F16] dark:hover:text-[#EF4444] transition-colors flex items-center gap-1 group text-xs"
                  >
                    <span>Xem bảng giá</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Unified Deliverables Checklist Card */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-1.5">
                <p className="text-[10.5px] font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 font-bold">
                  DUDI trực tiếp tối ưu & bàn giao:
                </p>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] rounded-xl overflow-hidden shadow-2xs divide-y divide-[#E2E8F0] dark:divide-[#1F2937]">
                {(deliverablesMap[activeNode] || []).map((deliverable, dIdx) => (
                  <div 
                    key={dIdx}
                    className="py-2.5 px-3.5 sm:py-2.5 sm:px-4 flex items-start gap-2.5 hover:bg-white dark:hover:bg-[#1E293B]/60 transition-colors group"
                  >
                    <div className="w-4 h-4 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/50 text-[#D71920] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-[13px] text-[#0F172A] dark:text-slate-200 leading-snug font-medium group-hover:text-[#D71920] dark:group-hover:text-white transition-colors">
                      {preventOrphans(deliverable, 3)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Security Assurance Footer */}
          <div className="mt-3.5 pt-2.5 sm:mt-4 sm:pt-3 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-between text-xs text-[#64748B] dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
              <span className="text-[10.5px] sm:text-xs">Sao lưu mã nguồn trước khi can thiệp · Cam kết an toàn, không downtime.</span>
            </div>
            <span className="hidden sm:inline-block font-mono text-[9.5px] text-[#94A3B8]">SLA: 100% Secure</span>
          </div>

        </div>

      </div>
    </section>
  );
}
