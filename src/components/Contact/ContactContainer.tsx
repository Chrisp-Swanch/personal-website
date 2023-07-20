/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useRef, useEffect, useContext } from 'react'
import { Context } from '../../context'
import ContactForm from './ContactForm'

function ContactContainer() {
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
    <section
      ref={elementRef}
      className="section-container__contact"
      id="contact"
    >
      <ContactForm />
    </section>
  )
}

export default ContactContainer
