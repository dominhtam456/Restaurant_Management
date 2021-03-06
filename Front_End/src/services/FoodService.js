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

export const getTypeFoods = async (isActive) => {
  const url = `${URL_API}/GetAllByStatus/${isActive}`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}

export const addFoods = async (food) => {
  const url = `${URL_API}/InsertMonAn`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(food)
  })
  return await response.json();
}

export const addTypeFoods = async (food) => {
  const url = `${URL_API}/InsertLoaiMonAn`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(food)
  });
  return await response.json();
}

export const updateFoods = async (food) => {
  var url = new URL(`${URL_API}/UpdateMonAn`);
  // params = {id, name, isActive}
  // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(food)
  });
  return await response.json();
}

export const searchFood = async (name) => {
  const url = `${URL_API}/SearchFoods/${name}`;
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

export const filterFood = async (isActive) => {
  const url = new URL(`${URL_API}/filterFood?is_active=${isActive}`),
  params = {isActive}
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