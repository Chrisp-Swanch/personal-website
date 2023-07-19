/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react'

import WorkSideBar from './WorkSideBar'
import WorkFeatures from './WorkFeatures'
import { Feature } from '../../../models/Feature'

const features = [
  {
    id: 1,
    name: 'ParkingTix',
    date: '2023',
    paragraphs: [
      'ParkingTix is an app for automatically contesting parking tickets. It is an experiment into the concept of anti-dark-patterns design using AI.',
      'It utilises the OpenAI chat completions api, and the Gmail api to generate and send appeal emails.',
      'Users have access to a dashboard to track the progress of their claims, and view the email history for each thread.',
      'The app generates responses to incoming emails, and sends them through the app- who will give in first?',
      'This was made collaboratively during the final week of a coding bootcamp.',
      'ParkingTix is not currently deployed, but you can view the GitHub repo ',
    ],
    images: [
      '/images/parking-tix_0.png',
      '/images/parking-tix_1.png',
      '/images/parking-tix_2.png',
    ],
    links: ['https://github.com/Chrisp-Swanch/parking-tix'],
  },
  {
    id: 2,
    name: 'Grey Ghost',
    date: '2020',
    paragraphs: [
      'Grey Ghost is an interactive exhibit, based around the story of the south island kōkako. It makes use of an arduino touch sensor system, and Unreal Engine.',
      'It was developed as a conceptual piece exploring the role of interactivity in a museum context.',
      'This is a solo project, made during my final year at unviersity.',
    ],
    images: ['/images/grey-ghost_0.jpeg', '/images/grey-ghost_1.jpeg'],
    links: [],
  },
] as Feature[]

function WorkContent() {
  const [selection, setSelection] = useState(0)

  useEffect(() => {
    setSelection(features[0].id)
  }, [])

  return (
    <div className="section-container__work__content">
      <WorkSideBar
        features={features}
        selection={selection}
        setSelection={setSelection}
      />
      <WorkFeatures
        features={features}
        selection={selection}
        setSelection={setSelection}
      />
    </div>
  )
}

export default WorkContent
