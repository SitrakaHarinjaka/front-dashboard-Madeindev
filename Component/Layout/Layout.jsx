import React, { memo } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import routes from '../../config/routes';
import { useRouter } from 'next/router';

const Layout = memo(({ children }) => {
  const router = useRouter();
  const isAdmin = router.asPath.indexOf(`/${routes.admin}`) > -1;
  return (
    <div>
      <Header isAdmin={isAdmin} />
      {children}
      <Footer isAdmin={isAdmin} />
    </div>
  );
});

export default Layout;
