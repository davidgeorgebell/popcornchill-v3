import { getListsData } from '../lib/tmdbApi';
import Layout from '../components/Layout';
import ListData from '../components/ListData';

export default function Popular({ movies }) {
  return (
    <Layout>
      <ListData movies={movies} />
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
