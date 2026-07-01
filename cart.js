const cartItems=document.getElementById("cartItems");

const cart=JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length===0){

cartItems.innerHTML="<p>Your cart is empty.</p>";

}else{

cart.forEach(product=>{

cartItems.innerHTML += `

<p>${product}</p>

`;

});

}