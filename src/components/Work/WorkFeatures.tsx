// import Feature from "./Feature"
import { Dispatch, SetStateAction } from 'react'
import { Feature } from '../../../models/Feature'
import GreyGhost from './GreyGhost'
import ParkingTix from './ParkingTix'

interface Props {
  features: Feature[]
  selection: number
  setSelection: Dispatch<SetStateAction<number>>
}

function WorkFeatures(props: Props) {
  const { features, selection, setSelection } = props

  return (
    <>
      <div className="section-container__work__feature-container">
        <ParkingTix feature={features[0]} selection={selection} setSelection={setSelection}/>
        <GreyGhost feature={features[1]} selection={selection} setSelection={setSelection}/>
      </div>
    </>
  )
}

export default WorkFeatures
