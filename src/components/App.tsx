import Nav from './Nav'
import NavSelected from './NavSelected'
import { useState } from 'react'
import Views from './Views'

function App() {
  const [navSelection, setNavSelection] = useState('about')

  return (
    <>
      <section className="nav-section">
        <Nav setNavSelection={setNavSelection} />
        <NavSelected key={navSelection} selection={navSelection} />
      </section>
      <Views />
    </>
  )
}

export default App
