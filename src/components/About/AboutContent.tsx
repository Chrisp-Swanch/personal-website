import { Context } from '../../context'
import { useContext, useEffect, useState } from 'react'

import LinkIcon from './LinkIcon'

function AboutContent() {
  const [isVisble, setIsVisible] = useState(false)
  const { navSelection } = useContext(Context)

  const handleClick = () => {
    window.open('/CV_ChrisSwan.pdf', '_blank')
  }

  useEffect(() => {
    console.log('About useEffect')
    if (navSelection === 'contact') {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }, [navSelection])

  return (
    <>
      {isVisble && 
        <div className="section-container__about__content">
          <p>
            I&apos;m Chris, a developer based in Pōneke / Wellington, New
            Zealand. A wise person once said, a mouse runs fastest when moving
            both towards a reward, and away from a threat.
          </p>
          <p>I&apos;d love to work on your next project with you!</p>

          <button onClick={handleClick} id="cv-button">
            View my CV
          </button>
          <div className="icons-container">
            <LinkIcon name="github" url="https://github.com/Chrisp-Swanch" />
            <LinkIcon
              name="linkedin"
              url="https://www.linkedin.com/in/chris-swan-674ab8282/"
            />
          </div>
        </div>
      }
    </>
  )
}

export default AboutContent
