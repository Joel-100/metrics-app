import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_COUNTRY = 'country-name/country/FETCH_COUNTRY';
const GET_COUNTRY = 'country-name/country/GET_COUNTRY';

const API_URL = 'https://restcountries.com/v3.1/region/africa';

const countryList = [];

const countryReducer = (state = countryList, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'country-name/country/FETCH_COUNTRY/fulfilled':
      return payload.country;

    default:
      return state;
  }
};

export const fetchCountry = createAsyncThunk(FETCH_COUNTRY, async () => {
  const res = await axios.get(API_URL);
  const resultArray = res.data;

  return {
    // eslint-disable-next-line no-unused-vars
    country: resultArray.map((value) => ({
      id: value.area,
      population: value.population,
      name: value.name.official,
      capital: value.capital[0],
      image: value.flags.png,
      timezone: value.timezones[0],
      subregion: value.subregion,
    })),
  };
});

export const getCountry = createAsyncThunk(GET_COUNTRY, async (id) => ({
  id,
}));

export default countryReducer;
