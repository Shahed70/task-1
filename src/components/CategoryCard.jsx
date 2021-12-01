import React from 'react'
import { useRecoilState } from 'recoil'
import { categoryProductState } from '../atoms/state'

const CategoryCard = () => {
    const [categories, setCategories] = useRecoilState(categoryProductState)

    const birdCategory = categories.filter( bird=> bird.categoryId === "bird")
    const mobileCategory = categories.filter( bird=> bird.categoryId === "mobile")
    const laptopCategory = categories.filter( bird=> bird.categoryId === "laptop")
    return (
        <div className="container my-20">
            <div className="flex justify-center flex-wrap">
                <div className="product-card">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kCrw3N9kzVNr-DwA0j-TGy80yQZrdOTAbQ&usqp=CAU" alt="Sky" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>

                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
                <div className="product-card mx-5">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kCrw3N9kzVNr-DwA0j-TGy80yQZrdOTAbQ&usqp=CAU" alt="Sky" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                           
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="" style={{ width: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kCrw3N9kzVNr-DwA0j-TGy80yQZrdOTAbQ&usqp=CAU" alt="Sky" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className="flex justify-center">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>

    )
}

export default CategoryCard
