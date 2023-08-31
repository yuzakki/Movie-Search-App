import { useRef } from "react";
import { useData } from "../../context/useData";

import { useKey } from "../../hooks/useKey";

export function Search() {
  const inputEl = useRef(null);
  const { query, setQuery } = useData();

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
