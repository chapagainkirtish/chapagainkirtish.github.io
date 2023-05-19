var x = 0;
// creating a function addToCart()
function addToCart(){
    /* selecting the id 'cart-items' from the html page and storing the value present there
    with the help of .innerHTML and changing the value to integer using parseInt()*/
    x = parseInt(document.getElementById('cart-items').innerHTML);
    // adding 1 to x everytime the function is called
    x = x + 1;
    // displaying the updated value of x to the html page
    document.getElementById('cart-items').innerHTML = x;
}