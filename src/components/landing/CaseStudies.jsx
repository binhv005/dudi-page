import React, { useState } from 'react';
import { Globe, ArrowUpRight, ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const projects = [
  {
    id: "case-odyssey-hagiang",
    indexLabel: "DỰ ÁN 01",
    shortName: "Odyssey Ha Giang Loop",
    category: "Du lịch & Tour quốc tế",
    title: "Website Odyssey Ha Giang Loop",
    desc: "Nền tảng đặt tour du lịch cao cấp khám phá Hà Giang, tối ưu trải nghiệm và tỷ lệ chuyển đổi cho khách quốc tế.",
    price: "11,5 triệu",
    priceUnit: "trọn gói",
    priceBadge: "11,5tr",
    statusText: "Đang hoạt động",
    domain: "odysseyhagiangloop.com",
    url: "https://www.odysseyhagiangloop.com/",
    image: "/odysseyhagiang.webp",
    bgImage: "/case-hagiang-bg.webp",
    scopeGrid: [
      "Giao diện độc quyền & chuẩn Mobile",
      "Lịch trình tour & Booking đa bước",
      "Kết nối WhatsApp & Email tự động",
      "Tối ưu SEO & Tốc độ tải toàn cầu",
    ],
  },
  {
    id: "case-caonguyenxanh",
    indexLabel: "DỰ ÁN 02",
    shortName: "Cao Nguyên Xanh",
    category: "Sản xuất & Bao bì công nghiệp",
    title: "Website Bao Bì Cao Nguyên Xanh",
    desc: "Nền tảng giới thiệu sản phẩm in ấn & bao bì xuất khẩu, tối ưu danh mục mẫu mã và biểu mẫu nhận báo giá tự động.",
    price: "3,5 triệu",
    priceUnit: "trọn gói",
    priceBadge: "3,5tr",
    statusText: "Đang hoạt động",
    domain: "caonguyenxanh.com.vn",
    url: "https://caonguyenxanh.com.vn/",
    image: "/caonguyenxanh.webp",
    bgImage: "/case-caonguyenxanh-bg.webp",
    scopeGrid: [
      "Tái cấu trúc UI danh mục bao bì & in ấn",
      "Chuẩn hóa Mobile & xử lý dứt điểm tràn khung",
      "Form gửi yêu cầu báo giá tự động",
      "Tối ưu asset hình ảnh & tăng tốc tải trang",
    ],
  },
];

export default function CaseStudies() {
  const [sectionRef, inView] = useInView({ threshold: 0.12 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="py-8 sm:py-10 lg:py-12 text-white border-y border-[#D71920]/40 relative overflow-hidden transition-colors duration-300 bg-[#5C060B]"
      aria-label="Các dự án DUDI đã thực hiện"
    >
      {/* Outer Dynamic Project Background Images with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {projects.map((proj, idx) => (
          <img
            key={proj.id}
            src={proj.bgImage}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${
              idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            loading="lazy"
          />
        ))}
      </div>

      {/* Deep Red Cinematic Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#66070D]/90 via-[#800C12]/85 to-[#420407]/92 backdrop-blur-[2px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Ambient Moving Glow Orbs */}
      <div 
        className="absolute -top-10 left-1/3 w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl pointer-events-none z-0" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-10 right-1/4 w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl pointer-events-none z-0" 
        aria-hidden="true"
      />

      <div className="app-container relative z-10">

        {/* Section Header with Carousel Controllers */}
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 sm:mb-6 xl:mb-8 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div>
            <h2 className="text-[clamp(1.35rem,2vw+0.6rem,2.2rem)] font-extrabold text-white tracking-tight leading-tight">
              Một số dự án DUDI đã thực hiện
            </h2>
          </div>

          {/* Top Right Carousel Controller */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Dự án trước"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md backdrop-blur-xs"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Active Project Pill */}
            <div className="flex items-center gap-2 bg-white text-[#0F172A] px-3.5 py-1.5 rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#D71920]" />
              <span className="text-xs sm:text-[13px] font-bold truncate max-w-[190px] sm:max-w-[260px]">
                {currentProject.indexLabel}: {currentProject.shortName}
              </span>
              <span className="bg-red-50 text-[#D71920] text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border border-red-100">
                {currentProject.priceBadge}
              </span>
            </div>

            <button
              onClick={handleNext}
              aria-label="Dự án tiếp theo"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md backdrop-blur-xs"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Main Project Showcase Card */}
        <div 
          key={currentProject.id}
          className={`bg-[#800C12]/90 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden transition-all duration-500 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Subtle Glow inside the card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            
            {/* Left Column: Image Preview with Overlay Bar */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black group/card aspect-[16/10] sm:aspect-[16/10.5]">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-top group-hover/card:scale-102 transition-transform duration-500 select-none"
                />

                {/* Bottom Bar overlay in mockup style */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/85 backdrop-blur-md border border-white/15 rounded-xl px-3 sm:px-3.5 py-2 flex items-center justify-between text-xs z-10 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-white text-[11px] sm:text-xs font-medium">
                      {currentProject.domain}
                    </span>
                  </div>
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#D71920] hover:bg-[#b51218] text-white px-2.5 sm:px-3 py-1 rounded-lg font-bold text-[11px] sm:text-xs inline-flex items-center gap-1 transition-colors shadow-xs"
                  >
                    <span>Xem web</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Project Details */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
              
              {/* Top Tag & Price */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="bg-black/40 border border-white/15 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-md uppercase">
                    {currentProject.indexLabel}
                  </span>
                  <span className="text-xs sm:text-[13px] text-white/90 font-medium">
                    {currentProject.category}
                  </span>
                </div>

                <div className="bg-black/40 border border-white/15 px-3 py-1 rounded-lg text-xs sm:text-[13px] font-bold text-white flex items-center gap-1">
                  <span className="text-amber-300 font-extrabold">{currentProject.price}</span>
                  <span className="text-white/70 font-normal">/ {currentProject.priceUnit}</span>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-black text-white tracking-tight">
                {currentProject.title}
              </h3>

              {/* Short description */}
              <p className="text-xs sm:text-[13px] text-red-100/90 leading-relaxed">
                {currentProject.desc}
              </p>

              {/* 2x2 Scope Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {currentProject.scopeGrid.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#60090E]/85 border border-white/10 rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5 shadow-xs"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-[12.5px] text-white/95 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Row: Status & Live Domain Link Button */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 whitespace-nowrap shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="whitespace-nowrap">{currentProject.statusText}</span>
                </div>

                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 text-[#0F172A] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-transform hover:scale-102 active:scale-98"
                >
                  <span>{currentProject.domain}</span>
                  <ArrowRight className="w-4 h-4 text-[#D71920]" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="mt-5 sm:mt-6 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-white/90 shrink-0" />
            <span>Khám phá thêm các dự án tiêu biểu tại hệ sinh thái DUDI.</span>
          </div>
          <a
            href="https://www.dudisoftware.com/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-50 text-[#991B1B] hover:text-[#7F1D1D] px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95 shrink-0 cursor-pointer"
          >
            <span>Xem tất cả dự án</span>
            <ArrowUpRight className="w-4 h-4 text-[#D71920] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
