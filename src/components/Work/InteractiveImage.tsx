import { useContext } from 'react'
import { Context } from '../../context'
import { ImageData } from "../../../models/Feature"

interface Props {
  image: ImageData
  index: number
}

function InteractiveImage(props: Props) {
  const { setGalleryActive } = useContext(Context)
  const { image, index } = props
  const { path, altText, caption } = image

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
        <img src={path} alt={altText} />
      </div>
      <p className="caption">Image: {caption}</p>
    </>
  )
}

export default InteractiveImage
