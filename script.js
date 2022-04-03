var subscription = "Daily";
var price = 150;
var flavor = "Strawberry Banana";
var cart = [];



function Smoothy(subscription, price){
    this.subscription = subscription;
    this.price = price;
    this.flavor = "Strawberry Banana";
}

function pricechange(){
    var x = document.getElementById("priceselect").value;
    document.getElementById("price").innerHTML = x
    if(x==="75"){
        subscription = "Monthly"
        price = 75
    }
    else if(x==="100"){
        subscription = "Weekly"
        price=100
    }
    else if(x==="150"){
        subscription = "Daily"
        price=150
    }
}
var count = 0
function AddCart(){
    count++ 
    document.getElementById("cartNum").innerHTML = count
    var StrawBanana = new Smoothy(subscription, price);
    console.log(StrawBanana);
    cart.push(StrawBanana);
    localStorage.setItem("CART",JSON.stringify(cart))
}

window.onload = function() {
    cart =JSON.parse(localStorage.getItem("CART"));
    var container = document.getElementById("cart"); 
    console.log(cart);
    for (i=0;i< cart.length; i++){
        let y = ` <div style="display: flex; justify-content: space-between">
        <div style="text-align:left;font-size:24px;float:left" > ${cart[i].flavor}  </div>
        <div style="display: flex" >
        <div style="padding-right: 50px"> $${cart[i].price}</div>
        <div> ${cart[i].subscription}</div>
        <button type= "button"onclick=deleteCart(${i})>X</button>
        </div>
        </div>`
        container.insertAdjacentHTML("afterend",y)
    }
}

function deleteCart(i){
    cart.splice(i,1);
    var bigcontainer = document.getElementById("cartcontainer");
    bigcontainer.innerHTML = '<h4 style="text-align:left;font-weight:400;font-size: 35px;" id="cart">My Cart</h4>';
    var container = document.getElementById("cart");
    for (i=0;i< cart.length; i++){
        let y = ` <div style="display: flex; justify-content: space-between">
        <div style="text-align:left;font-size:24px;float:left" > ${cart[i].flavor}  </div>
        <div style="display: flex" >
        <div style="padding-right: 50px"> $${cart[i].price}</div>
        <div> ${cart[i].subscription}</div>
        <button type= "button" onclick=deleteCart(${i})>X</button>
        </div>
        </div>`
        container.insertAdjacentHTML("afterend",y);     
    }
    localStorage.setItem("CART",JSON.stringify(cart));



}