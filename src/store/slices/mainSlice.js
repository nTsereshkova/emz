import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import imgZBY from '../../images/ZBY.png';
import imgVAUZ from '../../images/VAUZ.jpg';
import imgMOP from '../../images/MOP.jpg';
import imgREM from '../../images/REMONT.jpg';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    productsList: [
      {
        id: uuidv4(),
        name: 'Замедлитель вагонный универсальный',
        image: { src: imgZBY, alt: 'ЗВУ' },
      },
      {
        id: uuidv4(),
        name: 'Воздухосборник с аппаратурой управления ВАУЗ-1Э',
        image: { src: imgVAUZ, alt: 'Воздухосборник' },
        description:
          'Воздухосборник с аппаратурой управления ВАУЗ-1Э предназначен для электропневматического управления потоком сжатого воздуха, поступающего в пневматическую сеть вагонного замедлителя от компрессорной по команде с рабочего места оператора или с аппаратуры автоматического управления, размещенной на горочном посту сортировочной станции.',
      },
      {
        id: uuidv4(),
        name: 'Вкладыши моторноосевых подшипников',
        image: { src: imgMOP, alt: 'Вкладыши' },
        description:
          'Предназначаются для тяговых электродвигателей локомотивов серий М62, 2ТЭ10М, ЧМЭ-3 и электровозов ВЛ-80.',
      },
      {
        id: uuidv4(),
        name: 'Капитальный ремонт оборудования',
        image: { src: imgREM, alt: 'Ремонт' },
      },
    ],
    isChangingLanguage: false,
    language: ['ru', 'en', 'bel'],
  },

  reducers: {
    changeLanguageHandler: state => {
      console.log('сработала смена языка ', state.isChangingLanguage);
      state.isChangingLanguage = !state.isChangingLanguage;
    },
  },
});

export default mainSlice;
