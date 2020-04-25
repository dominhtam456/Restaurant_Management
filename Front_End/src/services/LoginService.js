import { URL_TOKEN } from './../constants'

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