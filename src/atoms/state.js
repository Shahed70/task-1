import { atom } from "recoil";

// export const categories1 = {
//     bird: [
//         {   
//             productId: 1,
//             productImage:"https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__480.jpg",
//             productName:"Yellow spy",
//             price: 10,
//             categoryId : "bird",
//             quantity : 0
//         },
//         {   
//             productId: 1,
//             productImage:"https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__480.jpg",
//             productName:"Yellow spy",
//             price: 10,
//             categoryId : "bird",
//             quantity : 0
//         }
//     ],
//     electronics: [
//         {   
//             productId: 1,
//             productImage:"https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__480.jpg",
//             productName:"Yellow spy",
//             price: 10,
//             categoryId : "mobile",
//             quantity : 0
//         },
//         {   
//             productId: 1,
//             productImage:"https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__480.jpg",
//             productName:"Yellow spy",
//             price: 10,
//             categoryId : "mobile",
//             quantity : 0
//         }
//     ]
// }


    const categories = 
        [
        {   
            productId: 1,
            productImage:"https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__480.jpg",
            productName:"Yellow spy",
            price: 12,
            categoryId : "bird",
            quantity : 0,
            inStock: 10
        },

        {
            productId: 2,
            productImage:"https://cdn.pixabay.com/photo/2017/09/16/19/33/parrot-2756488__340.jpg",
            productName:"Green spy",
            price: 15,
            categoryId : "bird",
            quantity : 0,
            inStock: 10
        },

        {
            productId: 3,
            productImage:"https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082__340.jpg",
            productName:"Blue spy",
            price: 18,
            categoryId : "bird",
            quantity : 0,
            inStock: 10
        },
        {
            productId: 4,
            productImage:"https://cdn.pixabay.com/photo/2021/06/16/21/46/parrot-6342271__340.jpg",
            productName:"Red spy",
            price: 20,
            categoryId : "bird",
            quantity : 0,
            inStock: 10
        },
            {   
            productId: 5,
            productImage:"https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307__480.png",
            productName:"Iphone 8",
            price: 12,
            categoryId : "mobile",
            quantity : 0,
            inStock: 10
        },

        {
            productId: 6,
            productImage:"https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg",
            productName:"Iphone 9",
            price: 15,
            categoryId : "mobile",
            quantity : 0,
            inStock: 10
        },

        {
            productId: 7,
            productImage:"https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg",
            productName:"Iphone 6",
            price: 8,
            categoryId : "mobile",
            quantity : 0,
            inStock: 10
        },
        {
            productId: 8,
            productImage:"https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723__340.jpg",
            productName:"Iphone 12",
            price: 20,
            categoryId : "mobile",
            quantity : 0,
            inStock: 10
        },

        {   
            productId: 9,
            productImage:"https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246__340.png",
            productName:"Lenovo Thinkpad",
            price: 30,
            categoryId : "laptop",
            quantity : 0,
            inStock: 10
        },

        {
            productId: 10,
            productImage:"https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921__340.jpg",
            productName:"Lenovo  Idpad",
            price: 40,
            categoryId : "laptop",
            quantity : 0,
            inStock: 10
        },

        {
            productId: 11,
            productImage:"https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__340.jpg",
            productName:"Lenonvo Legion",
            price: 25,
            categoryId : "laptop",
            quantity : 0,
            inStock: 10
        },
        {
            productId: 12,
            productImage:"https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723__340.jpg",
            productName:"Lenovo 400",
            price: 50,
            categoryId : "laptop",
            quantity : 0,
            inStock: 10
        }
    ]

export const categoryProductState = atom({
    key:"categoryState",
    default: categories
})


export const categoryCartState = atom({
      key:"cartState",
      default: []
})
