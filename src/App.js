import { RecoilRoot } from 'recoil';
import './App.css';
import Card from './components/Card';
import Category from './components/CategoryList';
import CategoryCard from './components/CategoryCard';
import TotalPrice from './components/TotalPrice';

function App() {
  return (
    <RecoilRoot>
      <div className="container px-20 py-2 mx-auto">
        <TotalPrice />
        <Category />
        <CategoryCard />
         {/* <Card /> */}
      </div>
    </RecoilRoot>
  );
}

export default App;
