import { useEffect, useState } from 'react'
import { ImageData } from '../../models/Feature'
import { Context, ContextProps } from '../context'
import { scrollToElement } from '../util'
import Gallery from './Gallery'

import NavContainer from './Nav/NavContainer'
import VerticalText from './Nav/VerticalText'
import Views from './Views'

function App() {
  const [navSelection, setNavSelection] = useState('about')
  const [galleryImages, setGalleryImages] = useState([] as ImageData[])
  const [galleryActive, setGalleryActive] = useState(false)
  const [galleryImgIndex, setGalleryImgIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)
  
  const contextValue: ContextProps = {
    navSelection,
    setNavSelection,
    galleryActive,
    setGalleryActive,
    galleryImages,
    setGalleryImages,
    galleryImgIndex,
    setGalleryImgIndex,
    isAutoScrolling,
    setIsAutoScrolling
  }

  useEffect(() => {
    scrollToElement('about')
  }, [])

  return (
    <>
      <Context.Provider value={contextValue}>
        {galleryActive && <Gallery />}
        {isAutoScrolling && <div className="overlay"></div>}
        <section className="nav-section">
          <NavContainer />
          <VerticalText key={navSelection} id={navSelection} />
        </section>
        <Views />
      </Context.Provider>
    </>
  )
}

export default App
