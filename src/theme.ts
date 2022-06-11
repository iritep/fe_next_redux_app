import { createTheme, PaletteMode, Theme } from '@mui/material';

export const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: { mode },
    typography: {
      fontFamily: `'Public Sans', sans-serif`,
    },
  });

export const isDarkTheme = (theme: Theme) => {
  if (theme.palette.mode === 'light') return false;
  return true;
};
