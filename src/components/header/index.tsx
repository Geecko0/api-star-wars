import React, { memo } from 'react';
import style from './style';

const Header = () => {
  const classes = style();

  return <div className={classes.root}>Enciclopédia Star Wars</div>;
};

export default memo(Header);
