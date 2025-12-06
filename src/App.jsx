import './styles/reset.scss';
import './styles/base.scss';
import { useState } from 'react';
import products from './data/products.js';
import Header from './components/Header/Header.jsx';
import Welcome from "./components/Welcome/Welcome.jsx";
import Products from "./components/Products/Products.jsx";

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Favorite from './components/Favorite/Favorite.jsx';
import Basket from './components/Basket/Basket.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
   const [searchValue, setSearchValue] = useState('');
   const [activeCategory, setActiveCategory] = useState(null);
   const [favorite, setFavorite] = useState([]);
   const [basket, setBasket] = useState([]);


   // -------------- Сортировка по категории, и поиск --------------
   const filteredProducts = products.filter(item => {
      const search = item.name.toLowerCase().includes(searchValue.toLowerCase());
      const category = activeCategory === null || item.category === activeCategory;
      return search && category;
   });


   // -------------- Если был в массиве то удалять, если нет то копировать старый и добавлять id --------------
   const toggleFavorite = (id) => {
      if (favorite.includes(id)) {
         setFavorite(favorite.filter(_id => _id !== id))
      } else {
         setTimeout(() => {
            setFavorite([...favorite, id]);
         }, 200)
      }
   }


   // -------------- Фильтруем все продукты, если если id есть в массиве избранных id --------------
   const favorite__ = products.filter(item =>
      favorite.includes(item.id)
   )

   const toggleBasket = (id) => {
      if (basket.includes(id)) {
         setBasket(basket.filter(_id => _id !== id))
      } else {
         setTimeout(() => {
            setBasket([...basket, id]);
         }, 200)
      }
   }

   const basket__ = products.filter(item =>
      basket.includes(item.id)
   )

   const WelcomeClear = () => {
      const location = useLocation();
      const showWelcome = location.pathname !== '/react-online-store/basket' && location.pathname !== '/basket';

      return (
         <>
            {showWelcome && <Welcome />}

            <Routes>
               <Route path='/' element={<Products
                  products={filteredProducts}
                  toggleFavorite={toggleFavorite}
                  favorite={favorite}
                  basket={basket}
                  toggleBasket={toggleBasket}
               />}
               />
               <Route path='/favorite' element={<Favorite
                  toggleFavorite={toggleFavorite}
                  favorite__={favorite__}
                  favorite={favorite}
               />} />
               <Route path='/basket' element={<Basket
                  favorite={favorite}
                  toggleFavorite={toggleFavorite}
                  toggleBasket={toggleBasket}
                  basket__={basket__}
                  basket={basket}
               />} />
            </Routes>
         </>
      )
   }

   return (
      <>
         <BrowserRouter basename="/react-online-store">
            <Header
               onChangeSearch={setSearchValue}
               onChangeCategory={setActiveCategory}
               favorite={favorite__}
               basket={basket__}
            />

            <WelcomeClear />

            
            <Footer />
         </BrowserRouter>
      </>
   )
}

export default App;