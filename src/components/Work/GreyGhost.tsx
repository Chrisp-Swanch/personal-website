import { Dispatch, SetStateAction, useEffect } from 'react'
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

  useEffect(() => {
  }, [selection])

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
          <InteractiveImage image={images[0]} index={0} />
          <InteractiveImage image={images[1]} index={1} />
          <p>{paragraphs[0]}</p>
        </div>
      )}
    </>
  )
}

export default GreyGhost
