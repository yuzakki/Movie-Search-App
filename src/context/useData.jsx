import { useContext } from "react";
import { DataContext } from "./DataContext";

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("useApp must be used within an AppProvider");
  return context;
}
