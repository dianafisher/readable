const api = 'http://localhost:5001'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export function fetchCategories () {
  console.log('fetching categories 🐕')
  return fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .catch(error => {
      console.log('error' + error);
    })
}
