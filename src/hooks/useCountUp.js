import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, { duration = 2000, decimals = 0 } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(target * eased)
            if (p < 1) requestAnimationFrame(tick)
            else setValue(target)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.4 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [target, duration])

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()
  return { ref, display }
}
