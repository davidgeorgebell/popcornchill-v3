import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import { getListsData } from '../lib/tmdbApi';
import { imageUrl } from '../utils/imageUrl';

export default function Home({ movies }) {
  return (
    <Layout home>
      <Head>
        <title>popcornchill.com</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='center title'>Popcorn chill</h1>

        <h3>Popular Movies</h3>
        <div className='moviesContainer'>
          {movies.results.map((movie, index) => (
            <Link href='/movie/[id]' as={`/movie/${movie.id}`} key={index}>
              <a>
                <div className='card'>
                  <img
                    src={`${imageUrl}${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
export async function getServerSideProps() {
  const movies = await getListsData('popular');

  return {
    props: {
      movies,
    },
  };
}
