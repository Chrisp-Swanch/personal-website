import { scrollToElement } from "../../util"

interface Props {
  option: string
}

function NavOption(props: Props) {
  const { option } = props

  const handleClick = () => {
    scrollToElement(option)
  }

  return (
    <span className="nav-container__option">
      <button onClick={handleClick}>{option}</button>
    </span>
  )
}

export default NavOption
