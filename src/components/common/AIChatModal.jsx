import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  RotateCcw, 
  Send, 
  Sparkles, 
  CheckCheck, 
  Phone, 
  MessageSquare, 
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/landingData';

const AI_API_URL = import.meta.env.VITE_AI_API_URL || 'https://dudi-ai.onrender.com/api/chat';

// Quick suggestions for user to click
const QUICK_SUGGESTIONS = [
  { id: 'services', label: '💡 DUDI cung cấp dịch vụ gì?', query: 'DUDI cung cấp dịch vụ gì?' },
  { id: 'ai-solution', label: '🚀 Giải pháp AI & Hoạt động của DUDI', query: 'Bạn có thể giải thích ngắn gọn cách AI hoạt động và giải pháp của DUDI không?' },
  { id: 'pricing', label: '💰 Báo giá chi tiết các gói', query: 'Chi phí nâng cấp website tại DUDI khoảng bao nhiêu?' },
  { id: 'process', label: '⚡ Quy trình làm việc tại DUDI', query: 'Quy trình triển khai dịch vụ tại DUDI như thế nào?' },
  { id: 'contact', label: '📞 Kết nối chuyên viên tư vấn', query: 'Tôi muốn gặp chuyên viên tư vấn trực tiếp' }
];

const BOT_WELCOME_TEXT = `Xin chào! 👋\nTôi là DU - Trợ lý ảo AI của DUDI SOFTWARE.\nTôi có thể hỗ trợ gì cho bạn hôm nay?`;

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: BOT_WELCOME_TEXT,
    time: '10:30',
    type: 'text'
  }
];

/**
 * Format markdown text safely:
 * - Parses **bold text** into <strong>
 * - Parses *italic text* into <em>
 * - Parses bullet lists (- or • or *) into neat bullet rows
 * - Parses numbered lists (1. 2. ...)
 * - Parses line breaks
 */
