import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState: [
    {
      job: 'токарь',
      cvalification: '3-4 разряд',
      condition: '',
      details: 'la la la ',
      id: uuidv4(),
      showDetails: false,
    },
    {
      job: 'токарь',
      cvalification: '5- 6 разряд',
      condition: '',
      details: 'ca ca ca ',
      id: uuidv4(),
      showDetails: false,
    },
    {
      job: 'слесарь-инструментальщик',
      cvalification: '5-6 разряд',
      condition: '',
      details: 'da da da',
      id: uuidv4(),
      showDetails: false,
    },
    {
      job: 'инженер-электроник',
      cvalification: '',
      condition: '',
      details: '',
      id: uuidv4(),
      showDetails: false,
    },
    {
      job: 'уборщик производственных помещений',
      cvalification: '5-6 разряд',
      condition: '',
      details: '',
      id: uuidv4(),
      showDetails: false,
    },
    {
      job: 'водитель легкового автомобиля',
      cvalification: '',
      condition: '',
      details: '',
      id: uuidv4(),
      showDetails: false,
    },
    {
      job: 'электрогазосварщик',
      cvalification: '',
      condition: '',
      details: '',
      id: uuidv4(),
      showDetails: false,
    },
    {
      job: 'слесарь-ремонтник',
      cvalification: '5-6 разряд',
      condition: '',
      details: '',
      id: uuidv4(),
      showDetails: false,
    },
    {
      job: 'слесарь механосборочных работ',
      cvalification: '',
      condition: '',
      details: '',
      id: uuidv4(),
      showDetails: false,
    },
  ],
  reducers: {
    showDetailsHandler: (state, action) => {
      console.log('сработал показ детали по вакансии');
      console.log(action);
      state.map(item =>
        item.id === action.payload ? (item.showDetails = !item.showDetails) : item,
      );
    },
  },
});

export default vacanciesSlice;
