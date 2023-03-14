import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdLanguage } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { changeLanguageHandler } from '../../store/actions/actions';
import './Header.css';

export const Header = () => {
  const { isChangingLanguage } = useSelector(state => state.main);
  const dispatch = useDispatch();
  console.log(isChangingLanguage);
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
        <aside className="header-aside">
          <MdLanguage
            className="language"
            onClick={() => dispatch(changeLanguageHandler())}
          />
          {isChangingLanguage && (
            <select className="header-aside-lang">
              <option selected value="ru">
                ru
              </option>
              <option value="en"> en</option>
              <option value="bel"> bel</option>
            </select>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Header;
