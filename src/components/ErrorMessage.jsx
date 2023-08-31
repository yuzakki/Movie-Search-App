import { useData } from "../context/useData";

export default function ErrorMessage() {
  const { error } = useData();

  return (
    <p className="error">
      <span>⛔️</span> {error}
    </p>
  );
}
