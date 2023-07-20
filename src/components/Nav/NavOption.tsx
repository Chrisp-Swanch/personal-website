interface Props {
  option: string
}

function NavOption(props: Props) {
  const { option } = props

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleClick = () => {
    scrollToElement(option)
  }

  return (
    <span className="nav-container__option">
        <button onClick={handleClick}>

        {option}
        </button>
    </span>
  )
}

export default NavOption
