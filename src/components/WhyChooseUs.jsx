import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { WHY_CHOOSE } from '../data'
import SectionHeading from './SectionHeading'

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-pad relative overflow-hidden bg-rose-950">
      <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />

      <div className="relative">
        <div className="text-center">
          <span className="eyebrow text-gold-300">Why Choose Us</span>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            The <span className="gold-text">Her 'N' Sir</span> Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-rose-100/70 md:text-lg">
            Six promises that make every visit an indulgent, confidence-boosting experience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w, i) => {
            const Icon = Icons[w.icon] || Icons.Sparkles
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl glass-dark p-7 transition-all duration-300 hover:border-gold-400/40"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/30 to-rose-500/20 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-rose-100/70">{w.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
