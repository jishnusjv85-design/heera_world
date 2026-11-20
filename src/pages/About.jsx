import React from 'react'
import { Check, Quote } from 'lucide-react'
import { Link } from '../router.jsx'
import { Marquee } from '../components/Layout.jsx'
import { ABOUT, DISTRICTS } from '../data/site.js'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Who We Are</div>
          <h1>{ABOUT.heroTitle[0]}<br /><em>{ABOUT.heroTitle[1]}</em></h1>
          <p>{ABOUT.heroText}</p>
        </div>
      </section>
      <Marquee />

      <section className="section-pad">
        <div className="container story-grid">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> {ABOUT.story.eyebrow}</div>
            <h2>{ABOUT.story.title}</h2>
          </div>
          <div>
            {ABOUT.story.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <div className="stat-row">
              {ABOUT.story.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad work">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> {ABOUT.pillars.eyebrow}</div>
              <h2>{ABOUT.pillars.title}</h2>
            </div>
            <p>{ABOUT.pillars.text}</p>
          </div>
          <div className="pillar-grid">
            {ABOUT.pillars.items.map((p) => (
              <article className="pillar-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> {ABOUT.sectors.eyebrow}</div>
              <h2>{ABOUT.sectors.title}</h2>
            </div>
            <p>{ABOUT.sectors.text}</p>
          </div>
          <div className="focus-grid">
            {ABOUT.sectors.items.map((it) => (
              <article className="focus-card" key={it.num}>
                <span className="focus-num">{it.num}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad impact-band">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> {ABOUT.achievements.eyebrow}</div>
              <h2>{ABOUT.achievements.title}</h2>
            </div>
            <p>{ABOUT.achievements.text}</p>
          </div>
          <div className="card-grid-3">
            {ABOUT.achievements.items.map((a) => (
              <article className="info-card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad coverage">
        <div className="container">
          <div className="section-heading center">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Operational Reach</div>
              <h2>Present Across <em>All 14 Districts</em> of Kerala</h2>
            </div>
            <p>Our extensive network ensures no community is left behind — with active operations spanning from the northern tip to the southern coast.</p>
          </div>
          <div className="district-grid">
            {DISTRICTS.map((d) => <span key={d} className="district">{d}</span>)}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="container quote-inner">
          <Quote size={30} className="quote-icon" />
          <blockquote>{ABOUT.quote}</blockquote>
          <div className="quote-caption">— {ABOUT.quoteBy}</div>
        </div>
      </section>

      <section className="section-pad image-strip-section">
        <div className="container">
          <div className="image-strip">
            {ABOUT.images.map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Join The Mission</div>
            <h2>Every Act of <em>Compassion</em><br />Creates a Ripple of Hope</h2>
            <p>Whether through donations, volunteering, or spreading awareness — your support fuels our mission to create a more humane and equitable Kerala for all beings.</p>
            <div className="hero-actions">
              <Link className="btn btn-cream" to="/donations">Donate Now</Link>
              <Link className="text-link light-link" to="/contact-us">Volunteer With Us</Link>
            </div>
          </div>
          <div className="cta-decoration" aria-hidden="true">
            <span className="ring r1" /><span className="ring r2" /><span className="ring r3" /><span className="ring r4" />
          </div>
        </div>
      </section>
    </>
  )
}
