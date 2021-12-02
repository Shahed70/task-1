import React from "react";
import { useRecoilState } from "recoil";
import { categoryProductState } from "../atoms/state";

const CategoryCard = () => {
  const [categories, setCategories] = useRecoilState(categoryProductState);

  const birdCategory = categories.filter((bird) => bird.categoryId === "bird");
  const mobileCategory = categories.filter(
    (bird) => bird.categoryId === "mobile"
  );
  const laptopCategory = categories.filter(
    (bird) => bird.categoryId === "laptop"
  );
  return (
    <div className="container my-20">
        <section className="bird-section" id="bird">
        <h1 className="text-3xl uppercase mb-5"> Birds</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {birdCategory?.map((bird) => (
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
              <span>IN STOCK {bird.availAbleQuantity}</span>
            </div>
            <div className="quantity">
              <input
                className="shadow appearance-none mb-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder=""
              />
              <button className="bg-blue-500 hover:bg-blue-700 w-full px-0 text-white font-bold py-2 px-4 rounded">
              Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      </section>

      <section className="mobile-section my-24" id="mobile">
        <h1 className="text-3xl uppercase mb-5"> Mobile Phone</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {mobileCategory?.map((mobile) => (
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
              <span>IN STOCK {mobile.availAbleQuantity}</span>
            </div>
            <div className="quantity">
              <input
                className="shadow appearance-none mb-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder=""
              />
              <button className="bg-blue-500 hover:bg-blue-700 w-full px-0 text-white font-bold py-2 px-4 rounded">
              Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      </section>

      <section className="computer-section my-24" id="computer">
        <h1 className="text-3xl uppercase mb-5"> Computer</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {laptopCategory?.map((laptop) => (
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
              <span>IN STOCK {laptop.availAbleQuantity}</span>
            </div>
            <div className="quantity">
              <input
                className="shadow appearance-none mb-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder=""
              />
              <button className="bg-blue-500 hover:bg-blue-700 w-full px-0 text-white font-bold py-2 px-4 rounded">
              Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
};

export default CategoryCard;
