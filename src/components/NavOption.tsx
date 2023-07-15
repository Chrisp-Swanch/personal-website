import { Link } from 'react-router-dom'

interface Props {
  option: string
  setNavSelection: React.Dispatch<React.SetStateAction<string>>
}

function NavOption(props: Props) {
  const { option, setNavSelection } = props

  const handleClick = () => {
    setNavSelection(option)
  }

  return (
    <span className="nav-container__option">
      <Link to="#" onClick={handleClick} >{option}</Link>
    </span>
  )
}

export default NavOption
