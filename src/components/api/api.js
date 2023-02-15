import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '35e94b176a96ea96112da2a8bb1e2480';
const DATA = 'trending/movie/day';
export const fetchMovie = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/${DATA}?api_key=${API_KEY}&language=uk`
  );

  return response.data;
};
