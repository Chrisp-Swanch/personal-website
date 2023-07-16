import { useEffect, useRef, useState } from 'react'
import { defaultElement } from '../util'

type Entries = any[]

// const defaultElement =
//   window.document.getElementsByClassName('views-container')[0]

function About() {
  const [currentElement, setCurrentElement] = useState({})

  const elementRef = useRef(null)
  const { current } = elementRef

  useEffect(() => {

    setCurrentElement(defaultElement)

    const handleScroll = (entries: Entries) => {
      entries.forEach((entry) => {
        console.log(
          'intersecting ' + entry.target.id + ': ' + entry.isIntersecting
        )
      })
    }

    const observer = new IntersectionObserver(handleScroll, {
      root: defaultElement,
      threshold: 0.5, // Adjust as needed
    })

    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [elementRef, currentElement])

  return (
    <section ref={elementRef} className="section-container__about" id="about">
      {/* <div className="section-container__about__content">
        <h1>About!</h1>
      </div> */}
    </section>
  )
}

export default About
