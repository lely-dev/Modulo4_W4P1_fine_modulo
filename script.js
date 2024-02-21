
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
// }
// })
const urlCall = "https://striveschool-api.herokuapp.com/api/product/";

// let myProduct = {
//     name: "REDMI 13C 8+256GB-Midnight Black",
//     description: "Risoluzione: Display & Design • 6.74'' HD+ con DC Dimming 260ppi 1600 x 720 • Refresh rate: 90Hz • Touch Sampling rate: 180Hz • Luminosità: 450 nits (typ), 60 nits HBM • Rapporto di contrasto 1500:1 • Color Depth 8-bit • Color Garmut NTSC 70% (typ) • Pro-grade Eye Protection: TÜV Low Blue Light / Certificazione Flicker",
//     brand: "XIAOMI",
//     imageUrl:"https://www.euronics.it/dw/image/v2/BFPN_PRD/on/demandware.static/-/Sites-catalog_euronics_master/default/dw5d075a56/hi-res/232012707_5.jpg?sw=1000&q=90&strip=false",
//     price: "169"
// };





async function getData(){
    try {
        const result = await fetch(urlCall, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
            }
            })
        const json = await result.json();
        console.log(json);
        
    } catch (error) {
        console.log(error);
    }
}

getData();



// async function removeItem(item) {
//     try {
//         let response = await fetch ("https://striveschool-api.herokuapp.com/api/product/" + item[0].id, {
//             method: "DELETE",
//             headers: {
//                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
//                 }
//         });

//         const json = await response.json();
//         console.log(json);

//     } catch (err) {
//     }
// }

// removeItem(myProduct);


