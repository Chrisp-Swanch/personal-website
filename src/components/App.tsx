import { useEffect, useState } from 'react'
import { Context, ContextProps } from '../context'
import { scrollToElement } from '../util'
import Gallery from './Galley'

import NavContainer from './Nav/NavContainer'
import VerticalText from './Nav/VerticalText'
import Views from './Views'

function App() {
  const [navSelection, setNavSelection] = useState('about')
  const [galleryActive, setGalleryActive] = useState(false)

  const contextValue: ContextProps = {
    navSelection,
    setNavSelection,
    galleryActive,
    setGalleryActive
  }

  useEffect(() => {
    scrollToElement('about')
  }, [])

  return (
    <>
      <Context.Provider value={contextValue}>
        {galleryActive && <Gallery />}
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