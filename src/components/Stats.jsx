import './Stats.css'
import { useEffect } from 'react'

const Stats = () => {
  const stats = [
    { value: "20K", label: "HAPPY CLIENTS", icon: "😊" },
    { value: "550", label: "PROFESSIONALS", icon: "👔" },
    { value: "50K", label: "PROJECT COMPLETED", icon: "✅" },
    { value: "10+", label: "BEST AWARDS", icon: "🏆" }
  ]

  useEffect(() => {
    const statValues = document.querySelectorAll('.stat-value')

    const animateCounters = () => {
      statValues.forEach(stat => {
        const target = parseInt(stat.dataset.count)
        const suffix = stat.textContent?.includes('+') ? '+' : ''
        const duration = 2000
        const start = 0
        const increment = target / (duration / 16)
        
        let current = start
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            clearInterval(timer)
            current = target
          }
          if (stat.textContent) {
            stat.textContent = Math.floor(current) + suffix
          }
        }, 16)
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    const statsSection = document.querySelector('.stats-section')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value" data-count={stat.value.replace('+', '')}>
                0
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats