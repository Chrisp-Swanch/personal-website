import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { ImageData } from "../../models/Feature"

function Gallery() {
  const { galleryActive, setGalleryActive, selectedFeature, galleryImgIndex, setGalleryImgIndex } = useContext(Context)
  const images = selectedFeature.images
  const { path, altText } = images[galleryImgIndex]
  const imgRange = images.length - 1 

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
    </div>
  )
}

export default Gallery
