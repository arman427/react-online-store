import './products.scss';

const ProductsItem = ({ item, index, toggleFavorite, toggleBasket, favorite, basket }) => {
   const absolutePath = import.meta.env.BASE_URL + item.imageUrl;

   return (
      <div className="products-card" key={index}>
         <img src={absolutePath} alt="" className='products-card__image' />
         <h4 className='products-card__title'>{item.name}</h4>

         <div className="price_and_basket">
            <span className='products-card__price'>{item.price} &#8381;</span>
            <button className={`liked ${favorite?.includes(item.id) ? 'active' : ''}`} onClick={() => toggleFavorite(item.id)}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fillRule="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
               </svg>
            </button>
            <button className={`products-card__backet ${basket?.includes(item.id) ? 'active' : ''}`} onClick={() => toggleBasket(item.id)}>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
               </svg>
            </button>
         </div>

      </div>
   );
}

export default ProductsItem;