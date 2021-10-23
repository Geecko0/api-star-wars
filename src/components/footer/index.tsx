import React, { memo } from 'react';

import style from './style';

const Footer = () => {
  const classes = style();
  return <div className={classes.root}>Hello World!!!</div>;
};

export default memo(Footer);
