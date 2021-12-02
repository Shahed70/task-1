import { RecoilRoot } from 'recoil';
import './App.css';
import Cart from './components/Cart';
//import { categories1 } from './atoms/state';
import Category from './components/Category';
import CategoryCard from './components/CategoryCard';
import TotalPrice from './components/TotalPrice';

function App() {
  return (
    <RecoilRoot>
      <div className="container px-20 py-2 mx-auto">
        <TotalPrice />
        <Category />
        <CategoryCard />
        <Cart />
      </div>
    </RecoilRoot>
  );
}

export default App;
