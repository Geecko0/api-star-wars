import { createStyles, makeStyles } from '@material-ui/core/styles';

const style = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#282c34',
      minHeight: 'calc(100vh - 120px)',

      '& .filterButton': {
        marginTop: 15
      }
    }
  })
);

export default style;
