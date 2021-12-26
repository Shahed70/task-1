import { RecoilRoot } from 'recoil';
import './App.css';
import CategoryCard from './components/CategoryCard';
import TotalPrice from './components/TotalPrice';
import CategoryList from './components/CategoryList';



function App() {

  return (
    <RecoilRoot>
      <div className="container px-20 py-2 mx-auto ">
        <TotalPrice />
        <CategoryList   />
        <CategoryCard />
 
      </div>
    </RecoilRoot>
  );
}

export default App;
