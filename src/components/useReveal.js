import { useEffect } from 'react'

export default function useReveal(dep) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => el.classList.remove('vis'))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
    }, { threshold: 0.08 })
    const timer = setTimeout(() => {
      elements.forEach(el => observer.observe(el))
    }, 80)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [dep])
}
