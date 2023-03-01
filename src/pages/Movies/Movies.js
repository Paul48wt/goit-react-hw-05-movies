import { fetchMovieSearch } from 'components/api/api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (query === '') return;

    async function fetchMovie() {
      try {
        const response = await fetchMovieSearch(query);
        setFilms(response.results);
      } catch (error) {}
    }
    fetchMovie(query);
  }, [query]);

  console.log(films);

  return (
    <main>
      <SearchBox value={query} onSubmit={updateQueryString} />
      <ul>
        {films.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
