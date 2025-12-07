import { useEffect } from 'react';
import './products.scss';
import ProductsItem from './ProductsItem';
import { useNavigate } from 'react-router-dom';

const Products = ({ products, toggleFavorite, toggleBasket, favorite, basket}) => {
   // const navigate = useNavigate();

   // useEffect(() => {
   //    navigate('/register')
   // }, []);

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