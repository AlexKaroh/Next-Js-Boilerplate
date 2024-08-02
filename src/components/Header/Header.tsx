import { FC, useContext } from 'react';
import { toast } from 'react-toastify';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AppContext from 'appContext';
import { TThemeModes } from 'hooks/useThemeColor/useThemeColor';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LogoMuiIcon from 'resources/SvgIcons/LogoMuiIcon';
import Routes from 'routes';

import styles from './styles';

const Header: FC = () => {
  const router = useRouter();
  const { t } = useTranslation('header');
  const { themeColor, setThemeColor } = useContext(AppContext);
  return (
    <Box sx={styles.container}>
      <Box>
        <Typography variant="body1">
          <LogoMuiIcon fontSize="large" />
        </Typography>
      </Box>
      <Box sx={styles.menu}>
        <Link href={Routes.HOME}>{t('Home')}</Link>
        <Link href={Routes.ABOUT}>{t('About')}</Link>
      </Box>
      <Box>
        <IconButton onClick={handleSwitchTheme}>
          {themeColor === TThemeModes.Light ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <ButtonGroup variant="text">
          <Button onClick={() => handleSwitchLanguage('en')}>EN</Button>
          <Button onClick={() => handleSwitchLanguage('de')}>DE</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );

  async function handleSwitchLanguage(lang: string) {
    await router.push(router.asPath, undefined, { locale: lang });
  }

  async function handleSwitchTheme() {
    setThemeColor((oldValue) => {
      if (oldValue === TThemeModes.Light) {
        return TThemeModes.Dark;
      }
      return TThemeModes.Light;
    });
    toast.success('Theme switched');
  }
};

export default Header;
