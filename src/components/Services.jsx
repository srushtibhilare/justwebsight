import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '💼',
      title: "CONSULTANCY",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem sum has been the industry's standard dummy."
    },
    {
      icon: '💰',
      title: "FINANCE",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem sum has been the industry's standard dummy."
    },
    {
      icon: '📢',
      title: "ADVERTISING",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem sum has been the industry's standard dummy."
    },
    {
      icon: '📈',
      title: "BUSINESS PLANNING",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem sum has been the industry's standard dummy."
    },
    {
      icon: '💻',
      title: "ONLINE SUPPORT",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem sum has been the industry's standard dummy."
    },
    {
      icon: '💡',
      title: "CREATIVE IDEAS",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem sum has been the industry's standard dummy."
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="section-subtitle">
            Professional business solutions and consulting services to help your business grow
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn more <span className="link-arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services