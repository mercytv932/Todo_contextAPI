import { createContext, useState } from "react";
import type { ReactNode } from "react";
type Filter = "all" | "active" | "completed";

interface FilterContextType {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };
