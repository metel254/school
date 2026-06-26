import { motion } from 'motion/react';
import { factions } from '../data';
import { Shield, Building2, Flame } from 'lucide-react';

const icons = [Shield, Building2, Flame];

export default function FactionSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden" id="factions">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4 tracking-tight">주요 세력</h2>
          <p className="text-zinc-400 max-w-2xl">
            가쿠엔시의 질서를 유지하거나 무너뜨리려는 거대한 세력들의 대립.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {factions.map((faction, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={faction.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur"
              >
                <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-zinc-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">{faction.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {faction.description}
                </p>
                <ul className="space-y-3">
                  {faction.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                      <span className="font-mono text-xs text-zinc-500 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
