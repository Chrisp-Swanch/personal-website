import { useState } from 'react'

import NavTitle from './NavTitle'
import NavOption from './NavOption'

const navTitle = {
  option: 'title',
  display: ['Chris Swan', 'Fullstack Developer'],
}

const navOptions = [
  {
    option: 'about',
  },
  {
    option: 'work',
  },
  {
    option: 'contact',
  },
]

interface Props {
  setNavSelection: React.Dispatch<React.SetStateAction<string>>
}

function Nav(props: Props) {
  const { setNavSelection } = props

  return (
    <nav className="nav-container">
      <NavTitle key={navTitle.option} title={navTitle} />
      {navOptions.map((elem) => {
        const { option } = elem
        return (
          <NavOption
            key={option}
            option={option}
            setNavSelection={setNavSelection}
          />
        )
      })}
    </nav>
  )
}

export default Nav
