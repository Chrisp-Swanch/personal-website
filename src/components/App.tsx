import Nav from './Nav'
import NavSelected from './NavSelected'
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
          <Nav />
          <NavSelected key={navSelection} id={navSelection} />
        </section>
        <Views />
      </Context.Provider>
    </>
  )
}

export default App