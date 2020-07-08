import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <div className='logoWrapper'>
        <Link href='/'>
          <a>LOGO</a>
        </Link>
        <ul>
          <li>
            <Link href='/toprated'>
              <a>Top Rated</a>
            </Link>
          </li>
          <li>
            <Link href='/popular'>
              <a>Popular</a>
            </Link>
          </li>
          <li>
            <Link href='/nowplaying'>
              <a>Now Playing</a>
            </Link>
          </li>
          <li>
            <Link href='/upcoming'>
              <a>Upcoming</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
