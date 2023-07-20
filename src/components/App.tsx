import NavContainer from './Nav/NavContainer'
import VerticalText from './Nav/VerticalText'
import { useState } from 'react'
import Views from './Views'
import { Context, ContextProps } from '../context'

function App() {
  const [navSelection, setNavSelection] = useState('about' as string)

  const contextValue: ContextProps = {
    navSelection,
    setNavSelection,
  }

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