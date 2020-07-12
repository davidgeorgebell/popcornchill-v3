import Link from 'next/link';

import Layout from '../../components/Layout';
import { imageUrl } from '../../utils/imageUrl';
import { useContext } from 'react';
import { GenreContext } from '../../contexts/GenreContext';

export default function Movie({ movieDetails }) {
  const { addGenreToState } = useContext(GenreContext);

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
      <div className='movie-page-wrapper'>
        <div className='movie-page-content-wrapper'>
          <h1 className='title'>{title}</h1>
          <p>{overview}</p>
          <p>{vote_average} / 10</p>
          <p>Runtime: {runtime}mins</p>
          <ul className='genre-list'>
            {movieDetails.genres.map((genre, index) => (
              <li key={index} className='genre-list-item'>
                <Link href='/genre/[id]' as={`/genre/${genre.id}`}>
                  <a
                    className='genre'
                    onClick={() => addGenreToState(genre.name)}>
                    {genre.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='movie-page-image-wrapper'>
          <img
            className=' movie-page-image'
            src={`${imageUrl}${poster_path}`}
            alt={title}
          />
        </div>
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
