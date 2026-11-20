import React from 'react'
import { MANAGEMENT } from '../data/site.js'

export default function Management() {
  return (
    <>
      <section className="page-hero compact">
        <div className="container">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Our People</div>
          <h1>Management</h1>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <div className="team-grid">
            {MANAGEMENT.map((p) => (
              <article className="team-card" key={p.name}>
                <div className="team-photo"><img src={p.image} alt={p.name} loading="lazy" /></div>
                <h3>{p.name}</h3>
                <span className="team-role">{p.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
