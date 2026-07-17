import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, CalendarHeart } from 'lucide-react'
import { NAV_LINKS, BUSINESS } from '../data'
import RippleButton from './RippleButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? 'glass shadow-soft py-2.5' : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold gradient-text">Her 'N' Sir</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}
              className="group relative text-sm font-medium text-rose-900/80 transition-colors hover:text-rose-700">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-1.5 text-sm font-medium text-rose-800 hover:text-rose-600">
            <Phone size={15} /> {BUSINESS.phone}
          </a>
          <RippleButton className="btn-primary text-sm" onClick={() => (window.location.href = '#contact')}>
            <span className="flex items-center gap-1.5"><CalendarHeart size={15} /> Book Now</span>
          </RippleButton>
        </div>

        <button className="text-rose-800 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="glass mx-4 mt-2 overflow-hidden rounded-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-rose-900/80 hover:bg-rose-50">{l.label}</a>
              ))}
              <RippleButton className="btn-primary mt-2" onClick={() => { setOpen(false); window.location.href = '#contact' }}>
                Book Appointment
              </RippleButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
