function About() {
  const handleMouseOver = () => {
    console.log('About Page!')
  }

  return (
    <section
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      className="section-container__about"
      id="about"
    >
      <div className="section-container__about__content">
        <h1>About!</h1>
      </div>
    </section>
  )
}

export default About
