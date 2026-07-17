import { motion } from 'framer-motion'
import { Instagram, Award } from 'lucide-react'
import { TEAM, BUSINESS } from '../data'
import SectionHeading from './SectionHeading'

export default function Team() {
  return (
    <section id="team" className="section-pad bg-grain bg-cream-50">
      <SectionHeading
        eyebrow="Our Team"
        title={<>Meet the <span className="gradient-text">Master Artists</span></>}
        subtitle="A passionate team of certified stylists and beauty experts dedicated to making you look and feel extraordinary."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-glow"
          >
            <div className="relative h-72 overflow-hidden">
              <img src={m.img} alt={m.name} loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-transparent to-transparent" />
              <a href={BUSINESS.instagram} target="_blank" rel="noreferrer"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full glass-dark text-gold-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram size={17} />
              </a>
              <div className="absolute bottom-3 left-4">
                <h3 className="font-display text-lg font-semibold text-white">{m.name}</h3>
                <p className="text-xs text-gold-200">{m.role}</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-rose-900/50">Specialization</p>
                <p className="text-sm font-medium text-rose-900">{m.spec}</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700">
                <Award size={13} className="text-gold-500" /> {m.exp}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
