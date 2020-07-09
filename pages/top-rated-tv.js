import { getListsData } from '../lib/tmdbApi';
import Layout from '../components/Layout';
import ListData from '../components/ListData';

export default function TopRated({ tv }) {
  return (
    <Layout>
      <ListData media={tv} />
    </Layout>
  );
}
export async function getServerSideProps() {
  const tv = await getListsData('tv', 'top_rated');

  return {
    props: {
      tv,
    },
  };
}
