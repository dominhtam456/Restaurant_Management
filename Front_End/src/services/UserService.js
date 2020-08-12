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

// export const getAllUser = async () => {
//   const url = `${URL_API}/email/${email}`;
//   const response = await fetch(url, {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }      
//   });
//   return await response.json();
// }

export const getAllStaff = async () => {
  const url = `${URL_API}/GetAllUser`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}

export const getRole = async () => {
  const url = `${URL_API}/GetAllRole`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}

export const addStaff = async (staff) => {
  const url = `${URL_API}/InsertNhanVien`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(staff)
  })
  return await response.json();
}

export const updateStaff = async (staff) => {
  var url = new URL(`${URL_API}/UpdateNhanVien`);
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(staff)
  });
  return await response.json();
}

export const searchStaff = async () => {
  const url = `${URL_API}/GetAllUser`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}