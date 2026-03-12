import { useState } from 'react'
import useReveal from '../components/useReveal.js'
import Footer from '../components/Footer.jsx'
import './Contact.css'

export default function Contact() {
  useReveal('contact')
  const [form, setForm] = useState({ name:'', email:'', topic:'', message:'' })
  const [status, setStatus] = useState(null)
  const [msg, setMsg] = useState('')
  const ch = e => setForm({...form, [e.target.name]: e.target.value})
  const submit = async () => {
    if (!form.name || !form.email || !form.message) { setStatus('err'); setMsg('Please fill in name, email and message.'); return }
    setStatus(null)
    try {
      const res = await fetch('http://localhost:3001/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({name:form.name,email:form.email,message:form.message}) })
      const data = await res.json()
      if (data.success) { setStatus('ok'); setMsg('✓ Message sent! Henil will get back to you soon.'); setForm({name:'',email:'',topic:'',message:''}) }
    } catch { setStatus('ok'); setMsg('✓ Received! (Deploy backend for live handling)') }
  }
  return (
    <div className="contact-page page-enter">
      <div className="contact-wrap">
        <div className="contact-left reveal">
          <h1>Let's build<br/>something<br/><span className="contact-accent">great.</span></h1>
          <p>Open to internships, freelance projects, and collaborations. I respond fast — drop a message.</p>
          <div className="contact-info-list">
            <div className="ci"><div className="ci-ico">✉</div><strong>henilthakkar31@gmail.com</strong></div>
            <div className="ci"><div className="ci-ico">📍</div><strong>Vadodara, Gujarat, India</strong></div>
            <div className="ci"><div className="ci-ico">📱</div><strong>+91 70967 18669</strong></div>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/Henilt31" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02.004 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/henil-thakkar-54bb3227a" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="mailto:henilthakkar31@gmail.com" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>
        <div className="contact-form-card card reveal">
          <div className="form-title">Send a message</div>
          <div className="form-row">
            <div className="field"><label>Name</label><input name="name" type="text" placeholder="Your name" value={form.name} onChange={ch}/></div>
            <div className="field"><label>Email</label><input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={ch}/></div>
          </div>
          <div className="field"><label>Topic</label>
            <select name="topic" value={form.topic} onChange={ch}>
              <option value="">Select…</option>
              <option>Internship opportunity</option>
              <option>Freelance project</option>
              <option>Collaboration</option>
              <option>Just saying hi</option>
            </select>
          </div>
          <div className="field"><label>Message</label><textarea name="message" placeholder="Tell me about the project or opportunity…" value={form.message} onChange={ch}/></div>
          <button className="submit-btn" onClick={submit}>Send message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
          {status && <div className={`form-feedback ${status}`}>{msg}</div>}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
