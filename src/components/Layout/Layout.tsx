import { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './styles';

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <Box sx={styles.container}>
      <Header />
      <Box sx={styles.content}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
