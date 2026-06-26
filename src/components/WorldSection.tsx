import { motion } from 'motion/react';
import { worldLore } from '../data';
import { Database, Hexagon, Zap } from 'lucide-react';

export default function WorldSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="world">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 sticky top-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-mono mb-6 border border-cyan-500/20">
            <Database className="w-3 h-3" />
            WORLD SETTING
          </div>
          <h2 className="text-4xl font-display font-bold text-white tracking-tighter mb-4 leading-tight">
            불안정한 영혼들이<br/>구축한 거대 요새
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm">
            가쿠엔시는 단순한 학원도시가 아닙니다. 이능력을 발현하고 통제하기 위한 거대한 실험장이자 계급 사회입니다.
          </p>
        </motion.div>

        <div className="lg:col-span-8 space-y-12">
          {worldLore.map((lore, index) => (
            <motion.div 
              key={lore.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/40 p-8 md:p-10 rounded-3xl border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                {index === 0 ? <Hexagon className="text-cyan-400" /> : <Zap className="text-fuchsia-400" />}
                <h3 className="text-2xl font-bold text-zinc-100">{lore.title}</h3>
              </div>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                {lore.description}
              </p>
              
              <div className="space-y-4">
                {lore.details.map((detail, idx) => {
                  const isTitle = detail.includes(':');
                  const [title, desc] = isTitle ? detail.split(':') : ['', detail];

                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-[2px] bg-zinc-800 shrink-0 mt-1 mb-1 rounded-full" />
                      <p className="text-sm text-zinc-500 leading-relaxed font-mono">
                        {isTitle ? (
                          <>
                            <strong className="text-zinc-300 font-sans font-medium">{title}:</strong>
                            {desc}
                          </>
                        ) : (
                          detail
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
