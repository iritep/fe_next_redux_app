import { createTheme, PaletteMode } from '@mui/material';

const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: { mode },
    typography: {
      fontFamily: `Public Sans', sans-serif`,
    },
  });

export default createAppTheme;
