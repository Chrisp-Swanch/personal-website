import { Dispatch, SetStateAction, useEffect } from 'react'
import { Feature } from '../../../models/Feature'

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
          <img src={images[0]} alt={name} />
          <img src={images[1]} alt={name} />
          <p>{paragraphs[0]}</p>
        </div>
      )}
    </>
  )
}

export default GreyGhost
