import { atom } from "recoil";



export const categoryProductState = atom({
  key: "categoryState",
  default: []
});

export const categoryCartState = atom({
  key: "cartState",
  default: [],
});



 
// const handeInputValue = (plusSign, catIndex, itemIndex) => {
//   const singleCategoryStock = categories[catIndex].items[itemIndex].inStock

//   if (plusSign === "+") {

//     if (
//       inputValue === -1 ||
//       inputValue === 0 ||
//       inputValue > Number(singleCategoryStock)
//     ) {
//       setInputValue(oldInputValue => oldInputValue + 1)
//     }


//     setCategories(oldCategories => produce(oldCategories, (draft) => {

//       draft[catIndex].items[itemIndex].quantity = inputValue

//     }))
//   } else {
//     setInputValue(oldInputValue => oldInputValue - 1)
//     setCategories(oldCategories => produce(oldCategories, (draft) => {

//       draft[catIndex].items[itemIndex].quantity = inputValue

//     }))
//   }

// }