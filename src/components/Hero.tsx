import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('world')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Abstract Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full blur-[128px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Population: 1,400,000 / Academy City</span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[1.1] mb-6">
          <span className="block text-zinc-500">WELCOME TO</span>
          GAKUEN CITY
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light mb-12 leading-relaxed">
          이능력, 권력, 그리고 반역이 교차하는 거대한 실험장. 
          14개의 자치구에서 벌어지는 소년소녀들의 군상극 세계관 가이드.
        </p>

        <button 
          onClick={scrollToNext}
          className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors group"
        >
          <ChevronDown className="w-6 h-6 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
        </button>
      </motion.div>
    </section>
  );
}
