import { getListsData } from '../lib/tmdbApi';
import Layout from '../components/Layout';
import ListData from '../components/ListData';

export default function NowPlaying({ movies }) {
  return (
    <Layout>
      <ListData movies={movies} />
    </Layout>
  );
}
export async function getServerSideProps() {
  const movies = await getListsData('now_playing');

  return {
    props: {
      movies,
    },
  };
}
