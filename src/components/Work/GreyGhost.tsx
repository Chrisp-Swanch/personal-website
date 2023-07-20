import { Dispatch, SetStateAction, useEffect } from 'react'
import { Feature } from '../../../models/Feature'

interface Props {
  feature: Feature
  selection: number
  setSelection: Dispatch<SetStateAction<number>>
}

function GreyGhost(props: Props) {
  const { feature, selection } = props
  const { id, name, date, paragraphs, images, imageAlt } = feature

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
          </h4>0
          <img src={images[0]} alt={imageAlt[0]} />
          <img src={images[1]} alt={imageAlt[1]} />
          <p>{paragraphs[0]}</p>
        </div>
      )}
    </>
  )
}

export default GreyGhost
