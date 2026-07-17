import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { BUSINESS, SERVICES } from '../data'
import SectionHeading from './SectionHeading'
import RippleButton from './RippleButton'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', phone: '', service: '', date: '', message: '' })
  }

  const field = 'w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-sm text-rose-900 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-200'

  return (
    <section id="contact" className="section-pad bg-cream-50">
      <SectionHeading
        eyebrow="Contact"
        title={<>Book Your <span className="gradient-text">Appointment</span></>}
        subtitle="Reserve your slot in seconds. Our team will confirm your booking via WhatsApp or phone."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Info + Map */}
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a href={`tel:${BUSINESS.phone}`} className="group flex items-center gap-3 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-glow">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-700"><Phone size={20} /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-rose-900/50">Call Us</p>
                <p className="font-semibold text-rose-900">{BUSINESS.phone}</p>
              </div>
            </a>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-glow">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600"><MessageCircle size={20} /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-rose-900/50">WhatsApp</p>
                <p className="font-semibold text-rose-900">Chat Now</p>
              </div>
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="group flex items-center gap-3 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-glow">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-600"><Mail size={20} /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-rose-900/50">Email</p>
                <p className="font-semibold text-rose-900">{BUSINESS.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-700"><Clock size={20} /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-rose-900/50">Hours</p>
                <p className="font-semibold text-rose-900">{BUSINESS.hours}</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-card">
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700"><MapPin size={20} /></span>
            <div>
              <p className="text-xs uppercase tracking-wider text-rose-900/50">Visit Us</p>
              <p className="font-semibold text-rose-900">{BUSINESS.address}</p>
              <a href={BUSINESS.mapsLink} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-medium text-rose-600 hover:text-rose-800">Get Directions →</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="Her N Sir Location"
              src="https://www.google.com/maps?q=Ballupur,Dehradun,Uttarakhand&output=embed"
              width="100%" height="240" loading="lazy" style={{ border: 0 }}
              className="grayscale-[0.2]"
            />
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white p-7 shadow-card md:p-9"
        >
          <h3 className="font-display text-2xl font-bold text-rose-900">Request a Booking</h3>
          <p className="mt-1 text-sm text-rose-900/60">Fill in the details and we'll confirm shortly.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
              <input required placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={field}>
                <option value="" disabled>Select Service</option>
                {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                <option value="Bridal Package">Bridal Package</option>
              </select>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={field} />
            </div>
            <textarea rows={4} placeholder="Message (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={field} />
            <RippleButton type="submit" className="btn-primary w-full">
              <span className="flex items-center justify-center gap-2"><Send size={18} /> Send Booking Request</span>
            </RippleButton>
            {sent && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                <CheckCircle2 size={18} /> Thank you! Your request has been received. We'll call you shortly.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
