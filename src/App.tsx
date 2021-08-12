import React, { memo } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { classicNameResolver } from 'typescript';

const style = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white'
    }
  })
);

const App = () => {
  const classes = style();
  return (
    <div className={classes.root}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default memo(App);
