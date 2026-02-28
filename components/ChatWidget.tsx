import React, { useState, useRef, useEffect } from 'react';
import { getCounselingResponse } from '../geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hello! I'm Admivo AI. How can I help you with your UK study plans today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setIsTyping(true);

    const response = await getCounselingResponse(userMsg);
    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end pointer-events-none z-50">
      
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="pointer-events-auto w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl border border-primary/10 flex flex-col overflow-hidden animate-fade-in-up mb-4">
          
          <div className="p-6 bg-primary flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="material-icons-outlined text-primary">psychology</span>
              </div>
              <div>
                <h3 className="text-slate-900 font-bold leading-none">Admivo AI</h3>
                <p className="text-[10px] text-slate-800 font-medium uppercase mt-1 tracking-widest">
                  Always Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-900 hover:bg-slate-900/10 p-1 rounded-lg"
            >
              <span className="material-icons-outlined">close</span>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium ${
                    m.isBot
                      ? 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                      : 'bg-slate-900 text-white rounded-tr-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSend}
            className="p-4 bg-white border-t border-slate-100"
          >
            <div className="flex gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-grow bg-transparent border-none focus:ring-0 text-sm p-3 text-slate-700 outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-slate-900 p-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span className="material-icons-outlined">send</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-16 h-16 bg-primary rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-primary/40 group relative"
      >
        <span className="material-icons-outlined text-slate-900 text-3xl group-hover:rotate-12 transition-transform">
          {isOpen ? 'close' : 'chat_bubble'}
        </span>

        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-4 border-background-light animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;