import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getListsData } from '../lib/tmdbApi';

export default function Home({ movies }) {
  return (
    <Layout home>
      <Head>
        <title>popcornchill.com</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='center title'>Popcorn chill</h1>

        <div className='moviesContainer'>
          {movies.results.map((movie, index) => (
            <p key={index}>
              <Link href='/movie/[id]' as={`/movie/${movie.id}`}>
                <a>{movie.title}</a>
              </Link>
            </p>
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
