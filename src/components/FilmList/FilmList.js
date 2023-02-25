import { Link } from 'react-router-dom';

export const FilmList = ({ films }) => {
  return (
    <div>
      {films.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>
            <img src={item.poster_path} alt="" />
            {item.title}
          </Link>
        </li>
      ))}
    </div>
  );
};
