import axios from 'axios';

const API_KEY = '55217883-a145003b8f3fe15b3b9351ee8';

const BASE_URL = 'https://pixabay.com/api/';
export const ITEMS_PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: ITEMS_PER_PAGE,
    },
  });
  return response.data;
}