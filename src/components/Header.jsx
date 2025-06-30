import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Disable body scroll when mobile menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo">
            <a href="#home" className="logo-link">
              <span className="logo-text">Consult</span>
              <span className="logo-highlight">Pro</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
            
            <a href="#contact" className="cta-button">
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className={`mobile-menu-button ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FaBars className="menu-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <a 
                  href="#home" 
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li className="mobile-nav-item">
                <a 
                  href="#about" 
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li className="mobile-nav-item">
                <a 
                  href="#services" 
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li className="mobile-nav-item">
                <a 
                  href="#pricing" 
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Pricing
                </a>
              </li>
              <li className="mobile-nav-item">
                <a 
                  href="#contact" 
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
            
            <a 
              href="#contact" 
              className="mobile-cta-button"
              onClick={toggleMenu}
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header