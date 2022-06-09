import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

function FilterProvider({ children }) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [filter, setFilter] = useState('all');
  const value = { filter, setFilter };
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}

function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context;
}

export { FilterProvider, useFilter }

