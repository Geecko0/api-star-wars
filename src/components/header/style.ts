import { createStyles, makeStyles } from '@material-ui/core/styles';

const style = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      justifyContent: 'center',
      height: 64,
      backgroundColor: '#cdcdcd',
      display: 'flex',
      alignItems: 'center'
    }
  })
);

export default style;
