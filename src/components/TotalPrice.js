import React from "react";
import { selector, useRecoilValue } from "recoil";
import { categoryProductState } from "../atoms/state";
import CartModal from "./CartModal";

const getCategoriyState = selector({
  key: "getProductPrice",
  get: ({ get }) => {
    const getState = get(categoryProductState);
    let sum = 0;
    const categoryArray = getState.map((category) => category.items);
    categoryArray.map((item) => {
      const indvidualItem = item;
      const total = indvidualItem.reduce((acc, item) => {
        const temSum = item.price * item.quantity;
        return (acc += temSum);
      }, 0);
      return sum+= total
    });
    return sum;
  },
});

const TotalPrice = () => {
  const categoryTotalPrice = useRecoilValue(getCategoriyState);
  

  // const categoryArray = state.map((categories) => categories.items);
  // let sum = 0;
  // categoryArray.map((item, ind) => {
  //   let indvidual = item;
  //   let indSum = 0;
  //   indvidual?.map((it) => {
  //     indSum += it.price * it.quantity;
  //   });
  //   sum += indSum;
  // });

  return (
    <div className="text-right mb-10 fixed-right">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       CART TOTAL${categoryTotalPrice}
      </button>
      <span className="ml-5">
        <CartModal />
      </span>
    </div>
  );
};

export default TotalPrice;
