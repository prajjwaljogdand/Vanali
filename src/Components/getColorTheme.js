
import { grey } from '@mui/material/colors';

 const getColorTheme = (mode) => ({
  palette: {
    mode,
    primary: {
      main : '#fff',
      ...(mode === 'dark' && {
        main: '#fff',
      }),
    },
    secondary: {
      main : '#01DEA7',
      warning : '#C82E0D',
      ...(mode === 'dark' && {
        main: '#F5D779',
      }),
    },

    ...(mode === 'dark' && {
      background: {
        default: '#090D1D',
        paper: '#090D1D',
      },
    }),
    ...(mode === 'light' && {
      background: {
        default: '#fff',
        paper: '#fff',
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
            warning : '#C82E0D',
          }
        : {
            primary: '#fff',
            secondary: grey[500],
            warning : '#C82E0D',
          }),
    },
     
  },
});

export default getColorTheme ;

