import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import { getListsData } from '../lib/tmdbApi';
import { imageUrl } from '../utils/imageUrl';
import ScrollerList from '../components/ScrollerList';
import { useContext } from 'react';
import { GenreContext } from '../contexts/GenreContext';

export default function Home({ popularMovies, topRated, genres }) {
  const { addGenreToState } = useContext(GenreContext);
  return (
    <Layout>
      <Head>
        <title>popcornchill.com</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h3 className='title'>Popular Movies</h3>
        <ScrollerList media={popularMovies} />
        <h3 className='title'>Top Rated Movies</h3>
        <ScrollerList media={topRated} />
        <div className='home-genres'>
          <ul className='home-genres'>
            {genres.map((genre, index) => (
              <li key={index} className='genre-list-item'>
                <Link href='/genre/[id]' as={`/genre/${genre.id}`}>
                  <a
                    className='genre'
                    onClick={() => addGenreToState(genre.name)}>
                    {genre.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
export async function getServerSideProps() {
  const popularMovies = await getListsData('movie', 'popular');
  const topRated = await getListsData('movie', 'top_rated');
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-GB`
  );
  const data = await res.json();

  const genres = data.genres;

  return {
    props: {
      popularMovies,
      topRated,
      genres,
    },
  };
}
