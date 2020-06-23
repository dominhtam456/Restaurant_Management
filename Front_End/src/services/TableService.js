import { URL_API } from './../constants'

export const getTables = async () => {
    const url = `${URL_API}/GetAllBan`;
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }      
    });
    return await response.json();
}

// post = async (model) => {
//     const headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     var options = {
//         method: "POST",
//         headers,
//         body: JSON.stringify(model)
//     }
//     const request = new Request(webApiUrl, options);
//     const response = await fetch(request);
//     return response;
// }