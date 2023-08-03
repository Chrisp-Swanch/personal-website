import { useContext } from 'react'
import { Context } from '../../context'

interface Props {
  src: string
  alt: string
  caption: string
}

function InteractiveImage(props: Props) {
  const { setGalleryActive } = useContext(Context)
  const { src, alt, caption } = props

  const handleGallery = () => {
    setGalleryActive(true)
  }

  return (
    <>
      <div
        className="interactive-image"
        role="button"
        onClick={handleGallery}
        tabIndex={0}
        onKeyDown={handleGallery}
      >
        <img src={src} alt={alt} />
      </div>
      <p className="caption">Image: {caption}</p>
    </>
  )
}

export default InteractiveImage
