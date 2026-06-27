import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { characters } from '../data';

const factionColors: Record<string, string> = {
  '엘리시움 고교': 'rgba(2, 132, 199, 0.1)',
  '테이에이 고교': 'rgba(217, 119, 6, 0.15)',
  '츠쿠요미 고교': 'rgba(76, 29, 149, 0.15)',
  '아틀란 고교': 'rgba(8, 145, 178, 0.15)',
  '하키야코 고교': 'rgba(134, 25, 143, 0.15)',
  '네스트 과학 고교': 'rgba(13, 148, 136, 0.15)',
  '텐타이쿠 중': 'rgba(234, 88, 12, 0.15)',
  '소쿄 예술 중': 'rgba(225, 29, 72, 0.15)',
  '총학생회': 'rgba(30, 58, 138, 0.15)',
  '이사회': 'rgba(9, 9, 11, 0.8)',
  'I.O': 'rgba(153, 27, 27, 0.15)',
};

const groupedCharacters = [
  { name: '엘리시움 고교', characters: characters.filter(c => c.faction === '엘리시움 고교') },
  { name: '테이에이 고교', characters: characters.filter(c => c.faction === '테이에이 고교') },
  { name: '츠쿠요미 고교', characters: characters.filter(c => c.faction === '츠쿠요미 고교') },
  { name: '아틀란 고교', characters: characters.filter(c => c.faction === '아틀란 고교') },
  { name: '하키야코 고교', characters: characters.filter(c => c.faction === '하키야코 고교') },
  { name: '네스트 과학 고교', characters: characters.filter(c => c.faction === '네스트 과학 고교') },
  { name: '텐타이쿠 중', characters: characters.filter(c => c.faction === '텐타이쿠 중') },
  { name: '소쿄 예술 중', characters: characters.filter(c => c.faction === '소쿄 예술 중') },
  { name: '총학생회', characters: characters.filter(c => c.faction === '총학생회' && c.id !== 23) },
  { name: '아마노가와 키라리', characters: characters.filter(c => c.id === 23) },
  { name: '이사회', characters: characters.filter(c => c.id === 26) },
  { name: 'I.O', characters: characters.filter(c => c.faction === 'I.O' && c.id !== 20) },
  { name: '쿠류 렌', characters: characters.filter(c => c.id === 20) },
];

