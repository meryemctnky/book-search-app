import Head from 'next/head';
import Image from 'next/image';
import BookList from '@/components/BookList';
import Header from '@/components/Header';
import { useBookSearch } from '../contexts/BookSearchContext';

export default function Home() {
  const { searchQuery } = useBookSearch();
  return (
    <>
      <Head>
        <title>Book Search App </title>
        <link rel='icon' href='/icon.ico' />
      </Head>
      <Header />
      {searchQuery ? (
        <BookList />
      ) : (
        <section className='container mx-auto my-auto flex justify-center align-middle'>
          <Image
            priority
            src='./background-image.svg'
            alt='Background image'
            width={250}
            height={250}
          />
        </section>
      )}
    </>
  );
}
