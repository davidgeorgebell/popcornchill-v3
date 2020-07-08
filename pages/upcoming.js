import { getListsData } from '../lib/tmdbApi';
import Layout from '../components/Layout';
import MovieList from '../components/MovieList';

export default function Upcoming({ movies }) {
  return (
    <Layout>
      <MovieList movies={movies} />
    </Layout>
  );
}
export async function getServerSideProps() {
  const movies = await getListsData('upcoming');

  return {
    props: {
      movies,
    },
  };
}
