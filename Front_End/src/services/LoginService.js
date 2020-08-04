import { URL_TOKEN } from './../constants'
import { URL_API } from './../constants'

export const login = async (username, password) => {
    const data = {
        username,
        password
    }
    const url = `${URL_TOKEN}/generate-token`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      });
    return await response.json();
}

export const isValid = async () => {
  const url = `${URL_API}/isValid`;
  const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      } 
    });
  return await response.json();
}