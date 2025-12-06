import { useState } from 'react';
import './products.scss';
import ProductsItem from './ProductsItem';

const Products = ({ products, toggleFavorite, favorite }) => {

   // console.log(favorite__);

   return (
      <section className="products">
         <div className="container">
            <div className="products-list">
               {products.map((item, index) => (
                  <ProductsItem item={item} key={index} toggleFavorite={toggleFavorite} favorite={favorite}/>
               ))
               }
            </div>
         </div>
      </section>
   );
}

export default Products;