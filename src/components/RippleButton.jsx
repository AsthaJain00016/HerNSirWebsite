import { useState } from 'react'

export default function RippleButton({ children, className = '', onClick, ...props }) {
  const [ripples, setRipples] = useState([])

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = Date.now()
    setRipples((r) => [...r, { id, x, y, size }])
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600)
    onClick?.(e)
  }

  return (
    <button onClick={handleClick} className={className} {...props}>
      {ripples.map((r) => (
        <span key={r.id} className="ripple" style={{ left: r.x, top: r.y, width: r.size, height: r.size }} />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
