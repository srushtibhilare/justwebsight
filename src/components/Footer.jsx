import './Footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            
            {/* Company Info */}
            <div className="footer-col">
              <h3 className="footer-logo">Consult<span>Pro</span></h3>
              <p className="footer-about">
                We provide innovative business solutions to help companies grow and succeed in today's competitive market.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Twitter"><FiTwitter /></a>
                <a href="#" aria-label="Facebook"><FiFacebook /></a>
                <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                <a href="#" aria-label="Instagram"><FiInstagram /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li><a href="#">Business Consulting</a></li>
                <li><a href="#">Financial Planning</a></li>
                <li><a href="#">Market Research</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">HR Solutions</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4 className="footer-title">Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>123 Business Ave, Suite 400<br />New York, NY 10016</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>info@consultpro.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} ConsultPro. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;