import React, { useEffect, useRef, useState } from 'react'

export default function Counter({ value, className }) {
  const ref = useRef(null)
  const str = String(value)
  const match = str.match(/^(\d+)(.*)$/)
  const [display, setDisplay] = useState(match ? '0' + match[2] : str)

  useEffect(() => {
    if (!match) return
    const el = ref.current
    if (!el) return
    const target = parseInt(match[1], 10)
    const suffix = match[2]
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(str)
      return
    }
    let raf
    let started = false
    const run = () => {
      const duration = 1500
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(Math.round(target * eased) + suffix)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) { started = true; run(); io.disconnect() }
      })
    }, { threshold: 0.5 })
    io.observe(el)
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf) }
  }, [value])

  return <span ref={ref} className={className}>{display}</span>
}
