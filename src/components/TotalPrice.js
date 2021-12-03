import React from 'react'
import { selector, useRecoilValue } from 'recoil'
import { categoryProductState } from '../atoms/state'
import CartModal from './CartModal';

const getCategoriyState = selector({
    key: "getProductPrice",
    get: ({ get }) => {
        let getstate = get(categoryProductState);
        const categoryTotalPrice = getstate.reduce((acc, item) => {
            let temSum = Number(item.price) * Number(item.quantity);
            return acc + temSum
        }, 0)
        return categoryTotalPrice;
    }

})

const TotalPrice = () => {
    const categoryTotalPrice = useRecoilValue(getCategoriyState)
    return (
        <div className="text-right mb-10 fixed-right">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cart Total ${categoryTotalPrice}
               
            </button>
            <span className="ml-5">
                <CartModal />
            </span>
        </div>
    )
}

export default TotalPrice
