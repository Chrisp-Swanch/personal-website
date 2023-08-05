import { useContext } from 'react'
import { Context } from '../../context'
import { scrollToElement } from "../../util"
interface Props {
  display: string[]
}

let timer: number

function NavLogo(props: Props) {
  const { display } = props
  const { navSelection, isAutoScrolling, setIsAutoScrolling } =
  useContext(Context)

  const handleClick = () => {
    if (navSelection !== 'about' && !isAutoScrolling) {
      setIsAutoScrolling(true)

      clearTimeout(timer)

      scrollToElement('about')

      timer = setTimeout(() => {
        setIsAutoScrolling(false)
      }, 720)
    }
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
