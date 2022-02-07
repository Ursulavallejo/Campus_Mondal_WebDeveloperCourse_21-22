import { createContext, useState } from "react";

const StoreContext = createContext({
    productOnCart: [],
    totalProductOnCart: 0,
    totalPriceOnCart: 0
});

export function StoreContextProvider(props) {
    const [ itemsSelected, setItemsSelected ] = useState([]);

    function addProductOnCartHandler(selectedItem) {
        // console.log(selectedItem)
        if (cartIsEmpty()) {
            console.log('if')
            insertProductOnCartHandler(selectedItem);
        } else {
            console.log('else')
            if (itemIsProductOnCartHandler(selectedItem.id)) {
                console.log('if2')
                // updateQuantityAndPrice(selectedItem.id);
            } else {
                console.log('else2')
                insertProductOnCartHandler(selectedItem);
            }
            console.log(selectedItem)
        }
    }



    function removeProductOnCartHandler(productId) {
        const productIsOnCart = itemsSelected.find((product) => product.id === productId.id)
        if (productIsOnCart.quantity === 1) {
            setItemsSelected(itemsSelected.filter((product) => product.id !== productId));
            return productIsOnCart;
        } else {
            setItemsSelected(itemsSelected.map((product) => product.id === productId.id ? {
                ...productIsOnCart,
                quantity: productIsOnCart.quantity - 1
            } : product))
        }
    }


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

    function updateQuantityAndPrice(productId) {
        // console.log('updateQuantityAndPrice:', productId)
        setItemsSelected(prevItemsSelected => {
            return prevItemsSelected.map((currentItem) =>{
                if (currentItem.id === productId) {
                    currentItem.quantity += 1
                    console.log('number cds ', currentItem.quantity)
                    currentItem.totalSum = currentItem.price * currentItem.quantity
                    console.log('price', currentItem.totalSum)
                }
            });
        });
    }


    const context = {
        productOnCart: itemsSelected,
        totalProductOnCart: itemsSelected.length,
        totalPriceOnCart: 0,
        insertProduct:  insertProductOnCartHandler,
        addProduct: addProductOnCartHandler,
        removeProduct: removeProductOnCartHandler,
        itemIsOnCart: itemIsProductOnCartHandler,
        // updateProductQuantityPrice:  updateQuantityAndPrice,
        cartEmpty: cartIsEmpty,
    };

    return (
        <StoreContext.Provider value={ context }>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext