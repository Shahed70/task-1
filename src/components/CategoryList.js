import { useRecoilValue } from "recoil";
import { categoryProductState } from "../atoms/state";
const CategoryList = () => {
  const categories = useRecoilValue(categoryProductState);
  return (
    <>
      <div className=" flex odd:mx-3">
        Go To:
        {categories.map((category, index) => (
          <span key={index}>
            <a
              href={`/#${category.categoryName}`}
              className="btn inline-block mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {category.categoryName}
            </a>
          </span>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
