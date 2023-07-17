import SideBarOption from "./SideBarOption"
import { Dispatch, SetStateAction } from "react"
import { Feature } from "../../../models/Feature"

interface Props {
  features: Feature[]
  selection: number
  setSelection: Dispatch<SetStateAction<number>>
}

function WorkSideBar(props: Props) {
  const { features, selection, setSelection } = props

  return (
    <div className="section-container__work__sidebar">
      {features.map((feature) => {
        const { id } = feature
        return <SideBarOption key={id} option={feature} setSelection={setSelection} selection={selection} />
      })}
    </div>
  )
}

export default WorkSideBar