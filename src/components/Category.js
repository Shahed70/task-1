import React from 'react'

const Category = () => {
    return (
        <div className="d-flex">
            Go To: <a href="#bird" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Electronic</a>
            <a href="#mobile" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10">Mobile</a>
            <a href="#computer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cloth</a>
        </div>
    )
}

export default Category
