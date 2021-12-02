import React from 'react'
import { selector, useRecoilValue } from 'recoil'
import { categoryProductState } from '../atoms/state'

const getCategoriyState = selector({
    key:"getProductPrice",
    get: ({get}) => {
       let getstate = get(categoryProductState);
          getstate.reduce( (acc, item) => {
            let temSum = Number(item.price) * Number(item.availAbleQuantity);
            return acc + temSum
       },0)
      
    }
     
})



const TotalPrice = () => {
    const categoryTotalPrice = useRecoilValue(getCategoriyState)
    
        console.log(categoryTotalPrice);
    
    return (
        <div className="text-right mb-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button 
            </button>
        </div>
    )
}

export default TotalPrice
