import React from 'react'
import { Building2 } from 'lucide-react'
import { DONATIONS } from '../data/site.js'

export default function Donations() {
  return (
    <>
      <section className="page-hero compact">
        <div className="container">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Support Our Work</div>
          <h1>Donations</h1>
          <p>Your contribution brings food to a mother's table, care to her life, and hope for her tomorrow.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container bank-grid">
          <div className="bank-card">
            <div className="eyebrow"><span className="eyebrow-line" /> Our Bank Details</div>
            <dl className="bank-list">
              {DONATIONS.bank.map((b) => (
                <div key={b.label} className="bank-row">
                  <dt>{b.label}</dt>
                  <dd>{b.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bank-visual">
            <img src={DONATIONS.image} alt="Heera World Foundation donation" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-pad work">
        <div className="container company-grid">
          <div className="company-intro">
            <div className="eyebrow"><span className="eyebrow-line" /> Company Information</div>
            <h2>Registered &amp; <em>Transparent</em></h2>
            <p>{DONATIONS.companyIntro}</p>
            <p>{DONATIONS.directors}</p>
            <p>{DONATIONS.cinInfo}</p>
            <p className="status-line">{DONATIONS.status}</p>
          </div>
          <div className="company-table-wrap">
            <h3><Building2 size={18} /> Basic Information</h3>
            <table className="company-table">
              <tbody>
                {DONATIONS.table.map((r) => (
                  <tr key={r.label}>
                    <th>{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
