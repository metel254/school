import { motion } from 'motion/react';
import { districts } from '../data';
import { MapPin } from 'lucide-react';

export default function DistrictSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900" id="districts">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-display font-bold text-white mb-4 tracking-tight flex items-center gap-3">
          <MapPin className="text-cyan-500 w-8 h-8" />
          자치구 현황
        </h2>
        <p className="text-zinc-400 max-w-2xl">
          가쿠엔시는 총 14개의 구역으로 철저하게 분할 통제되고 있습니다. 각 구역은 명확한 목적과 인프라를 지닙니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {districts.map((district, index) => (
          <motion.div
            key={district.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 hover:border-cyan-900/50 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-6xl font-bold tracking-tighter text-zinc-500 group-hover:opacity-20 transition-opacity pointer-events-none">
              {district.id.toString().padStart(2, '0')}
            </div>
            
            <div className="relative z-10 flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 font-mono text-sm font-medium shadow-inner shrink-0">
                제{district.id}구
              </div>
              <h3 className="text-lg font-bold text-zinc-200">{district.name}</h3>
            </div>
            
            <p className="text-sm text-zinc-400 mb-6 min-h-[3.5rem] relative z-10">
              {district.description}
            </p>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              {district.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-zinc-900 text-xs font-mono text-zinc-500 rounded border border-zinc-800/50">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
