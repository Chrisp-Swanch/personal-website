import Email from '../models/Email'

// high-level HTML element, used to reset the state as the user scrolls
export const defaultElement =
  window.document.getElementsByClassName('views-container')[0]


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
