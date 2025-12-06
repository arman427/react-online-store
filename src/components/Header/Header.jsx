import './header.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import categories from '../../data/categories.js';

const Header = ({ onChangeSearch, onChangeCategory, favorite, basket }) => {
   const [catalogOpen, setCatalogOpen] = useState(false);

   const handleClickCatalog = () => {
      setCatalogOpen(!catalogOpen)
   }

   const onChangeValueSearch = (event) => {
      onChangeSearch(event.target.value);
   }

   useEffect(() => {
      if (catalogOpen) {
         document.body.classList.add('modal-open');
      } else {
         document.body.classList.remove('modal-open');
      }

      return () => {
         document.body.classList.remove('modal-open');
      };
   }, [catalogOpen]);

   return (
      <>
         <header className="header">
            <div className="container">
               <div className="header-content">
                  <div className="logo__catalog">
                     <a href="/" className="logo">
                        GearUp
                     </a>

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
                     <input type="text" placeholder='Поиск...' onChange={onChangeValueSearch} />
                  </div>

                  <div className="user-content">
                     <NavLink className='user-link'>
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
         </header>
      </>
   );
}

export default Header;