import React, { useState } from 'react';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/landingData';
import { useInView } from '../../hooks/useInView';

const FAQ_LIST = [
  {
    id: "faq-1",
    question: "Giá website được tính như thế nào?",
    answer: "Giá được tính cố định theo gói công việc cụ thể đã chốt (500k, 2tr, 5tr hoặc báo giá riêng từ 10tr cho làm lại toàn bộ). DUDI không thu phí duy trì hàng tháng và luôn báo giá trước khi thực hiện.",
  },
  {
    id: "faq-2",
    question: "Thời gian triển khai bao lâu?",
    answer: "Thời gian phụ thuộc theo gói: Gói Cơ bản từ 1–2 ngày; Gói Tiêu chuẩn từ 3–5 ngày; Gói Nâng cao từ 5–7 ngày làm việc. Thời gian cụ thể được ghi rõ trong văn bản chốt phạm vi ban đầu.",
  },
  {
    id: "faq-3",
    question: "Tôi cần cung cấp những gì?",
    answer: "Bạn chỉ cần cung cấp URL website và mô tả các vấn đề cần xử lý. Khi triển khai, bạn cấp thêm quyền truy cập trang quản trị (Admin) hoặc hosting/FTP liên quan đến phần cần sửa.",
  },
  {
    id: "faq-4",
    question: "DUDI có hỗ trợ SEO không?",
    answer: "Có, trong phạm vi SEO kỹ thuật cơ bản: sửa lỗi thẻ heading, thẻ meta title/description, sitemap.xml, robots.txt và tối ưu tốc độ tải trang. DUDI không cam kết các mục tiêu marketing tuyệt đối.",
  },
  {
    id: "faq-5",
    question: "Có bảo hành không?",
    answer: "Có. DUDI bảo hành kỹ thuật 30 ngày cho tất cả các lỗi phát sinh trực tiếp thuộc phạm vi hạng mục đã triển khai và bàn giao.",
  },
  {
    id: "faq-6",
    question: "Thanh toán như thế nào?",
    answer: "Quý khách tạm ứng 50% sau khi chốt phạm vi công việc và thanh toán 50% còn lại sau khi nghiệm thu hoàn tất. DUDI hỗ trợ xuất hóa đơn VAT điện tử nếu doanh nghiệp yêu cầu.",
  },
  {
    id: "faq-7",
    question: "Có cần bàn giao tài khoản không?",
    answer: "Bạn chỉ cần cấp tài khoản tạm thời để DUDI truy cập xử lý mã nguồn. Sau khi bàn giao và nghiệm thu xong, bạn có thể đổi lại mật khẩu để đảm bảo an toàn tuyệt đối.",
  },
  {
    id: "faq-8",
    question: "Website có thể nâng cấp từng phần không?",
    answer: "Hoàn toàn được. DUDI chuyên xử lý đúng phần cần thiết (ví dụ: chỉ sửa form, chỉ làm lại trang chủ, hoặc chỉ tối ưu mobile) mà không ép khách hàng làm lại toàn bộ.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC]/75 dark:bg-[#0D0F17]/80 backdrop-blur-xs text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Câu hỏi thường gặp"
    >
      {/* Tech Geometric Background Mesh (Watermark) */}
      <div
        className="absolute -right-20 -bottom-16 w-[480px] sm:w-[600px] h-[500px] sm:h-[620px] opacity-[0.06] dark:opacity-[0.11] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/tech-geometric-bg.webp"
          alt=""
          className="w-full h-full object-contain rotate-12"
          loading="lazy"
        />
      </div>

      {/* Localized Red Ambient Mesh Flow Aura (Active in both Light & Dark mode) */}
      <div
        className="absolute top-1/3 -right-20 w-[600px] h-[500px] bg-gradient-to-l from-[#D71920]/10 via-[#EF4444]/6 to-transparent dark:from-[#D71920]/14 dark:via-[#EF4444]/8 dark:to-transparent rounded-full blur-[130px] pointer-events-none z-0 animate-tech-float-3"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* Left Column: Sticky Editorial FAQ Intro */}
          <div
            className={`lg:col-span-4 lg:sticky lg:top-24 space-y-3.5 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[11px] font-mono tracking-widest text-[#D71920] uppercase shadow-2xs">
              <span>07 / GIẢI ĐÁP THẮC MẮC</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-[1.85rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2]">
              Câu hỏi thường gặp
            </h2>

            {/* Mascot FAQ Assistant & Direct Contact */}
            <div className="relative pt-1 flex flex-col items-center sm:items-start group">
              <div className="relative w-full max-w-[260px] sm:max-w-[280px] mx-auto lg:mx-0 flex flex-col items-center">
                <img
                  src="/faq-mascot.webp"
                  alt="DUDI FAQ Support Mascot"
                  className="w-full max-h-[280px] sm:max-h-[320px] object-contain select-none pointer-events-none drop-shadow-xl hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                <a
                  href={COMPANY_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1E293B] hover:bg-red-50 dark:hover:bg-[#283548] text-[#D71920] dark:text-red-400 border border-[#E2E8F0] dark:border-[#334155] shadow-xs text-xs font-bold transition-all duration-200 group-hover:border-[#D71920]/40 group-hover:shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>Cần trao đổi riêng? Chat Zalo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Card Editorial Accordion */}
          <div
            className={`lg:col-span-8 divide-y divide-[#E2E8F0] dark:divide-[#1F2937] border border-[#E2E8F0] dark:border-[#1F2937] bg-white dark:bg-[#111827] rounded-2xl px-5 sm:px-6 shadow-sm transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '150ms' }}
          >
            {FAQ_LIST.map((item, index) => {
              const isOpen = openIndex === index;
              const formattedNum = String(index + 1).padStart(2, '0');

              return (
                <div key={item.id} className="py-3.5 sm:py-4">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-start justify-between gap-3 group focus-visible:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-[#D71920] mt-0.5">
                        {formattedNum}
                      </span>
                      <h3 className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${isOpen ? 'text-[#D71920]' : 'text-[#0F172A] dark:text-white group-hover:text-[#D71920]'
                        }`}>
                        {item.question}
                      </h3>
                    </div>

                    <div className={`p-1 rounded-full border transition-all shrink-0 ${isOpen
                      ? 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/50 text-[#D71920]'
                      : 'border-gray-200 dark:border-[#334155] text-[#64748B] dark:text-gray-400 group-hover:text-[#0F172A] dark:group-hover:text-white group-hover:border-gray-400'
                      }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {/* Accessible Answer Body with Smooth 300ms Transition */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2.5' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden pl-7 pr-2">
                      <p className="text-xs sm:text-[13px] text-[#64748B] dark:text-slate-300 leading-relaxed pb-1">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
