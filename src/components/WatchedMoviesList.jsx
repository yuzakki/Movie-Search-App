import { useData } from "../context/useData";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList() {
  const { watched } = useData();

  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
