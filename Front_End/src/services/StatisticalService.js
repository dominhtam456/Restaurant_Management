import { URL_API } from './../constants'

export const getTrendingFood = async (fromDate,toDate) => {
    const url = new URL(`${URL_API}/ThongKeMonAn`),
    params = {fromDate, toDate}
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

export const getInvoiceByDate = async (fromDate,toDate) => {
    const url = new URL(`${URL_API}/ThongKeHoaDon`),
    params = {fromDate, toDate}
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

export const getSum = async (fromDate,toDate) => {
    const url = new URL(`${URL_API}/ThongKeTongTien`),
    params = {fromDate, toDate}
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