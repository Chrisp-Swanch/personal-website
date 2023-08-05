import { Dispatch, SetStateAction } from 'react'
import { Feature } from '../../../models/Feature'
import InteractiveImage from './InteractiveImage'

interface Props {
  feature: Feature
  selection: number
  setSelection: Dispatch<SetStateAction<number>>
}

function GreyGhost(props: Props) {
  const { feature, selection } = props
  const { id, name, date, paragraphs, images } = feature

  return (
    <>
      {selection === id && (
        <div
          className="section-container__work__feature-container__feature"
          id={name}
        >
          <h4>
            {name} / {date}
          </h4>
          <p>{paragraphs[0]}</p>
          <p>{paragraphs[1]}</p>
          <InteractiveImage images={images} index={0} />
          <p>{paragraphs[2]}</p>
          <InteractiveImage images={images} index={1} />
          <p>{paragraphs[3]}</p>
        </div>
      )}
    </>
  )
}

export default GreyGhost
