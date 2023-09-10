/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import { useMovies } from "../hooks/useMovies";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const DataContext = createContext();

function AppProvider({ children }) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <DataContext.Provider
      value={{
        query,
        setQuery,
        selectedId,
        setSelectedId,
        movies,
        isLoading,
        error,
        watched,
        setWatched,
        handleSelectMovie,
        handleCloseMovie,
        handleAddWatched,
        handleDeleteWatched,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { AppProvider }; 
