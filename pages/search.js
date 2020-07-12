import React, { useState, useEffect } from 'react';

import { useFetchMedia } from '../hooks/useFetchMedia';
import Layout from '../components/Layout';
import useFetch from '../hooks/useFetch';
import ListData from '../components/ListData';

export default function Search() {
  const [searched, setSearched] = useState('');
  const [userSearchInput, setUserSearchInput] = useState('');

  const { response, error } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&query=${searched}&include_adult=false`
  );

  const { results } = response;

  const handleSearch = e => {
    setUserSearchInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearched(userSearchInput);
  };

  return (
    <Layout>
      <h1 className='title'>Search</h1>
      <form type='submit' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='type to search'
          onChange={handleSearch}
          required
        />
      </form>
      <ListData media={results} />
    </Layout>
  );
}
