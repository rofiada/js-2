let userInfo = document.querySelector("#user_Info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("usernme")){
    links.remove()
    userInfo.style.display ="flex"
    userData.innerHTML = localStorage.getItem("usernme")
}

let logout = document.querySelector("#logout")
logout.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(() => {
        window.location ="login.html";
    }, 1500 )
})

let allproducts = document.querySelector(".products")
console.log(allproducts)

function drawItems (){
    let y = products.map((item) => {
        return `<div class="product-item">
        <img class="product-item-img" src="${item.ImageUrl}" alt="">
        <div class="product-item-decs">
          <h2>${item.title}</h2>
          <p>the new bag</p>
          <span>${item.color}</span>
        </div>
        <div class="product-item-action">
        <button class="add_to_cart" onClick="addToCart(${item.id})">ADD TO CART</button>
        <i class="far fa-heart fav"></i>
      </div>
      </div>`
    })
    console.log(allproducts)
    allproducts.innerHTML = y;
}
drawItems ()
let cartProductsDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")

//let addItem =[];

let addItem =localStorage.getItem("productsIncart") ? JSON.parse(localStorage.getItem("productsIncart")) : [];

if(addItem){
    addItem.map(item => {
     cartProductsDiv.innerHTML += `<p>${item.title}</p>`;

   })
    badge.style.display= "block" ;
    badge.innerHTML = addItem.length
}
//

    if(localStorage.getItem=("username")){
  

function addToCart(id){
let choosenItem = products.find((item) => item.id === id);
cartProductsDiv.innerHTML += `<p>${choosenItem.title}</p>`;

addItem =[...addItem ,choosenItem]
localStorage.setItem("productsIncart" , JSON.stringify(addItem))
let cartProductslength =  document.querySelectorAll(".carts_products div p")
 badge.style.display="block";
badge.innerHTML = cartProductslength.length ;
}
    }else{
        window.location ="login.html"
    }
//////////////////////////////////
let shoppingcartIcon = document.querySelector(".shopping_cart")
let cartsproducts = document.querySelector(".carts_products")
shoppingcartIcon.addEventListener("click",opencart)
function opencart (){
    if (cartProductsDiv.innerHTML !=""){
        if(cartsproducts.style.display=="block"){
            cartsproducts.style.display="none"
        }else{
            cartsproducts.style.display="block"
        }
    }
}