/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../../context'
import AboutContent from './AboutContent'

function AboutContainer() {
  const [refresh, setRefresh] = useState(false as boolean)
  const { setNavSelection } = useContext(Context)

  const elementRef = useRef(null)
  const { current } = elementRef

  useEffect(() => {
    setRefresh(true)

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
  }, [refresh])

  return (
    <section ref={elementRef} className="section-container__about" id="about">
      <AboutContent />
    </section>
  )
}

export default AboutContainer
