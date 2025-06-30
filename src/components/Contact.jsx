import './Contact.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GET IN TOUCH</h2>
          <p className="section-subtitle">We'd love to hear from you</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="form-input"
                  placeholder="Your Phone Number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="form-textarea"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                SUBMIT
                <span className="button-icon">→</span>
              </button>
            </form>
          </div>
          
          <div className="contact-info-container">
            <div className="contact-info">
              <h3 className="info-title">Contact Information</h3>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <p>+1 123 456 7890</p>
                    <p>+1 987 654 3233</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <p>support@gmail.com</p>
                    <p>info@gmail.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <p>125 Business Avenue</p>
                    <p>Houston, TX 77002</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <div className="info-content">
                    <p>Mon - Fri: 8 AM to 5 PM</p>
                    <p>Sat - Sun: 9 AM to 2 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact