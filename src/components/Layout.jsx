import React, { useState } from 'react'
import { Menu, X, Facebook, Instagram, Twitter, Youtube, ArrowUpRight, Heart } from 'lucide-react'
import { Link, useRoute } from '../router.jsx'
import { NAV, CONTACT, SECTOR_MARQUEE } from '../data/site.js'
import logo from '../assets/logo-mark.webp'

export function Brand({ light = false }) {
  return (
    <Link to="/" className={'brand' + (light ? ' brand-light' : '')} aria-label="Heera World Foundation home">
      <img className="brand-mark" src={logo} alt="" />
      <span className="brand-type"><strong>HEERA</strong><small>WORLD FOUNDATION</small></span>
    </Link>
  )
}

export function Marquee() {
  const items = [...SECTOR_MARQUEE, ...SECTOR_MARQUEE]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((s, i) => <span key={i} className="marquee-item">{s}<i>✦</i></span>)}
      </div>
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { path } = useRoute()
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="nav-container">
        <Brand />
        <nav className={'nav-links' + (open ? ' open' : '')} aria-label="Main navigation">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={close} className={path === n.to ? 'active' : ''}>{n.label}</Link>
          ))}
          <Link to="/donations" onClick={close} className="mobile-donate">Donate <Heart size={15} /></Link>
        </nav>
        <Link to="/donations" className="nav-cta">Donate <ArrowUpRight size={16} /></Link>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Brand light />
            <p className="footer-tagline">{CONTACT.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/about-us">About Us</Link>
            <Link to="/about-us">Our Sectors</Link>
            <Link to="/about-us">Impact</Link>
            <Link to="/about-us">Coverage</Link>
            <Link to="/donations">Donate</Link>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <Link to="/about-us">Animal Welfare</Link>
            <Link to="/about-us">Women's Empowerment</Link>
            <Link to="/about-us">Education</Link>
            <Link to="/about-us">Healthcare</Link>
            <Link to="/about-us">Rural Development</Link>
          </div>
          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <strong>Head Office</strong>
            <p>{CONTACT.headOffice.join(' ')}</p>
            <strong>Phone</strong>
            <p>{CONTACT.phones.map((p) => <span key={p} className="footer-phone">{p}</span>)}</p>
            <strong>Regional Office</strong>
            <p>{CONTACT.regionalOffice}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{CONTACT.copyright}</span>
          <div className="footer-social">
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
