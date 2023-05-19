// selecting the actual price of the product and changing it to Integer
var actual = parseInt(document.getElementById('actual').innerHTML)
// creating an add() function that adds one to a quantity variable whenever + is  clicked
function add() {
    // getting the quantity from html page and changing it's data type to Integer
    var element = parseInt(document.getElementById('quantity-number').innerHTML)
    // adding 1 to element
    element = element + 1
    // using a for loop
    for (var i = 1; i <= element; i++) {
        // setting the new price whenever + is clicked on
        var new_price = actual * element
        // calculating the discount price 
        var new_discounted_price = new_price - ((15 * new_price) / 100)
    }

    // changing the price whenever quantity is altered and displaying in the html page
    document.getElementById('actual').innerHTML = new_price
    // quantity is altered and displaying in the html page
    document.getElementById('quantity-number').innerHTML = element
    // displaying the discounted amount after calcuation
    document.getElementById('discount').innerHTML = new_discounted_price
}
// calling add once before the function is called because it sets the quantity initial value to 1 
add();

// creating an subtract() function that subtracts one from a quantity variable whenever - is  clicked
function subtract() {
    // getting the quantity from html page and changing it's data type to Integer
    var element = parseInt(document.getElementById('quantity-number').innerHTML)
        // adding 1 to element
    element = element - 1
    // selecting the current actual price and then storing it's value as Integer
    var actual_price = parseInt(document.getElementById('actual').innerHTML)
    // calculating the price after the quantity is altered
    var new_price = actual_price - actual
    // calculating the new discount price
    var new_discounted_price = new_price - ((15 * new_price) / 100)
    // if the element value goes less than 1, the 1 is displayed
    if (element < 1) {
        document.getElementById('quantity-number').innerHTML = 1


    }
    else {
        // current quantity selected is displayed
        document.getElementById('quantity-number').innerHTML = element
        // new price after changing quantity is displayed
        document.getElementById('actual').innerHTML = new_price
        // discounted price after changing quantity is displayed
        document.getElementById('discount').innerHTML = new_discounted_price
    }
}

// creating a function buyNow()
function buyNow() {
    if(document.getElementById('cart-items').innerHTML == 0){
        // alert message is displayed when cart is empty
        alert("Your cart is empty")
    }
    else{
        // when called, alert message is displayed
        alert("Thank you for the purchase")
    }
    // cart is emptied
    document.getElementById('cart-items').innerHTML = 0;
}
