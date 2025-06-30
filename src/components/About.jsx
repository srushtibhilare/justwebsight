import './About.css';
import aboutImage from '../assets/Screenshot 2025-06-29 204201.png'; // Adjust the path as needed

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              <span className="title-decoration">ABOUT US</span>
            </h2>
            <h3 className="about-heading">OUR 50 YEARS OF EXPERIENCE WILL HELP YOU TO GROW YOUR BUSINESS</h3>
            <p className="about-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h4 className="feature-title">SECURITY MANAGEMENT</h4>
                <p className="feature-text">Lorem ipsum dolor sit amet</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h4 className="feature-title">FINANCE PLANNING</h4>
                <p className="feature-text">Lorem ipsum dolor sit amet</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🎓</div>
                <h4 className="feature-title">EDUCATIONAL SUPPORT</h4>
                <p className="feature-text">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            
            <a href="#services" className="about-button">
              LEARN MORE
              <span className="button-arrow">→</span>
            </a>
          </div>
          
          <div className="about-image-container">
            <div className="about-image-frame">
              <div className="about-image">
                <img 
                  src={aboutImage} 
                  alt="About Our Company" 
                  className="about-image-content"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                
              </div>
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;