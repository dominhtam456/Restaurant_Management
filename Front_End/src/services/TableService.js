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

export const updateTableStatus = async (status, listTable) => {
  var url = new URL(`${URL_API}/UpdateStatusBan/${status}`)
  
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(listTable)      
  });
  return await response.json();
}

export const updateHDB = async (fromTable, toTable, hoadon_id) => {
  var url = new URL(`${URL_API}/updateHDB`),
  params = {fromTable, toTable, hoadon_id}
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