import { Link } from 'react-router-dom';
import { useUserStore } from '../store/store';
import { useEffect, useState } from 'react';
import { RealUser } from '../api/api';

function MainPage() {
    const { jwt } = useUserStore();

    return(
    <div>
      <header>
        <nav>
          <a href="/" className="logo">🛒 Маркетплейс</a>
          

          {/* Навигация для аутентифицированных пользователей */}
         {jwt ? (
           <ul className="nav-links" id="auth-nav">
            <li><a href="/" className="active">Мои товары</a></li>
            <li><a href="/my-bids">Мои ставки</a></li>
            <li><Link to="/createtovar" className="btn-primary">+ Создать товар</Link></li>
            <li className="user-info">
          <span className="username">username</span> 
              <Link className="btn-logout" to={"/logout"}>Выйти</Link>
            </li>
          </ul>
        
         ) : (
          
          <ul className="nav-links" id="guest-nav">
            <li><Link to="/signin">Войти</Link></li>
            <li><Link to="/signup" className="btn-primary">Регистрация</Link></li>
          </ul>
         )}
        </nav>
      </header>
    </div>
        
    )
}

export default MainPage;