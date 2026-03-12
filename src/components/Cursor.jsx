import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }
    const loop = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.11
      p.ry += (p.my - p.ry) * 0.11
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + 'px'
        ringRef.current.style.top = p.ry + 'px'
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    const addHover = () => {
      document.querySelectorAll('a,button,.card,.skill-pill,.stack-item,.ach-item,.proj-card,.social-icon').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'))
      })
    }
    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(loop)
    const observer = new MutationObserver(addHover)
    observer.observe(document.body, { childList: true, subtree: true })
    addHover()
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
