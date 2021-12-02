import produce from "immer";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { categoryProductState } from "../atoms/state";

const CategoryCard = () => {
    const [categories, setCategories] = useRecoilState(categoryProductState);

    const inputElement = document.getElementById('inputQuantity')
    console.log("inputElement", inputElement);
    const birdCategory = categories.filter((bird) => bird.categoryId === "bird");
    const mobileCategory = categories.filter(
        (bird) => bird.categoryId === "mobile"
    );
    const laptopCategory = categories.filter(
        (bird) => bird.categoryId === "laptop"
    );

    const  setInputFilter = (inputElement, inputFilter) => {

        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            inputElement?.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                    this.value = "";
                }
            });
        });

    }
    
    const handleQuantity = (e, id) => {

        e.preventDefault();
        
        const newQuantity = e.target.value
        setInputFilter(e.target, function (value) {
            return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 500);
        })


        setCategories(
            produce(categories, (draft) => {
                let index = draft.findIndex(item => item.productId === id)
                let getSingleCategory = draft[index];
                getSingleCategory.quantity = newQuantity;
                getSingleCategory.inStock = Number(getSingleCategory.inStock - 1)
            })
        )

        const index = categories.findIndex(item => item.productId === id)
        const stock = categories[index].inStock;
        if (Number(stock) < Number(newQuantity)) {
            toast.error('Stock not available');
        }
    }

   

    return (
        <div className="container my-20">
            <section className="bird-section" id="bird">
                <h1 className="text-3xl uppercase mb-5"> Birds</h1>
                <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {birdCategory?.map((bird, index) => (
                        <div className="product-card  px-5 shadow-lg rounded overflow-hidden" key={index}>
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
                            <div className="inStock">
                                <input
                                    ref={inputElement}
                                    className="shadow appearance-none mb-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder=""
                                    defaultValue={bird.quantity}
                                    min="1"
                                    onChange={(e) => handleQuantity(e, bird.productId)}
                                   id="inputQuantity"
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
                    {mobileCategory?.map((mobile, index) => (
                        <div className="product-card  px-5 shadow-lg rounded overflow-hidden" key={index}>
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
                            <div className="inStock">
                                <input
                                    className="shadow appearance-none mb-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder=""
                                    defaultValue={mobile.quantity}
                                    onChange={(e) => handleQuantity(e, mobile.productId)}
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
                    {laptopCategory?.map((laptop, index) => (
                        <div className="product-card  px-5 shadow-lg rounded overflow-hidden" key={index}>
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
                            <div className="inStock">
                                <input
                                    className="shadow appearance-none mb-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder=""
                                    defaultValue={laptop.quantity}
                                    onChange={(e) => handleQuantity(e, laptop.productId)}
                                />
                                <button className="bg-blue-500 hover:bg-blue-700 w-full px-0 text-white font-bold py-2 px-4 rounded">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Toaster />
        </div>
    );
};

export default CategoryCard;
