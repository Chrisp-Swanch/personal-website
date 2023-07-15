import { createContext } from "react"

export interface ContextProps {
  navSelection: string
  setNavSelection: React.Dispatch<React.SetStateAction<string>>
}

export const Context = createContext<ContextProps>({
  navSelection: '',
  setNavSelection: () => {},
})