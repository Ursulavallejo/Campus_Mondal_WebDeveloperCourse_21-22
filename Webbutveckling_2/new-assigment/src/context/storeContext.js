import { createContext, useState } from "react";

const StoreContext = createContext({
    productOnCart: [],
    totalProductOnCart: 0,
    totalPriceOnCart: 0
});

export function StoreContextProvider(props) {
    const [ itemsSelected, setItemsSelected ] = useState([]);

    const [ totalAlbum, setTotalAlbum] = useState(0);


    function addProductOnCartHandler(selectedItem) {
        // console.log(selectedItem)
        if (cartIsEmpty()) {
            console.log('if')
            insertProductOnCartHandler(selectedItem);
        } else {
            console.log('else')
            if (itemIsProductOnCartHandler(selectedItem.id)) {
                console.log('if2')
                updateQuantityAndPrice(selectedItem.quantity,selectedItem.id);
            } else {
                console.log('else2')
                insertProductOnCartHandler(selectedItem);
            }
            console.log(selectedItem)
        }
    }

    /*    To remove the product on teh cart on the btn X*/
    function removeProductBtnHandler(productId) {
        setItemsSelected (prevItemsSelected => {
            return prevItemsSelected.filter(product => product.id !== productId);
        });
    }

/*    below two ideas  for remove product with if statement but coudnt make them  work*/

    function removeProductOnCartHandler(productId) {
        const productFromCart = itemsSelected.find((product) => product.id === productId)
        if (productFromCart.quantity === 1) {
            setItemsSelected(itemsSelected.filter((product) => product.id !== productId));
            return productFromCart;
        } else {
            setItemsSelected(itemsSelected.map((product) => product.id === productId ? {
                ...product,
                quantity: product.quantity - 1
            } : product))
        }
    }


// Try to use this one but do not work.
    // function removeProductFromCart (productId)  {
    //     console.log('Removing product with id: ' + productId);
    //     const updatedCart = [itemsSelected.productOnCart];
    //     const updatedItemIndex = updatedCart.findIndex(
    //         item => item.id === productId
    //     );
    //
    //     const updatedItem = {
    //         ...updatedCart[updatedItemIndex]
    //     };
    //     updatedItem.quantity--;
    //     if (updatedItem.quantity <= 0) {
    //         updatedCart.splice(updatedItemIndex, 1);
    //     } else {
    //         updatedCart[updatedItemIndex] = updatedItem;
    //     }
    // }


    function itemIsProductOnCartHandler(productId) {
        return itemsSelected.some(product => product.id === productId);
    }

    function insertProductOnCartHandler(selectedItem) {
        console.log(selectedItem)
        setItemsSelected((prevItemsSelected) => {
            return prevItemsSelected.concat(selectedItem);
        });
    }

    function cartIsEmpty() {
        return itemsSelected.length === 0
    }

    // this function is not called as have some problem that could find. not sure how is teh correct way to write it
    function updateQuantityAndPrice(newValue,productId) {

        // console.log('updateQuantityAndPrice:', productId)
        setItemsSelected(prevItemsSelected => {
            return prevItemsSelected.map((currentItem) => {
                if (currentItem.id === productId) {
                    currentItem.quantity += 1
                    console.log('number cds ', currentItem.quantity)
                    currentItem.totalSum = currentItem.price * currentItem.quantity
                    console.log('price', currentItem.totalSum)
                }
                return currentItem
            });
        });
    }


  /*  version that max has in the tutorial of redux*/
    // function updateAddProductoCart(productId){
    //     const updatedCart = [...this.state.productOnCart];
    //     const updatedItemIndex = updatedCart.findIndex(
    //         item => item.id === productId.id
    //     );
    //
    //     if (updatedItemIndex < 0) {
    //         updatedCart.push({ ...productId, quantity: 1 });
    //     } else {
    //         const updatedItem = {
    //             ...updatedCart[updatedItemIndex]
    //         };
    //         updatedItem.quantity++;
    //         updatedCart[updatedItemIndex] = updatedItem;
    //     }
    // }



    const context = {
        productOnCart: itemsSelected,
        totalProductOnCart: itemsSelected.length,
        totalPriceOnCart: 0,
        insertProduct:  insertProductOnCartHandler,
        addProduct: addProductOnCartHandler,
        removeProduct: removeProductOnCartHandler,
        removeBtn:removeProductBtnHandler,
        itemIsOnCart: itemIsProductOnCartHandler,
        // updateCart: updateAddProductoCart,
        updateProduct:  updateQuantityAndPrice,
        cartEmpty: cartIsEmpty,
    };

    return (
        <StoreContext.Provider value={ context }>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext