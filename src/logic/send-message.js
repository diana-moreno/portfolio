// const API_URL = `https://${process.env.API_NAME}.netlify.com` 
const API_URL = `https://sendmeanemail.netlify.com` 
// const API_URL = 'https://sendmeanemail.herokuapp.com'

export default function(name, email, message) {
  // validate.number(indexBox)
  // validate.string(description)
  // validate.string.notVoid('description', description)

  fetch(`${API_URL}/contact`, {
    method: "POST",
    // mode: "no-cors",
    headers: { "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type" },
    body: JSON.stringify({ name, email, message })
  })
}
