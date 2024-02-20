
const getName = document.getElementById("object-name");

const getBrand = document.getElementById("object-brand");

const getDesc = document.getElementById("object-description");

const getImg = document.getElementById("object-img");

const getPrice = document.getElementById("object-price");


async function createData(){
    try {
        const result = await fetch(urlCall, {
            // method: 'POST',
            // body: JSON.stringify(myProduct), 
            headers: {
            // "Content-type": "application/json;charset=UTF-8",
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


async function createPost() {
    // Verifica di validazione:
    if(postName.value && postDesc.value && postPrice.value) {
        // Acquisisco i valori degli input per la creazione del post:
        let newPost = { "name": postName.value, "description": postDesc.value, "price": postPrice.value, "time": new Date() };
    
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/agenda', { method: "POST", body: JSON.stringify(newPost), headers: { "Content-type": "application/json;charset=UTF-8"}}); 
            getPosts();
        } catch(error) {
            console.log(error);
        }
    } else {
        inputAlert.classList.toggle("d-none");
        // console.log("Devi inserire tutti e 3 i campi obbligatori!");
        setTimeout(() => {
            inputAlert.classList.toggle("d-none");
        }, 5000);
    }
}