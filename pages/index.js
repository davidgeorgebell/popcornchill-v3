import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import { getListsData } from '../lib/tmdbApi';
import { imageUrl } from '../utils/imageUrl';

export default function Home({ tv, movies }) {
  return (
    <Layout home>
      <Head>
        <title>popcornchill.com</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='center title'>Popcorn chill</h1>

        <h3>Popular Movies</h3>
        <div className='scroller-wrapper'>
          <div className='scroller'>
            <div className='home-content-wrapper'>
              {movies.results.map((movie, index) => (
                <Link href='/movie/[id]' as={`/movie/${movie.id}`} key={index}>
                  <a>
                    <div className='card home-card center'>
                      <img
                        className='card-image'
                        src={`${imageUrl}${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <h3>Popular TV</h3>
        <div className='scroller-wrapper'>
          <div className='scroller'>
            <div className='home-content-wrapper'>
              {tv.results.map((show, index) => (
                <Link href='/tv/[id]' as={`/tv/${show.id}`} key={index}>
                  <a>
                    <div className='card home-card center'>
                      <img
                        className='card-image'
                        src={`${imageUrl}${show.poster_path}`}
                        alt={show.title}
                      />
                      <p>{show.title}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export async function getServerSideProps() {
  const movies = await getListsData('movie', 'popular');
  const tv = await getListsData('tv', 'popular');

  return {
    props: {
      movies,
      tv,
    },
  };
}
