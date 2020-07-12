import '../styles/global.css';
import { GenreContextProvider } from '../contexts/GenreContext';

export default function App({ Component, pageProps }) {
  return (
    <GenreContextProvider>
      <Component {...pageProps} />
    </GenreContextProvider>
  );
}
