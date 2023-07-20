import { scrollToElement } from "../../util"
interface Props {
  display: string[]
}

function NavLogo(props: Props) {
  const { display } = props

  const handleClick = () => {
    scrollToElement('about')
  }

  return (
    <span className="nav__option" id="logo">
      <button onClick={handleClick}>
        <h1>
          {display[0]} | {display[1]}
        </h1>
      </button>
    </span>
  )
}

export default NavLogo
