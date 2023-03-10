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
      },
      {
        id: uuidv4(),
        name: 'Вкладыши моторноосевых подшипников',
        image: { src: imgMOP, alt: 'Вкладыши' },
      },
      {
        id: uuidv4(),
        name: 'Капитальный ремонт оборудования',
        image: { src: imgREM, alt: 'Ремонт' },
      },
    ],
  },
  reducers: {},
});

export default mainSlice;
