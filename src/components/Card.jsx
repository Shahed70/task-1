import React from 'react'

const Card = ({ category, handleInputNumber, handleCart }) => {
    return (

        <div className="product_detailsrounded border shadow-lg rounded-2xl">
            <div className="product_card px-10 py-5">
                <div className="product_image  rounded mb-5">
                    <img className="rounded" style={{ height: "202px" }} src={category.productImage} alt="" />
                </div>
                <div className="product_name mb-3">
                    <h1 className="text-2xl font-bold uppercase text-center"> {category.productName} </h1>
                </div>
                <div className="product_description text-center mb-3" >
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="product_price_quantity flex justify-between">
                    <span className="btn">$50</span> <span className="btn">In Stock 10</span>
                </div>
                <div className="product_input flex justify-center">
                    <div className="group w-40  text-center border-2 rounded border-gray-700">
                        <button className="font-500 border-gray-700 border-r-2 font-bold pr-2 font-bold uppercase">
                            -
                        </button>
                        <span>
                            <input onInput={e => handleInputNumber(e, category.productId)}
                                className="w-1/2 outline-none" type="number" />
                        </span>
                        <button className="font-500 uppercase border-gray-700 font-bold  border-l-2 pl-2">+</button>
                    </div>
                </div>
            </div>
            <div className="product_button">
                <button onClick={()=> handleCart(category.productId)} className="btn btn-blue w-full rounded-t-none rounded-b-2xl">Add To Cart</button>
            </div>
        </div>


    )
}

export default Card
