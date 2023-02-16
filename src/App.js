import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';
import { AboutUsPage } from './pages/AboutUsPage';
import {PageNotFound} from "./pages/PageNotFound"
import { CataloguePage } from './pages/CataloguePage';
import { VacanciesPage } from './pages/VacanciesPage';
import { Contacts } from './pages/Contacts';
import './App.css';




function App() {
  return (
    <div className='app'>
     <Header />
     <div className='app-content'> 
     <Routes> 
      <Route path='/' element={<MainPage/>} />
      <Route path="/about" element = {<AboutUsPage/>} />
      <Route path="/catalogue" element= {<CataloguePage/>} />
      <Route path='/vacancies' element= {<VacanciesPage/>} />
      <Route path="/contacts" element = {<Contacts/>}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>

     </div>
      
    </div>
  );
}

export default App;
