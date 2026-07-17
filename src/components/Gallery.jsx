import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { GALLERY } from '../data'
import SectionHeading from './SectionHeading'

const CATS = ['All', 'Hair', 'Bridal', 'Makeup', 'Nails', 'Skin Care']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const items = active === 'All' ? GALLERY : GALLERY.filter((g) => g.cat === active)

  return (
    <section id="gallery" className="section-pad bg-cream-50">
      <SectionHeading
        eyebrow="Gallery"
        title={<>A Glimpse of Our <span className="gradient-text">Artistry</span></>}
        subtitle="Real looks, real moments — a curated showcase of the transformations created at Her 'N' Sir."
      />

      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
          <button key={c} onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              active === c
                ? 'bg-rose-700 text-white shadow-soft'
                : 'bg-white text-rose-800/70 hover:bg-rose-50'
            }`}>
            {c}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((g, i) => (
            <motion.div
              key={g.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => setLightbox(g.src)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-card ${g.span}`}
            >
              <img src={g.src} alt={g.cat} loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 flex translate-y-3 items-center gap-1.5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ZoomIn size={16} className="text-gold-300" />
                <span className="text-xs font-semibold uppercase tracking-wider">{g.cat}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-rose-950/90 p-6 backdrop-blur-md"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox} alt="Gallery" className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-glow"
            />
            <button className="absolute right-6 top-6 rounded-full glass p-2 text-white" onClick={() => setLightbox(null)}>
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
