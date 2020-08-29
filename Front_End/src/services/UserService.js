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

export const searchStaff = async (name) => {
  const url = `${URL_API}/GetUserByName/${name}`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}

export const filterStaff = async (isActive, Loai) => {
  const url = new URL(`${URL_API}/filterStaff?is_active=${isActive}&loai=${Loai}`),
  params = {isActive, Loai}
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}