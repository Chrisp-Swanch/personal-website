import { useEffect, useState } from 'react'
import { Context, ContextProps } from '../context'
import { scrollToElement } from '../util'

import NavContainer from './Nav/NavContainer'
import VerticalText from './Nav/VerticalText'
import Views from './Views'

function App() {
  const [navSelection, setNavSelection] = useState('about')

  const contextValue: ContextProps = {
    navSelection,
    setNavSelection,
  }

  useEffect(() => {
    scrollToElement('about')
  }, [])

  return (
    <>
      <Context.Provider value={contextValue}>
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