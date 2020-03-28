import React from "react"
import Confirmation from "../components/Confirmation"

const lang = 'en'

const ConfirmationPage = ({ pageContext }) => {
  const [urls] = pageContext.urls.filter(obj => {
    return obj.id === "Confirmation"
  })

  return (
    <Confirmation urls={urls} lang={lang} />
)}

export default ConfirmationPage
