import React, { useState } from 'react'
import { Building2 } from 'lucide-react'
import { DONATIONS } from '../data/site.js'

const upiId = '8921811355@okbizaxis'
const qrImage = '/media/heera-upi-qr.png'
const btn = { display: 'inline-block', background: '#166534', color: '#fff', padding: '14px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', margin: '8px 8px 8px 0' }

export default function Donations() {
  const [copied, setCopied] = useState(false)

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(upiId)
    } catch {
      const t = document.createElement('textarea')
      t.value = upiId
      document.body.appendChild(t)
      t.select()
      document.execCommand('copy')
      document.body.removeChild(t)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

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
            <img src={qrImage} alt="Heera World Foundation UPI QR code" width="240" height="240" style={{ display: 'block', width: '240px', maxWidth: '100%', height: 'auto', margin: '16px 0', background: '#fff', borderRadius: '8px' }} />
            <div>
              <button type="button" onClick={copyUpi} style={btn}>
                {copied ? 'UPI ID Copied ✓' : 'Copy UPI ID'}
              </button>
              <a href={qrImage} download="heera-world-foundation-upi-qr.png" style={btn}>
                Save QR Code
              </a>
            </div>
            <p><strong>How to donate from your phone:</strong></p>
            <ol style={{ paddingLeft: '20px', lineHeight: 1.7 }}>
              <li>Tap <strong>Copy UPI ID</strong>, open GPay / PhonePe / Paytm, choose "Pay UPI ID" and paste it.</li>
              <li>Or tap <strong>Save QR Code</strong>, open your UPI app's scanner and pick the image from your gallery.</li>
              <li>Enter your amount (₹10, ₹100 or any amount) and confirm the receiver is Heera World Foundation.</li>
            </ol>
            <p>On a computer? Scan the QR code above with your phone's UPI app.</p>
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
