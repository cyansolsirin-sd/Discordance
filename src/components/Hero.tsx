import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black" />
      </div>

      <div className="z-10 w-full max-w-6xl flex flex-col items-center text-center space-y-12">
        {/* Laurels / Festival Badges (Decorative) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] border-b border-white/20 pb-1 mb-1">Official Selection</span>
            <span className="font-serif italic text-xs">Indie Spirit 2026</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] border-b border-white/20 pb-1 mb-1">Winner</span>
            <span className="font-serif italic text-xs">Best Cinematography</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase mix-blend-difference">
            Discordance
          </h1>
          <p className="mt-4 text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 font-light">
            A Short Film by You & Friends
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full aspect-video bg-zinc-900 rounded-sm shadow-2xl border border-white/5 relative group overflow-hidden"
        >
          {/* Placeholder for Video Embed */}
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 group-hover:bg-zinc-800 transition-colors duration-500 cursor-pointer">
             {/* 
                User Instruction: Replace the iframe src below with your actual video embed link (YouTube/Vimeo).
                Ensure w-full and h-full are maintained.
             */}
             <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:border-white/60 transition-all duration-300">
                  <Play className="w-8 h-8 text-white fill-white opacity-80" />
                </div>
                <p className="text-zinc-500 text-sm tracking-widest uppercase">Watch Trailer</p>
             </div>
             
             {/* Example Iframe (Commented out for now, user can uncomment) */}
             {/* 
             <iframe 
               className="absolute inset-0 w-full h-full" 
               src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
               title="Discordance" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             ></iframe> 
             */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-600">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
