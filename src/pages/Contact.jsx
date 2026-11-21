import React, { useState } from 'react'
import { MapPin, Phone, Clock, ArrowUpRight, Mail } from 'lucide-react'
import { Link } from '../router.jsx'
import { CONTACT } from '../data/site.js'
import { SocialLinks } from '../components/Layout.jsx'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('sending')
    setError('')
    try {
      const response = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error || 'Your message could not be sent. Please call us instead.')
      setStatus('sent')
      form.reset()
    } catch (err) {
      setError(err.message || 'Unable to send. Please call us instead.')
      setStatus('error')
    }
  }
  return <>
    <section className="page-hero compact"><div className="container"><div className="eyebrow hero-eyebrow"><span className="eyebrow-line"/> LET'S CONNECT</div><h1>Start a <em>conversation.</em></h1><p>Questions about Motherhood Home, volunteering or partnerships? We would like to hear from you.</p></div></section>
    <section className="section-pad"><div className="container contact-grid">
      <div className="contact-cards">
        <div className="contact-card"><MapPin size={20}/><h3>Head office</h3><p>{CONTACT.headOffice.map(line=><span key={line}>{line}</span>)}</p></div>
        <div className="contact-card"><Phone size={20}/><h3>Call us</h3><p>{CONTACT.phones.map(number=><span key={number}><a href={'tel:'+number.replace(/[^\d+]/g,'')}>{number}</a></span>)}</p></div>
        <div className="contact-card"><MapPin size={20}/><h3>Regional office</h3><p>{CONTACT.regionalOffice}</p></div>
        <div className="contact-card"><Clock size={20}/><h3>Office hours</h3><p>{CONTACT.hours.map(line=><span key={line}>{line}</span>)}</p></div>
      </div>
      <div className="contact-form-wrap"><div className="eyebrow"><span className="eyebrow-line"/> SEND AN ENQUIRY</div><h2>How can we <em>help?</em></h2><p>Send us a message. We will respond as soon as we can.</p>
        {status === 'sent' ? <div className="form-feedback" role="status"><Mail size={28}/><h3>Message received</h3><p>Thank you for reaching out. Your enquiry has been submitted.</p><button className="btn btn-green" type="button" onClick={()=>setStatus('idle')}>Send another message</button></div> :
        <form onSubmit={submit}>
          <label>Your name *<input name="name" required maxLength={120} autoComplete="name" placeholder="Full name"/></label>
          <label>Email address *<input type="email" name="email" required maxLength={254} autoComplete="email" placeholder="you@example.com"/></label>
          <label>Phone (optional)<input type="tel" name="phone" maxLength={30} autoComplete="tel" placeholder="Phone number"/></label>
          <label>How can we help? *<textarea name="message" rows="5" required maxLength={4000} placeholder="Tell us about your enquiry"/></label>
          <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex="-1" autoComplete="off"/></label></div>
          {status==='error' && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" disabled={status==='sending'} className="btn btn-green">{status==='sending'?'Sending…':'Send enquiry'} <ArrowUpRight size={16}/></button>
          <p className="form-note">Your details are used only to respond to this enquiry. Do not include sensitive personal or medical information.</p>
        </form>}
      </div>
    </div></section>
    <section className="section-pad work"><div className="container contact-bottom"><div><div className="eyebrow"><span className="eyebrow-line"/> FOLLOW OUR WORK</div><h3>Updates from the foundation and Motherhood Home.</h3><SocialLinks dark/></div><div className="volunteer-box"><h2>Want to <em>volunteer?</em></h2><p>Get in touch to learn about opportunities to contribute your time and skills.</p><Link className="btn btn-green" to="/ammaveedu">Explore Motherhood Home <ArrowUpRight size={16}/></Link></div></div></section>
  </>
}
