import { useData } from "../../context/useData";

export function NumResults() {
  const { movies } = useData();

  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}
