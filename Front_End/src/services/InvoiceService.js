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