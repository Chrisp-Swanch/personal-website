/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useRef, useEffect, useContext } from 'react'
import { defaultElement } from '../../util'
import { Context } from '../../context'
import ContactForm from './ContactForm'

function Contact() {
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

  return (
    <section
      ref={elementRef}
      className="section-container__contact"
      id="contact"
    >
      <ContactForm />
    </section>
  )
}

export default Contact
