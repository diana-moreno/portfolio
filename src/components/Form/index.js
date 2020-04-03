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
      navigate('/confirmation') 
      // TODO LINK
    }
  }
  // add spinner loading?
  // add error message?

  const handleChange = (event) => {
    const id = event.target.id
    id === 'name' && setErrorName(false)
    id === 'email' && setErrorEmail(false)
    id === 'message' && setErrorMessage(false)
  }

  const clear = () => {
    setName(t('form.name', lang))
    setEmail(t('form.email', lang))
    setMessage(t('form.message', lang))
    setErrorName(false)
    setErrorEmail(false)
    setErrorMessage(false)
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
    </div>
    <ul className={styles.form_buttons}>
      <li>
        <button type="submit" value="Send message" className={styles.button_send}>{t('form.submit_button', lang)}</button>
      </li>
      <li>
        <button type="reset" value="Clear" onClick={clear} className={styles.button_clear}>{t('form.clear_button', lang)}</button>
      </li>
    </ul>
  </form>
)}

export default Form
