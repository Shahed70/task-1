import React from 'react'
import { selector, useRecoilValue } from 'recoil'
import { categoryProductState } from '../atoms/state'

const getCategoriyState = selector({
    key:"getProductPrice",
    get: ({get}) => {
       let getCategories = get(categoryProductState);
       const totalPrice = getCategories.reduce( (acc, item) => {
            let temSum = Number(item.price) * Number(item.quantity);
            return acc + temSum
       },0)
      return totalPrice
    }
     
})

const TotalPrice = () => {
    const categoryTotalPrice = useRecoilValue(getCategoriyState)
    return (
        <div className="text-right mb-10 fixed-right">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Cart Total ${categoryTotalPrice}
            </button>
        </div>
    )
}

export default TotalPrice
