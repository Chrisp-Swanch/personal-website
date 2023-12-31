import { ChangeEvent, FormEvent, useState } from 'react'
import emailjs from 'emailjs-com'
import Email from '../../../models/Email'
import { checkEmailForm } from '../../util'

function ContactForm() {
  const [sending, setSending] = useState(false as boolean)
  const [emailSent, setEmailSent] = useState(false as boolean)
  const [emailData, setEmailData] = useState({} as Email)

  const emailJsConfig = {
    serviceId: 'service_ezlbng7',
    templateId: 'site-contact-template',
    publicKey: 'cIo4a45f0QSTgVdXx',
  }

  const sendEmail = (evt: FormEvent) => {
    evt.preventDefault()
    const validation = checkEmailForm(emailData)
    const { serviceId, templateId, publicKey } = emailJsConfig

    if (validation.pass) {
      const form = evt.target as HTMLFormElement
      setSending(true)
      emailjs
      .sendForm(serviceId, templateId, form, publicKey)
      .then(() => {
          form.reset()
          setSending(false)
          setEmailSent(true)
        })
        .catch((error) => {
          console.error(error.text)
        })
    } else {
      alert(validation.error)
    }
  }

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = evt.target
    setEmailData({
      ...emailData,
      [name]: value,
    })
  }

  return (
    <div className="section-container__contact__content">
      <form onSubmit={sendEmail}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" onChange={handleChange} />
        </div>

        {!emailSent && !sending &&(
          <button type="submit" id="send-button">
            Send
          </button>
        )}
        {sending && (
          <p id="sent-message">
            Sending...
          </p>
        )}
        {emailSent && (
          <p id="sent-message">
            Thank you!
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
