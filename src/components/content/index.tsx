import React, { memo, useEffect, useState } from 'react';

import BasicCard from 'components/card';
import Details from 'components/details';
import IItem from 'interfaces/item';

import Button from '@eduzz/houston-ui/Button';
import SelectField from '@eduzz/houston-ui/Forms/Select';
import TextField from '@eduzz/houston-ui/Forms/Text';
import Column from '@eduzz/houston-ui/Grid/Column';
import Container from '@eduzz/houston-ui/Grid/Container';
import Row from '@eduzz/houston-ui/Grid/Row';

import ICategory from '../../interfaces/category';
import api from '../../services/api';
import style from './style';

const Content = () => {
  const classes = style();
  const [text, setText] = useState('');
  const [detailModal, setDetailModal] = useState(false);
  const [textSelect, setTextSelect] = useState(2); //...
  const [options] = useState<ICategory[]>(() => [
    { value: 1, label: 'films' },
    { value: 2, label: 'people' },
    { value: 3, label: 'planets' },
    { value: 4, label: 'species' },
    { value: 5, label: 'starships' },
    { value: 6, label: 'vehicles' }
  ]);
  const [people, setPeople] = useState<any[]>([]);
  const [item, setItem] = useState<IItem>({} as IItem);

  const openModal = (item: IItem) => {
    setItem(item);
    setDetailModal(true);
  };

  useEffect(() => {
    api.get('people').then((result: any) => {
      console.log(result);
      setPeople(result.data.results as any[]);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <Row alignItems='baseline'>
          <Column xs={12} md={2}>
            <SelectField
              label='Seleção'
              emptyOption='Selecione...'
              options={options}
              value={textSelect}
              onChange={setTextSelect}
            ></SelectField>
          </Column>
          <Column xs={12} md={7}>
            <TextField label='Campo de Texto' value={text} onChange={setText}></TextField>
          </Column>
          <Column xs={12} md={3}>
            <Button className='filterButton'>Pesquisar</Button>
          </Column>
        </Row>
        <Row>
          {people.map((value: any, index: number) => {
            console.log(value);
            return (
              <Column xs={12} md={3} key={index}>
                <BasicCard title={value.name}>
                  <div>{value.gender !== 'n/a' ? <>Gender: {value.gender}</> : 'Gender: genderless'}</div>
                  <div>Height: {value.height} cm</div>
                  <div>Mass: {value.mass} Kg</div>
                  <Button onClick={() => openModal(value)}>Ver detalhes</Button>
                </BasicCard>
              </Column>
            );
          })}
        </Row>
      </Container>
      {detailModal && <Details open={detailModal} handleClose={() => setDetailModal(false)} item={item} />}
    </div>
  );
};

export default memo(Content);
