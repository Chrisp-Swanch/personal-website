import { useContext, useEffect } from 'react'
import { toggleScrolling, toggleScrollSnap } from '../util'
import { Context } from '../context'

function Gallery() {
  const { galleryActive, setGalleryActive, galleryImages, galleryImgIndex } =
    useContext(Context)
  const { path, altText, caption } = galleryImages[galleryImgIndex]
  // const imgRange = galleryImages.length - 1

  const handleGallery = () => {
    setGalleryActive(!galleryActive)
    toggleScrolling(true)
    toggleScrollSnap(true)
  }

  useEffect(() => {
    toggleScrolling(false)
    toggleScrollSnap(false)
  }, [])

  return (
    <div
      className="gallery"
      role="button"
      onClick={handleGallery}
      tabIndex={0}
      onKeyDown={handleGallery}
    >
      <div className="gallery__image-container">
        <img className="gallery__image" src={path} alt={altText} />
        <p className="gallery__caption">Image: {caption}</p>
      </div>
    </div>
  )
}

export default Gallery
