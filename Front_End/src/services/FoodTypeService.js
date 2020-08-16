import { URL_API } from './../constants'

export const getTypeFood = async () => {
    const url = `${URL_API}/GetAllLoaiMonAn`;
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }      
    });
    return await response.json();
}

export const addTypeFood = async (type) => {
  const url = `${URL_API}/InsertLoaiMonAn`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(type)
  })
  return await response.json();
}

export const updateTypeFood = async (type) => {
  var url = new URL(`${URL_API}/UpdateLoaiMonAn`);
  // params = {id, name, isActive}
  // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(type)
  });
  return await response.json();
}