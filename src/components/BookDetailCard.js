import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const BookDetailCard = ({ book }) => {
  const { volumeInfo } = book;

  return (
    <section className='text-jet body-font overflow-hidden bg-transparent min-h-[70vh] border-0'>
      <div className='container px-5 py-14 mx-auto '>
        <Link href='/'>
          <div className='flex items-center pb-4'>
            <BsArrowLeft className='mr-2' />
            <span>BACK</span>
          </div>
        </Link>
        <div className='mx-auto flex flex-wrap justify-around align-middle'>
          <div className='relative h-screen max-h-[50vh] block'>
            <Image
              src={volumeInfo.imageLinks?.thumbnail || '/default-thumbnail.jpg'}
              className='object-top object-contain rounded'
              width={250}
              height={250}
              object-fit='contain'
              alt='Book Cover'
            />
          </div>
          <div className='lg:w-1/2 w-full mt-10 lg:mt-0'>
            <h1 className='text-jet text-3xl title-font font-medium mb-2 pl-0'>
              {volumeInfo.title.toUpperCase()}
            </h1>
            <h2 className='text-sm title-font text-jet/75 tracking-widest mb-3'>
              {volumeInfo.authors
                ? volumeInfo.authors
                    .map((author) => author.toUpperCase())
                    .join(', ')
                : 'UNKNOW AUTHOR'}
            </h2>
            {volumeInfo.description ? (
              <p
                className='leading-relaxed'
                dangerouslySetInnerHTML={{ __html: volumeInfo.description }}
              ></p>
            ) : (
              <>
                <p className='leading-relaxed'>
                  Unfortunately, there is no description available for this book
                  yet. If you would like to learn more about the subject matter
                  and content of the book, you can visit the author&apos;s or
                  publisher&apos;s official website. There may be a description
                  available in another language or edition of the book, so you
                  can also check other sources. Additionally, you can get an
                  idea about the book by reviewing opinions of readers and
                  critics who have commented on the book.
                </p>
                <Link href={`${book.volumeInfo.previewLink}`}>
                  <div className='flex items-center'>
                    <button
                      type='button'
                      className='inline-block text-olive font-medium rounded-lg py-2.5 text-center'
                    >
                      MORE DETAILS
                    </button>
                    <BsArrowRight className='ml-2' />
                  </div>
                </Link>
              </>
            )}
            <ul className='divide-y divide-olive pt-3'>
              <li className='pb-2 sm:pb-3'>
                <div className='flex items-center space-x-4'>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-jet truncate'>
                      PAGE COUNT
                    </p>
                  </div>
                  <div className='inline-flex items-center text-base font-semibold text-jet'>
                    {volumeInfo.pageCount ? volumeInfo.pageCount : '-'}
                  </div>
                </div>
              </li>
              <li className='py-2 sm:py-3 '>
                <div className='flex items-center space-x-4'>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-jet truncate'>
                      PUBLISHED DATE
                    </p>
                  </div>
                  <div className='inline-flex items-center text-base font-semibold text-jet'>
                    {volumeInfo.publishedDate ? volumeInfo.publishedDate : '-'}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailCard;
