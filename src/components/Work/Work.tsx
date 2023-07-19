/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useRef, useEffect, useContext } from 'react'
import { defaultElement } from '../../util'
import { Context } from '../../context'
import WorkContent from './WorkContent'

function Work() {
  const [currentElement, setCurrentElement] = useState({})
  const { setNavSelection } = useContext(Context)

  const elementRef = useRef(null)
  const { current } = elementRef

  useEffect(() => {
    setCurrentElement(defaultElement)

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const { id } = entry.target
        if (entry.isIntersecting) setNavSelection(id)
      })
    }

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      threshold: 0.5,
    })

    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [currentElement])

  // conditional render to only show if work section is in view?
  return (
    <>
      <section ref={elementRef} id="work" className="section-container__work">
        <div className="section-container__work__gradient"></div>
        <WorkContent />
      </section>
    </>
  )
}

export default Work
