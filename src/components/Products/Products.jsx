import { useState } from 'react';
import './products.scss';
import ProductsItem from './ProductsItem';

const Products = ({ products, toggleFavorite, toggleBasket, favorite, basket}) => {

   // console.log(favorite__);

   return (
      <section className="products">
         <div className="container">
            <div className="products-list">
               {products.map((item, index) => (
                  <ProductsItem
                     item={item}
                     key={index}
                     toggleFavorite={toggleFavorite}
                     toggleBasket={toggleBasket}
                     favorite={favorite}
                     basket={basket}
                  />
               ))
               }
            </div>
         </div>
      </section>
   );
}

export default Products;