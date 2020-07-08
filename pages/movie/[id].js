export default function Movie({ movieDetails }) {
  console.log(movieDetails);
  return (
    <div>
      <p>{movieDetails.title}</p>
    </div>
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
