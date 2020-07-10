import React, { useState, useEffect } from 'react';

import { useFetchMedia } from '../hooks/useFetchMedia';
import Layout from '../components/Layout';

export default function Search() {
  const [searched, setSearched] = useState('harry');
  const [userSearchInput, setUserSearchInput] = useState('');

  const { media, error } = useFetchMedia(
    'search',
    'movie',
    `query=${searched}&include_adult=false`
  );
  const handleSearch = e => {
    setUserSearchInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearched(userSearchInput);
  };

  if (error) {
    return <h1>Error</h1>;
  }
  if (!media.length) {
    return null;
  }
  return (
    <Layout>
      <form type='submit' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='type to search'
          onChange={handleSearch}
          required
        />
      </form>
    </Layout>
  );
}
