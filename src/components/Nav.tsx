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

function Nav() {

  return (
    <nav className="nav-container">
      <NavTitle key={navTitle.option} title={navTitle} />
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
