import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '../router.jsx'
import { HOME, AMMAVEEDU } from '../data/site.js'

export default function About() {
  return <>
    <section className="page-hero compact"><div className="container"><div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> OUR STORY</div><h1>Rooted in <em>compassion.</em></h1><p>Heera World Foundation supports dignity, wellbeing and meaningful care for older people in Kerala.</p></div></section>
    <section className="section-pad"><div className="container editorial-split"><div><div className="eyebrow"><span className="eyebrow-line" /> WHY WE EXIST</div><h2>Care is a responsibility we share.</h2><p className="lead">{HOME.whoWeAre.text}</p><p>Our work is guided by the belief that older people deserve safety, belonging and respect.</p><Link to="/ammaveedu" className="text-link">Discover Motherhood Home <ArrowUpRight size={17}/></Link></div><figure className="editorial-figure"><img src={HOME.mission.image} alt="A community moment at Motherhood Home" loading="lazy"/><figcaption>Motherhood Home · Kerala</figcaption></figure></div></section>
    <section className="section-pad practice-section"><div className="container"><div className="eyebrow"><span className="eyebrow-line"/> OUR PRIORITIES</div><h2>Where we focus our energy.</h2><div className="practice-grid">{HOME.whoWeAre.cards.map((item,i)=><article className="practice-item" key={item.title}><span className="practice-index">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="container editorial-split"><figure className="editorial-figure"><img src={AMMAVEEDU.heroImage} alt="Motherhood Home initiative" loading="lazy"/></figure><div><div className="eyebrow"><span className="eyebrow-line"/> LOOKING FORWARD</div><h2>{HOME.futureVision.title}</h2><p className="lead">{HOME.futureVision.text}</p><p>{HOME.longTerm.closing}</p><Link to="/contact-us" className="btn btn-green">Partner with us <ArrowUpRight size={17}/></Link></div></div></section>
  </>
}
