import React from 'react'

const Card = ({
    product,
    handleCart,
    inputValue,
    onQuantityChange

}) => {

    const changeStock = product.inStock - product.quantity
    return (

        <div className="product_detailsrounded border shadow-lg rounded-2xl">
            <div className="product_card px-10 py-5">
                <div className="product_image  rounded mb-5">
                    <img className="rounded" style={{ height: "202px" }} src={product.image} alt="" />
                </div>
                <div className="product_name mb-3">
                    <h1 className="text-2xl font-bold uppercase text-center"> {product.title} </h1>
                </div>
                <div className="product_description text-center mb-3" >
                    <p> {product.description} </p>
                </div>
                <div className="product_price_quantity flex justify-between">
                    <span className="btn"> ${product.price} </span>

                    <span
                        className="btn">In stock{changeStock}
                    </span>
                </div>
                <div className="product_input flex justify-center">
                    <div className="group w-40  block  text-center">

                        <button
                            onClick={() => onQuantityChange(inputValue - 1)}
                            className="font-bold py-1 px-3 rounded border rounded-tr-none rounded-br-none  border-gray-900">
                            -
                        </button>
                        <span>
                            <input
                                max="10"
                                value={inputValue}
                                onChange={(e) => onQuantityChange(e.target.valueAsNumber)}
                                className="w-1/2 text-center outline-none border border-gray-900 py-1" type="number" />
                        </span>

                        <button
                            onClick={() => onQuantityChange(inputValue + 1)}
                            className="font-bold py-1 px-3 rounded rounded-tl-none rounded-bl-none border border-gray-900">+
                        </button>

                    </div>
                </div>
            </div>
            <div className="product_button">
                <button onClick={handleCart} className="btn btn-blue w-full rounded-t-none rounded-b-2xl">Add To Cart</button>
            </div>
        </div>


    )
}

export default Card
