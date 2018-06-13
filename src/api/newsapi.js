import { fetchGetAsJson } from './fetch';

import { API_BASE, API_KEY } from '../constants/API';
import { CATEGORIES } from '../constants/categories';
import { COUNTRIES } from '../constants/countries';

export const getSources = (category = CATEGORIES[0], country = COUNTRIES[0]) => {
  const categoryParams = (category===CATEGORIES[0])?{}:{category};
  const countryParams  = (country===COUNTRIES[0]) ?{}:{country};
  const reqParams      = {
    apiKey: API_KEY,
    ...categoryParams,
    ...countryParams
  };
  return fetchGetAsJson(`${API_BASE}/sources`, reqParams);
}

export const getArticles = (sourceId, page) => {
  console.log(page);
  const reqParams      = {
    apiKey: API_KEY,
    sources: [ sourceId ],
    page,
  };
  return fetchGetAsJson(`${API_BASE}/everything`, reqParams);
}
