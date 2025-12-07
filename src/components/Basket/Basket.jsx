import './basket.scss';
import ProductsItem from './../Products/ProductsItem.jsx';

const Basket = ({ toggleBasket, basket, basket__, toggleFavorite, favorite }) => {

   const totalCount = basket__.reduce((sum, item) => {
      return sum + item.price;
   }, 0);

   return (
      <>
         <section className="basket">
            <div className="container">
               <div className="basket-content">
                  <div className="basket-basket">
                     {totalCount > 0 && (
                        <>
                           <h2 className='basket-title'>Корзина</h2>
                           <p className='basket-length'>Товаров: {basket__.length} шт</p>
                           <p className='basket-price'>Общая сумма: <span style={{color: 'var(--color-accent)'}}>{totalCount} &#8381;</span></p>
                           <button className='basket-button'>Оформить заказ</button>
                        </>
                     )}
                  </div>

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

            </div>
         </section>
      </>
   );
}

export default Basket;