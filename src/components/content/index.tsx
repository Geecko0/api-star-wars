import React, { memo, useEffect, useState } from 'react';
import style from './style';
import useForm from '@eduzz/houston-forms/useForm';
import Container from '@eduzz/houston-ui/Grid/Container';
import Column from '@eduzz/houston-ui/Grid/Column';
import Row from '@eduzz/houston-ui/Grid/Row';
import TextField from '@eduzz/houston-ui/Forms/Text';
import SelectField from '@eduzz/houston-ui/Forms/Select';
import Button from '@eduzz/houston-ui/Button';
import ICategory from '../../interfaces/category';
import api from '../../services/api';
import BasicCard from 'components/card';

const Content = () => {
  const classes = style();
  const [text, setText] = useState('');
  const [textSelect, setTextSelect] = useState('');
  const [options] = useState<ICategory[]>(() => [
    { value: 1, label: 'Filmes' },
    { value: 2, label: 'Pessoas' },
    { value: 3, label: 'Planetas' },
    { value: 4, label: 'Espécies' },
    { value: 5, label: 'Naves' },
    { value: 6, label: 'Veículos' }
  ]);
  const [people, setPeople] = useState<any[]>([]);

  useEffect(() => {
    api.get('people').then((result: unknown) => {
      setPeople(result as any[]);
    });
  });

  return (
    <div className={classes.root}>
      <Container>
        <Row alignItems='baseline'>
          <Column xs={2}>
            <SelectField
              label='Seleção'
              emptyOption='Selecione...'
              options={options}
              value={textSelect}
              onChange={setTextSelect}
            ></SelectField>
          </Column>
          <Column xs={7}>
            <TextField label='Campo de Texto' value={text} onChange={setText}></TextField>
          </Column>
          <Column xs={3}>
            <Button className='filterButton'>Pesquisar</Button>
          </Column>
        </Row>
        <Row>
          <Column xs={12}>
            {people.map((value: any) => {
              console.log(value);
              return (
                <BasicCard title={value.name}>
                  <>{value.planets}</>
                </BasicCard>
              );
            })}
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default memo(Content);
