import React, { createContext, useState, useEffect } from 'react';

export const GenreContext = createContext();

export function GenreContextProvider({ children }) {
  const [genre, setGenre] = useState('');

  function addGenreToState(str) {
    setGenre(str);
  }
  useEffect(() => {
    const genreToDisplay = localStorage.getItem('genre');
    if (genreToDisplay) {
      setGenre(JSON.parse(genreToDisplay));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('genre', JSON.stringify(genre));
  }, [genre]);

  return (
    <GenreContext.Provider value={{ genre, setGenre, addGenreToState }}>
      {children}
    </GenreContext.Provider>
  );
}
