import React, { useState, useRef, useEffect } from 'react';
import { getCounselingResponse } from '../geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Institutional greeting. I am Admivo Strategic AI. How may I assist with your academic plans today?", isBot: true }
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
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[360px] h-[500px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border flex flex-col overflow-hidden mb-4"
          >
            <div className="p-5 border-b border-border flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground"
                  style={{ backgroundColor: '#fdb417' }}
                >
                  <span className="material-icons-outlined text-sm">psychology</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground leading-none">Strategic AI</h3>
                  <p className="text-[9px] text-muted-foreground font-bold uppercase mt-1 tracking-widest">Active Intelligence</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted hover:text-foreground p-1 transition-colors">
                <span className="material-icons-outlined text-lg">close</span>
              </button>
            </div>

            <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-4 bg-white">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[85%] p-3.5 rounded-xl text-[13px] font-bold whitespace-pre-wrap leading-relaxed shadow-sm ${m.isBot ? 'bg-secondary text-foreground' : 'text-foreground'
                      }`}
                    style={!m.isBot ? { backgroundColor: '#fdb417' } : {}}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary p-3 rounded-xl flex gap-1 items-center">
                    <div className="w-1 h-1 bg-foreground rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-foreground rounded-full animate-bounce delay-100"></div>
                    <div className="w-1 h-1 bg-foreground rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-4 bg-white border-t border-border">
              <div className="flex gap-2 bg-secondary/50 p-1 rounded-xl border border-border">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Inquire here..."
                  className="flex-grow bg-transparent border-none focus:ring-0 text-[13px] px-3 py-2 text-foreground placeholder-muted-foreground font-medium"
                />
                <button
                  className="p-2 rounded-lg shadow-sm hover:scale-105 active:scale-95 transition-all text-foreground"
                  style={{ backgroundColor: '#fdb417' }}
                >
                  <span className="material-icons-outlined text-lg">send</span>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-foreground relative border-4 border-white"
        style={{ backgroundColor: '#fdb417' }}
      >
        <span className="material-icons-outlined text-2xl">
          {isOpen ? 'close' : 'chat_bubble'}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground rounded-full border-2 border-background animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
