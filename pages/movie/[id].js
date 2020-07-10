import Layout from '../../components/Layout';
import { imageUrl } from '../../utils/imageUrl';

export default function Movie({ movieDetails }) {
  const {
    title,
    overview,
    vote_average,
    runtime,
    poster_path,
    budget,
    revenue,
  } = movieDetails;

  return (
    <Layout>
      <div>
        <img src={`${imageUrl}${poster_path}`} alt={title} />
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>{vote_average} / 10</p>
        <p>Runtime: {runtime}mins</p>
        <ul>
          {movieDetails.genres.map((genre, index) => (
            <li key={index}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}&language=en-GB`
  );
  const movieDetails = await res.json();

  return {
    props: {
      movieDetails,
    },
  };
}
