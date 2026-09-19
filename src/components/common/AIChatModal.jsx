import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  RotateCcw, 
  Send, 
  Sparkles, 
  CheckCheck, 
  Phone, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  Bot
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/landingData';

// Knowledge Base & Smart Response Engine for DUDI AI Assistant
const QUICK_SUGGESTIONS = [
  { id: 'services', label: '💡 DUDI cung cấp dịch vụ gì?', query: 'DUDI cung cấp dịch vụ gì?' },
  { id: 'ai-solution', label: '🚀 Giải pháp AI & Hoạt động của DUDI', query: 'Bạn có thể giải thích ngắn gọn cách AI hoạt động và giải pháp của DUDI không?' },
  { id: 'pricing', label: '💰 Báo giá chi tiết các gói', query: 'Chi phí nâng cấp website tại DUDI khoảng bao nhiêu?' },
  { id: 'process', label: '⚡ Quy trình làm việc tại DUDI', query: 'Quy trình triển khai dịch vụ tại DUDI như thế nào?' },
  { id: 'contact', label: '📞 Kết nối chuyên viên tư vấn', query: 'Tôi muốn gặp chuyên viên tư vấn trực tiếp' }
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: `Xin chào! 👋\nTôi là trợ lý ảo AI của DUDI.\nTôi có thể hỗ trợ gì cho bạn hôm nay?`,
    time: '10:30',
    type: 'text'
  }
];

