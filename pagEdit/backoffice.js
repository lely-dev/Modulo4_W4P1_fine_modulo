
const getName = document.getElementById("object-name");

const getBrand = document.getElementById("object-brand");

const getDesc = document.getElementById("object-description");

const getImg = document.getElementById("object-img");

const getPrice = document.getElementById("object-price");

const getListContainer = document.getElementById("list-object");

const urlBackoffice = "https://striveschool-api.herokuapp.com/api/product/";

async function createData(){
    getListContainer.innerHTML = "";
    try {
        const result = await fetch(urlBackoffice, {
            headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
            }
            })
        const json = await result.json();
        json.forEach(obj => {
            createListObject(obj);
        });

        console.log(json);
        
    } catch (error) {
        console.log(error);
    }
}

createData();

function createListObject({name, brand, description, image, price}){

    let listTr = document.createElement("tr");

    let objName = document.createElement("th");
    objName.innerText = name;

    let objBrand = document.createElement("td");
    objBrand.innerText = brand;

    let objDesc = document.createElement("td");
    objDesc.innerText = description;

    let objImg = document.createElement("td");
    objImg.innerText = image;

    let objPrice = document.createElement("td");
    objPrice.innerText = price;

    let containerBtn = document.createElement("td");

    listTr.appendChild(objName);
    listTr.appendChild(objBrand);
    listTr.appendChild(objDesc);
    listTr.appendChild(objImg);
    listTr.appendChild(objPrice);
    getListContainer.appendChild(listTr);


}


const getBtnCreateObj = document.getElementById("btn-create-obj");

getBtnCreateObj.addEventListener("click", async () =>{

    if(getName.value && getBrand.value && getDesc.value && getImg.value && getPrice.value) {
    
        let newObj = { "name": getName.value, "brand": getBrand.value, "description": getDesc.value, "imageUrl": getImg.value, "price": getPrice.value, "time": new Date() };
    
        try {
            const resultObj = await fetch(urlBackoffice, 
            { method: "POST", 
            body: JSON.stringify(newObj), 
            headers: { "Content-type": "application/json;charset=UTF-8",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
        }}); 
            createData();
        } catch(error) {
            console.log(error);
        }
    } else {
        // inputAlert.classList.toggle("d-none");
        console.log("Devi inserire tutti i campi obbligatori!");
        // setTimeout(() => {
        //     inputAlert.classList.toggle("d-none");
        // }, 5000);
    }
})
