const products = [

{
    id:1,
    name:"Laptop",
    price:65000
},

{
    id:2,
    name:"Smart Phone",
    price:30000
},

{
    id:3,
    name:"Headphones",
    price:2000
},

{
    id:4,
    name:"Smart Watch",
    price:5000
}

];

const productList = document.getElementById("productList");

products.forEach(product=>{

productList.innerHTML += `

<div class="product">

<h3>${product.name}</h3>

<p>Price : ₹${product.price}</p>

<button onclick="addToCart('${product.name}')">
Add to Cart
</button>

</div>

`;

});

function addToCart(product){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " added to cart!");

}
function logout()
{

alert("Logout Successful!");

window.location.href="login.html";

}