import Link from 'next/link';

export const HomeLink = () => {
  return (
    <div>
      <Link href='/'>
        <a>← Back to home</a>
      </Link>
    </div>
  );
};
