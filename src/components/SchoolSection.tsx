import { motion } from 'motion/react';
import { schools } from '../data';

export default function SchoolSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900" id="schools">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-display font-bold text-white mb-4 tracking-tight">주요 교육기관</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          가쿠엔시를 지탱하는 3대 명문 고교 및 특색 있는 학원들.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {schools.map((school, index) => (
          <motion.div
            key={school.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900/30 p-6 border border-zinc-800/80 rounded-2xl flex flex-col h-full hover:bg-zinc-900/80 transition-colors"
          >
            <div className="text-3xl mb-4 p-3 bg-zinc-950 rounded-xl inline-flex w-fit shadow-inner border border-zinc-800/50">
              {school.symbol}
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">{school.name}</h3>
            <p className="text-sm text-zinc-400 mb-6 flex-1">{school.description}</p>
            <ul className="space-y-2 mt-auto">
              {school.features.map((feature, idx) => (
                <li key={idx} className="text-xs font-mono text-zinc-500 flex items-start gap-2">
                  <span className="text-cyan-600/50 mt-0.5">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
