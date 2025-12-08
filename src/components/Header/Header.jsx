import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import categories from '../../data/categories.js';

const Header = ({ onChangeSearch, searchValue, onChangeCategory, favorite, basket }) => {
   const [catalogOpen, setCatalogOpen] = useState(false);
   const [visible, setVisible] = useState(false);

   const handleClickCatalog = () => {
      setCatalogOpen(!catalogOpen)
   }

   const onChangeValueSearch = (event) => {
      onChangeSearch(event.target.value);
   }

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };

   const handleScroll = () => {
      if (window.pageYOffset > 300) {
         setVisible(true);
      } else {
         setVisible(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };

   }, []);


   return (
      <>
         <header className="header">
            <div className="container">
               <div className="header-help">
                  <Link to={'/about'}>О компании</Link>
                  <Link to={'/help'}>Поддержка</Link>
                  <a href="tel:+79610599262">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                     </svg>
                     +7 (961) 059 92-62
                  </a>
               </div>
               <div className="header-content">
                  <div className="logo__catalog">
                     <Link to={'/'} className="logo" onClick={() => window.reload()}>
                        GearUp
                     </Link>

                     <div className="catalog-wrapper">
                        <button className="catalog" onClick={handleClickCatalog}>
                           <label className={`hamburger ${catalogOpen ? 'hamburger_active' : ''}`}>
                              <input type="checkbox" className='asd' />
                              <svg viewBox="0 0 32 32">
                                 <path
                                    className="line line-top-bottom"
                                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                 ></path>
                                 <path className="line" d="M7 16 27 16"></path>
                              </svg>
                           </label>
                           Каталог
                        </button>
                        <div className={`modal-Catalog ${catalogOpen ? 'active_catalog' : ''}`}>
                           <ul className="catalog-list">
                              {categories.map((item, index) => (
                                 <li key={index}>
                                    <a
                                       href="#!"
                                       key={index}
                                       onClick={() => {
                                          onChangeCategory(item);
                                          setCatalogOpen(false);
                                       }}
                                    >
                                       {item}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>


                  <div className="search-wrapper">
                     <input type="text" placeholder='Поиск...' onChange={onChangeValueSearch} value={searchValue} />
                  </div>

                  <div className="user-content">
                     <NavLink className='user-link' to={'/user'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                           <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        Профиль
                     </NavLink>
                     <NavLink className='user-link' to={'/favorite'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                           <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                        Избранное
                        <span className="favorite-length">{favorite.length}</span>
                     </NavLink>
                     <NavLink className='user-link' to={'/basket'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                           <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                        Корзина
                        <span className="favorite-length">{basket.length}</span>
                     </NavLink>
                  </div>
               </div>

            </div>
         </header >

         <button className={`toTop ${visible ? 'active' : ''}`} onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
         </button>
      </>
   );
}

export default Header;