import React from 'react'
import { Link } from '../router.jsx'
import { MANAGEMENT, MANAGING_DIRECTOR } from '../data/site.js'

export default function Management() {
  const directors = MANAGEMENT.slice(1)
  return (
    <>
      <section className="team-hero">
        <div className="container team-hero-inner">
          <h1>Meet The Team</h1>
          <nav className="crumbs">
            <Link to="/">Home</Link><span>|</span><span>Management</span>
          </nav>
        </div>
      </section>

      <section className="section-pad">
        <div className="container md-grid">
          <div className="md-left">
            <h2 className="panel-title">{MANAGING_DIRECTOR.welcome}</h2>
            <div className="md-photo">
              <img src={MANAGING_DIRECTOR.image} alt={MANAGING_DIRECTOR.name} loading="lazy" />
            </div>
          </div>
          <div className="md-right">
            <h2 className="panel-title">{MANAGING_DIRECTOR.title}</h2>
            {MANAGING_DIRECTOR.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <div className="md-sign">
              <strong>{MANAGING_DIRECTOR.name}</strong>
              <span>{MANAGING_DIRECTOR.role}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad work">
        <div className="container">
          <div className="section-heading center">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Our Leadership</div>
              <h2>Directors &amp; <em>Office Bearers</em></h2>
            </div>
          </div>
          <div className="team-grid">
            {directors.map((p) => (
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
