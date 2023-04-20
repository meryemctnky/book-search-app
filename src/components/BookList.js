import BookCard from '@/components/BookCard';
import { useBookSearch } from '../contexts/BookSearchContext';
import Loader from './Loader';

const BookList = () => {
  // Destructure searchItems and loading from the BookSearchContext
  const { searchItems, loading } = useBookSearch();

  return (
    // Define the layout for the BookList component
    <section className='container mx-auto my-5 bottom-0 min-h-[80vh]'>
      {/* If the page is still loading, show the Loader component */}
      {loading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 align-middle'>
          {/* If searchItems is not empty, map through each item and display a BookCard component */}
          {searchItems.length > 0 &&
            searchItems.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      )}
    </section>
  );
};

export default BookList;
