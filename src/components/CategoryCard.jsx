import produce from "immer";
import React, {useState} from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryCartState, categoryProductState } from "../atoms/state";
import Card from "./Card";

const CategoryCard = () => {
  const [categories, setCategories] = useRecoilState(categoryProductState);
  const [cart, setCart] = useRecoilState(categoryCartState);
  
  const [categoryId, setCategoryId] =  useState("")

  const handleInputNumber = (e, id) => {
    let inputQuantity = Number(e.target.value);
    const checkNumber = Math.sign(inputQuantity);
    const index = categories.findIndex((item) => item.productId === id);
    const singlecategory = categories[index];
    if (inputQuantity > Number(singlecategory.inStock)) {
      toast.error("The item is out of stock");
    }
    if (
      checkNumber === -1 ||
      checkNumber === 0 ||
      inputQuantity > Number(singlecategory.inStock)
    ) {
      e.target.value = null;
    }

    setCategories(oldCategories => produce(oldCategories, (draft) => {
      const singleCategory = draft[index];
      singleCategory.quantity = inputQuantity;
      singleCategory.inStock = Number(singleCategory.inStock - 1);

      // currentStock = Number(currentStock - 1)
    }))

    // setCategories(

    // );
  };



  const handleCart = (id) => {
    const cartItem = categories.find((item) => item.productId === id);
    if (cartItem.quantity < 1) {
      toast.error("Please put your quantity first");
    } else {
      setCart([...cart, cartItem]);
      toast.success("Product added to cart successfully");
    }


    // setCart(
    //   produce(cart, (draft) => {
    //     draft.push(cartItem);
    //   })
    // );
  };

  return (
    <div className="container my-20">
      {
        categories.map(cat => (
          <>
            <section className="bird-section my-24" id="bird">
              <h1 className="text-3xl uppercase mb-5">
                {cat.categoryName}
              </h1>
              <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                {cat.items.map((item, index) => (
                  <Card category={item} key={index} handleInputNumber={handleInputNumber} handleCart={handleCart} />
                ))}
              </div>
            </section>
          </>
        ))
      }

      <Toaster />
    </div>
  );
};

export default CategoryCard;
