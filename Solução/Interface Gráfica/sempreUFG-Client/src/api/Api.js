const api = "http://localhost:3001"

export const getAllCategories = () =>
  fetch(`${api}/categories`, {
    headers: { 'Authorization': 'Saulo' }
  }).then(res => res.json())
    .then(data => data.categories)

  export const getToken = (username, password) =>
  fetch(`http://localhost:9092/oauth/token?grant_type=password&username=${username}&password=${password}`, {
    method: 'POST',
    headers: { 'Authorization': 'Basic Y29kZXJlZjokMmEkMTAkcDlQazBmUU5BUVNlc0k0dnV2S0EwT1phbkREMg==',
                'Content-Type': 'application/json'}
  }).then(res => res.json())
    .then(data => data)

  export const getEvento = (token, id) =>
  fetch(`http://localhost:9093/api/evento/${id}`, {
    method: 'GET',
    crossDomain: true,
    headers: { 'Authorization': `'${token.token_type} ${token.access_token}'`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "X-API-KEY": "__KEY__", "Access-Control-Allow-Origin": "true" },
  }).then(res => res.json())