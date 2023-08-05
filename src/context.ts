import React, { createContext } from "react"
import { ImageData } from "../models/Feature"

export interface ContextProps {
  navSelection: string
  setNavSelection: React.Dispatch<React.SetStateAction<string>>
  galleryActive: boolean
  setGalleryActive: React.Dispatch<React.SetStateAction<boolean>>
  galleryImages: ImageData[],
  setGalleryImages: React.Dispatch<React.SetStateAction<ImageData[]>>
  galleryImgIndex: number
  setGalleryImgIndex: React.Dispatch<React.SetStateAction<number>>
  isAutoScrolling: boolean
  setIsAutoScrolling: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<ContextProps>({
  navSelection: '',
  setNavSelection: () => {},
  galleryActive: false,
  setGalleryActive: () => {},
  galleryImages: [] as ImageData[],
  setGalleryImages: () => {},
  galleryImgIndex: 0,
  setGalleryImgIndex: () => {},
  isAutoScrolling: false,
  setIsAutoScrolling: () => {},
})