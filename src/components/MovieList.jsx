import { useData } from "../context/useData";
import Movie from "./Movie";

const Styles = {
  textAlign: "center",
  marginTop: "50px",
  fontSize: 24,
  fontWeight: 500,
};

export default function MovieList() {
  const { movies, query } = useData();

  return (
    <>
      {query.length < 3 ? (
        <h1 style={Styles}>Search for a movie..</h1>
      ) : (
        <ul className="list list-movies">
          {movies?.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </ul>
      )}
    </>
  );
}
