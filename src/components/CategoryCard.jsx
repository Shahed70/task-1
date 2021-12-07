import produce from "immer";
import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { categoryCartState, categoryProductState } from "../atoms/state";
import Card from "./Card";

const CategoryCard = ({ jumpToPricing }) => {
  const [categories, setCategories] = useRecoilState(categoryProductState);
  const [cart, setCart] = useRecoilState(categoryCartState);
  

  const handleCart = (catIndex, itemIndex) => {
    const quantity = categories[catIndex].items[itemIndex].quantity
    const cartItem = categories[catIndex].items[itemIndex]
    
    if (cartItem.quantity < 1) {
      toast.error("Please put your quantity first");
    } else {
      setCart([...cart, cartItem]);
      toast.success("Product added to cart successfully");
    }

  };



  
  const onQuantityChange = ({ value, catIndex, itemIndex }) => {
    console.log("val", value)
    if (value < 0) return 
    setCategories(oldCategories => produce(oldCategories, (draft) => {
      if (value <= draft[catIndex].items[itemIndex].inStock) {
        draft[catIndex].items[itemIndex].quantity = value
      }
    }))

    console.log(value);
  }

  return (
    <div className="container my-20 ">
      {
        categories?.map((cat, catIndex) => (
          <section className="bird-section my-24 center" id={cat.categoryName} key={catIndex}>
            <h1 className="text-3xl uppercase mb-5">
              {cat.categoryName}
            </h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
              
              {cat.items.map((item, itemIndex) => (
                <Card
                  item={item}
                  key={itemIndex}
                  // itemIndex={itemIndex}
                  // catIndex={catIndex}
                  // handleInputNumber={handleInputNumber}
                   handleCart={() => handleCart(catIndex, itemIndex)}
                  // setInputValue={setInputValue}
                  // handeInputValue={handeInputValue}

                  inputValue={item.quantity}
                  onQuantityChange={(value) => onQuantityChange({ value, catIndex, itemIndex })}

                />
              ))}
            </div>
          </section>
        ))
      }

      <Toaster />
    </div>
  );
};

export default CategoryCard;
