import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieDetails } from 'components/api/api';
export const MovieDetails = () => {
  const { id } = useParams();

  const [film, setFilm] = useState([]);
  const [genre, setGenre] = useState([]);
  const [posterPath, setPosterPath] = useState('');

  useEffect(() => {
    async function getFilm() {
      try {
        const response = await fetchMovieDetails(id);

        setFilm(response);
        setGenre(response.genres);
        setPosterPath(response.poster_path);
      } catch (error) {}
    }
    getFilm();
  }, [id]);

  return (
    <main>
      <button type="button">Go back</button>
      <img src={`https://image.tmdb.org/t/p/w200/${posterPath}`} alt="" />
      <div>
        <h2>{film.title}</h2>
        <p>User score: {Math.floor(film.vote_average * 10)}%</p>
        <h3>Overviev</h3>
        <p>{film.overview}</p>
        <h4>Genres</h4>
        <p>{genre.map(item => item.name).join(' ')}</p>
      </div>
      <div>
        <p>Additional innformation</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};
