import { useState } from 'react';

export const SearchBox = ({ value, onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchQueryChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const searchQuerySubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={searchQuerySubmit}>
      <input type="text" value={searchQuery} onChange={searchQueryChange} />
      <button type="submit">Search</button>
    </form>
  );
};
