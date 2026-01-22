
import React, { useState } from 'react';
import { MENU_DATA } from './constants';
import MenuSection from './components/MenuSection';
import AIBartender from './components/AIBartender';

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Top Navigation Strip - Clean Australian English */}
      <nav className="border-b border-[#eee] py-8 px-6 md:px-12 sticky top-0 bg-[#f9f9f9]/95 backdrop-blur-sm z-40">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="mono-font text-xs md:text-sm uppercase tracking-[0.2em] red-text border-b border-[#ff6b6b] pb-1 cursor-pointer hover:opacity-70 transition-opacity">
            TODAY'S LIST
          </div>
          <div className="mono-font text-xs md:text-sm uppercase tracking-[0.2em] red-text border-b border-[#ff6b6b] pb-1 cursor-pointer hover:opacity-70 transition-opacity">
            SEASONAL SELECTION
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-32">
        {/* New Refined Hero focused on the LLM feature */}
        <header className="max-w-4xl mx-auto text-center mb-32 fade-in">
          <div className="inline-block mb-6">
             <span className="mono-font text-[10px] font-bold uppercase tracking-[0.5em] text-[#ff6b6b]">
               Personalised Mixology
             </span>
          </div>
          <h1 className="heading-font text-5xl md:text-7xl green-text leading-tight mb-8">
            Finding your perfect pour <br/> shouldn't be a puzzle.
          </h1>
          <p className="text-lg md:text-xl text-[#666] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Fussy? Indecisive? Or just looking for something off-menu? Our Tommy-GPT feature will have you finding your perfect tipple in moments.
          </p>
          
          <button 
            onClick={() => setShowChat(true)}
            className="group relative px-14 py-6 bg-[#2d2d2d] text-white hover:bg-[#00d084] transition-all duration-500 overflow-hidden rounded-full shadow-xl transform hover:scale-105"
          >
            <span className="relative z-10 mono-font font-bold uppercase tracking-[0.2em] text-lg md:text-2xl flex items-center justify-center gap-4">
              <span className="text-3xl">✨</span> Ask the Bartender
            </span>
            <div className="absolute inset-0 bg-[#00d084] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </header>

        {/* Menu Grid */}
        <div className="space-y-48">
          {MENU_DATA.map((section, idx) => (
            <MenuSection key={idx} section={section} />
          ))}
        </div>

        {/* Floating Social Icons */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-30">
          {['Inspire', 'Share', 'Chat', 'View'].map((item) => (
            <div key={item} className="flex items-center gap-3 group cursor-pointer">
               <span className="mono-font text-[10px] uppercase tracking-widest red-text opacity-0 group-hover:opacity-100 transition-opacity">{item}</span>
               <div className="w-8 h-8 rounded-full border border-[#ff6b6b] flex items-center justify-center text-[#ff6b6b] text-xs">
                 {item[0]}
               </div>
            </div>
          ))}
        </div>
      </main>

      {/* AI Assistant - Control with internal state for hero button sync */}
      <AIBartender forceOpen={showChat} onToggle={() => setShowChat(!showChat)} />

      {/* Footer */}
      <footer className="bg-white py-24 px-12 border-t border-[#eee]">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
               <h4 className="mono-font font-bold text-xs uppercase tracking-[0.3em] mb-6">LOCATION</h4>
               <p className="text-sm text-[#666] leading-relaxed">42 Mixology Lane<br/>Melbourne, VIC 3000</p>
            </div>
            <div>
               <h4 className="mono-font font-bold text-xs uppercase tracking-[0.3em] mb-6">HOURS</h4>
               <p className="text-sm text-[#666] leading-relaxed">WED-SAT: 6:00 PM — 2:00 AM<br/>SUN: 4:00 PM — 11:00 PM</p>
            </div>
            <div className="md:text-right">
               <span className="heading-font text-5xl green-text opacity-10 select-none">SIGNATURE SPIRITS</span>
               <p className="mono-font text-[10px] text-[#999] mt-2 uppercase tracking-widest">Always enjoy responsibly.</p>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