function FormattedMessageText({ text, isBot }) {
  if (!text) return null;

  const lines = text.split('\n');

  const parseInline = (str) => {
    // Regex for **bold** and *italic*
    const regex = /(\*\*.*?\*\*|\*[^*]+?\*)/g;
    const parts = str.split(regex);

    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
        return (
          <strong 
            key={idx} 
            className={`font-bold ${isBot ? 'text-slate-950 dark:text-white' : 'text-white'}`}
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
        return (
          <em key={idx} className="italic opacity-90">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-1.5 leading-relaxed text-[13.5px] sm:text-[14px]">
      {lines.map((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lIdx} className="h-1.5" />;
        }

        const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ') || (trimmed.startsWith('* ') && !trimmed.startsWith('**'));
        const isNumbered = /^\d+\.\s/.test(trimmed);

        if (isBullet) {
          const bulletContent = trimmed.replace(/^[-•*]\s+/, '');
          return (
            <div key={lIdx} className="flex items-start gap-2 pl-0.5">
              <span className={`select-none mt-1 text-xs font-bold ${isBot ? 'text-indigo-600 dark:text-indigo-400' : 'text-blue-100'}`}>•</span>
              <span className="flex-1">{parseInline(bulletContent)}</span>
            </div>
          );
        }

        if (isNumbered) {
          const numMatch = trimmed.match(/^(\d+)\./);
          const num = numMatch ? numMatch[1] : '•';
          const numberedContent = trimmed.replace(/^\d+\.\s+/, '');
          return (
            <div key={lIdx} className="flex items-start gap-2 pl-0.5">
              <span className={`select-none mt-0.5 text-xs font-bold ${isBot ? 'text-indigo-600 dark:text-indigo-400' : 'text-blue-100'}`}>{num}.</span>
              <span className="flex-1">{parseInline(numberedContent)}</span>
            </div>
          );
        }

        return (
          <div key={lIdx}>
            {parseInline(line)}
          </div>
        );
      })}
    </div>
  );
}

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
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [messages, isTyping, isOpen]);

  // Click outside and Escape key handler to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
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
        text: BOT_WELCOME_TEXT,
        time: timeStr,
        type: 'text'
      }
    ]);
  };

  // Scroll to landing page sections
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  // Handle sending a message to AI Backend
  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

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

    // Prepare history payload for API (role: user/assistant)
    const historyPayload = messages
      .filter((m) => !m.isError)
      .map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text
      }));

    try {
      // 35s timeout to handle Render cold start
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 35000);

      const response = await fetch(AI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: text,
          history: historyPayload
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Máy chủ phản hồi với mã lỗi: ${response.status}`);
      }

      // Read response (supporting both text format and json format)
      let botReplyText = '';
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await response.json();
        botReplyText = data.reply || data.response || data.message || data.text || data.answer || JSON.stringify(data);
      } else {
        botReplyText = await response.text();
      }

      if (!botReplyText || !botReplyText.trim()) {
        botReplyText = 'DUDI đã nhận được thông tin từ bạn. Nếu cần giải đáp nhanh hoặc tư vấn chuyên sâu, quý khách có thể liên hệ trực tiếp hotline để được hỗ trợ tức thì!';
      }

      const botTime = new Date();
      const botTimeStr = `${String(botTime.getHours()).padStart(2, '0')}:${String(botTime.getMinutes()).padStart(2, '0')}`;

      // Smart action detection based on AI reply content
      let actionType = null;
      const lowerReply = botReplyText.toLowerCase();
      if (lowerReply.includes('hotline') || lowerReply.includes('zalo') || lowerReply.includes('liên hệ')) {
        actionType = 'contact';
      } else if (lowerReply.includes('báo giá') || lowerReply.includes('chi phí') || lowerReply.includes('gói')) {
        actionType = 'pricing';
      } else if (lowerReply.includes('dịch vụ') || lowerReply.includes('giải pháp')) {
        actionType = 'services';
      } else if (lowerReply.includes('quy trình')) {
        actionType = 'process';
      }

      const newBotMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReplyText.trim(),
        time: botTimeStr,
        actionType: actionType
      };

      setMessages((prev) => [...prev, newBotMsg]);
    } catch (error) {
      console.error('Lỗi khi gọi API AI Chatbot:', error);
      const botTime = new Date();
      const botTimeStr = `${String(botTime.getHours()).padStart(2, '0')}:${String(botTime.getMinutes()).padStart(2, '0')}`;
      
      const isTimeout = error.name === 'AbortError';
      const errorMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: isTimeout
          ? '⚠️ Kết nối tới máy chủ AI đang bị trễ do server đang khởi động. Bạn vui lòng thử lại sau giây lát hoặc liên hệ trực tiếp đội ngũ DUDI để được hỗ trợ ngay!'
          : '⚠️ Không thể kết nối tới máy chủ AI DUDI. Bạn vui lòng kiểm tra kết nối mạng hoặc liên hệ trực tiếp chuyên viên tư vấn qua Hotline/Zalo.',
        time: botTimeStr,
        actionType: 'contact',
        isError: true,
        retryText: text
      };

      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 sm:inset-auto sm:bottom-6 md:bottom-7 sm:right-22 md:right-24 z-50 flex items-end sm:items-auto justify-center sm:justify-end p-2 sm:p-0 pointer-events-auto animate-in fade-in zoom-in-95 duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Cửa sổ trò chuyện với Trợ lý AI DU - DUDI SOFTWARE"
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
        className="w-full sm:w-[390px] md:w-[420px] h-[520px] sm:h-[550px] max-h-[calc(100dvh-4.5rem)] bg-white dark:bg-[#0F1422] rounded-3xl sm:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden text-[#0F172A] dark:text-[#F8FAFC] transition-all"
      >
        
        {/* 1. Header */}
        <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-white/90 dark:bg-[#0F1422]/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            {/* Robot Mascot Avatar */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-blue-50 to-indigo-100 dark:from-indigo-950 dark:to-slate-800 p-1 flex items-center justify-center border border-indigo-100 dark:border-indigo-900/50 shadow-xs">
              <img 
                src="/robot-mascot.webp" 
                alt="Trợ lý AI DU" 
                className="w-full h-full object-contain drop-shadow-xs"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#0F1422] rounded-full animate-pulse" />
            </div>

            <div>
              <h3 className="font-heading font-bold text-[16px] sm:text-[17px] leading-tight text-[#0F172A] dark:text-white flex items-center gap-1.5">
                <span>DU - Trợ lý AI DUDI</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              </h3>
              <p className="text-[12px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping opacity-75" />
                <span>Trực tuyến 24/7</span>
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              title="Làm mới cuộc trò chuyện"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Đóng cửa sổ chat"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
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
                <div className={`flex gap-2.5 max-w-[90%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                  {isBot && (
                    <div className="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-slate-800 p-0.5 flex-shrink-0 flex items-center justify-center border border-indigo-100 dark:border-slate-700 mt-1">
                      <img 
                        src="/robot-mascot.webp" 
                        alt="DU Bot" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div>
                    {/* Message Bubble */}
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        isBot
                          ? msg.isError
                            ? 'bg-amber-50/80 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 rounded-tl-sm border border-amber-200 dark:border-amber-800/60 shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 rounded-tl-sm border border-slate-200/60 dark:border-slate-700/60 shadow-xs'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 !text-white rounded-tr-sm shadow-md font-medium'
                      }`}
                    >
                      {/* Formatted Text with Markdown bold parsing */}
                      <FormattedMessageText text={msg.text} isBot={isBot} />

                      {/* Retry Button if Message Encountered Network Error */}
                      {msg.isError && msg.retryText && (
                        <div className="mt-3 pt-2 border-t border-amber-200/60 dark:border-amber-800/60 flex items-center gap-2">
                          <button
                            onClick={() => handleSendMessage(msg.retryText)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 dark:bg-amber-900/60 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-semibold transition-colors cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Thử gửi lại</span>
                          </button>
                        </div>
                      )}

                      {/* Bot Quick Actions / Shortcuts */}
                      {isBot && !msg.isError && msg.actionType && (
                        <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap gap-2">
                          {msg.actionType === 'pricing' && (
                            <button
                              onClick={() => scrollToSection('bang-gia')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold transition-colors cursor-pointer"
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
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold transition-colors shadow-xs"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>Nhắn Zalo</span>
                              </a>
                              <a
                                href={`tel:${COMPANY_CONFIG.hotline.replace(/\s+/g, '')}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors shadow-xs"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>Gọi Hotline</span>
                              </a>
                              <button
                                onClick={() => scrollToSection('form-tu-van')}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                              >
                                <span>Điền Form</span>
                              </button>
                            </>
                          )}
                          {msg.actionType === 'services' && (
                            <button
                              onClick={() => scrollToSection('giai-phap')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold transition-colors cursor-pointer"
                            >
                              <span>Khám phá 8 Giải pháp</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {msg.actionType === 'process' && (
                            <button
                              onClick={() => scrollToSection('quy-trinh')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold transition-colors cursor-pointer"
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

          {/* Typing / Loading Indicator Bubble */}
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
                <span className="text-xs text-slate-400 dark:text-slate-500 ml-1.5">DU đang soạn câu trả lời...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 3. Quick Suggestions Chips (Horizontal scroll) */}
        <div className="px-3.5 py-2.5 bg-white dark:bg-[#0F1422] border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-0.5 text-nowrap">
            {QUICK_SUGGESTIONS.map((chip) => (
              <button
                key={chip.id}
                disabled={isTyping}
                onClick={() => handleSendMessage(chip.query)}
                className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-slate-700/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0 shadow-2xs cursor-pointer"
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
              disabled={isTyping}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isTyping ? "Trợ lý AI đang phản hồi..." : "Nhập tin nhắn của bạn..."}
              className="flex-1 bg-transparent text-[13.5px] sm:text-[14px] text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none py-1.5 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              aria-label="Gửi tin nhắn"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                inputValue.trim() && !isTyping
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
