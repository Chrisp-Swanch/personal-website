interface Props {
  selection: string
}

function NavSelected(props: Props) {
  const { selection } = props
  return (
    <div className="vertical-text">
      <p>-</p>
      <span className="vertical-text__selection">{selection}</span>
    </div>
  )
}

export default NavSelected
