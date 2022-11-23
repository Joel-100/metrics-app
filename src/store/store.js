import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './action';

const store = configureStore({
  reducer: { country: countryReducer },
});

export default store;
