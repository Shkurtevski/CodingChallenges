import { createContext, useContext, useState, ReactNode } from "react";

interface Filters {
  gender: string | null;
  brand: string | null;
}

interface FilterContextType {
  filters: Filters;
  setFilter: (category: string, value: string | null) => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filters, setFilters] = useState<Filters>({
    gender: null,
    brand: null,
  });

  const setFilter = (category: string, value: string | null) => {
    setFilters((prevFilters) => ({ ...prevFilters, [category]: value }));
  };

  return (
    <FilterContext.Provider value={{ filters, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
