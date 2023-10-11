import { useState, useEffect } from "react";

const KEY = "f84fc31d";

console.log(KEY);

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          // const res = await fetch(
          //   `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          // );

          // if (!res.ok)
          //   throw new Error("Something went wrong with fetching movies");

          // ===========

          // Check if the current page is loaded over HTTPS or HTTP
          const protocol =
            window.location.protocol === "https:" ? "https" : "http";

          const res = await fetch(
            `${protocol}://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
          }

          // ===========

          const data = await res.json();
          // if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return { movies, isLoading, error };
}
