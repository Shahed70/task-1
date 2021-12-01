import React from 'react'

const Category = () => {
    return (
        <div className="d-flex">
        Go To: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Electronic</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10">Mobile</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cloth</button>
        </div>
    )
}

export default Category
