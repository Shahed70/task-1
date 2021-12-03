import produce from "immer";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryCartState, categoryProductState } from "../atoms/state";

const CategoryCard = () => {
  const [categories, setCategories] = useRecoilState(categoryProductState);
  const [cart, setCart] = useRecoilState(categoryCartState);
  const birdCategory = categories.filter((bird) => bird.categoryId === "bird");
  const mobileCategory = categories.filter(
    (bird) => bird.categoryId === "mobile"
  );
  const laptopCategory = categories.filter(
    (bird) => bird.categoryId === "laptop"
  );

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

    setCategories(
      produce(categories, (draft) => {
        const singleCategory = draft[index];
        singleCategory.quantity = inputQuantity;
        singleCategory.inStock = Number(singleCategory.inStock - 1);

        // currentStock = Number(currentStock - 1)
      })
    );
  };

  const handleInputChange = () => {
    console.log("ok");
  };

  const handleCart = (id) => {
    const cartItem = categories.find((item) => item.productId === id);
      setCart([...cart, cartItem])

      localStorage.setItem("Product", [cartItem])

    // setCart(
    //   produce(cart, (draft) => {
    //     draft.push(cartItem);
    //   })
    // );
  };

  const cartItems = useRecoilValue(categoryCartState)
  console.log(cartItems);

  return (
    <div className="container my-20">
      <section className="bird-section" id="bird">
        <h1 className="text-3xl uppercase mb-5"> Birds</h1>

        <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {birdCategory?.map((bird, index) => (
            <div className="card-box" key={index}>
              <div className="product-card  px-5 shadow-lg rounded overflow-hidden">
                <img
                  className="w-full"
                  style={{ width: "100%" }}
                  src={bird.productImage}
                  alt="Sky"
                />
                <div className="px-6 py-4">
                  <div className="text-3xl"> {bird.productName} </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex justify-between">
                  <span>${bird.price}</span>
                  <span>IN STOCK {bird.inStock}</span>
                </div>
                <div className="quantity">
                  <input
                    className="shadow appearance-none mb-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder=""
                    min="0"
                    max={bird.inStock}
                    onInput={(e) => handleInputNumber(e, bird.productId)}
                    onChange={(e) => handleInputChange(e, bird.productId)}
                  />
                </div>
              </div>
              <button
                onClick={() => handleCart(bird.productId)}
                className="bg-blue-500 btn hover:bg-blue-700 w-full  text-white font-bold py-2 px-4 rounded"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mobile-section my-24" id="mobile">
        <h1 className="text-3xl uppercase mb-5"> Mobile Phone</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {mobileCategory?.map((mobile, index) => (
            <div className="card-box" key={index}>
              <div className="product-card  px-5 shadow-lg rounded overflow-hidden">
                <img
                  className="w-full h-40"
                  src={mobile.productImage}
                  alt="Sky"
                />
                <div className="px-6 py-4">
                  <div className="text-3xl"> {mobile.productName} </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex justify-between">
                  <span>${mobile.price}</span>
                  <span>IN STOCK {mobile.inStock}</span>
                </div>
                <div className="quantity">
                  <input
                    className="shadow appearance-none mb-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder=""
                    onInput={(e) => handleInputNumber(e, mobile.productId)}
                    onChange={(e) => handleInputChange(e, mobile.productId)}
                  />
                </div>
              </div>
              <button  onClick={() => handleCart(mobile.productId)} className="bg-blue-500 hover:bg-blue-700 w-full px-0 text-white font-bold py-2 px-4 rounded">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="computer-section my-24" id="computer">
        <h1 className="text-3xl uppercase mb-5"> Computer</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {laptopCategory?.map((laptop, index) => (
            <div className="card-box" key={index}>
              <div className="product-card  px-5 shadow-lg rounded overflow-hidden">
                <img
                  className="w-full h-40"
                  src={laptop.productImage}
                  alt="Sky"
                />
                <div className="px-6 py-4">
                  <div className="text-xl"> {laptop.productName} </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex justify-between">
                  <span>${laptop.price}</span>
                  <span>IN STOCK {laptop.inStock}</span>
                </div>
                <div className="quantity">
                  <input
                    className="shadow appearance-none mb-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder=""
                    onInput={(e) => handleInputNumber(e, laptop.productId)}
                    onChange={(e) => handleInputChange(e, laptop.productId)}
                  />
                </div>
              </div>
              <button  onClick={() => handleCart(laptop.productId)} className="bg-blue-500 hover:bg-blue-700 w-full px-0 text-white font-bold py-2 px-4 rounded">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default CategoryCard;
