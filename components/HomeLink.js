import Link from 'next/link';

import { Button } from './Button';

export const HomeLink = () => {
  return (
    <div className='home-link'>
      <Link href='/'>
        <a>
          <Button> ← Back to home</Button>
        </a>
      </Link>
    </div>
  );
};
