import { HomeLink } from './HomeLink';

export default function Layout({ children, home }) {
  return (
    <div className='container'>
      {/* ------ Main ------- */}
      <main>{children}</main>

      {!home ? <HomeLink home={home} /> : null}
    </div>
  );
}
