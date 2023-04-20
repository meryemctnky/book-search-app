import Head from 'next/head';
import BookDetailCard from '../components/BookDetailCard';
import axios from 'axios';

const BookDetailPage = ({ book }) => {
  return (
    <>
      <Head>
        <title>Book Search App | {book.volumeInfo.title} </title>
        <link rel='icon' href='/icon.ico' />
      </Head>
      <BookDetailCard book={book} />
    </>
  );
};

export default BookDetailPage;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios.get(
    `${process.env.BASE_URL}/${id}?key=${process.env.API_KEY}`
  );
  const book = response.data;

  return {
    props: {
      book,
    },
  };
}
