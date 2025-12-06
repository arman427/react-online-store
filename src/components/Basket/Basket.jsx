import './basket.scss';
import ProductsItem from './../Products/ProductsItem.jsx';

const Basket = ({ toggleBasket, basket, basket__, toggleFavorite, favorite }) => {
   return (
      <>
         <section className="basket">
            <div className="container">
               {basket__.length === 0 ? (
                  <h1>В корзине нет товаров.</h1>
               ) : (
                  <div className="products-list">
                     {basket__.map((item, index) => (
                        <ProductsItem
                           item={item}
                           key={index}
                           toggleFavorite={toggleFavorite}
                           toggleBasket={toggleBasket}
                           basket__={basket__}
                           favorite={favorite}
                           basket={basket}
                        />
                     ))
                     }
                  </div>
               )}
            </div>
         </section>
      </>
   );
}

export default Basket;