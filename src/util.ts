import Email from '../models/Email'

// Scroll to a given html section
export const scrollToElement = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Toggle can scroll
export const toggleScrolling = (isActive: boolean) => {
  switch (isActive) {
    case true:
      document.body.style.overflow = 'auto'
      break
    case false:
      document.body.style.overflow = 'hidden'
      break
    default:
      return
  }
}

// Toggle scroll snapping
export const toggleScrollSnap = (isActive: boolean) => {
  const views = ['views', 'about', 'work', 'contact']
  views.forEach((view) => {
    const element = document.getElementById(view)
    if (element !== null &&element !== undefined) {
      switch (isActive) {
        case true:
          element.style.scrollSnapAlign = 'start'
          break
        case false:
          element.style.scrollSnapAlign = 'none'
          break
        default:
          return
      }
    }
  })
}

// Toggle wherther the user can click/touch, to prevent weird behavior when autoscrolling
export const toggleCanInteract = () => {
  document.body.style.cursor = 'none'
}

// Type for the checkEmailForm function return
type CheckResult = {
  pass: boolean
  error?: string
}

// Check if an input email has the right formatting
function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Check if contact form is filled-in
export function checkEmailForm(formData: Email): CheckResult {
  const { name, email, message } = formData
  const result = {
    pass: false,
  }

  if (!name || !email || !message) {
    return {
      ...result,
      error: 'Please fill in all fields',
    }
  }

  if (!isEmail(email)) {
    return {
      ...result,
      error:
        'The provided email address seems not to be vaild. Please double-check the format and retry.',
    }
  }

  return {
    pass: true,
  }
}
