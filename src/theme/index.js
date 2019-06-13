import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F39E9C',
    },
    secondary: {
      main: '#94D0C9',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFF9F1',
    },
  },
});

export default theme;