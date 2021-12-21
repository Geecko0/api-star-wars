import React, { memo } from 'react';

interface IFilterContext {
  select: string;
  search: string;
  setValue: any;
}

interface IProps {
  children: React.ReactNode;
}

const FilterContext = React.createContext<IFilterContext>({
  select: '',
  search: '',
  setValue: () => null
});

export const FilterProvider = memo(({ children }: IProps) => {
  const [value, setValue] = React.useState<{ select: string; search: string }>({ select: '', search: '' });

  return <FilterContext.Provider value={{ ...value, setValue }}>{children}</FilterContext.Provider>;
});

export default FilterContext;
