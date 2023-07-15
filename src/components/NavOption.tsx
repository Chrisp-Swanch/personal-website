import { Link } from 'react-router-dom'

interface Props {
  option: string
  setNavSelection: React.Dispatch<React.SetStateAction<string>>
}

function NavOption(props: Props) {
  const { option, setNavSelection } = props

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleClick = () => {
    scrollToElement(option)
    setNavSelection(option)
  }

  return (
    <span className="nav-container__option">
      <Link to="/" onClick={handleClick}>
        {option}
      </Link>
    </span>
  )
}

export default NavOption
