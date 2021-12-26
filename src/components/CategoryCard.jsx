import produce from "immer";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { categoryCartState, categoryProductState } from "../atoms/state";
import Card from "./Card";

const CategoryCard = ({ jumpToPricing }) => {
  const [categories, setCategories] = useRecoilState(categoryProductState);
  //console.log(categories);
  const [cart, setCart] = useRecoilState(categoryCartState);
  
  useEffect( () => {
    fetch(`http://127.0.0.1:8000/getProducts`,
    {
      method:"GET",
      headers:{
        "Content-Type":"Application/json",
      }
    }
    )
        .then( res => res.json())
        .then( data => {
          setCategories([...categories,...data])
        })
        .catch(err => console.log(err))
  },[setCategories])

  const handleCart = (catIndex, productIndex) => {
    //const quantity = categories[catIndex].product[productIndex].quantity
    const cartItem = categories[catIndex].products[productIndex]
    console.log(cartItem);
    
    if (cartItem.quantity < 1) {
      toast.error("Please put your quantity first");
    } else {
      setCart([...cart, cartItem]);
      toast.success("Product added to cart successfully");
    }

  };



  
  const onQuantityChange = ({ value, catIndex, productIndex }) => {
    console.log("val", value)
    if (value < 0) return 
    setCategories(oldCategories => produce(oldCategories, (draft) => {
      if (value <= draft[catIndex].products[productIndex].inStock) {
        draft[catIndex].products[productIndex].quantity = value
      }
    }))

    console.log(value);
  }

  return (
    <div className="container my-20 ">
      {
        categories?.map((cat, catIndex) => (
          <section className="bird-section my-24 center" id={cat.cat_name} key={catIndex}>
            <h1 className="text-3xl uppercase mb-5">
              {cat.cat_name}
            </h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
              
              {cat.products?.map((product, productIndex) => (
                <Card
                  product={product}
                  key={productIndex}
                  // productIndex={productIndex}
                  // catIndex={catIndex}
                  // handleInputNumber={handleInputNumber}
                   handleCart={() => handleCart(catIndex, productIndex)}
                  // setInputValue={setInputValue}
                  // handeInputValue={handeInputValue}

                  inputValue={product.quantity}
                  onQuantityChange={(value) => onQuantityChange({ value, catIndex, productIndex })}

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
