import './favorite.scss'
import ProductsItem from './../Products/ProductsItem.jsx';

const Favorite = ({ toggleFavorite, favorite__, favorite }) => {
   return (
      <>
         <section className="favorite">
            <div className="container">
               {favorite__.length === 0 ? (
                  <h1>В избранном нет товаров.</h1>
               ) : (
                  <div className="products-list">
                     {favorite__.map((item, index) => (
                        <ProductsItem
                           item={item}
                           key={index}
                           toggleFavorite={toggleFavorite}
                           favorite={favorite}
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

export default Favorite;