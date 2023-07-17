import { Feature } from '../../../models/Feature'

interface Props {
  feature: Feature
  selection: number
}

function FeaturedWork(props: Props) {
  const { feature, selection } = props
  const { id, name } = feature

  return (
      <h1>This is a feature bit for {name}</h1>
  )
}

export default FeaturedWork
