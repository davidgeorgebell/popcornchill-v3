import Link from 'next/link';

import { imageUrl } from '../utils/imageUrl';

function ListData({ media }) {
  return (
    <div className='list-data'>
      {media &&
        media.map((media, index) => (
          <Link href='/movie/[id]' as={`/movie/${media.id}`} key={index}>
            <a className='list-data-link'>
              <div className='card'>
                {media.poster_path ? (
                  <img
                    className='card-image'
                    src={`${imageUrl}${media.poster_path}`}
                    alt={media.title}
                  />
                ) : (
                  <div className='no-image-holder'>No image available</div>
                )}
                <div className='center'>
                  <h3 className='list-data-title'>{media.title}</h3>
                  {media.vote_average ? (
                    <p className='list-data-rating'>
                      {media.vote_average}{' '}
                      <span role='img' aria-label='star'>
                        ⭐️
                      </span>
                    </p>
                  ) : (
                    <p>No reviews</p>
                  )}
                </div>
              </div>
            </a>
          </Link>
        ))}
    </div>
  );
}
export default ListData;
