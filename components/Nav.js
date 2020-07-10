import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <div className='logo-wrapper'>
        <Link href='/'>
          <a>LOGO</a>
        </Link>
        <ul>
          <li>
            <Link href='/top-rated-movies'>
              <a>Top Rated Movies</a>
            </Link>
          </li>
          <li>
            <Link href='/popular-movies'>
              <a>Popular Movies</a>
            </Link>
          </li>
          <li>
            <Link href='/now-playing-movies'>
              <a>Now Playing Movies</a>
            </Link>
          </li>
          <li>
            <Link href='/search'>
              <a>Search</a>
            </Link>
          </li>
          {/* <li>
            <Link href='/top-rated-tv'>
              <a>Top Rated TV</a>
            </Link>
          </li>
          <li>
            <Link href='/popular-tv'>
              <a>Popular TV</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
