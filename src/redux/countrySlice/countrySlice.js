import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  countries: [],
  error: '',
  continent: 'Africa',
  country: [],
};

const fetchCountries = createAsyncThunk('country/fetchCountry', async () => {
  const response = await axios.get('https://restcountries.com/v2/all');
  const countries = response.data.map((country) => ({
    countryName: country.name,
    region: country.region,
    population: country.population,
    flag: country.flags,
  }));
  return countries;
});

const fetchCountry = createAsyncThunk('country/fetchSpecificCountry', (country) => axios.get(`https://restcountries.com/v2/name/${country}`)
  .then((response) => response.data.map((countryData) => ({
    countryName: countryData.name,
    capital: countryData.capital,
    region: countryData.region,
    population: countryData.population,
    area: countryData.area,
    timezones: countryData.timezones,
    flag: countryData.flags,
    currencies: countryData.currencies,
  }))));

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    filterContinent: (state, continent) => (
      { ...state, continent: continent.payload }
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(fetchCountries.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        countries: action.payload,
        error: '',
      }
    ));
    builder.addCase(fetchCountries.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        countries: [],
        error: action.error.message,
      }
    ));
    builder.addCase(fetchCountry.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(fetchCountry.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        country: action.payload,
        error: '',
      }
    ));
    builder.addCase(fetchCountry.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        country: [],
        error: action.error.message,
      }
    ));
  },
});

export default countrySlice.reducer;
export const { filterContinent, getCountry } = countrySlice.actions;
export { fetchCountries, fetchCountry };
