import React from 'react'
import { Building2 } from 'lucide-react'
import { DONATIONS } from '../data/site.js'

const upiId = '8921811355@okbizaxis'
const qrImage = '/media/heera-upi-qr.png'
const upiLink = 'upi://pay?pa=8921811355@okbizaxis&pn=HEERA%20WORLD%20FOUNDATION'
  + '&mc=8398&mode=04&purpose=00&tn=Donation&cu=INR'
const btn = { display: 'inline-block', background: '#166534', color: '#fff', padding: '14px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', margin: '8px 8px 8px 0' }

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

      <section className="section-pad" aria-labelledby="building-hope-title">
        <div className="container">
          <div className="bank-card">
            <div className="eyebrow"><span className="eyebrow-line" /> Building Hope</div>
            <h2 id="building-hope-title">A Home for Pathumma</h2>
            <p>Support this housing campaign with a contribution of your choice.</p>
            <p>Receiver: Heera World Foundation</p>
            <p>UPI ID: {upiId}</p>
            <a href={upiLink} style={{ ...btn, fontSize: '1.1rem', padding: '16px 32px' }}>
              Donate Now
            </a>
            <p style={{ marginTop: '24px' }}>On a computer? Scan this QR code with your phone's UPI app.</p>
            <img src={qrImage} alt="Heera World Foundation UPI QR code" width="200" height="200" style={{ display: 'block', width: '200px', maxWidth: '100%', height: 'auto', margin: '8px 0', background: '#fff', borderRadius: '8px' }} />
          </div>
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
