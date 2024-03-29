
const urlBackoffice = "https://striveschool-api.herokuapp.com/api/product/";


const paramObj = new URLSearchParams(window.location.search);
const idObj = paramObj.get("id");

window.onload = seeObj();

async function seeObj() {
    try {
        const res = await fetch(urlBackoffice + idObj,{
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
            }
            });
        const json = await res.json();
        showDetails(json);

        console.log(json);
    
        // getName.value = json.name;
        // getBrand.value = json.brand;
        // getDesc.value = json.description;
        // getImg.value = json.imageUrl;
        // getPrice.value = json.price;
    } catch(err) {
        console.log(err);
    }
}


const getContainerDetails = document.getElementById("container-details");

async function showDetails({name, brand, description, imageUrl, price}){

    let boxDetails = document.createElement("div");
    boxDetails.classList.add("row");

    let colImg = document.createElement("div");
    colImg.classList.add("col");

    let objImg = document.createElement("img");
    objImg.src = imageUrl;

    let colText = document.createElement("div");
    colText.classList.add("col");

    let containerNameBrand = document.createElement("div");
    let objBrand = document.createElement("h3");
    objBrand.innerText = brand;

    let objName = document.createElement("h4");
    objName.innerText = name;

    let objDesc = document.createElement("p");
    objDesc.innerText = description;

    let containerPrice = document.createElement("div");
    let priceTx = document.createElement("p");
    priceTx.innerText = "Price: ";
    priceTx.classList.add("fw-bold", "fs-4");
    let objPrice = document.createElement("p");
    objPrice.innerText = price;
    objPrice.classList.add("fs-4");


    colImg.appendChild(objImg);
    containerNameBrand.appendChild(objBrand);
    containerNameBrand.appendChild(objName);
    containerPrice.appendChild(priceTx);
    containerPrice.appendChild(objPrice);
    colText.appendChild(containerNameBrand);
    colText.appendChild(objDesc);
    colText.appendChild(containerPrice);
    boxDetails.appendChild(colImg);
    boxDetails.appendChild(colText);
    getContainerDetails.appendChild(boxDetails);


}