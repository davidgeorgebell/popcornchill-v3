import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>popcornchill.com</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>Popcorn chill</h1>
      </main>
    </div>
  );
}
