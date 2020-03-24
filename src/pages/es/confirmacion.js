import React from "react"
import Layout from "../../components/layout"
import Confirmation from "../../components/Confirmation"

const lang = 'es'

const ConfirmationPage = ({ pageContext }) => {
  const [urls] = pageContext.urls.filter(obj => {
    return obj.id === "Confirmation"
  })

  return (
    <Layout>
      <Confirmation urls={urls} lang={lang} />
    </Layout>
)}

export default ConfirmationPage
