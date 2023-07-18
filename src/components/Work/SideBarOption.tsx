import { Dispatch, SetStateAction } from 'react'
import { Feature } from "../../../models/Feature"

interface Props {
  option: Feature
  selection: number
  setSelection: Dispatch<SetStateAction<number>>
}

function SideBarOption(props: Props) {
  const { option, selection, setSelection } = props
  const { id, name } = option

  const handleClick = () => {
    setSelection(id)
  }

  return (
    <>
      {selection === id && (
        <button>
          <h3>{name}</h3>
        </button>
      )}
      {selection !== id && <button onClick={handleClick}>{name}</button>}
    </>
  )
}

export default SideBarOption
