import { Feature } from '../../../models/Feature'

interface Props {
  feature: Feature
  selection: number
}

function FeaturedWork(props: Props) {
  const { feature, selection } = props
  const { id, name } = feature

  return (
    <>
      {selection === id && (
        <div className="section-container__work__feature-container__feature">
          <h1>This is a feature bit for {name}</h1>
        </div>
      )}
    </>
  )
}

export default FeaturedWork
