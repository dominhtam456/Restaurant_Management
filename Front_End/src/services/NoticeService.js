import { URL_API } from './../constants'

export const addNotice = async (notice) => {
    const url = `${URL_API}/addNotice`;
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(notice)      
    });
    return await response.json();
  }

export const getNoticeByStatus = async (status) => {
  const url = `${URL_API}/notice/${status}`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },    
  });
  return await response.json();
}