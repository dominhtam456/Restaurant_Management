import { URL_API } from './../constants'

export const getUserByEmail = async (email) => {
    const url = `${URL_API}/email/${email}`;
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }      
    });
    return await response.json();
}