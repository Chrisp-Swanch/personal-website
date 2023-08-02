import { useState } from 'react'

interface Props {
  src: string
  alt: string
  caption: string
}

function InteractiveImage(props: Props) {
  const [focused, setFocused] = useState(false)
  const { src, alt, caption } = props

  const handleEnlarge = () => {
    setFocused(true)
  }

  return (
    <>
      <div
        className="section-container__work__feature-container__feature__image-container"
        role="button"
        onClick={handleEnlarge}
        tabIndex={0}
        onKeyDown={handleEnlarge}
      >
        <img src={src} alt={alt} />
      </div>
      <p className="caption">Image: {caption}</p>
    </>
  )
}

export default InteractiveImage
