import React, { useState } from 'react'
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter, Youtube, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Link } from '../router.jsx'
import { CONTACT } from '../data/site.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true) }
  return (
    <>
      <section className="page-hero compact">
        <div className="container">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Get In Touch</div>
          <h1>Contact <em>Us</em></h1>
          <p>We'd love to hear from you. Reach out for partnerships, volunteering, donations, or any inquiries about our mission.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container contact-grid">
          <div className="contact-cards">
            <div className="contact-card">
              <MapPin size={20} />
              <h3>Head Office</h3>
              <p>{CONTACT.headOffice.map((l) => <span key={l}>{l}</span>)}</p>
            </div>
            <div className="contact-card">
              <Phone size={20} />
              <h3>Phone</h3>
              <p>{CONTACT.phones.map((p) => <span key={p}>{p}</span>)}</p>
            </div>
            <div className="contact-card">
              <MapPin size={20} />
              <h3>Regional Office</h3>
              <p><span>{CONTACT.regionalOffice}</span></p>
            </div>
            <div className="contact-card">
              <Clock size={20} />
              <h3>Working Hours</h3>
              <p>{CONTACT.hours.map((h) => <span key={h}>{h}</span>)}</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="eyebrow"><span className="eyebrow-line" /> Send a Message</div>
            <h2>We're Here to <em>Help</em></h2>
            <p>Fill out the form below and our team will get back to you within 24 hours.</p>
            {sent ? (
              <div className="modal-success">
                <CheckCircle2 size={40} />
                <h3>Thank you for reaching out.</h3>
                <p>This demo form hasn't sent a message yet. Connect it to your email or form service before publishing.</p>
                <button className="btn btn-green" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <label>Name *<input name="name" required placeholder="Your full name" /></label>
                <label>Email or Phone *<input name="contact" required placeholder="you@example.com or phone" /></label>
                <label>Message *<textarea name="message" rows="4" required placeholder="How can we help?" /></label>
                <button type="submit" className="btn btn-green">Send Message <ArrowUpRight size={16} /></button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad work">
        <div className="container contact-bottom">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Follow Us</div>
            <h3>Stay connected with our latest initiatives and community impact stories.</h3>
            <div className="footer-social dark">
              <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
          <div className="volunteer-box">
            <h2>Want to <em>Volunteer</em> With Us?</h2>
            <p>Join our team of dedicated volunteers across all 14 districts of Kerala and make a real difference in the lives of those who need it most.</p>
            <Link className="btn btn-green" to="/about-us">Learn More About Us <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
