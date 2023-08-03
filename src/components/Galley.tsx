import { useContext, useEffect } from 'react'
import { Context } from '../context'

function Gallery() {
  const { galleryActive, setGalleryActive } = useContext(Context)

  const handleGallery = () => {
    setGalleryActive(!galleryActive)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <div
      className="gallery-bg"
      role="button"
      onClick={handleGallery}
      tabIndex={0}
      onKeyDown={handleGallery}
    >
    </div>
  )
}

export default Gallery
