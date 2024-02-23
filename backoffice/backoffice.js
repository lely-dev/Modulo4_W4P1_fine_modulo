const homepage = document.getElementById("homepage");
const backpage = document.getElementById("backpage");

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

function createListObject({name, brand, description, image, price, _id}){

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

    let btnEdit = document.createElement("a");
    btnEdit.innerText = "Edit";
    btnEdit.classList.add("btn", "btn-primary");
    btnEdit.href = `objedit.html?id=${_id}`;
    btnEdit.target = "_blank";

    let btnDelate = document.createElement("a");
    btnDelate.innerText = "Delate";
    btnDelate.classList.add("btn", "btn-danger");
    btnDelate.addEventListener("click", ()=>{
        delateObj(_id);
    })

    listTr.appendChild(objName);
    listTr.appendChild(objBrand);
    listTr.appendChild(objDesc);
    listTr.appendChild(objImg);
    listTr.appendChild(objPrice);
    containerBtn.appendChild(btnEdit);
    containerBtn.appendChild(btnDelate);
    listTr.appendChild(containerBtn);
    getListContainer.appendChild(listTr);


}



// FUNZIONE DI AGGIUNTA OGGETTI
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


// FUNZIONE DI DELATE

async function delateObj(id){
    const result = await fetch(urlBackoffice + id, 
        { method: "DELETE", 
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
    }})
    createData();
}


// async function deletePost(pid) {
//     const res = await fetch(apiUrl + pid, { "method": "DELETE" });
//     // console.log(`Cancellazione del post ${pid} eseguita con successo!`);
//     // Avviso temporaneo di avvenuta cancellazione
//     deleteAlert.classList.toggle("d-none");
//     setTimeout(() => {
//         deleteAlert.classList.toggle("d-none");
//     }, 5000);
//     getPosts();
// }