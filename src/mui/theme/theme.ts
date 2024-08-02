import { createTheme } from '@mui/material/styles';
import { TThemeModes } from 'hooks/useThemeColor/useThemeColor';

import { darkTheme, lightTheme } from './colors';

function theme(font: string, font2: string, themeColor: TThemeModes = TThemeModes.Light) {
  const theme = createTheme({
    palette: {
      mode: themeColor
    },
    typography: {
      fontFamily: font,
      fontSize: 16,
      button: {
        fontFamily: font
      },
      body2: {
        fontFamily: font,
        fontSize: 'clamp(16px, 1.5vw, 80px)'
      },
      h1: {
        fontFamily: font2
      },
      h2: {
        fontSize: 'clamp(20px, 4vw, 100px)',
        fontFamily: font2
      },
      h3: {
        fontFamily: font2
      },
      h4: {
        fontFamily: font2
      },
      h5: {
        fontFamily: font2
      },
      h6: {
        fontFamily: font2
      }
    },
    shape: {
      borderRadius: 8
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            letterSpacing: '-0.05em',
            a: {
              color: themeColor === TThemeModes.Light ? lightTheme.link : darkTheme.link
            }
          }
        }
      },

      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: '10px',
            boxShadow: '0 0 0'
          }
        }
      },

      MuiDialogActions: {
        styleOverrides: {
          root: {
            display: 'flex',
            padding: 0,
            justifyContent: 'flex-start',
            marginBottom: '10px'
          }
        }
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            background: 'rgb(0 0 0 / 10%)',
            backdropFilter: 'blur(0.5px)'
          }
        }
      },
      MuiCard: {
        variants: [
          {
            props: { variant: 'outlined' },
            style: {
              border: 0,
              borderRadius: 0
            }
          }
        ]
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            borderRadius: '24px',
            boxShadow: '0 30px 30px rgb(0 0 0 / 20%)'
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRadius: '10px 0 0 10px',
            boxShadow: '0 50px 50px rgb(0 0 0 / 20%)'
          }
        }
      }
    }
  });
  return theme;
}

export default theme;
