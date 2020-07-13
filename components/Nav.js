import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='nav-wrapper'>
      <div className='logo-wrapper'>
        <h1 className='logo'>
          <Link href='/'>
            <a className='nav-link-logo'>POPCORNCHILL</a>
          </Link>
        </h1>
      </div>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <Link href='/top-rated-movies'>
            <a className='nav-link'>Top Rated</a>
          </Link>
        </li>
        <li className='nav-list-item'>
          <Link href='/popular-movies'>
            <a className='nav-link'>Popular</a>
          </Link>
        </li>
        <li className='nav-list-item'>
          <Link href='/now-playing-movies'>
            <a className='nav-link'>Now Playing</a>
          </Link>
        </li>
        <li className='nav-list-item'>
          <Link href='/genres'>
            <a className='nav-link'>Genres</a>
          </Link>
        </li>
      </ul>
      <div className='nav-search-wrapper'>
        <Link href='/search'>
          <a className='icon'>
            <span role='img' aria-label='magnifine glass'>
              🔍
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
