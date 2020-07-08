import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

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
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_KEY}&language=en-GB&page=1&region=GB`
  );
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}
