import React, { memo, useEffect, useState } from 'react';

import { FilterProvider } from 'components/context';
import Details from 'components/details';
import Filter from 'components/filter';
import People from 'components/items/people';
import IItem from 'interfaces/item';

import Column from '@eduzz/houston-ui/Grid/Column';
import Container from '@eduzz/houston-ui/Grid/Container';
import Row from '@eduzz/houston-ui/Grid/Row';

import api from '../../services/api';
import style from './style';

const Content = () => {
  const classes = style();

  const [detailModal, setDetailModal] = useState(false);

  const [select, setSelect] = useState<string>('people');
  const [items, setItems] = useState<any[]>([]);
  const [item, setItem] = useState<IItem>({} as IItem);

  const openModal = (item: IItem) => {
    setItem(item);
    setDetailModal(true);
  };

  useEffect(() => {
    api.get(select).then((res: any) => {
      if (select === 'films') {
        setItems((res?.data.result as any[]) || []);
        return;
      }
      setItems((res?.data.results as any[]) || []);
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
            {items.map((value: any, index: number) => {
              return (
                <Column xs={12} md={3} key={index}>
                  <People item={value} openModal={openModal} />
                </Column>
              );
            })}
          </Row>
        </Container>
        {detailModal && <Details open={detailModal} handleClose={() => setDetailModal(false)} value={item} />}
      </FilterProvider>
    </div>
  );
};

export default memo(Content);
