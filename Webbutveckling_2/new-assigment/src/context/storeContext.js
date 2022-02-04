import { createContext, useState } from "react";

const StoreContext = createContext({
    productOnCart: [],
    totalProductOnCart: 0,
    totalPriceOnCart: 0

});

export function StoreContextProvider(props) {
    const [ itemsSelected, setItemsSelected ] = useState([]);

    function addProductOnCartHandler(selectedItem) {
        console.log(selectedItem)
           if (cartIsEmpty()) {
               insertProductOnCartHandler(selectedItem);
    } else {
        if (itemIsProductOnCartHandler(selectedItem.id)) {
            updateQuantityAndPrice(selectedItem);
        } else {
            insertProductOnCartHandler(selectedItem);
        }
    }


    function removeProductOnCartHandler(productId) {
        setItemsSelected(prevItemsSelected => {
            return prevItemsSelected.filter(product => product.id !== productId );
        });
    }

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
    function updateQuantityAndPrice(selectedItem){
            if (itemsSelected.id === selectedItem) {
                itemsSelected.quantity += 1
                itemsSelected.totalSum = itemsSelected.price * itemsSelected.quantity
            }
        }
    }
    const context = {
        productOnCart: itemsSelected,
        totalProductOnCart: itemsSelected.length,
        totalPriceOnCart: 0,
        addProduct: addProductOnCartHandler,
        removeProduct: removeProductOnCartHandler,
        itemIsOnCart: itemIsProductOnCartHandler,
    };

    return (
        <StoreContext.Provider value={ context }>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;