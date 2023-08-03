export interface ImageData {
  path: string
  altText: string
  caption: string
}

export interface Feature {
  id: number
  name: string
  date: string
  paragraphs: string[]
  images: ImageData[]
  links: string[]
}