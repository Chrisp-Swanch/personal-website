import { useContext } from 'react'
import { Context } from '../../context'
import { ImageData } from "../../../models/Feature"

interface Props {
  images: ImageData[]
  index: number
}

function InteractiveImage(props: Props) {
  const { setGalleryActive, setGalleryImages, setGalleryImgIndex } = useContext(Context)
  const { images, index } = props
  const { path, altText, caption } = images[index]

  const handleGallery = () => {
    setGalleryImages(images)
    setGalleryImgIndex(index)
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
