import { API_BASE, API_KEY } from '../constants/API';
import { CATEGORIES } from '../constants/categories';
import { COUNTRIES } from '../constants/countries';

export const getSources = (category = CATEGORIES[0], country = COUNTRIES[0]) => {
  return fetch(`${API_BASE}/sources?api_key=${API_KEY}`, {
    category,
    country
  });
}