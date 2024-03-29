export default function(name, email, message) {
  const API_URL = 'https://portfolio-email-api.onrender.com'

  fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: JSON.stringify({ name, email, message })
  })
}
