import { ChangeEvent, FormEvent, useState } from 'react'
import emailjs from 'emailjs-com'
import Email from '../../../models/Email'
import { checkEmailForm } from '../../util'

function ContactForm() {
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
      emailjs
        .sendForm(serviceId, templateId, form, publicKey)
        .then((result) => {
          console.log(result.text)
        })
        .catch((error) => {
          console.log(error.text)
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
        <button type="submit" id="send-button">Send</button>
      </form>
    </div>
  )
}

export default ContactForm
