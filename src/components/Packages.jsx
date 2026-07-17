import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { Check, Star } from 'lucide-react'
import { PACKAGES, BUSINESS } from '../data'
import SectionHeading from './SectionHeading'
import RippleButton from './RippleButton'

export default function Packages() {
  return (
    <section id="packages" className="section-pad bg-grain bg-cream-100">
      <SectionHeading
        eyebrow="Special Packages"
        title={<>Curated <span className="gradient-text">Luxury Packages</span></>}
        subtitle="Thoughtfully designed experiences that blend our most-loved services into indulgent, great-value rituals."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {PACKAGES.map((p, i) => {
          const Icon = Icons[p.icon] || Icons.Star
          const rec = p.recommended
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                rec
                  ? 'bg-gradient-to-b from-rose-700 to-rose-900 text-white shadow-glow ring-2 ring-gold-400/60'
                  : 'bg-white text-rose-900 shadow-card hover:shadow-glow'
              }`}
            >
              {rec && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-rose-950">
                  Recommended
                </span>
              )}

              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                rec ? 'bg-white/15 text-gold-300' : 'bg-rose-50 text-rose-700'
              }`}>
                <Icon size={24} />
              </div>

              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${rec ? 'text-rose-100/80' : 'text-rose-900/60'}`}>{p.desc}</p>

              <div className="my-5 flex items-baseline gap-1">
                <span className="text-2xl font-semibold">₹</span>
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className={`ml-1 text-sm ${rec ? 'text-rose-100/70' : 'text-rose-900/50'}`}>{p.period}</span>
              </div>

              <ul className="mb-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={17} className={rec ? 'mt-0.5 shrink-0 text-gold-300' : 'mt-0.5 shrink-0 text-rose-500'} />
                    <span className={rec ? 'text-rose-50/90' : 'text-rose-900/80'}>{f}</span>
                  </li>
                ))}
              </ul>

              <RippleButton
                className={rec ? 'btn-gold w-full' : 'btn-outline w-full'}
                onClick={() => (window.location.href = '#contact')}
              >
                Book Now
              </RippleButton>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-rose-800/70">
        <Star size={15} className="fill-gold-400 text-gold-400" />
        <span>Prices are indicative. Final pricing is confirmed after consultation. Call <strong>{BUSINESS.phone}</strong> for custom packages.</span>
      </div>
    </section>
  )
}
