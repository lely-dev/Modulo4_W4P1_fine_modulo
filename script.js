
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MDg0NTMzMTcsImV4cCI6MTcwOTY2MjkxN30.-vpFk7Nxk60iIhUvEIaIMIsh6NAau1929jfPCCJJ9MA"
// }
// })
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
        json.forEach(item => {
            createCard(item);
        });
        console.log(json);
        
    } catch (error) {
        console.log(error);
    }
}


// const homepage = document.getElementById("homepage");
// const backpage = document.getElementById("backpage");

// backpage.href = backoffice/backoffice.html;

const containerCardObj = document.getElementById("my-product-container");

function createCard({name, brand, imageUrl, description, price, _id}){

    /* <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    </div> */

    let divCard = document.createElement("div");
    divCard.classList.add("card", "col-md-3");

    let cardImg = document.createElement("img");
    cardImg.src = imageUrl;
    cardImg.classList.add("card-img-top", "img-fluid");

    let divText = document.createElement("div");
    
    let brandObj = document.createElement("h5");
    brandObj.innerText = brand;
    brandObj.classList.add("card-title");

    let nameObj = document.createElement("h6");
    nameObj.innerText = name;

    let descObj = document.createElement("p");
    descObj.innerText = description;
    descObj.classList.add("card-text");

    let priceObj = document.createElement("p");
    price.innerText = price;
    priceObj.classList.add("card-text");

    let btnDetails = document.createElement("a");
    btnDetails.innerText = "Details";
    btnDetails.classList.add("btn", "btn-success");
    btnDetails.href = `detail.html?id=${_id}`;
    btnDetails.target = "_blank";


    divCard.appendChild(cardImg);
    divText.appendChild(brandObj);
    divText.appendChild(nameObj);
    divText.appendChild(descObj);
    divText.appendChild(priceObj);
    divCard.appendChild(divText);
    divCard.appendChild(btnDetails);
    containerCardObj.appendChild(divCard);

}

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


