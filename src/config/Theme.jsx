import { createTheme } from '@mui/material/styles';
const Theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
            darker: '#053e85',
      },
      white: {
        main: '#fff',
        contrastText: '#2b2b2b',
      },
    },
  });

export default Theme
