import React, { memo } from 'react';

const  Footer = memo(({isAdmin}) => {
    
  return <div>{isAdmin} Footer</div>;
});

export default Footer;