import { URL_API } from './../constants'

export const getFoods = async () => {
    const url = `${URL_API}/GetAllMonAn`;
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }      
    });
    return await response.json();
}

export const getFoodByActive = async (isActive) => {
  var url = new URL(`${URL_API}/GetFoodByActive/${isActive}`)

  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  });
  return await response.json();
}