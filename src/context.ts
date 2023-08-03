import { createContext } from "react"
import { Feature } from "../models/Feature"

export interface ContextProps {
  navSelection: string
  setNavSelection: React.Dispatch<React.SetStateAction<string>>
  selectedFeature: Feature
  setSelectedFeature: React.Dispatch<React.SetStateAction<Feature>>
  galleryActive: boolean
  setGalleryActive: React.Dispatch<React.SetStateAction<boolean>>
  galleryImgIndex: number
  setGalleryImgIndex: React.Dispatch<React.SetStateAction<number>>
}

export const Context = createContext<ContextProps>({
  navSelection: '',
  setNavSelection: () => {},
  selectedFeature: {} as Feature,
  setSelectedFeature: () => {},
  galleryActive: false,
  setGalleryActive: () => {},
  galleryImgIndex: 0,
  setGalleryImgIndex: () => {},
})