export default function CharacterSection() {
  const [activeColor, setActiveColor] = useState('transparent');
  const [activeEffect, setActiveEffect] = useState('none');
  const [adultModeChars, setAdultModeChars] = useState<Record<number, boolean>>({});

  return (
    <section 
      className="py-24 px-6 transition-colors duration-1000 ease-in-out relative" 
      style={{ backgroundColor: activeColor }}
      id="characters"
    >
      {/* Background Effects Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${activeEffect === 'kirari' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute inset-0 stars-1" />
          <div className="absolute inset-0 stars-2" />
          <div className="absolute inset-0 stars-3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] md:w-[2000px] md:h-[2000px] nebula-1 animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[1500px] md:h-[1500px] nebula-2 animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[1000px] md:h-[1000px] nebula-3 animate-[pulse_5s_ease-in-out_infinite]" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
        </div>

        <div className={`absolute inset-0 transition-opacity duration-700 ${activeEffect === 'ren' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-red-950/40" />
          <div className="absolute inset-0 glitch-overlay opacity-60 mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(255,0,0,0.1)_100%)]" />
        </div>
      </div>

      {/* Global Foreground Overlay (for Chairman) */}
      {createPortal(
        <div className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-1000 ${activeEffect === 'chairman' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 backdrop-grayscale backdrop-contrast-125 bg-black/50" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
        </div>,
        document.body
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4 tracking-tight">주요 인물</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            가쿠엔시를 살아가는 다양한 소속과 이능을 지닌 학생들, 그리고 권력자들.
          </p>
        </motion.div>

        <div className="space-y-24">
          {groupedCharacters.map((group) => {
            if (group.characters.length === 0) return null;

            const isSpecialSingle = group.characters.length === 1 && ['아마노가와 키라리', '이사회', '쿠류 렌'].includes(group.name);

            return (
              <div key={group.name} className="relative">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800/50 pb-4 inline-block pr-12">
                  {group.name}
                </h3>
                
                <div className={isSpecialSingle ? 'flex justify-center' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'}>
                  {group.characters.map((char, index) => {
                    const isToggleable = char.ageGroup === '미성년' && ![3, 11, 17].includes(char.id);
                    const isAdultMode = adultModeChars[char.id];
                    const displayAgeGroup = (isToggleable && isAdultMode) ? '성인' : char.ageGroup;
                    
                    const imageUrl = encodeURI(`https://pub-45af8b1d3ef244eb9ed534ec05f1ae12.r2.dev/${displayAgeGroup}/${char.id}/1.webp`);
                    
                    const isRen = char.id === 20;
                    const isKirari = char.id === 23;
                    const isChairman = char.id === 26;

                    let cardClass = "bg-zinc-900 md:bg-zinc-900/50 md:backdrop-blur border border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-cyan-500/30 transition-colors relative transform-gpu";
                    if (isRen) cardClass = "bg-zinc-900/90 border-red-900/50 rounded-2xl overflow-hidden flex flex-col group hover:border-red-500/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-colors relative glitch-card transform-gpu";
                    if (isKirari) cardClass = "bg-indigo-950 md:bg-indigo-950/40 md:backdrop-blur border border-fuchsia-500/30 rounded-2xl overflow-hidden flex flex-col group hover:border-fuchsia-400/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all relative transform-gpu";
                    if (isChairman) cardClass = "bg-black md:backdrop-blur border border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-zinc-600 transition-colors relative transform-gpu";

                    if (isSpecialSingle) cardClass += " w-full max-w-sm";

                    let textClass = "text-white";
                    if (isRen) textClass = "text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]";
                    if (isKirari) textClass = "text-fuchsia-200 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]";
                    if (isChairman) textClass = "text-blue-100 drop-shadow-[0_0_10px_rgba(0,0,0,1)]";

                    return (
                      <motion.div
                        key={char.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-10% 0px -10% 0px", amount: 0.4 }}
                        onViewportEnter={() => {
                          setActiveColor(factionColors[char.faction] || 'transparent');
                          if (isKirari) setActiveEffect('kirari');
                          else if (isChairman) setActiveEffect('chairman');
                          else if (isRen) setActiveEffect('ren');
                          else setActiveEffect('none');
                        }}
                        transition={{ delay: index * 0.05 }}
                        className={`${cardClass} ${isToggleable ? 'cursor-pointer' : ''}`}
                        onClick={() => {
                          if (isToggleable) {
                            setAdultModeChars(prev => ({ ...prev, [char.id]: !prev[char.id] }));
                          }
                        }}
                      >
                        <div className="relative aspect-[3/4] w-full bg-zinc-800 overflow-hidden">
                          <img
                            key={imageUrl} // Force re-render on image change
                            src={imageUrl}
                            alt={char.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                              if (e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.innerHTML = `<span class="text-zinc-600 font-mono text-sm">NO SIGNAL</span>`;
                              }
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                          
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="px-2 py-0.5 rounded-full bg-zinc-800/80 backdrop-blur text-[10px] font-mono text-cyan-400 border border-zinc-700">
                                {char.faction}
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-zinc-800/80 backdrop-blur text-[10px] font-mono text-zinc-300 border border-zinc-700">
                                {char.status}
                              </span>
                              {isToggleable && (
                                <span className="px-2 py-0.5 rounded-full bg-fuchsia-900/80 backdrop-blur text-[10px] font-mono text-fuchsia-200 border border-fuchsia-700/50 flex items-center gap-1 shadow-[0_0_10px_rgba(217,70,239,0.3)]">
                                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                  </svg>
                                  {isAdultMode ? '미성년 폼' : '성인 폼'}
                                </span>
                              )}
                            </div>
                            <h3 className={`text-xl font-display font-bold tracking-tight ${textClass}`}>
                              {char.name}
                            </h3>
                          </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                          <div className="mb-4 space-y-2 text-sm">
                            <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                              <span className="text-zinc-500 font-mono">AGE</span>
                              <span className="text-zinc-300">{isAdultMode ? '성인' : char.age}</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                              <span className="text-zinc-500 font-mono">RANK</span>
                              <span className="text-zinc-300">{char.rank}</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                              <span className="text-zinc-500 font-mono">ABILITY</span>
                              <span className="text-zinc-300 text-right max-w-[60%] truncate" title={char.ability}>
                                {char.ability.split(' (')[0]}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-zinc-400 leading-relaxed mt-auto">
                            {char.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
