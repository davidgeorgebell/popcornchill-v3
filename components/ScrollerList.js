import React from 'react';
import Link from 'next/link';

import { imageUrl } from '../utils/imageUrl';

export default function ScrollerList({ media }) {
  return (
    <div className='scroller'>
      <div className='home-content-wrapper'>
        {media.results.map((movie, index) => (
          <Link href='/movie/[id]' as={`/movie/${movie.id}`} key={index}>
            <a>
              <div className='card home-card center'>
                <img
                  className='card-image'
                  src={`${imageUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
