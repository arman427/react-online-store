import './styles/reset.scss';
import './styles/base.scss';
import { useState } from 'react';
import products from './data/products.js';
import Header from './components/Header/Header.jsx';
import Welcome from "./components/Welcome/Welcome.jsx";
import Products from "./components/Products/Products.jsx";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
   const [searchValue, setSearchValue] = useState('');
   const [activeCategory, setActiveCategory] = useState(null);

   // -------------- Сортировка по категории, и поиск --------------
   const filteredProducts = products.filter(item => {
      const search = item.name.toLowerCase().includes(searchValue.toLowerCase());
      const category = activeCategory === null || item.category === activeCategory;
      return search && category;
   });

   const [favorite, setFavorite] = useState([]);


   // -------------- Если был в массиве то удалять, если нет то копировать старый и добавлять id --------------
   const toggleFavorite = (id) => {
      if (favorite.includes(id)) {
         setFavorite(favorite.filter(_id => _id !== id))
      } else {
         setFavorite([...favorite, id]);
      }
   }


   // -------------- Фильтруем все продукты, если если id есть в массиве избранных id --------------
   const favorite__ = products.filter(item =>
      favorite.includes(item.id)
   )

   return (
      <>
         <BrowserRouter basename="/react-online-store">
            <Header
               onChangeSearch={setSearchValue}
               onChangeCategory={setActiveCategory}
               favorite={favorite__}
            />
            <Welcome />
            
            <Routes>
               <Route path='/' element={<Products
                  products={filteredProducts}
                  toggleFavorite={toggleFavorite}
                  favorite={favorite} />} />
            </Routes>

         </BrowserRouter>
      </>
   )
}

export default App;