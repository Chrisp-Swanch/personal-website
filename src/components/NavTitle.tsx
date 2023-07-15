import { Link } from 'react-router-dom'

type navElem = {
  option: string
  display: string[]
}

interface Props {
  title: navElem
}

function NavTitle(props: Props) {
  const { display } = props.title

  return (
    <span className="nav__option" id="title">
      <Link to="#">{display[0]} | {display[1]}</Link>
    </span>
  )
}

export default NavTitle
