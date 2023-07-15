import Nav from './Nav'
import NavSelected from './NavSelected'
import { useState } from 'react'
import Views from './Views'

function App() {
  const [navSelection, setNavSelection] = useState('about')

  return (
    <>
      <Nav setNavSelection={setNavSelection} />
      <NavSelected selection={navSelection} />
      <Views />
    </>
  )
}

export default App
