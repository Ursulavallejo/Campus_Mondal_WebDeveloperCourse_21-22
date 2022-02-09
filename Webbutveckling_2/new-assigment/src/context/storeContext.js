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
                const productFromCart = itemsSelected.find((product) => product.id === selectedItem.id)
                updateQuantityAndPrice(productFromCart.quantity+1,selectedItem.id);
            } else {
                console.log('else2')
                insertProductOnCartHandler(selectedItem);
            }
            console.log(selectedItem)
        }
    }

    /*    To remove the product on the cart on the btn X*/
    function removeProductBtnHandler(productId) {
        setItemsSelected (prevItemsSelected => {
            return prevItemsSelected.filter(product => product.id !== productId);
        });
    }

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

    // update new array with products selected
    function updateQuantityAndPrice(newValue,productId) {

        setItemsSelected(prevItemsSelected => {
            return prevItemsSelected.map((currentItem) => {
                if (currentItem.id === productId) {
                    currentItem.quantity = newValue
                    console.log('number cds ', currentItem.quantity)
                    currentItem.totalSum = currentItem.price * currentItem.quantity
                    console.log('price', currentItem.totalSum)
                }
                return currentItem
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
        removeBtn:removeProductBtnHandler,
        itemIsOnCart: itemIsProductOnCartHandler,
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