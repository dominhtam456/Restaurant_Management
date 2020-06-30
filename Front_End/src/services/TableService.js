import { URL_API } from './../constants'

export const getTables = async () => {
    const url = `${URL_API}/GetAllBan`;
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }      
    });
    return await response.json();
}

export const updateTableStatus = async (status, id) => {
  var url = new URL(`${URL_API}/UpdateStatusBan`),
  params = {id, status}
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}