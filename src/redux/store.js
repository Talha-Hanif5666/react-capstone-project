import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countrySlice/countrySlice';

const store = configureStore({ reducer: countriesReducer });

export default store;
