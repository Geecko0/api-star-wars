import React from 'react';

import { Button } from '@mui/material';
import BasicCard from 'components/card';

interface IProps {
  item: any;
  openModal: (item: any) => void;
}

const People = ({ item, openModal }: IProps) => {
  return (
    <BasicCard title={item.name}>
      <div>{item.gender !== 'n/a' ? <>Gender: {item.gender}</> : 'Gender: genderless'}</div>
      <div>Height: {item.height} cm</div>
      <div>Mass: {item.mass} Kg</div>
      <Button onClick={() => openModal(item)}>Ver detalhes</Button>
    </BasicCard>
  );
};

export default People;
