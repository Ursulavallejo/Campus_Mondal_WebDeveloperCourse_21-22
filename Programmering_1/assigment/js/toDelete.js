
/*
// READ INPUT   what the teacher explained in class but some conexion is not working as mine is dinamic he did it for one
function readInput(cd ) {
    for (const item of myCartShop) {
        item.quantity = Number(document.getElementById("inputQty-${ cd.tag }").value)
        if (item.tag === cd) &&& (item.quantity < 1) {
            document.getElementById("${ cd.tag }").style.display = 'none'
        } else {
            document.getElementById("${ cd.tag }").style.display = 'block'
        }
        let sum = item.quantity * item.price;

        document.getElementById('subPriceCart').innerText = String(sum);
    }
}
*/

// Delete information from cart with button X
/*

function removeShoppingCartItem(cd) {
    const buttonClicked = cd.tag;
    buttonClicked.closest('.cardCDInfoCart').remove();
    updateDropdownContent (cd);
}
document.getElementById('removeCDCart').addEventListener("click", removeShoppingCartItem )
*/
