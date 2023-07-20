import { Dispatch, SetStateAction, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Feature } from '../../../models/Feature'

interface Props {
  feature: Feature
  selection: number
  setSelection: Dispatch<SetStateAction<number>>
}

function ParkingTix(props: Props) {
  const { feature, selection } = props
  const { id, name, date, paragraphs, images, links } = feature
  const link = links[0]

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
          <p>{paragraphs[0]}</p>
          <p>{paragraphs[1]}</p>
          <img src={images[1]} alt={name} />
          <p>{paragraphs[2]}</p>
          <p>{paragraphs[3]}</p>
          <p>{paragraphs[4]}</p>
          <p className="italics">
            {paragraphs[5]}{' '}
            <Link to={link} target="_blank">
              here
            </Link>
            .
          </p>
        </div>
      )}
    </>
  )
}

export default ParkingTix
