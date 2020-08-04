import { URL_API } from './../constants'

export const getResources = async () => {
    const url = `${URL_API}/GetAllNguyenLieu`;
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }      
    });
    return await response.json();
}

export const getEachResourcesDetail = async (no) => {
  const url = `${URL_API}/NguyenLieu/${no}`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}

export const getTypeResources = async () => {
  const url = `${URL_API}/GetAllLoaiNguyenLieu`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}

export const addResources = async (resource) => {
  const url = `${URL_API}/InsertNguyenLieu`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(resource)
  })
  return await response.json();
}
  


export const addTypeResources = async (resource) => {
  const url = `${URL_API}/InsertLoaiNguyenLieu`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(resource)
  });
  return await response.json();
}

export const updateResources = async (resource) => {
  var url = new URL(`${URL_API}/UpdateNguyenLieu`);
  // params = {id, name, isActive}
  // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(resource)
  });
  return await response.json();
}

// export const deleteTables = async (table) => {
//   var url = new URL(`${URL_API}/UpdateBan`);
//   // params = {id, name, isActive}
//   // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

//   const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify(table)
//   });
//   return await response.json();
// }