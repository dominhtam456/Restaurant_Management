import { URL_API } from './../constants'

export const getTables = async () => {
    const url = `${URL_API}/GetAllBan`;
    const response = await fetch(url);
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