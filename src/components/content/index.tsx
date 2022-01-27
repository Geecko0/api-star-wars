import React, { memo, useEffect, useState } from 'react';

import BasicCard from 'components/card';
import { FilterProvider } from 'components/context';
import Details from 'components/details';
import Filter from 'components/filter';
import IItem from 'interfaces/item';

import Button from '@eduzz/houston-ui/Button';
import Column from '@eduzz/houston-ui/Grid/Column';
import Container from '@eduzz/houston-ui/Grid/Container';
import Row from '@eduzz/houston-ui/Grid/Row';

import api from '../../services/api';
import style from './style';

const Content = () => {
  const classes = style();

  const [detailModal, setDetailModal] = useState(false);

  const [select, setSelect] = useState<string>('people');
  const [people, setPeople] = useState<any[]>([]);
  const [item, setItem] = useState<IItem>({} as IItem);

  const openModal = (item: IItem) => {
    setItem(item);
    setDetailModal(true);
  };

  useEffect(() => {
    api.get(select).then((res: any) => {
      if (select === 'films') {
        console.log(res);
        setPeople(res.data.result as any[]);
        return;
      }
      setPeople(res.data.results as any[]);
    });
  }, [select]);

  return (
    <div className={classes.root}>
      <FilterProvider search='' select='' setValue={() => null}>
        <Container>
          <Row alignItems='baseline'>
            <Filter setSelectValue={setSelect} />
          </Row>
          <Row>
            {people.map((value: any, index: number) => {
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
      </FilterProvider>
    </div>
  );
};

export default memo(Content);
