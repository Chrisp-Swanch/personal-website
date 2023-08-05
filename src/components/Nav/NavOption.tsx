import { useContext } from 'react'
import { Context } from '../../context'
import { scrollToElement } from '../../util'

interface Props {
  option: string
}

let timer: number

function NavOption(props: Props) {
  const { option } = props
  const { navSelection, setIsAutoScrolling } =
    useContext(Context)

  const handleClick = () => {
    if (navSelection !== option) {
      setIsAutoScrolling(true)

      clearTimeout(timer)

      scrollToElement(option)

      timer = setTimeout(() => {
        setIsAutoScrolling(false)
      }, 720)
    }
  }

  return (
    <span className="nav-container__option">
      <button onClick={handleClick}>{option}</button>
    </span>
  )
}

export default NavOption
