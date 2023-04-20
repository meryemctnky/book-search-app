import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMagnifyingGlassPlus, HiOutlineEye } from 'react-icons/hi2';

const BookCard = ({ book }) => {
  // If book or book.volumeInfo is not provided, set default values
  if (!book || !book.volumeInfo) {
    const volumeInfo = {
      title: 'UNKNOW TITLE',
      authors: ['UNKNOW AUTHOR'],
      imageLinks: {
        thumbnail: '/default-thumbnail.jpg',
      },
    };
    book = { volumeInfo: volumeInfo };
  }

  const { volumeInfo } = book;

  return (
    <div className='w-full max-w-sm mb-3'>
      {/* The book cover */}
      <div className='relative h-screen max-h-[30vh] block my-2'>
        <Link href={`/${book.id}`}>
          <Image
            src={volumeInfo.imageLinks?.thumbnail || '/default-thumbnail.jpg'}
            alt={`Cover of ${volumeInfo.title}`}
            fill
            object-fit='contain'
            className='object-top object-contain hover:scale-105 transition-all duration-600'
          />
        </Link>
      </div>
      {/* The book title and author */}
      <div className='px-3 pb-3 text-center'>
        <p className='text-md font-semibold text-center tracking-tight text-jet'>
          {/* Truncate the title if it's too long */}
          {volumeInfo.title.length > 30
            ? `${volumeInfo.title.slice(0, 30).toUpperCase()}...`
            : volumeInfo.title.toUpperCase()}
        </p>
        <p className='text-sm text-center tracking-tight text-jet'>
          {/* List the author(s) or show "Unknown author" */}
          {volumeInfo.authors
            ? volumeInfo.authors
                .map((author) => author.toUpperCase())
                .join(', ')
                .slice(0, 40) +
              (volumeInfo.authors.join(', ').length > 40 ? '...' : '')
            : 'UNKNOW AUTHOR'}
        </p>
        {/* Buttons for preview and showing details */}
        <div className='flex items-center justify-center'>
          <Link href={`${book.volumeInfo.previewLink}`}>
            <button
              type='button'
              className='inline-block text-olive   font-medium rounded-lg px-2.5 py-2.5 text-center'
              data-te-toggle='tooltip'
              data-te-placement='bottom'
              data-te-ripple-init
              data-te-ripple-color='light'
              title='Preview'
            >
              {/* Icon for preview button */}
              <HiOutlineEye className='text-2xl hover:text-olive focus:ring-4 focus:outline-none focus:ring-olive' />
            </button>
          </Link>
          <Link href={`/${book.id}`}>
            <button
              type='button'
              className='inline-block text-olive font-medium rounded-lg px-2.5 py-2.5 text-center'
              data-te-toggle='tooltip'
              data-te-placement='bottom'
              data-te-ripple-init
              data-te-ripple-color='light'
              title='Show Detail'
            >
              {/* Icon for showing detail button */}
              <HiOutlineMagnifyingGlassPlus className='text-2xl hover:text-olive focus:ring-4 focus:outline-none focus:ring-olive' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
