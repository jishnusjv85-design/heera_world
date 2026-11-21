import React, { useEffect, useState } from 'react'
import { ArrowUpRight, Facebook, Instagram, Heart, Menu, X, Phone } from 'lucide-react'
import { Link, useRoute } from '../router.jsx'
import { NAV, CONTACT } from '../data/site.js'
import logo from '../assets/logo-mark.webp'

export function Brand({ light = false }) {
  return (
    <Link to="/" className={'brand' + (light ? ' brand-light' : '')} aria-label="Heera World Foundation — home">
      <img className="brand-mark" src={logo} alt="" width="50" height="50" />
      <span className="brand-type"><strong>HEERA</strong><small>WORLD FOUNDATION</small></span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { path } = useRoute()
  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    function onKey(event) { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return (
    <header className="site-header">
      <div className="nav-container">
        <Brand />
        <nav id="primary-navigation" className={'nav-links' + (open ? ' open' : '')} aria-label="Main navigation">
          {NAV.filter(item => item.to !== '/donations').map(item => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)} aria-current={path === item.to ? 'page' : undefined} className={path === item.to ? 'active' : ''}>{item.label}</Link>
          ))}
          <Link to="/donations" onClick={() => setOpen(false)} className="mobile-donate">Support our work <Heart size={16} /></Link>
        </nav>
        <Link to="/donations" className="nav-cta">Support our work <ArrowUpRight size={17} /></Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}

export function SocialLinks({ dark = false }) {
  return (
    <div className={'footer-social' + (dark ? ' dark' : '')}>
      {CONTACT.facebook && <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Heera World Foundation on Facebook"><Facebook size={18} /></a>}
      {CONTACT.instagram && <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Heera World Foundation on Instagram"><Instagram size={18} /></a>}
    </div>
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
            <SocialLinks />
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <Link to="/about-us">About the foundation</Link>
            <Link to="/management">Our people</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/ammaveedu">Motherhood Home</Link>
          </div>
          <div className="footer-col">
            <h4>Get involved</h4>
            <Link to="/donations">Make a contribution</Link>
            <Link to="/contact-us">Contact the team</Link>
            <Link to="/contact-us">Volunteer or partner</Link>
          </div>
          <div className="footer-col footer-contact">
            <h4>Visit or call</h4>
            <strong>Head office</strong>
            <p>{CONTACT.headOffice.join(' ')}</p>
            <strong>Phone</strong>
            {CONTACT.phones.map(number => <p className="footer-phone" key={number}><Phone size={13} aria-hidden="true" /> {number}</p>)}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Heera World Foundation. All rights reserved.</span>
          <span>Care • Dignity • Community</span>
        </div>
      </div>
    </footer>
  )
}
