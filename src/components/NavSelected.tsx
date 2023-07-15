interface Props {
  selection: string
}

function NavSelected(props: Props) {
  const { selection } = props
  return (
    <div className="vertical-text">
      <p>-</p>
      <span className="vertical-text__selection"><h2>{selection}</h2></span>
    </div>
  )
}

export default NavSelected
