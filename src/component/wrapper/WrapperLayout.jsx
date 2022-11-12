import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const WrapperLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default WrapperLayout;
