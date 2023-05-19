// creating a function named display_date()
function display_date() {
    // selecting the tag from html pages whose id is 'date' and adding the current date using Date() function
    document.getElementById('date').innerHTML = Date();
    // setting the display date and refreshing it every 1 secong
    setTimeout(display_date, 1000)
}
// calling the display_date() method to display the date once before the update happens
display_date();     