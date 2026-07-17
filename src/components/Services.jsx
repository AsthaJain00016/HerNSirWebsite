import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SERVICES } from '../data'
import SectionHeading from './SectionHeading'

export default function Services() {
  return (
    <section id="services" className="section-pad bg-grain bg-cream-50">
      <SectionHeading
        eyebrow="Our Services"
        title={<>Crafted Services for <span className="gradient-text">Every Beauty Need</span></>}
        subtitle="From everyday grooming to bridal couture — each service is delivered with premium products, master technique and an unhurried, luxurious touch."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SERVICES.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Sparkles
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 via-rose-950/10 to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl glass-dark text-gold-300">
                  <Icon size={20} />
                </div>
                <h3 className="absolute bottom-3 left-4 font-display text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-rose-900/70">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">Premium</span>
                  <a href="#contact" className="flex items-center gap-1 text-sm font-medium text-rose-700 transition-colors group-hover:text-rose-900">
                    Book <Icons.ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
