import { URL_API } from './../constants'

export const getDataChart = async (fromDate, toDate) => {
    const url = new URL(`${URL_API}/ThongKeTongTienTrongNgay`),
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

