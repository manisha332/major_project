function placeOrder(){

    alert("Your Order has been Placed Successfully!");

    localStorage.removeItem("cart");

    window.location.href="orders.html";

}