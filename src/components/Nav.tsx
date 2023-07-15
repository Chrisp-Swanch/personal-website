const navOptions = [
  {
    option: 'about',
  },
  {
    option: 'work',
  },
  {
    option: 'contact',
  },
]

function Nav() {
  return (
    <nav>
      {navOptions.map((elem, i) => {
        const { option } = elem
        console.log(option)
        return <span key={`${option}`}>{option}</span>
      })}
    </nav>
  )
}

export default Nav
