
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

interface AIBartenderProps {
  forceOpen?: boolean;
  onToggle?: () => void;
}

const AIBartender: React.FC<AIBartenderProps> = ({ forceOpen, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "G'day! I'm Tommy-GPT. Feeling a bit indecisive? No worries, mate. Tell me what kind of vibe you're feeling, and I'll find your perfect tipple in a flash." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync internal state with external forceOpen prop
  useEffect(() => {
    if (forceOpen !== undefined) {
      setIsOpen(forceOpen);
    }
  }, [forceOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION + "\n\nNote: You are Tommy-GPT. You are assisting fussy or indecisive customers. Be extremely patient, offer nuanced recommendations, and if they are really stuck, suggest two very different options to help them narrow it down. Use Australian English (e.g., 'G'day', 'No worries', 'Flavour', 'Tipple').",
        },
      });

      const responseStream = await chat.sendMessageStream({ message: userMsg });
      
      let fullText = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of responseStream) {
        fullText += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("AI Bartender Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry mate, looks like the connection's dropped. Give it another go?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-50">
      <button 
        onClick={handleToggle}
        className="w-16 h-16 bg-[#00d084] text-white shadow-2xl flex items-center justify-center transition-all hover:bg-[#ff6b6b] transform hover:rotate-12 rounded-full border-4 border-white"
      >
        {isOpen ? (
          <span className="text-2xl font-bold">✕</span>
        ) : (
          <div className="flex flex-col items-center">
            <span className="text-2xl">🍹</span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[420px] h-[600px] bg-white shadow-2xl flex flex-col overflow-hidden border border-[#eee] rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-400">
          <div className="bg-[#00d084] p-6 flex items-center justify-between">
            <div>
              <h4 className="heading-font text-2xl text-white tracking-tighter">Tommy-GPT</h4>
              <p className="text-[10px] text-white/70 mono-font uppercase tracking-widest mt-1">Digital Bar Concierge</p>
            </div>
            <span className="text-3xl">✨</span>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-white"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#f1ede8] text-[#2d2d2d] rounded-2xl rounded-tr-none shadow-sm' 
                      : 'text-[#2d2d2d] font-bold border-l-4 border-[#ff6b6b] pl-4 italic'
                  }`}
                >
                  {msg.text || (isLoading && i === messages.length - 1 ? <div className="flex gap-1 py-1"><div className="w-1.5 h-1.5 bg-[#ff6b6b] rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-[#ff6b6b] rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1.5 h-1.5 bg-[#ff6b6b] rounded-full animate-bounce [animation-delay:0.4s]"></div></div> : null)}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#f9f9f9] border-t border-[#eee]">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Message Tommy-GPT..."
                className="flex-1 bg-white border border-[#eee] px-5 py-4 text-sm mono-font focus:outline-none focus:border-[#00d084] rounded-xl shadow-sm"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-[#2d2d2d] text-white px-5 rounded-xl text-xs font-bold uppercase transition-colors hover:bg-[#ff6b6b] shadow-sm"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIBartender;
