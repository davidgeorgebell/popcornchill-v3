import { getListsData } from '../lib/tmdbApi';
import Layout from '../components/Layout';
import ListData from '../components/ListData';

export default function Upcoming({ movies }) {
  return (
    <Layout>
      <ListData movies={movies} />
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
