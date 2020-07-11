import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import { getListsData } from '../lib/tmdbApi';
import { imageUrl } from '../utils/imageUrl';
import ScrollerList from '../components/ScrollerList';

export default function Home({ popularMovies, topRated }) {
  return (
    <Layout home>
      <Head>
        <title>popcornchill.com</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='center title'>Popcorn chill</h1>

        <h3>Popular Movies</h3>
        <ScrollerList media={popularMovies} />
        <h3>Top Rated Movies</h3>
        <ScrollerList media={topRated} />
      </main>
    </Layout>
  );
}
export async function getServerSideProps() {
  const popularMovies = await getListsData('movie', 'popular');

  const topRated = await getListsData('movie', 'top_rated');

  return {
    props: {
      popularMovies,
      topRated,
    },
  };
}
