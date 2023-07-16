function Work() {
  const handleMouseOver = () => {
    // console.log('Work Page!')
  }

  return (
    <>
      <section className="section-container__work">
        <div className="section-container__work__gradient"></div>
        <div
          onMouseOver={handleMouseOver}
          onFocus={handleMouseOver}
          className="section-container__work__background"
          id="work"
        >
          <div className="section-container__work__content">
            <h1>Work!</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
