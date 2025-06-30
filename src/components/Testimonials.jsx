import './Testimonials.css'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lorem Ipsum is simply dummy text of the printing and typing industry Lorem Ipsum has been the industry's standard dummy text Loremsimply",
      name: "Monster Dustinegre",
      position: "MD, Envoto",
      avatar: "👨‍💼"
    },
    {
      quote: "Lorem Ipsum is simply dummy text of the printing and typing industry Lorem Ipsum has been the industry's standard dummy text Loremsimply",
      name: "Devil Shohemark",
      position: "CEO, Kidanichi",
      avatar: "👩‍💼"
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">HAPPY CLIENTS</h2>
          <p className="section-subtitle">What our clients say about our services</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials