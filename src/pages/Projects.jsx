import useReveal from '../components/useReveal.js'
import Footer from '../components/Footer.jsx'
import './Projects.css'

const GH = () => <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02.004 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>

const projects = [
  { name:'Nexa', desc:'A full-featured real-time communication platform. Users can chat, make video & voice calls via WebRTC peer-to-peer, and speak across languages live — English heard in German, French, or Hindi in real time. Complete REST API backend with Socket.io room system.', tags:['React','Node.js','WebRTC','Socket.io','Peer.js','Tailwind CSS'], github:'https://github.com/Henilt31/chat-application' },
  { name:'PeerMint', desc:"An OpenSea-inspired decentralized NFT marketplace on Ethereum. MetaMask wallet integration lets users browse & interact with blockchain assets securely. Reservoir API powers real-time NFT metadata. Next.js serverless routes prevent CORS — full TypeScript throughout.", tags:['Next.js','React','TypeScript','Ethereum','ethers.js','MetaMask'], github:'https://github.com/Henilt31' },
]

export default function Projects() {
  useReveal('projects')
  return (
    <div className="projects-page page-enter">
      <div className="projects-header reveal"><h1>My Projects</h1><p>Things I've actually shipped — end-to-end, production-ready.</p></div>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.name} className="proj-card card reveal">
            <div className="proj-card-name">{p.name}</div>
            <p className="proj-card-desc">{p.desc}</p>
            <div className="proj-card-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <div className="proj-card-actions">
              <a href={p.github} target="_blank" rel="noreferrer" className="proj-btn"><GH/> Code</a>
            </div>
          </div>
        ))}
        <div className="proj-more card reveal">
          <div className="proj-more-title">More dropping soon</div>
          <p>Actively building across Full-Stack, Web3 &amp; AI. All experiments on GitHub.</p>
          <div style={{marginTop:'1.5rem'}}><a href="https://github.com/Henilt31" target="_blank" rel="noreferrer" className="btn-ghost">Follow on GitHub ↗</a></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
