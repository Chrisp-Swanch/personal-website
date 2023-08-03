import { createContext } from "react"

export interface ContextProps {
  navSelection: string
  setNavSelection: React.Dispatch<React.SetStateAction<string>>
  galleryActive: boolean
  setGalleryActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<ContextProps>({
  navSelection: '',
  setNavSelection: () => {},
  galleryActive: false,
  setGalleryActive: () => {},
})