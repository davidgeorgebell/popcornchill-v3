import Layout from '../../components/Layout';
import { imageUrl } from '../../utils/imageUrl';

export default function Tv({ tvDetails }) {
  console.log(tvDetails);

  const {
    title,
    overview,
    vote_average,
    runtime,
    poster_path,
    budget,
    revenue,
  } = tvDetails;

  return (
    <Layout>
      <div>
        <img src={`${imageUrl}${poster_path}`} alt={title} />
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>{vote_average} / 10</p>
        <p>Runtime: {runtime}mins</p>
        <ul>
          {tvDetails.genres.map(genre => (
            <li>{genre.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${params.id}?api_key=${process.env.MOVIE_KEY}&language=en-GB`
  );
  const tvDetails = await res.json();

  return {
    props: {
      tvDetails,
    },
  };
}
