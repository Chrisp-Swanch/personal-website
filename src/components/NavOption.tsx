// import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { Context } from '../context'

// commented lines are to do with the animations triggered by clicking a nav option.
interface Props {
  option: string
}

function NavOption(props: Props) {
  // const { setNavSelection } = useContext(Context)
  const { option } = props

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // setNavSelection(id)
  }

  const handleClick = () => {
    // setNavSelection('')
    scrollToElement(option)
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
