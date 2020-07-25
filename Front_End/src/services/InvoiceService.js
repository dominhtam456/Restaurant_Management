import { URL_API } from './../constants'

export const getInvoiceByStatus = async (status) => {
    const url = `${URL_API}/GetHoaDonToStatus/${status}`;
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }      
    });
    return await response.json();
}

export const getInvoiceDetailByInvoiceId = async (id) => {
    const url = `${URL_API}/GetHDCTByID/${id}`;
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }      
    });
    return await response.json();
}

export const addinvoiceDetail = async (invoiceDetail) => {
  const url = `${URL_API}/InsertHoaDonChiTiet`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(invoiceDetail)      
  });
  return await response.json();
}

export const addinvoice = async (invoice) => {
  const url = `${URL_API}/InsertHoaDon`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(invoice)      
  });
  return await response.json();
}

export const addinvoiceStaff = async (invoiceStaff) => {
  const url = `${URL_API}/InsertStaffInvoice`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(invoiceStaff)      
  });
  return await response.json();
}

export const addinvoiceTable = async (invoiceTable) => {
  const url = `${URL_API}/InsertHoaDonBan`;
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(invoiceTable)      
  });
  return await response.json();
}

export const updateInvoiceStatus = async (status, id) => {
  var url = new URL(`${URL_API}/UpdateInvoiceStatus`),
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

export const getUncompletedInvoiceDetail = async () => {
  const url = `${URL_API}/GetUncompletedFood`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}

export const getInvoiceDetailByStatus = async (status) => {
  const url = `${URL_API}/GetFoodByStatus/${status}`;
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }      
  });
  return await response.json();
}

export const updateInvoiceDetailStatus = async (status, hoaDonId, monAnId) => {
  var url = new URL(`${URL_API}/UpdateHDCTStatus`),
  params = {status, hoaDonId, monAnId}
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


export const updateHDCT = async (listHDCT) => {
  var url = new URL(`${URL_API}/UpdateHDCTByHoadonId`)

  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(listHDCT)   
  });
  return await response.json();
}

export const mergeTable = async (listHDId) => {
  var url = new URL(`${URL_API}/MergeTable`)

  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(listHDId)   
  });
  return await response.json();
}

