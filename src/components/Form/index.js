import React, { useState } from "react"
import { navigate } from 'gatsby'
import styles from '../../pages/index.module.scss'
import sendMessage from "../../api/send-message";
import { t } from '../../i18n'

const Form = ({ lang }) => {
  const [name, setName] = useState(t('form.name', lang))
  const [email, setEmail] = useState(t('form.email', lang))
  const [message, setMessage] = useState(t('form.message', lang))
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name: { value: name }, email: { value: email }, message: { value: message } } = event.target

    if (!name) {
      setErrorName(true)
      setName(t('form.name_error', lang))
    }
    if (!email) {
      setErrorEmail(true)
      setEmail(t('form.email_error', lang))
    }
    if (!message) {
      setErrorMessage(true)
      setMessage(t('form.message_error', lang))
    }
    if (name && email && message && !errorName && !errorEmail && !errorMessage) {
      await sendMessage(name, email, message)
      navigate(t('confirmation.url', lang)) 
    }
  }
  // add spinner loading?
  // add error message?

  const handleChange = (event) => {
    const id = event.target.id
    id === 'name' && setErrorName(false)
    id === 'email' && setErrorEmail(false)
    id === 'message' && setErrorMessage(false)
  
    if(id === 'name' && !event.target.value) {
      setName(t('form.name', lang))
    }
    if(id === 'email' && !event.target.value) {
      setEmail(t('form.email', lang))
    }
    if(id === 'message' && !event.target.value) {
      setMessage(t('form.message', lang))
    }
  }

  return (
    <form
    onSubmit={handleSubmit}
    className={styles.form}
    >
    <div className={styles.form_inputs}>
      <input
        className={errorName ? styles.form_input_error : styles.form_input}
        type="text"
        name="name"
        id="name"
        placeholder={name}
        onChange={handleChange}
      />
      <input
        className={errorEmail ? styles.form_input_error : styles.form_input}
        type="email"
        name="email"
        id="email"
        placeholder={email}
        onChange={handleChange}
      />
      <textarea
        className={errorMessage ? styles.form_input_error : styles.form_input}
        name="message"
        id="message"
        rows="6"
        placeholder={message}
        onChange={handleChange}
      />
      <button 
        type="submit" 
        value="Send message" 
        className={styles.button_send}
      >{t('form.submit_button', lang)}</button>
    </div>
  </form>
)}

export default Form
