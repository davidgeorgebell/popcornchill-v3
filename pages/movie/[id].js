import Layout from '../../components/Layout';

export default function Movie({ movieDetails }) {
  console.log(movieDetails);
  const imageUrl = 'https://image.tmdb.org/t/p/w400/';
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
      <img src={`${imageUrl}${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>{overview}</p>
      <p>{vote_average} / 10</p>
      <p>Runtime: {runtime}mins</p>
      <ul>
        {movieDetails.genres.map(genre => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.MOVIE_KEY}&language=en-GB`
  );
  const movieDetails = await res.json();

  return {
    props: {
      movieDetails,
    },
  };
}
