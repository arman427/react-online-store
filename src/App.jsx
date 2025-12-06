import './styles/reset.scss';
import './styles/base.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Products from './components/Products/Products';
import { useState } from 'react';
import products from './data/products.js';

function App() {
   const [searchValue, setSearchValue] = useState('');
   const [activeCategory, setActiveCategory] = useState(null);
   const filteredProducts = products.filter(item => {
      const search = item.name.toLowerCase().includes(searchValue.toLowerCase());
      const category = activeCategory === null || item.category === activeCategory;
      return search && category;
   });


   return (
      <>
         <BrowserRouter>
            <Header onChangeSearch={setSearchValue} onChangeCategory={setActiveCategory} />
            <Welcome />
            <Products products={filteredProducts} />
         </BrowserRouter>
      </>
   )
}

export default App;