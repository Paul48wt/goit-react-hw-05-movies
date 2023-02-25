import { fetchMovieDetails } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();

  const [film, setFilm] = useState({});

  useEffect(() => {
    async function getFilm() {
      try {
        const response = await fetchMovieDetails(id);

        setFilm(response);
      } catch (error) {}
    }
    getFilm();
  }, [id]);
  console.log(film);
  return (
    <main>
      <h1>{film.title}</h1>
    </main>
  );
};
