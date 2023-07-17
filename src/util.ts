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

// This function is for auto-focusing the selected featured work, with the features container
export function scrollIntoParentView(id: string) {
  const element = document.getElementById(id);
  const parent = document.getElementsByClassName('section-container__work__feature-container')[0];

  if (element && parent) {
    const parentComputedStyle = window.getComputedStyle(parent);
    const isScrollable = parentComputedStyle.overflow === 'scroll' || parentComputedStyle.overflow === 'auto';

    if (isScrollable) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
