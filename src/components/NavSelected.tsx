interface Props {
  selection: string
}

function NavSelected(props: Props) {
  const { selection } = props
  return (
    <span id="vertical-text">
      - {selection}
    </span>
  )
}

export default NavSelected
