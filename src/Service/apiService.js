import axios from "axios";

export const sendRequest = async (query, page) => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '31497264-8254871d687ec8d5b65884355';

    const searchParams = {
      params: {
        q: query,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: page
      },
    };

    
      const {data} = await axios.get(
        `${BASE_URL}`, searchParams);
      return data;
  }

