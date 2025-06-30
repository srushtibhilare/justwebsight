import './Pricing.css'
import { FaCheck, FaCrown } from 'react-icons/fa'

const Pricing = () => {
  const plans = [
    {
      name: "STARTUP BUSINESS",
      price: "$199",
      period: "month",
      description: "Perfect for new businesses getting started",
      features: [
        "Up to 5 team members",
        "Limited Installations",
        "Unlimited Downloads",
        "Free One Year Support",
        "15GB Linux Hosting",
        "30GB Storage"
      ],
      buttonText: "Get Started"
    },
    {
      name: "MEDIUM BUSINESS",
      price: "$300",
      period: "month",
      description: "Ideal for growing businesses with more needs",
      features: [
        "Up to 15 team members",
        "Priority Installations",
        "Unlimited Downloads",
        "24/7 Premium Support",
        "25GB Linux Hosting",
        "50GB Storage",
        "Advanced Analytics"
      ],
      buttonText: "Popular Choice",
      featured: true
    },
    {
      name: "ENTERPRISE",
      price: "$499",
      period: "month",
      description: "For large organizations with heavy demands",
      features: [
        "Unlimited team members",
        "Priority Installations",
        "Unlimited Downloads",
        "24/7 VIP Support",
        "50GB Linux Hosting",
        "100GB Storage",
        "Advanced Analytics",
        "Dedicated Account Manager"
      ],
      buttonText: "Contact Sales"
    }
  ]

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">PRICING PLANS</h2>
          <p className="section-subtitle">Choose the perfect plan for your business needs</p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && (
                <div className="popular-badge">
                  <FaCrown className="crown-icon" />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">/{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`plan-button ${plan.featured ? 'featured-button' : ''}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing