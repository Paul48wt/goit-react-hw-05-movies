import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();

  const [film, setFilm] = useState();

  useEffect(() => {
    async function getFilm() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=35e94b176a96ea96112da2a8bb1e2480&language=en-US`
        );

        setFilm(response);
      } catch (error) {}
    }
    getFilm();
  }, [id]);
  console.log(film);
  return <main>{}</main>;
};
