
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
// }
// })

const btnSearch = document.getElementById("btn-search");

let searchObj;

let inputObjSearch = document.getElementById("input-search");

let containerCardObj = document.getElementById("my-product-container");

const urlCall = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = getData();


// FUNZIONE PER LA CHIAMATA
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
        
    } catch (error) {
        console.log(error);
    }
}


// FUNZIONE PER CREARE LE CARD DEGLI OGGETTI



function createCard({name, brand, imageUrl, description, price, _id}){

    

    // containerCardObj.innerHTML = "";

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
}


// RICERCA OGGETTI


btnSearch.addEventListener("click", () => {

    const resultSearch = searchObj.filter((item) => {
        console.log(searchObj);
        if (item.name.includes(inputObjSearch.value)){
            console.log(item);
            return true
        } else {
            console.log("errore");
            return false
        }
    })
    console.log(resultSearch);
    createCard(resultSearch);
})



