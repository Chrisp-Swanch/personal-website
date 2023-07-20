import NavLogo from './NavLogo'
import NavOption from './NavOption'

const logo = {
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

function Nav() {
  const { display } = logo

  return (
    <nav className="nav-container">
      <NavLogo key="logo" display={display} />
      {navOptions.map((elem) => {
        const { option } = elem
        return (
          <NavOption
            key={option}
            option={option}
          />
        )
      })}
    </nav>
  )
}

export default Nav
