import Layout from '@/layout/Layout';
import '@/styles/globals.css';
import { BookSearchProvider } from '@/contexts/BookSearchContext';

export default function App({ Component, pageProps }) {
  return (
    <BookSearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookSearchProvider>
  );
}
