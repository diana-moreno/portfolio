import React, { useState } from "react"
import { navigate } from 'gatsby'
import styles from '../../pages/styles2.module.scss'
import sendMessage from "../../api/send-message";

const Form = () => {
  const [name, setName] = useState('Name')
  const [email, setEmail] = useState('Email')
  const [message, setMessage] = useState('Your message')
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name: { value: name }, email: { value: email }, message: { value: message } } = event.target

    if (!name) {
      setErrorName(true)
      setName('Name is required')
    }
    if (!email) {
      setErrorEmail(true)
      setEmail('Email is required')
    }
    if (!message) {
      setErrorMessage(true)
      setMessage('Message is required')
    }
    if (name && email && message && !errorName && !errorEmail && !errorMessage) {
      await sendMessage(name, email, message)
      navigate('/confirmation')
    }
  }

  const handleChange = (event) => {
    const id = event.target.id
    id === 'name' && setErrorName(false)
    id === 'email' && setErrorEmail(false)
    id === 'message' && setErrorMessage(false)
  }

  const clear = () => {
    setName('Name')
    setEmail('Email')
    setMessage('Your message')
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
      // pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
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
        <input type="submit" value="Send message" className={styles.form_button_send} />
      </li>
      <li>
        <input type="reset" value="Clear" onClick={clear} className={styles.form_button_clear} />
      </li>
    </ul>
  </form>
)}

export default Form
