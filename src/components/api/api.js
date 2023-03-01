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

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=uk`
  );
  return response.data;
};

export const fetchMovieCredits = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=uk`
  );
  return response.data;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieSearch = async movie => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
  );
  return response.data;
};
