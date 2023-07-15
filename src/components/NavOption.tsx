import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context'

interface Props {
  option: string
}

function NavOption(props: Props) {
  const { navSelection, setNavSelection } = useContext(Context)
  const { option } = props

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleClick = () => {
    scrollToElement(option)
    if (navSelection === option) return
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
