import React, { memo } from 'react';
import style from './style';
import useForm from '@eduzz/houston-forms/useForm';
import Container from '@eduzz/houston-ui/Grid/Container';
import Column from '@eduzz/houston-ui/Grid/Column';
import Row from '@eduzz/houston-ui/Grid/Row';
import TextField from '@eduzz/houston-ui/Forms/Text';
import SelectField from '@eduzz/houston-ui/Forms/Select';
import Button from '@eduzz/houston-ui/Button';

const Content = () => {
  const classes = style();
  const [text, setText] = React.useState('');
  const [textSelect, setTextSelect] = React.useState('');
  const [options] = React.useState(() => [
    { value: 1, label: 'Filmes' },
    { value: 2, label: 'Pessoas' },
    { value: 3, label: 'Planetas' },
    { value: 4, label: 'Espécies' },
    { value: 5, label: 'Naves' },
    { value: 6, label: 'Veículos' }
  ]);

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
      </Container>
    </div>
  );
};

export default memo(Content);
