import { fetchMovie } from 'components/api/api';
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {
        const response = await fetchMovie();
        setFilms(response.results);
      } catch (error) {}
    }
    getFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <FilmList films={films} />
    </main>
  );
};
