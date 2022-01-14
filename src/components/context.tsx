import React, { memo } from 'react';

interface IFilterContext {
  select: string;
  search: string;
  setValue: any;
}

interface IProps {
  select: string;
  search: string;
  children: React.ReactNode;
  setValue: () => null;
}

const FilterContext = React.createContext<IFilterContext>({
  select: '',
  search: '',
  setValue: () => null
});

export const FilterProvider = memo(({ children, select, search, setValue }: IProps) => {
  return <FilterContext.Provider value={{ select, search, setValue }}>{children}</FilterContext.Provider>;
});

export default FilterContext;
