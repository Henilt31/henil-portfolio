import { useState, useEffect } from 'react'
import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('ht-theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('ht-theme', theme)
  }, [theme])

  const handleSetPage = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  const pages = {
    home: <Home setPage={handleSetPage} />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />,
  }

  return (
    <>
      <div className="grid-bg" />
      <div className="noise" />
      <Cursor />
      <Navbar page={page} setPage={handleSetPage} theme={theme} toggleTheme={toggleTheme} />
      <main key={page}>{pages[page]}</main>
    </>
  )
}
