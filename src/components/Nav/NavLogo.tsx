import { Link } from 'react-router-dom'

type navElem = {
  option: string
  display: string[]
}

interface Props {
  title: navElem
}

function NavLogo(props: Props) {
  const { display } = props.title

  return (
    <span className="nav__option" id="title">
      <Link to="#"><h1>{display[0]} | {display[1]}</h1></Link>
    </span>
  )
}

export default NavLogo
