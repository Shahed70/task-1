import produce from "immer";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { categoryCartState, categoryProductState } from "../atoms/state";
import Card from "./Card";

const CategoryCard = () => {
  const [categories, setCategories] = useRecoilState(categoryProductState);
  const [cart, setCart] = useRecoilState(categoryCartState);

  const handleInputNumber = (e, catIndex, itemIndex) => {
    
    const inputQuantity = Number(e.target.value);
    const checkNumber = Math.sign(inputQuantity);
    const singleCategoryStock = categories[catIndex].items[itemIndex].inStock

    if (inputQuantity > Number(singleCategoryStock)) {
      toast.error("The number of item you put is out of stock");
    }
    if (
      checkNumber === -1 ||
      checkNumber === 0 ||
      inputQuantity > Number(singleCategoryStock)
    ) {
      e.target.value = null;
    }

    setCategories(oldCategories => produce(oldCategories, (draft) => {
   
      draft[catIndex].items[itemIndex].quantity = e.target.value

    }))
     
  };



  const handleCart = (id) => {
    // const cartItem = categories.find((item) => item.productId === id);
    // if (cartItem.quantity < 1) {
    //   toast.error("Please put your quantity first");
    // } else {
    //   setCart([...cart, cartItem]);
    //   toast.success("Product added to cart successfully");
    // }


    // setCart(
    //   produce(cart, (draft) => {
    //     draft.push(cartItem);
    //   })
    // );
  };

  return (
    <div className="container my-20">
      {
        categories?.map((cat, catIndex) => (
          <section className="bird-section my-24" id={cat.categoryName} key={catIndex}>
            <h1 className="text-3xl uppercase mb-5">
              {cat.categoryName}
            </h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
              {cat.items.map((item, itemIndex) => (
                <Card item={item} key={itemIndex}
                  itemIndex={itemIndex}
                  handleInputNumber={handleInputNumber}
                  handleCart={handleCart}
                  catIndex={catIndex}
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
