import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import SelectField from '@mui/material/Select';

import Column from '@eduzz/houston-ui/Grid/Column';

import ICategory from '../../interfaces/category';

const Filter = () => {
  const [text, setText] = useState('');
  const [textSelect, setTextSelect] = useState(2); //...
  const [options] = useState<ICategory[]>(() => [
    { value: 1, label: 'films' },
    { value: 2, label: 'people' },
    { value: 3, label: 'planets' },
    { value: 4, label: 'species' },
    { value: 5, label: 'starships' },
    { value: 6, label: 'vehicles' }
  ]);
  return (
    <>
      <Column xs={12} md={2}>
        <FormControl fullWidth>
          <SelectField
            labelId='select-option-label'
            value={textSelect}
            onChange={e => setTextSelect(Number(e.target.value))}
          >
            {options.map((option, index) => {
              return (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </SelectField>
        </FormControl>
      </Column>
      <Column xs={12} md={7}>
        <TextField label='Campo de Texto' value={text} onChange={e => setText(e.target.value)}></TextField>
      </Column>
      <Column xs={12} md={3}>
        <Button className='filterButton'>Pesquisar</Button>
      </Column>
    </>
  );
};

export default Filter;
