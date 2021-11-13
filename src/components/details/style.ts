import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-51.5%, -50%)',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    maxWidth: 'calc(100% - 24px)',
    overflow: 'auto',
    marginRight: 15,

    '& .header': {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',

      '& .close': {
        zIndex: 100,

        '& .MuiIconButton-root': {
          padding: 0
        },

        '& span': {
          color: '#f00',
          fontSize: 16
        }
      }
    },

    '& .content': {
      width: '100%'
    }
  }
}));

export default useStyles;
