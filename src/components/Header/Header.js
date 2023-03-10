import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <h1> ОАО "Гомельский ЭМЗ"</h1>
      <div className="header-links">
        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          >
            О нас
          </NavLink>
          <NavLink
            to="/catalogue"
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          >
            Каталог
          </NavLink>

          <NavLink
            to="/vacancies"
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          >
            Вакансии
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          >
            Контакты
          </NavLink>
        </div>
        <MdLanguage className="language" />
      </div>
    </div>
  );
};

export default Header;
