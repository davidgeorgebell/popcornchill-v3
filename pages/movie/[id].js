import Link from 'next/link';

import Layout from '../../components/Layout';
import { imageUrl } from '../../utils/imageUrl';
import { useContext } from 'react';
import { GenreContext } from '../../contexts/GenreContext';
import { formatDate } from '../../utils/formatDate';
import { HomeLink } from '../../components/HomeLink';
import {
  GrowSlow,
  YAnimation,
  YAnimationMid,
  YAnimationSlow,
  XAnimation,
} from '../../components/Animations';

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
    release_date,
  } = movieDetails;

  return (
    <Layout>
      <div className='movie-page-wrapper'>
        <div className='movie-page-content-wrapper'>
          <YAnimation>
            <h1 className='title'>{title}</h1>
          </YAnimation>
          <XAnimation>
            <div className='movie-stats'>
              <p>
                {vote_average}/10{' '}
                <span aria-label='star' role='img'>
                  ⭐️
                </span>
              </p>{' '}
              <p>{runtime}mins</p>
              <p>{formatDate(release_date)}</p>
            </div>
          </XAnimation>
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
          <YAnimationMid>
            <h3 className='title'>Plot Summary</h3>
          </YAnimationMid>
          <YAnimationSlow>
            <p>{overview}</p>
          </YAnimationSlow>
        </div>
        <div className='movie-page-image-wrapper'>
          <GrowSlow>
            <img
              className=' movie-page-image'
              src={`${imageUrl}${poster_path}`}
              alt={title}
            />
          </GrowSlow>
        </div>
      </div>
      <HomeLink />
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
