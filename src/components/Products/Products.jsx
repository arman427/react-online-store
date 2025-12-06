import './products.scss';
import ProductsItem from './ProductsItem';

const Products = ({ products }) => {
   return (
      <section className="products">
         <div className="container">
            <div className="products-list">
               {products.map((item, index) => (
                  <ProductsItem item={item} key={index} />
               ))
               }
            </div>
         </div>
      </section>
   );
}

export default Products;