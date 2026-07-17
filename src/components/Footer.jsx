import { Phone, MessageCircle, MapPin, Clock, Instagram, Facebook, Heart } from 'lucide-react'
import { BUSINESS, NAV_LINKS, SERVICES } from '../data'

export default function Footer() {
  return (
    <footer className="bg-rose-950 text-rose-100/80">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold gold-text">Her 'N' Sir</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Dehradun's premier luxury beauty parlour & salon. Bridal couture, hair artistry,
              skin rituals and nail couture — crafted to make you feel extraordinary.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full glass-dark text-gold-300 transition hover:bg-white/10">
                <Instagram size={18} />
              </a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full glass-dark text-gold-300 transition hover:bg-white/10">
                <MessageCircle size={18} />
              </a>
              <a href={`tel:${BUSINESS.phone}`} className="flex h-10 w-10 items-center justify-center rounded-full glass-dark text-gold-300 transition hover:bg-white/10">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}><a href={l.href} className="transition hover:text-gold-300">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.title}><a href="#services" className="transition hover:text-gold-300">{s.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" /> {BUSINESS.address}</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-gold-400" /> {BUSINESS.phone}</li>
              <li className="flex items-center gap-2"><Clock size={16} className="text-gold-400" /> {BUSINESS.hours} (Mon–Sun)</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span>© {new Date().getFullYear()} Her 'N' Sir. All rights reserved.</span>
            <a href="#" className="transition hover:text-gold-300">Privacy Policy</a>
            <a href="#" className="transition hover:text-gold-300">Terms</a>
          </div>
          <p className="flex items-center gap-1.5 text-rose-100/50">
            Made with <Heart size={12} className="fill-rose-400 text-rose-400" /> in Dehradun
          </p>
        </div>

        {/* Demo disclaimer */}
        <div className="mt-6 rounded-xl border border-gold-400/20 bg-gold-400/5 px-4 py-3 text-center text-xs text-rose-100/60">
          This is a sample website created for demonstration purposes only. It is not the official website of this business.
        </div>
      </div>
    </footer>
  )
}
