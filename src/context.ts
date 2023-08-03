import React, { createContext } from "react"
import { Feature, ImageData } from "../models/Feature"

export interface ContextProps {
  navSelection: string
  setNavSelection: React.Dispatch<React.SetStateAction<string>>
  galleryActive: boolean
  setGalleryActive: React.Dispatch<React.SetStateAction<boolean>>
  galleryImages: ImageData[],
  setGalleryImages: React.Dispatch<React.SetStateAction<ImageData[]>>
  galleryImgIndex: number
  setGalleryImgIndex: React.Dispatch<React.SetStateAction<number>>
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
})