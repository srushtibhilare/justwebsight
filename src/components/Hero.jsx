import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">We professional consultancy</h1>
          <h2 className="hero-subtitle">WE BUILD YOUR BUSINESS WITH OUR EXPERTS</h2>
          <p className="hero-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="hero-button primary">CONTACT US</a>
            <a href="#pricing" className="hero-button outline">PURCHASE NOW</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero