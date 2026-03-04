import { motion } from 'motion/react';

const crewMembers = [
  { role: "Directed by", name: "Jamie Doe" },
  { role: "Written by", name: "Jamie Doe & Alex Smith" },
  { role: "Produced by", name: "Creative Collective" },
  { role: "Cinematography", name: "Morgan Light" },
  { role: "Edited by", name: "Sam Cutter" },
  { role: "Original Score", name: "The Soundscapes" },
  { role: "Sound Design", name: "Echo Audio" },
  { role: "Production Design", name: "Artistic Vision Inc." },
];

export default function Crew() {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Subtle background noise/grain could go here */}
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.5em] uppercase text-zinc-500 mb-4">Credits</h2>
          <div className="w-px h-8 bg-zinc-800 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {crewMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="flex flex-col md:flex-row items-baseline justify-between border-b border-zinc-900 pb-4 hover:border-zinc-800 transition-colors duration-300 group"
            >
              <span className="text-zinc-500 text-sm uppercase tracking-widest font-light group-hover:text-zinc-400 transition-colors">
                {member.role}
              </span>
              <span className="text-white font-serif text-xl italic mt-2 md:mt-0">
                {member.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center space-y-8"
        >
          <p className="text-zinc-600 text-xs tracking-widest uppercase">
            Filmed on location in Nowhere City
          </p>
          <div className="flex justify-center gap-8 opacity-30 grayscale">
            {/* Fake logos */}
            <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-[8px]">LOGO</div>
            <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-[8px]">LOGO</div>
            <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-[8px]">LOGO</div>
          </div>
          <p className="text-zinc-800 text-[10px] mt-12">
            © 2026 Discordance Film. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
