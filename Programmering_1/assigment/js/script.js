let myCartShop = []

function itemAlreadyInCart(cd) {
    for (const item of myCartShop) {
        if (item.tag === cd) {
            return true
        }
    }
    return false
}

function updateQuantity(cd) {
    for (const item of myCartShop) {
        if (item.tag === cd) {
            item.quantity += 1
        }
    }
}

function insertItemToCart(cd) {
    let cdInfo = {
        img: document.getElementById("img-"+cd).src,
        artist: document.getElementById("artist-"+cd).innerHTML,
        album: document.getElementById("album-"+cd).innerHTML,
        price: document.getElementById("price-"+cd).innerHTML,
        tag: cd,
        quantity: 1
    }
    myCartShop.push(cdInfo);
}
function cartIsEmpty() {
    return myCartShop.length === 0
}

function addItemToCart(cd) {
    if (cartIsEmpty()) {
        insertItemToCart(cd);
    } else {
        if (itemAlreadyInCart(cd)) {
            updateQuantity(cd);
        } else {
            insertItemToCart(cd);
        }
    }

    console.log(myCartShop)
}
// Button
function addButtonEventListeners(elementId) {
   document.getElementById("button-" + elementId)
       .addEventListener('click', function () {
            addItemToCart(elementId),
                updateDropdownContent (elementId)
        });
}

window.addEventListener('load', function () {
    for (const cdArtist of dataProducts ) {
        addButtonEventListeners(cdArtist.tag)
    }
})


//function that writes content to dropdown:
//1. write all elements from myCartShop with template
//2. write total and calculate total from myCartShop
//3. other calculations (like if there is free shipping etc.)
/*
function updateQuantityAndPrice(cd) {
    for (const item of myCartShop) {
        if (item.tag === cd) {
            item.quantity += 1
            item.price=item.price * item.quantity
        }
    }
}
*/




