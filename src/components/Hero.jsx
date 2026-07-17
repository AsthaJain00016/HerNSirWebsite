import { motion } from 'framer-motion'
import { Phone, MessageCircle, CalendarHeart, Star, MapPin, Clock } from 'lucide-react'
import { BUSINESS, STATS } from '../data'
import { useCountUp } from '../hooks/useCountUp'
import RippleButton from './RippleButton'

function StatCard({ stat, i }) {
  const { ref, display } = useCountUp(stat.value, { decimals: stat.decimals || 0 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.12 }}
      className="glass rounded-2xl px-5 py-6 text-center shadow-soft"
    >
      <div className="font-display text-3xl font-bold gradient-text md:text-4xl">
        {display}<span className="gold-text">{stat.suffix}</span>
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-rose-800/70">{stat.label}</div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="https://images.pexels.com/photos/3997984/pexels-photo-3997984.jpeg"
          alt="Luxury salon" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/70 via-rose-900/50 to-rose-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/60 to-transparent" />
      </div>

      {/* Floating accents */}
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl animate-float" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-rose-400/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pb-16 pt-32 md:px-12 md:pt-40 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-200">
            <Star size={14} className="fill-gold-300 text-gold-300" /> {BUSINESS.rating} · {BUSINESS.reviews} Google Reviews
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.05] text-white text-shadow-lux md:text-6xl lg:text-7xl">
            Where <span className="gold-text italic">Beauty</span><br />
            Meets <span className="gold-text italic">Elegance</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-rose-50/90 md:text-xl">
            Dehradun's premier luxury beauty parlour & salon. Bridal couture, hair artistry,
            skin rituals & nail couture — crafted by master stylists who treat every client like royalty.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <RippleButton className="btn-gold" onClick={() => (window.location.href = '#contact')}>
              <span className="flex items-center gap-2"><CalendarHeart size={18} /> Book Appointment</span>
            </RippleButton>
            <RippleButton className="btn-primary" onClick={() => (window.location.href = `tel:${BUSINESS.phone}`)}>
              <span className="flex items-center gap-2"><Phone size={18} /> Call Now</span>
            </RippleButton>
      
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-rose-50/80">
            <span className="flex items-center gap-1.5"><MapPin size={15} className="text-gold-300" /> Ballupur, Dehradun</span>
            <span className="flex items-center gap-1.5"><Clock size={15} className="text-gold-300" /> {BUSINESS.hours}</span>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((s, i) => <StatCard key={s.label} stat={s} i={i} />)}
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-rose-50/70"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-rose-50/40 p-1">
          <div className="h-2 w-1 rounded-full bg-gold-300" />
        </div>
      </motion.div>
    </section>
  )
}
