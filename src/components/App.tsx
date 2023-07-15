import Nav from './Nav'
import NavSelected from './NavSelected'
import { useState, Dispatch, SetStateAction } from 'react'
import Views from './Views'
import React from 'react'

type ContextType = string | Dispatch<SetStateAction<string>>[]

export const Context = React.createContext('about' as ContextType)

function App() {
  const [navSelection, setNavSelection] = useState('about' as string)

  return (
    <>
      <Context.Provider value={[navSelection, setNavSelection] as ContextType}>
        <section className="nav-section">
          <Nav setNavSelection={setNavSelection} />
          <NavSelected key={navSelection} selection={navSelection} />
        </section>
        <Views />
      </Context.Provider>
    </>
  )
}

export default App
