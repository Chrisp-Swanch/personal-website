// high-level HTML element, used to reset the state as the user scrolls
export const defaultElement =
  window.document.getElementsByClassName('views-container')[0]


// This function is for auto-focusing the section that the user is scrolling into (not implemented)
export const snapToElement = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
