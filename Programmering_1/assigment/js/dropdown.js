function openMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

function closeMenu() {
    document.getElementById('dropdown')
        .classList.remove('show')
}
function toCheckout(){
    alert ('Thank you for visiting us!! At the moment we cant offer to buy any product!')
}

function templateSingleCartItem(cartItem)
// function that writes html template with dynamic data

function updateDropdownContent(CartItemsArray)
// function that reads data from source and calls template function with this data
// thsi function is beeing called from script.js, with the updated array myCartShop
