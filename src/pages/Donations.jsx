import React, { useState } from 'react'
import { Building2, Copy, Check, ArrowUpRight } from 'lucide-react'
import { DONATIONS } from '../data/site.js'
import { Link } from '../router.jsx'

export default function Donations() {
  const [copied,setCopied]=useState('')
  async function copy(label,value) {
    try { await navigator.clipboard.writeText(value); setCopied(label) }
    catch { setCopied('') }
  }
  return <>
    <section className="page-hero compact"><div className="container"><div className="eyebrow hero-eyebrow"><span className="eyebrow-line"/> MAKE AN IMPACT</div><h1>Support the <em>work.</em></h1><p>Your contribution can help sustain the care and support offered through Motherhood Home.</p></div></section>
    <section className="section-pad"><div className="container bank-grid">
      <div className="bank-card"><div className="eyebrow"><span className="eyebrow-line"/> BANK TRANSFER DETAILS</div><h2>Contribute directly.</h2><p>Please confirm the beneficiary details with the foundation before transferring funds. This page does not process online payments.</p><dl className="bank-list">{DONATIONS.bank.filter(b=>b.label!=='Cust ID').map(b=><div className="bank-row" key={b.label}><dt>{b.label}</dt><dd>{b.value}</dd><button className="copy-detail" type="button" onClick={()=>copy(b.label,b.value)} aria-label={'Copy '+b.label}>{copied===b.label?<Check size={17}/>:<Copy size={17}/>}</button></div>)}</dl><p className="form-note">For receipts, donation queries or confirmation of banking details, please contact the foundation directly.</p><Link className="btn btn-green" to="/contact-us">Contact the team <ArrowUpRight size={17}/></Link></div>
      <div className="bank-visual"><img src={DONATIONS.image} alt="Heera World Foundation community initiative" loading="lazy"/></div>
    </div></section>
    <section className="section-pad work"><div className="container company-grid"><div className="company-intro"><div className="eyebrow"><span className="eyebrow-line"/> ORGANISATION DETAILS</div><h2>Know who you are <em>supporting.</em></h2><p>{DONATIONS.companyIntro}</p><p>For current registration documents, tax eligibility and donation receipts, contact the foundation before making a contribution.</p></div><div className="company-table-wrap"><h3><Building2 size={18}/> Registered information</h3><table className="company-table"><tbody>{DONATIONS.table.filter(row=>['CIN','Name','Company Status','ROC','Registration Number','Date of Incorporation'].includes(row.label)).map(row=><tr key={row.label}><th scope="row">{row.label}</th><td>{row.value}</td></tr>)}</tbody></table><p className="form-note">Information is reproduced from existing foundation content and should be verified against current official records.</p></div></div></section>
  </>
}
