import React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import useStyles from './style';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const Details = ({ open, handleClose }: IProps) => {
  const classes = useStyles();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        onBackdropClick={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className={classes.root}>
          <div className='header'>
            <div className='close' id='modal-default-close'>
              <IconButton onClick={() => (handleClose ? handleClose() : null)}>
                <Icon>X</Icon>
              </IconButton>
            </div>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Text in a modal
            </Typography>
          </div>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </div>
      </Modal>
    </div>
  );
};

export default Details;
