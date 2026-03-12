import useReveal from '../components/useReveal.js'
import Footer from '../components/Footer.jsx'
import './Home.css'

const stack = ['JavaScript','TypeScript','Python','Java','React','Next.js','Node.js','Express.js','WebRTC','Socket.io','Peer.js','Tailwind CSS','Ethereum','ethers.js','MetaMask','Smart Contracts','MongoDB','REST APIs','Generative AI','Prompt Engineering']

export default function Home({ setPage }) {
  useReveal('home')
  return (
    <div className="home-page page-enter">
      <section className="hero">
        <div className="hero-eyebrow"><div className="hero-eyebrow-dot"/>Full-Stack · Web3 · AI</div>
        <h1 className="hero-name">Hi, I'm <span className="name-accent">Henil</span><br/>Thakkar<span className="cursor-blink"/></h1>
        <p className="hero-tagline">Developer building <strong>real-time systems</strong>, <strong>Web3 apps</strong> &amp; <strong>AI-powered tools</strong> — from chat platforms to NFT marketplaces. I ship things that work.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setPage('contact')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Get In Touch
          </button>
          <button className="btn-ghost" onClick={() => setPage('projects')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            View Projects
          </button>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/Henilt31" target="_blank" rel="noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02.004 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/henil-thakkar-54bb3227a" target="_blank" rel="noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
          </a>
          <a href="mailto:henilthakkar31@gmail.com" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
        <div className="scroll-hint"><div className="scroll-line"/><span>Scroll</span></div>
      </section>

      <div className="home-section-wrap">
        <div className="home-about-card card reveal">
          <h2>About Me</h2>
          <p>I'm a developer from <strong>Vadodara, India</strong> who builds production-grade systems — not just demos. I've shipped a <strong>real-time multilingual chat platform</strong> (Nexa) complete with WebRTC video calls and live cross-language speech translation, and a <strong>decentralized NFT marketplace</strong> (PeerMint) with full MetaMask integration on Ethereum. When I'm not building, I'm <strong>exploring AI tools</strong>, solving DSA on LeetCode, and pushing experiments to GitHub. I'm obsessed with the intersection of <strong>Web3, real-time systems, and AI</strong> — and I'm just getting started.</p>
        </div>
        <div className="home-stack-card card reveal">
          <h2>Tech Stack</h2>
          <div className="stack-grid">
            {stack.map(s => <span key={s} className="stack-item">{s}</span>)}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
