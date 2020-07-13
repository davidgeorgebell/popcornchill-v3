import { HomeLink } from './HomeLink';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className='container'>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
}
