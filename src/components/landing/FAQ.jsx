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
      className="py-10 sm:py-12 lg:py-14 bg-white/40 dark:bg-white/[0.02] text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#E2E8F0]/80 dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300"
      aria-label="Câu hỏi thường gặp"
    >
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

            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Giải đáp minh bạch mọi thắc mắc về phạm vi, chi phí và quy trình trước khi bạn gửi website.
            </p>

            <div className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] shadow-2xs space-y-1.5">
              <p className="text-[10px] font-mono uppercase text-[#64748B] dark:text-slate-400 font-bold">Cần trao đổi riêng?</p>
              <p className="text-xs text-[#0F172A] dark:text-slate-200 leading-relaxed">
                Đội ngũ kỹ thuật DUDI sẵn sàng xem qua website và phản hồi trực tiếp qua Zalo.
              </p>
              <a
                href={COMPANY_CONFIG.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D71920] hover:text-[#8F0F16]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Nhắn tin Zalo trực tiếp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Minimal White / Dark Slate Editorial Accordion */}
          <div
            className={`lg:col-span-8 divide-y divide-[#E2E8F0] dark:divide-[#1F2937] border-t border-b border-[#E2E8F0] dark:border-[#1F2937] bg-white dark:bg-[#111827] rounded-xl px-4 sm:px-5 shadow-2xs transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '150ms' }}
          >
            {FAQ_LIST.map((item, index) => {
              const isOpen = openIndex === index;
              const formattedNum = String(index + 1).padStart(2, '0');

              return (
                <div key={item.id} className="py-3 sm:py-3.5">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-start justify-between gap-3 group focus-visible:outline-none focus-visible:text-[#D71920] cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-[#D71920] mt-0.5">
                        {formattedNum}
                      </span>
                      <h3 className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${isOpen ? 'text-[#D71920]' : 'text-[#111111] dark:text-white group-hover:text-[#D71920]'
                        }`}>
                        {item.question}
                      </h3>
                    </div>

                    <div className={`p-1 rounded-full border transition-all shrink-0 ${isOpen
                        ? 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/50 text-[#D71920]'
                        : 'border-gray-200 dark:border-[#334155] text-[#5F6368] dark:text-gray-400 group-hover:text-[#111111] dark:group-hover:text-white group-hover:border-gray-400'
                      }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {/* Accessible Answer Body with Smooth 300ms Transition */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden pl-6 pr-2">
                      <p className="text-xs text-[#5F6368] dark:text-slate-300 leading-relaxed pb-1">
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
