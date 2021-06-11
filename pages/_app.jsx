import React, { Fragment } from 'react';
import '../scss/global.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
