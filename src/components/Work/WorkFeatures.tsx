// import Feature from "./Feature"
import { Dispatch, SetStateAction } from 'react'
import { Feature } from '../../../models/Feature'
import FeaturedWork from './FeaturedWork'

interface Props {
  features: Feature[]
  selection: number
  setSelection: Dispatch<SetStateAction<number>>
}

function WorkFeatures(props: Props) {
  const { features, selection } = props

  return (
    <>
      <div className="section-container__work__feature-container">
        {features.map((feature: Feature) => {
          return (
              <FeaturedWork
                key={feature.id}
                feature={feature}
                selection={selection}
              />
          )
        })}
      </div>
    </>
  )
}

export default WorkFeatures
