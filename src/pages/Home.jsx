import React from 'react'
import { ArrowRight, ArrowUpRight, Heart, CheckCircle2 } from 'lucide-react'
import { Link } from '../router.jsx'
import { HOME, AMMAVEEDU } from '../data/site.js'

export default function Home() {
  const areas = HOME.focus.items.slice(0, 4)
  return (
    <>
      <section className="hero hero-editorial">
        <img className="hero-image show" src={AMMAVEEDU.heroImage} alt="Ammaveedu — Motherhood Home community" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> HEERA WORLD FOUNDATION · KERALA</div>
          <h1>Everyone deserves<br /><em>care and dignity.</em></h1>
          <p>Through Motherhood Home and community-led welfare initiatives, we work to make older people feel safe, seen and supported.</p>
          <div className="hero-actions">
            <Link className="btn btn-cream" to="/ammaveedu">Discover Ammaveedu <ArrowUpRight size={18} /></Link>
            <Link className="text-link light-link" to="/donations">Support our work <ArrowRight size={17} /></Link>
          </div>
        </div>
        <div className="hero-side-note">HEERA WORLD FOUNDATION <span>—</span> HUMANITY FIRST</div>
      </section>

      <section className="section-pad intro-section">
        <div className="container intro-grid">
          <div className="eyebrow"><span className="eyebrow-line" /> WHO WE ARE</div>
          <div className="intro-right">
            <h2>Built around the simple belief that <em>care matters.</em></h2>
            <p className="lead">{HOME.whoWeAre.text}</p>
            <Link to="/about-us" className="text-link">Read our story <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad spotlight-section">
        <div className="container spotlight-grid">
          <div className="spotlight-photo">
            <img src={HOME.mission.image} alt="A moment from Motherhood Home" loading="lazy" />
            <span className="photo-caption">MOTHERHOOD HOME · ULLIYERI, KERALA</span>
          </div>
          <div className="spotlight-content">
            <div className="eyebrow"><span className="eyebrow-line" /> OUR SIGNATURE INITIATIVE</div>
            <h2>A home that offers more than shelter.</h2>
            <p className="lead">{HOME.mission.lead}</p>
            <p>{AMMAVEEDU.paragraphs[0]}</p>
            <ul className="check-list">
              {HOME.mission.points.slice(0, 3).map(point => <li key={point}><CheckCircle2 size={17} /> {point}</li>)}
            </ul>
            <Link className="btn btn-green" to="/ammaveedu">Explore Motherhood Home <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad practice-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> AREAS OF FOCUS</div>
              <h2>Practical support, <em>human connection.</em></h2>
            </div>
            <p>Our priorities centre on the needs of older people and the communities around them.</p>
          </div>
          <div className="practice-grid">
            {areas.map((area, i) => (
              <article className="practice-item" key={area.num}>
                <span className="practice-index">0{i + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad vision-section">
        <div className="container vision-content">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> WHAT COMES NEXT</div>
            <h2>{HOME.futureVision.title}</h2>
          </div>
          <div>
            <p className="lead">{HOME.futureVision.text}</p>
            <p>{HOME.longTerm.closing}</p>
            <Link className="text-link" to="/contact-us">Talk to us about partnering <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="cta-section home-cta">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> BE PART OF THE WORK</div>
            <h2>Care grows when<br /><em>people come together.</em></h2>
            <p>Support Motherhood Home through a contribution, volunteering, or an organizational partnership.</p>
            <div className="hero-actions">
              <Link className="btn btn-cream" to="/donations">Support our work <Heart size={17} /></Link>
              <Link className="text-link light-link" to="/contact-us">Get in touch <ArrowUpRight size={16} /></Link>
            </div>
          </div>
          <img className="cta-photo" src={AMMAVEEDU.extraImages[0]} alt="Community moments at Ammaveedu" loading="lazy" />
        </div>
      </section>
    </>
  )
}
