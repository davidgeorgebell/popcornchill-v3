import Link from 'next/link';

import { imageUrl } from '../utils/imageUrl';

function ListData({ media }) {
  return (
    <div className='list-data'>
      {media.results.map((media, index) => (
        <Link href='/movie/[id]' as={`/movie/${media.id}`} key={index}>
          <a>
            <div className='card'>
              <img
                className='card-image'
                src={`${imageUrl}${media.poster_path}`}
                alt={media.title}
              />
              <div className='center'>
                <h3>{media.title}</h3>
                <p>{media.vote_average}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
export default ListData;
