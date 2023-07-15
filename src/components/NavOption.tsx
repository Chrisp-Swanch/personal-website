import { Link } from 'react-router-dom'

interface Props {
  option: string
}

function NavOption(props: Props) {
  const { option } = props
  return (
    <span className="nav__option">
      <Link to="#">{option}</Link>
    </span>
  )
}

export default NavOption
