import React from 'react'
import { ArrowUpRight, ArrowRight, Heart, Check, ChevronDown } from 'lucide-react'
import { Link } from '../router.jsx'
import { Marquee } from '../components/Layout.jsx'
import Counter from '../components/Counter.jsx'
import { HOME, DISTRICTS, HERO_IMAGE } from '../data/site.js'

function Hero() {
  return (
    <section className="hero">
      <img className="hero-image show" src={HERO_IMAGE} alt="Children gathered outdoors in a community setting" />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> ROOTED IN COMPASSION. DRIVEN BY PURPOSE.</div>
        <h1>A better tomorrow<br />begins <em>together.</em></h1>
        <p>We believe meaningful change starts with people — their potential, their communities, and the opportunities we create together.</p>
        <div className="hero-actions">
          <Link className="btn btn-cream" to="/about-us">Discover Our Mission <ArrowUpRight size={18} /></Link>
          <Link className="text-link light-link" to="/about-us">Explore our work <ArrowRight size={17} /></Link>
        </div>
      </div>
      <div className="hero-side-note">HEERA WORLD FOUNDATION <span>—</span> HUMANITY FIRST</div>
      <Link to="/about-us" className="scroll-cue">SCROLL TO EXPLORE <ChevronDown size={16} /></Link>
    </section>
  )
}

export default function Home() {
  const { whoWeAre, focus, mission, futureVision, longTerm, impact, coverage, join } = HOME
  return (
    <>
      <Hero />
      <Marquee />

      <section className="section-pad">
        <div className="container intro-grid">
          <div className="intro-left">
            <div className="eyebrow"><span className="eyebrow-line" /> {whoWeAre.eyebrow}</div>
          </div>
          <div className="intro-right">
            <h2>{whoWeAre.title[0]} <em>{whoWeAre.title[1]}</em></h2>
            <p className="lead">{whoWeAre.text}</p>
          </div>
        </div>
        <div className="container card-grid-3">
          {whoWeAre.cards.map((c) => (
            <article className="info-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad work">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> {focus.eyebrow}</div>
              <h2>{focus.title}</h2>
            </div>
            <p>{focus.text}</p>
          </div>
          <div className="focus-grid">
            {focus.items.map((it) => (
              <article className="focus-card" key={it.num}>
                <span className="focus-num">{it.num}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad mission-band">
        <div className="container mission-grid">
          <div className="mission-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> {mission.eyebrow}</div>
            <h2>{mission.title}</h2>
            <p className="lead">{mission.lead}</p>
            <h3 className="mission-sub">{mission.subtitle}</h3>
            {mission.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <ul className="check-list">
              {mission.points.map((p) => <li key={p}><Check size={16} /> {p}</li>)}
            </ul>
          </div>
          <div className="mission-visual">
            <img src={mission.image} alt="Motherhood Home" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-pad future-band">
        <div className="container future-grid">
          <div>
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {futureVision.eyebrow}</div>
            <h2>{futureVision.title}</h2>
            <p>{futureVision.text}</p>
          </div>
          <div className="future-visual" aria-hidden="true">
            <span className="ring r1" /><span className="ring r2" /><span className="ring r3" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container longterm-grid">
          <div className="longterm-intro">
            <div className="eyebrow"><span className="eyebrow-line" /> {longTerm.eyebrow}</div>
            <h2>{longTerm.title}</h2>
            <p>{longTerm.text}</p>
            <div className="kicker">{longTerm.kicker}</div>
          </div>
          <div className="priority-block">
            <h3>{longTerm.prioritiesTitle}</h3>
            <div className="priority-grid">
              {longTerm.priorities.map((p) => (
                <div className="priority" key={p.num}>
                  <span>{p.num}</span>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
            <p className="closing">{longTerm.closing}</p>
          </div>
        </div>
      </section>

      <section className="section-pad impact-band">
        <div className="container impact-grid">
          <div className="impact-stat">
            <Counter className="big" value={impact.stat} />
            <span className="small">{impact.statLabel}</span>
          </div>
          <div className="impact-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> {impact.eyebrow}</div>
            <h2>{impact.title[0]} <em>{impact.title[1]}</em></h2>
            <p className="lead">{impact.text}</p>
            <ul className="impact-list">
              {impact.items.map((t) => <li key={t}><Check size={16} /> {t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad coverage">
        <div className="container">
          <div className="section-heading center">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> {coverage.eyebrow}</div>
              <h2>{coverage.title[0]} <em>{coverage.title[1]}</em></h2>
            </div>
            <p>{coverage.text}</p>
          </div>
          <div className="district-grid">
            {DISTRICTS.map((d) => <span key={d} className="district">{d}</span>)}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {join.eyebrow}</div>
            <h2>{join.title[0]}<br /><em>{join.title[1]}</em></h2>
            <p>{join.text}</p>
            <div className="hero-actions">
              <Link className="btn btn-cream" to="/donations">Donate Now <Heart size={17} /></Link>
              <Link className="text-link light-link" to="/contact-us">Volunteer With Us <ArrowUpRight size={16} /></Link>
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
