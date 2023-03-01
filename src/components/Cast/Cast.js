import { fetchMovieCredits } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCredits() {
      try {
        const response = await fetchMovieCredits(id);

        setCast(response.cast);
      } catch (error) {}
    }
    getCredits();
  }, [id]);

  return (
    <div>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
              alt=""
            />
            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
