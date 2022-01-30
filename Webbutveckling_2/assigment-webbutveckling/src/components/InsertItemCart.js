// import BasketItem from "../components/card/BasketItem";
//
// const myCartShop = []
//
//
// const InsertItemCart = (props) => {
//     function cartIsEmpty() {
// // Checks if cart is empty
//         return myCartShop.length === 0
//     }
//    function addItemToCart(props) {
// // add item to cart and updates totals
//         if (cartIsEmpty()) {
//             InsertItemCart (props);
//         }
//
//     return (
//         <div className='tc '>
//             {
//                 myCartShop.map((user, index) => {
//                     return (
//                         <BasketItem key={ index }
//                                   id={ myCartShop[index].id }
//                                   image={ myCartShop[index].image }
//                                   artist={ myCartShop[index].artist }
//                                   album={ myCartShop[index].album }
//                                   price={ myCartShop[index].price }
//                                    // quantity= {1}
//                                    // totalSum:{ myCartShop[index].price }
//
//                         />
//                     )
//                 })
//             }
//         </div>
//     )
// }
//
// export default {InsertItemCart}
