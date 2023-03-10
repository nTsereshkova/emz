import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './slices/mainSlice';
import vacanciesSlice from './slices/vacanciesSlice';

const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    vacancies: vacanciesSlice.reducer,
  },
});

export default store;
