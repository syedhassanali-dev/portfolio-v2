import { useState } from 'react'
import { ME } from '../data'

export default function Contact() {
  const [f, setF] = useState({ name: '', type: 'Business Website', msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const text = `Hi ${ME.name.split(' ')[0]}, I'm ${f.name || '[my name]'}. I need: ${f.type}. ${f.msg}`
  const wa = `https://wa.me/${ME.whatsapp}?text=${encodeURIComponent(text)}`
  const mail = `mailto:${ME.email}?subject=${encodeURIComponent('Project enquiry: ' + f.type)}&body=${encodeURIComponent(text)}`

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <div>
            <h2>Tell me about your project</h2>
            <p className="lead">I reply within a few hours with ideas and a fixed quote. No sales pressure.</p>
            <div className="alt"><a href={'mailto:' + ME.email}>{ME.email}</a></div>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Your name
                <input value={f.name} onChange={set('name')} placeholder="Full name" />
              </label>
              <label>What do you need?
                <select value={f.type} onChange={set('type')}>
                  <option>Landing Page</option>
                  <option>Business Website</option>
                  <option>Custom Web App</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>Project details
                <textarea value={f.msg} onChange={set('msg')} placeholder="What does your business do and what do you want the site to achieve?" />
              </label>
              <a className="btn primary" href={wa} target="_blank" rel="noopener noreferrer">Send on WhatsApp</a>
              <a className="btn ghost" style={{ color: 'var(--bg)', borderColor: 'var(--bg)', justifyContent: 'center' }} href={mail}>Send by email</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
