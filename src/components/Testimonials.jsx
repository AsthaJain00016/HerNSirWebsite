import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS, BUSINESS } from '../data'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (d) => { setDir(d); setIdx((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length) }

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIdx((p) => (p + 1) % TESTIMONIALS.length) }, 6000)
    return () => clearInterval(t)
  }, [])

  const t = TESTIMONIALS[idx]

  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-rose-950 to-rose-900">
      <div className="absolute -left-10 top-1/4 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-rose-400/10 blur-3xl" />

      <div className="relative">
        <div className="text-center">
          <span className="eyebrow text-gold-300">Testimonials</span>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Loved by <span className="gold-text">5000+ Clients</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-gold-300">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-gold-300 text-gold-300" />)}
            </div>
            <span className="text-sm text-rose-100/80">{BUSINESS.rating} · {BUSINESS.reviews} Google Reviews</span>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative rounded-3xl glass-dark p-8 md:p-12">
            <Quote className="absolute -top-5 left-8 text-gold-400/40" size={56} />

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <img src={t.img} alt={t.name} loading="lazy"
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-gold-400/60" />
                  <div className="mt-4 flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="fill-gold-300 text-gold-300" />)}
                  </div>
                  <p className="mt-5 text-lg leading-relaxed text-rose-50/90 md:text-xl">"{t.text}"</p>
                  <div className="mt-6">
                    <div className="font-display text-xl font-semibold text-white">{t.name}</div>
                    <div className="mt-1 text-xs text-rose-100/60">{t.meta}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} className="rounded-full glass-dark p-2.5 text-gold-300 transition hover:bg-white/10">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === idx ? 'w-8 bg-gold-400' : 'w-2 bg-white/30'
                  }`} />
              ))}
            </div>
            <button onClick={() => go(1)} className="rounded-full glass-dark p-2.5 text-gold-300 transition hover:bg-white/10">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
