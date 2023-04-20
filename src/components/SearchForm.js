import { useState } from 'react';
import { useBookSearch } from '../contexts/BookSearchContext';

const SearchForm = () => {
  const { setSearchQuery } = useBookSearch();
  const [searchTermInput, setSearchTermInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTermInput) {
      alert('Please enter a search term.');
      return;
    }
    setSearchQuery(searchTermInput);
    setSearchTermInput('');
  };

  return (
    <form className='w-full max-w-md mx-auto' onSubmit={handleSubmit}>
      <div className='relative'>
        {/* This div contains a search icon */}
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 text-olive'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </div>

        {/* This input element is where the user types the search term */}
        <input
          type='text'
          id='search'
          value={searchTermInput}
          onChange={(e) => setSearchTermInput(e.target.value)}
          className='block w-full p-4 pl-10 text-sm text-jet border-olive rounded-lg bg-pearl focus:ring-olive focus:border-olive'
          placeholder='Search...'
          autocomplete='off'
          required
        />
      </div>
    </form>
  );
};

export default SearchForm;
