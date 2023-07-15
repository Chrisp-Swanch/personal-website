import Nav from './Nav'
import NavSelected from './NavSelected'
import { useState } from 'react'

function App() {
  const [navSelection, setNavSelection] = useState('about')

  return (
    <>
      <Nav setNavSelection={setNavSelection} />
      <NavSelected selection={navSelection} />
    </>
  )
}

export default App
