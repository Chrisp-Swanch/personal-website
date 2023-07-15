import NavOption from './NavOption'
import NavTitle from './NavTitle'

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
    <nav>
      <NavTitle key={navTitle.option} title={navTitle} />
      {navOptions.map((elem) => {
        const { option } = elem
        return <NavOption key={option} option={option} />
      })}
    </nav>
  )
}

export default Nav
