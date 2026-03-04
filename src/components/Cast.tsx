import { motion } from 'motion/react';

const castMembers = [
  {
    name: "Alex Rivera",
    role: "The Protagonist",
    image: "https://picsum.photos/seed/alex/400/600",
    bio: "Lost in the echoes of a forgotten city."
  },
  {
    name: "Sarah Chen",
    role: "The Shadow",
    image: "https://picsum.photos/seed/sarah/400/600",
    bio: "A memory that refuses to fade away."
  },
  {
    name: "Jordan Lee",
    role: "The Observer",
    image: "https://picsum.photos/seed/jordan/400/600",
    bio: "Watching from the periphery of time."
  }
];

export default function Cast() {
  return (
    <section className="py-32 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-24 text-white"
        >
          Starring
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {castMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="aspect-[2/3] overflow-hidden bg-zinc-900 mb-6 relative">
                <div className="absolute inset-0 bg-zinc-800 animate-pulse" /> {/* Loading placeholder */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-zinc-300 text-sm font-light italic font-serif">"{member.bio}"</p>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-xl font-medium text-white tracking-wide uppercase">{member.name}</h3>
                <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase">as {member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
