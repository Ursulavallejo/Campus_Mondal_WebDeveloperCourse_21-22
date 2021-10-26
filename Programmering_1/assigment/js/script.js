let myCartShop = []

function itemAlreadyInCart(cd) {
    for (const item of myCartShop) {
        if (item.artist === cd) {
            return true
        }
    }
    return false
}

function updateQuantity(cd) {
    for (const item of myCartShop) {
        if (item.artist === cd) {
            item.quantity += 1
        }
    }
}

function insertItemToCart(cd) {
    myCartShop.push({
        artist: name,
        quantity: 1
    });
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

function addButtonEventListeners(elementId) {
    document.getElementById(elementId)
        .addEventListener('click', function () {
            addItemToCart(elementId)
        });
}

window.addEventListener('load', function () {
    for (const cdArtist of dataProducts ) {
        addButtonEventListeners(cdArtist.album)
    }
})






