import React from "react";
import { useRecoilValue } from "recoil";
import { categoryCartState } from "../atoms/state";
const Cart = () => {
  const cartItems = useRecoilValue(categoryCartState);
  const singleProductCost = (price, quantity) => Number(price) * Number(quantity)
  const singleProductCost1 = cartItems.map(prod=> (prod.price * prod.quantity))
  console.log(singleProductCost1);
  const cartTotalCost = cartItems.reduce((acc, item) => {
    const tempSum = Number(item.quantity) * Number(item.price);
    return acc + tempSum;
  }, 0);
  return (
    <div className="container">
      <div className="cart-items">
        {cartItems?.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          cartItems?.map((item, index) => (

            <>
              
              <div className="grid grid-cols-5 border py-5 text-center" key={index}>
                <div className="product-img">
                  <img
                    className="w-1/3  rounded inline-block"
                    src={item.productImage}
                    alt="cart products"
                  />
                </div>
                <div className="product-name ">
                  <h1 className="mt-3"> {item.productName}</h1>
                </div>
                <div className="product-quantity">
                  <h1 className="mt-3">Quantity {item.quantity}</h1>
                </div>
                <div className="prduct-price">
                  <h1 className="mt-3 text-center">Price ${item.price}</h1>
                </div>
                <div className="prduct-price">
                  <h1 className="mt-3 text-center">Total Price ${singleProductCost(item.price, item.quantity,)}</h1>
                </div>
              </div>
            </>
          ))
        )}
        <div className="w-full h-10 bg-blue border-b-2"></div>
        <h1 className="text-2xl">Total Cost = ${cartTotalCost}</h1>
      </div>
    </div>
  );
};

export default Cart;
