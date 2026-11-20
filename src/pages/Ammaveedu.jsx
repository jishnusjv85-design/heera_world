import React from 'react'
import { Heart } from 'lucide-react'
import { Link } from '../router.jsx'
import { AMMAVEEDU, MANAGEMENT } from '../data/site.js'

export default function Ammaveedu() {
  return (
    <>
      <section className="page-hero ammaveedu-hero">
        <div className="container">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Mother Hood Home</div>
          <h1>Ammaveedu</h1>
          <p>A Home of Love, Care &amp; Dignity for elderly mothers who have no one to depend on.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container mission-grid">
          <div className="mission-copy">
            <h2>{AMMAVEEDU.title}</h2>
            {AMMAVEEDU.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <p className="ammaveedu-quote">{AMMAVEEDU.quote}</p>
            <Link className="btn btn-green" to="/donations">Support a Mother <Heart size={16} /></Link>
          </div>
          <div className="mission-visual">
            <img src={AMMAVEEDU.heroImage} alt="Mother Hood Home" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-pad work">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> News & Updates</div>
              <h2>Stories from Ammaveedu</h2>
            </div>
            <p>Snapshots of the people, visits, and celebrations that fill Mother Hood Home with warmth.</p>
          </div>
          <div className="news-grid">
            {AMMAVEEDU.news.map((n, i) => (
              <article className="news-card" key={i}>
                <div className="news-photo"><img src={n.image} alt="" loading="lazy" /></div>
                <div className="news-body">
                  <h3>{n.title}</h3>
                  <p>{n.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="image-strip">
            {AMMAVEEDU.extraImages.map((src, i) => <img key={i} src={src} alt="" loading="lazy" />)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading center">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Foundation Leadership</div>
              <h2>Management</h2>
            </div>
          </div>
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
