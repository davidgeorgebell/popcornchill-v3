import React, { useContext } from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import useFetch from '../hooks/useFetch';
import ListData from '../components/ListData';
import { GenreContext } from '../contexts/GenreContext';
import { GrowAnimation, YAnimation } from '../components/Animations';

export default function Search({ genres }) {
  const { addGenreToState } = useContext(GenreContext);
  return (
    <Layout>
      <GrowAnimation>
        <h1 className='title'>Genres</h1>
      </GrowAnimation>

      <ul className='genre-list'>
        {genres.map((genre, index) => (
          <li key={index} className='genre-list-item'>
            <Link href='/genre/[id]' as={`/genre/${genre.id}`}>
              <a className='genre' onClick={() => addGenreToState(genre.name)}>
                {genre.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-GB`
  );
  const data = await res.json();

  const genres = data.genres;

  return {
    props: {
      genres,
    },
  };
}
