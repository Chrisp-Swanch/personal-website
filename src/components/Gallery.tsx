import { useContext, useEffect } from 'react'
import { Context } from '../context'

function Gallery() {
  const { galleryActive, setGalleryActive, galleryImages, galleryImgIndex } = useContext(Context)
  const { path, altText, caption } = galleryImages[galleryImgIndex]
  // const imgRange = galleryImages.length - 1 

  const handleGallery = () => {
    setGalleryActive(!galleryActive)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <div
      className="gallery"
      role="button"
      onClick={handleGallery}
      tabIndex={0}
      onKeyDown={handleGallery}
    >
      <img className="gallery__image" src={path} alt={altText} />
      <p className="gallery_caption">{caption}</p>
    </div>
  )
}

export default Gallery
