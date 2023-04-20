import React from 'react';
import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header className='bg-header-pattern'>
      <div className='bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-tan/70 to-tequila/60 w-full h-full'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-jet md:text-5xl lg:text-6xl '>
            Explore the World of Books
          </h1>
          <p className='mb-8 text-lg font-normal font-serif text-jet/90 lg:text-xl sm:px-16 lg:px-48'>
            Our book search application makes it easy for readers to search for
            and access detailed information about the books they are interested
            in.
          </p>
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
