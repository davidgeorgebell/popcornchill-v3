import Link from 'next/link';

import { imageUrl } from '../utils/imageUrl';

function MovieList({ movies }) {
  return (
    <div className='moviesContainer'>
      {movies.results.map((movie, index) => (
        <div className='card' key={index}>
          <Link href='/movie/[id]' as={`/movie/${movie.id}`}>
            <a>
              <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default MovieList;
