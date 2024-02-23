const homepage = document.getElementById("homepage");
const backpage = document.getElementById("backpage");

const getName = document.getElementById("object-name");

const getBrand = document.getElementById("object-brand");

const getDesc = document.getElementById("object-description");

const getImg = document.getElementById("object-img");

const getPrice = document.getElementById("object-price");

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
    
        getName.value = json.name;
        getBrand.value = json.brand;
        getDesc.value = json.description;
        getImg.value = json.imageUrl;
        getPrice.value = json.price;
    } catch(err) {
        console.log(err);
    }
}

// FUNZIONE DI MODIFICA OGGETTI

const btnSave = document.getElementById("btn-save-update");

btnSave.addEventListener("click", async () =>{
    
    if(getName.value && getBrand.value && getDesc.value && getImg.value && getPrice.value){
        console.log("click");
        try {
            let newSave = { "name": getName.value, "brand": getBrand.value, "description": getDesc.value, "imageUrl": getImg.value, "price": getPrice.value};
            
            const result = await fetch(urlBackoffice + idObj,{
                method: "PUT",
                body: JSON.stringify(newSave),
                headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
                }
                })


        } catch (error) {
            console.log(error);
            
        }
    }
})




