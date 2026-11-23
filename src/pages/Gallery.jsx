import React, { useState } from 'react'
import { X } from 'lucide-react'
import { GALLERY } from '../data/site.js'

export default function Gallery() {
  const [active, setActive] = useState(null)
  return (
    <>
      <section className="page-hero compact">
        <div className="container">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Photos &amp; Memories</div>
          <h1>Moments &amp; Milestones</h1>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY.map((src, i) => (
              <button className="gallery-item" key={i} onClick={() => setActive(src)}>
                <img src={src} alt={`Photo ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close"><X size={26} /></button>
          <img src={active} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
