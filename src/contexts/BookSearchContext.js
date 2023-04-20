import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const BookSearchContext = createContext();

// Custom hook to get access to BookSearchContext
export const useBookSearch = () => {
  const context = useContext(BookSearchContext);
  if (!context) {
    throw new Error('useBookSearch must be used within a BookSearchProvider');
  }
  return context;
};

// Provider component to wrap the components and provide context values
export const BookSearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchItems, setSearchItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect hook to make the API request when the searchQuery changes
  useEffect(() => {
    if (!searchQuery) {
      setLoading(false);
      return;
    }

    // Required codes to fetch data from API
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.BASE_URL}?q=${searchQuery}&maxResults=20&key=${process.env.API_KEY}`
        );
        setSearchItems(response.data.items);
      } catch (error) {
        throw new Error(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  return (
    <BookSearchContext.Provider
      value={{
        searchQuery,
        searchItems,
        setSearchQuery,
        setSearchItems,
        loading,
        setLoading,
      }}
    >
      {children}
    </BookSearchContext.Provider>
  );
};
