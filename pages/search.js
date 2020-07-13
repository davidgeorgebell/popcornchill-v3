import React, { useState, useEffect } from 'react';

import { useFetchMedia } from '../hooks/useFetchMedia';
import Layout from '../components/Layout';
import useFetch from '../hooks/useFetch';
import ListData from '../components/ListData';
import { GrowAnimation } from '../components/Animations';

export default function Search() {
  const [searched, setSearched] = useState('');
  const [userSearchInput, setUserSearchInput] = useState('');

  const { response, error } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&query=${searched}&include_adult=false`
  );

  const { results } = response;

  const oi = 1;

  if (error) {
    return <h1>Error</h1>;
  }

  const handleSearch = e => {
    setUserSearchInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearched(userSearchInput);
    setUserSearchInput('');
  };

  return (
    <Layout>
      <GrowAnimation>
        <h1 className='title'>Search</h1>
      </GrowAnimation>
      <form
        type='submit'
        onSubmit={handleSubmit}
        className='search-form center'>
        <input
          className='search-input'
          type='text'
          placeholder='Search...'
          onChange={handleSearch}
          required
          value={userSearchInput}
        />
      </form>
      <ListData media={results} />
    </Layout>
  );
}
