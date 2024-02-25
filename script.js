
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
// }
// })
let searchObj;

const inputObj = document.getElementById("input-search");

const urlCall = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = getData();



async function getData(){
    try {
        const result = await fetch(urlCall, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
            }
            })
        const json = await result.json();
        searchObj= [...json];
        searchObj.forEach(item => {
            createCard(item);
        });
        
        console.log(json);
        
    } catch (error) {
        console.log(error);
    }
}



const containerCardObj = document.getElementById("my-product-container");

function createCard({name, brand, imageUrl, description, price, _id}){


    let boxCard = document.createElement("div");
    boxCard.classList.add("col-12", "col-md-4", "g-5", "py-4");

    let divCard = document.createElement("div");
    divCard.classList.add("card");

    let cardImg = document.createElement("img");
    cardImg.src = imageUrl;
    cardImg.classList.add("card-img-top", "img-fluid");

    let divText = document.createElement("div");
    
    let brandObj = document.createElement("h5");
    brandObj.innerText = brand;
    brandObj.classList.add("card-title");

    let nameObj = document.createElement("h6");
    nameObj.innerText = name;

    let priceBox = document.createElement("div");
    priceBox.classList.add("d-flex", "gap-2");
    let pricetx = document.createElement("p");
    pricetx.innerHTML = "Price: ";
    let priceObj = document.createElement("p");
    priceObj.innerText = price;

    let btnDetails = document.createElement("a");
    btnDetails.innerText = "Details";
    btnDetails.classList.add("btn", "btn-dark", "text-white");
    btnDetails.href = `detail.html?id=${_id}`;
    btnDetails.target = "_blank";


    
    divText.appendChild(brandObj);
    divText.appendChild(nameObj);
    priceBox.appendChild(pricetx);
    priceBox.appendChild(priceObj);
    divText.appendChild(priceBox);
    divText.appendChild(btnDetails);
    divCard.appendChild(cardImg);
    divCard.appendChild(divText);
    boxCard.appendChild(divCard);
    containerCardObj.appendChild(boxCard);
    console.log(price);
}


// RICERCA OGGETTI



let btnSearch = document.getElementById("btn-search");


// btnSearch.addEventListener("click", () => {
//     const searchResult = searchObj.filter((item) =>{
//         if (item.name.includes(inputObj.value)){
//             console.log(item);
//             return true
//         } else {
//             return false
//         }
//     })
//     // console.log(res);
//     // createCard(res);
// })


function liveSearch() {
    if(searchObj) {
        let liveSearchValue = inputObj.value;
        let filteredResults = searchObj.filter((song) => {
            return song.title.toLowerCase().includes(liveSearchValue.toLowerCase().trim());
        });

        createCard(filteredResults, false);

        // console.log(`Active results ${activeResults.length}`);
        // console.log(`Filtered results ${activeResults.length}`);
    }
}

