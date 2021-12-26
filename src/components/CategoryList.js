import { useRecoilValue } from "recoil";
import { categoryProductState } from "../atoms/state";

const CategoryList = () => {
  const categories = useRecoilValue(categoryProductState);
  const jumpToPricing = (sectionId) => {
    if(sectionId === "Bird") return
    document.getElementById(sectionId).scrollIntoView({ block: "center", behavior: 'smooth' });
  }
    
  return (
    <>
      <div className=" flex odd:mx-3">
        Go To:
        {categories.map((category, index) => (
          <span key={index}>
            <button

              onClick={() => jumpToPricing(category.cat_name)}
              className="btn inline-block mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
            
              {category.cat_name}
             
            </button>
          </span>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
