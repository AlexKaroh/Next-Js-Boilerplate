import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

import styles from './styles';

const Index: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Box sx={styles.container}>
      <Box sx={styles.block}>
        <Typography variant="h2">{t('title')}</Typography>
        <Typography variant="body2">{t('description')}</Typography>
      </Box>
    </Box>
  );
};

export default Index;
