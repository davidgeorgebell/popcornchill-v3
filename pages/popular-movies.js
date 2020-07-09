import { getListsData } from '../lib/tmdbApi';
import Layout from '../components/Layout';
import ListData from '../components/ListData';

export default function Popular({ movies }) {
  return (
    <Layout>
      <ListData media={movies} />
    </Layout>
  );
}
export async function getServerSideProps() {
  const movies = await getListsData('movie', 'popular');

  return {
    props: {
      movies,
    },
  };
}
