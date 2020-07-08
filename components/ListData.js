import Link from 'next/link';

import { imageUrl } from '../utils/imageUrl';

function ListData({ movies }) {
  return (
    <>
      {movies.results.map((movie, index) => (
        <Link href='/movie/[id]' as={`/movie/${movie.id}`} key={index}>
          <a>
            <div className='card'>
              <img
                className=''
                src={`${imageUrl}${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}
export default ListData;
