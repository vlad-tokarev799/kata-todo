import { useState } from 'react';

export const useFilters = () => {
  const [filters, setFilters] = useState([
    { label: 'All', param: 'all', active: true },
    { label: 'Active', param: 'active', active: false },
    { label: 'Completed', param: 'completed', active: false },
  ]);

  const selectFilter = (filterID) => {
    const newFilters = filters.map((filter) => ({
      ...filter,
      active: filter.param === filterID,
    }));

    setFilters(newFilters);
  };

  return [filters, selectFilter];
};
