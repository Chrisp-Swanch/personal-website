import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import InteractiveImage from './InteractiveImage'
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
          <p>{paragraphs[3]}</p>
          <InteractiveImage images={images} index={1} />
          <p>{paragraphs[4]}</p>
          <p className="italics">
            {paragraphs[5]}{' '}
            <Link
              to={link}
              target="_blank"
              aria-label="view ParkingTix repo on Github"
            >
              view the Github repo here
            </Link>
            .
          </p>
        </div>
      )}
    </>
  )
}

export default ParkingTix