export default function AIChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Auto-scroll to bottom when messages update or typing status changes
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      // Focus input on desktop
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [messages, isTyping, isOpen]);

  // Click outside and Escape key handler to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      // Ignore clicks on the chat toggle button itself so toggle behavior works cleanly
      const isToggleBtn = event.target.closest('[data-chat-toggle="true"]');
      if (isToggleBtn) return;

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Use mousedown and touchstart to handle both desktop and mobile
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset conversation handler
  const handleReset = () => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: `Xin chào! 👋\nTôi là trợ lý ảo AI của DUDI.\nTôi có thể hỗ trợ gì cho bạn hôm nay?`,
        time: timeStr,
        type: 'text'
      }
    ]);
  };

  // Generate AI Response based on question semantics
  const generateBotResponse = (userText) => {
    const query = userText.toLowerCase().trim();

    if (query.includes('ai') || query.includes('hoạt động') || query.includes('giải pháp') || query.includes('cách ai')) {
      return {
        text: `DUDI ứng dụng AI & công nghệ thế hệ mới để nâng tầm chuyển đổi số cho doanh nghiệp:\n\n` +
          `• **Trợ lý AI & Chatbot CSKH 24/7**: Phản hồi tức thì, giải đáp khách hàng tự động & thu thập lead chuẩn xác.\n` +
          `• **Tối ưu Trải nghiệm (UI/UX)**: Phân tích hành vi người dùng, cá nhân hóa giao diện và hành trình khách hàng.\n` +
          `• **Tối ưu Hiệu năng & Core Web Vitals**: Tăng tốc độ load trang dưới 1.5s, 95+ Google PageSpeed.\n` +
          `• **Nền tảng Web/App Hiện đại**: Sử dụng kiến trúc React, Next.js, Cloudflare tối đa bảo mật và mở rộng không giới hạn.`,
        actionType: 'consult'
      };
    }

    if (query.includes('dịch vụ') || query.includes('cung cấp') || query.includes('làm gì') || query.includes('sản phẩm')) {
      return {
        text: `DUDI chuyên sâu các dịch vụ giải pháp công nghệ website & ứng dụng cao cấp:\n\n` +
          `1. **Nâng cấp & Redesign Website**: Đổi mới toàn diện diện mạo chuẩn Quiet Luxury, tối ưu chuyển đổi.\n` +
          `2. **Tối ưu Tốc độ & Chuẩn SEO**: Khắc phục website chậm, tối ưu 100% Core Web Vitals.\n` +
          `3. **Thiết kế Web App & Hệ thống quản trị**: E-commerce, Booking, CRM, Portal doanh nghiệp.\n` +
          `4. **Bảo trì & Vận hành 24/7**: Cam kết SLA 99.9% uptime, sao lưu và bảo mật liên tục.`,
        actionType: 'services'
      };
    }

    if (query.includes('giá') || query.includes('chi phí') || query.includes('báo giá') || query.includes('bao nhiêu') || query.includes('gói')) {
      return {
        text: `DUDI cung cấp các gói triển khai minh bạch và tối ưu chi phí:\n\n` +
          `• **Gói Sơ cấp (2.000.000đ)**: Khảo sát chuyên sâu, khắc phục lỗi tức thì, tăng tốc độ website.\n` +
          `• **Gói Tiêu chuẩn**: Redesign giao diện hiện đại, chuẩn Mobile-first & SEO kỹ thuật.\n` +
          `• **Gói Doanh nghiệp (Enterprise)**: Thiết kế và lập trình may đo theo yêu cầu đặc thù, tích hợp hệ thống backend/AI.\n\n` +
          `💡 Bạn có thể để lại thông tin để nhận bảng phân tích và báo giá chi tiết nhé!`,
        actionType: 'pricing'
      };
    }

    if (query.includes('quy trình') || query.includes('bước') || query.includes('thời gian') || query.includes('triển khai')) {
      return {
        text: `Quy trình 4 bước chuẩn Agile tại DUDI giúp dự án hoàn thành nhanh chóng và chính xác:\n\n` +
          `1. **Khảo sát & Chẩn đoán**: Đo lường hiện trạng, phân tích vấn đề và đề xuất giải pháp.\n` +
          `2. **Thiết kế Wireframe & UI/UX**: Xây dựng giao diện trực quan, tương tác thử nghiệm.\n` +
          `3. **Lập trình & Tối ưu hiệu năng**: Code sạch, chuẩn tốc độ cao và bảo mật nhiều lớp.\n` +
          `4. **Kiểm thử & Bàn giao 24/7**: Bàn giao trọn gói source code kèm bảo hành chuyên nghiệp.`,
        actionType: 'process'
      };
    }

    if (query.includes('liên hệ') || query.includes('tư vấn') || query.includes('số điện thoại') || query.includes('gặp') || query.includes('hotline') || query.includes('zalo')) {
      return {
        text: `Đội ngũ DUDI luôn sẵn sàng lắng nghe và tư vấn miễn phí cho bạn:\n\n` +
          `📞 Hotline: **${COMPANY_CONFIG.hotline}**\n` +
          `💬 Zalo Official: Nhấn nút bên dưới để trao đổi trực tiếp\n` +
          `🏢 Địa chỉ: ${COMPANY_CONFIG.address}\n\n` +
          `Chuyên viên kỹ thuật sẽ phản hồi ngay lập tức trong vòng 15 phút!`,
        actionType: 'contact'
      };
    }

    // Default intelligent fallback
    return {
      text: `Cảm ơn bạn đã quan tâm! DUDI có thể hỗ trợ bạn tư vấn nâng cấp website, tối ưu tốc độ, thiết kế Web/App tùy chỉnh hoặc tích hợp AI.\n\n` +
        `Bạn muốn tìm hiểu thêm về **Dịch vụ**, **Báo giá** hay cần **Gặp chuyên viên tư vấn** trực tiếp?`,
      actionType: 'general'
    };
  };

  // Handle sending a message
  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: timeStr,
      type: 'text'
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const botReply = generateBotResponse(text);
      const botTime = new Date();
      const botTimeStr = `${String(botTime.getHours()).padStart(2, '0')}:${String(botTime.getMinutes()).padStart(2, '0')}`;

      const newBotMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply.text,
        time: botTimeStr,
        actionType: botReply.actionType
      };

      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 sm:inset-auto sm:bottom-6 md:bottom-7 sm:right-22 md:right-24 z-50 flex items-end sm:items-auto justify-center sm:justify-end p-2 sm:p-0 pointer-events-auto animate-in fade-in zoom-in-95 duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Cửa sổ trò chuyện với Trợ lý AI DUDI"
    >
      {/* Backdrop for mobile */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs sm:hidden -z-10" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Chatbox Window */}
      <div 
        ref={modalRef}
        className="w-full sm:w-[385px] md:w-[410px] h-[510px] sm:h-[540px] max-h-[calc(100dvh-4.5rem)] bg-white dark:bg-[#0F1422] rounded-3xl sm:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden text-[#0F172A] dark:text-[#F8FAFC] transition-all"
      >
        
        {/* 1. Header */}
        <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-white/90 dark:bg-[#0F1422]/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            {/* Robot Mascot Avatar */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-blue-50 to-indigo-100 dark:from-indigo-950 dark:to-slate-800 p-1 flex items-center justify-center border border-indigo-100 dark:border-indigo-900/50 shadow-xs">
              <img 
                src="/robot-mascot.webp" 
                alt="Trợ lý AI DUDI" 
                className="w-full h-full object-contain drop-shadow-xs"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#0F1422] rounded-full animate-pulse" />
            </div>

            <div>
              <h3 className="font-heading font-bold text-[16px] sm:text-[17px] leading-tight text-[#0F172A] dark:text-white flex items-center gap-1.5">
                <span>Trợ lý AI DUDI</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              </h3>
              <p className="text-[12px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping opacity-75" />
                <span>Luôn sẵn sàng hỗ trợ bạn</span>
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              title="Làm mới cuộc trò chuyện"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Đóng cửa sổ chat"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Messages Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5 space-y-4 scroll-smooth">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} animate-in fade-in slide-in-from-bottom-2 duration-200`}
              >
                <div className={`flex gap-2.5 max-w-[88%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                  {isBot && (
                    <div className="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-slate-800 p-0.5 flex-shrink-0 flex items-center justify-center border border-indigo-100 dark:border-slate-700 mt-1">
                      <img 
                        src="/robot-mascot.webp" 
                        alt="Bot" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div>
                    {/* Message Bubble */}
                    <div
                      className={`px-4 py-3 text-[13.5px] sm:text-[14px] leading-relaxed rounded-2xl ${
                        isBot
                          ? 'bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 rounded-tl-sm border border-slate-200/50 dark:border-slate-700/50 shadow-xs'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-sm shadow-md'
                      }`}
                    >
                      <p className="whitespace-pre-line select-text">
                        {msg.text.split('\n').map((line, i) => {
                          // Render basic markdown-like bold text
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <React.Fragment key={i}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={pIdx} className="font-bold">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                              {i < msg.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          );
                        })}
                      </p>

                      {/* Bot Quick Actions / Shortcuts */}
                      {isBot && msg.actionType && (
                        <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap gap-2">
                          {msg.actionType === 'pricing' && (
                            <button
                              onClick={() => scrollToSection('bang-gia')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold transition-colors"
                            >
                              <span>Xem Bảng giá chi tiết</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {msg.actionType === 'contact' && (
                            <>
                              <a
                                href={COMPANY_CONFIG.zaloUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>Nhắn Zalo</span>
                              </a>
                              <button
                                onClick={() => scrollToSection('form-tu-van')}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                              >
                                <span>Điền Form</span>
                              </button>
                            </>
                          )}
                          {msg.actionType === 'services' && (
                            <button
                              onClick={() => scrollToSection('giai-phap')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold transition-colors"
                            >
                              <span>Khám phá 8 Giải pháp</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {msg.actionType === 'process' && (
                            <button
                              onClick={() => scrollToSection('quy-trinh')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold transition-colors"
                            >
                              <span>Xem sơ đồ Quy trình</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Timestamp & Seen status */}
                    <div className={`text-[11px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1 ${isBot ? 'ml-1' : 'justify-end mr-1'}`}>
                      <span>{msg.time}</span>
                      {!isBot && <CheckCheck className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator Bubble */}
          {isTyping && (
            <div className="flex items-start gap-2.5 animate-in fade-in duration-150">
              <div className="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-slate-800 p-0.5 flex-shrink-0 flex items-center justify-center border border-indigo-100 dark:border-slate-700">
                <img 
                  src="/robot-mascot.webp" 
                  alt="Bot" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-2xl rounded-tl-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 3. Quick Suggestions Chips (Horizontal scroll) */}
        <div className="px-3.5 py-2 bg-slate-50/80 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-nowrap">
            {QUICK_SUGGESTIONS.map((chip) => (
              <button
                key={chip.id}
                onClick={() => handleSendMessage(chip.query)}
                className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-slate-700/80 transition-all flex-shrink-0 shadow-2xs"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Footer Input Container */}
        <div className="p-3 sm:p-4 bg-white dark:bg-[#0F1422] border-t border-slate-100 dark:border-slate-800/80">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 relative bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700/80 px-3.5 py-1.5 focus-within:ring-2 focus-within:ring-indigo-500/30 focus-within:border-indigo-500 transition-all"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập tin nhắn của bạn..."
              className="flex-1 bg-transparent text-[13.5px] sm:text-[14px] text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none py-1.5"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Gửi tin nhắn"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                inputValue.trim()
                  ? 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md hover:scale-105 active:scale-95 cursor-pointer'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
