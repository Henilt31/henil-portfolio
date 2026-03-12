import useReveal from '../components/useReveal.js'
import Footer from '../components/Footer.jsx'
import './Skills.css'

const groups = [
  {label:'Languages',items:['JavaScript','TypeScript','Python','Java','HTML5','CSS3']},
  {label:'Frameworks & Libraries',items:['React','Next.js','Node.js','Express.js','Tailwind CSS','ethers.js','REST APIs']},
  {label:'Real-time & Communication',items:['WebRTC','Socket.io','Peer.js','WebSockets','Serverless']},
  {label:'Web3 & Blockchain',items:['Ethereum','Smart Contracts','MetaMask','ethers.js','NFT Marketplace Dev','Reservoir API']},
  {label:'Tools & Databases',items:['MongoDB','Git & GitHub','Postman','npm','Cursor AI']},
  {label:'AI & Automation',items:['Generative AI','Prompt Engineering','AI Workflow Automation','LLM Integration']},
]
const achievements = [
  {title:'Smart India Hackathon (SIH)',desc:"Competed in India's largest national-level government hackathon, building tech solutions for real-world challenges under pressure."},
  {title:'Multiple College Hackathons',desc:'Rapid prototyping and team collaboration in time-constrained environments.'},
  {title:'LeetCode',desc:'Active problem solver consistently practising Data Structures & Algorithms to sharpen engineering fundamentals.'},
  {title:'State-Level Badminton Player',desc:'Represented district/state in competitive tournaments — discipline and pressure-handling I bring to code.'},
]

export default function Skills() {
  useReveal('skills')
  return (
    <div className="skills-page page-enter">
      <div className="skills-wrap">
        <h1 className="reveal">Skills &amp; Interests</h1>
        <p className="skills-sub reveal">What I build with and what I'm passionate about.</p>
        {groups.map(g => (
          <div key={g.label} className="skill-section reveal">
            <div className="skill-section-title">{g.label}</div>
            <div className="skill-row">{g.items.map(s => <span key={s} className="skill-pill">{s}</span>)}</div>
          </div>
        ))}
        <div className="passion-card card reveal">
          <h3>What drives me</h3>
          <p>I'm obsessed with <strong>AI and its intersection with real-time systems and Web3</strong>. Whether it's integrating LLMs into products, building agents that automate workflows, or exploring how blockchain can power trustless AI coordination — I'm constantly experimenting. I believe the next wave of great software will be <strong>AI-native, real-time, and decentralized</strong>. I want to build it.</p>
        </div>
        <div className="skill-section reveal" style={{marginTop:'3rem'}}>
          <div className="skill-section-title">Highlights</div>
          <div className="achievements-list">
            {achievements.map(a => (
              <div key={a.title} className="ach-item">
                <div className="ach-dot"/>
                <div className="ach-text"><strong>{a.title}</strong> — {a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
