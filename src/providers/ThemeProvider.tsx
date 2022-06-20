import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useAppSelector } from '@/hooks';
import { appSelector } from '@/redux/slices';
import { createAppTheme } from '@/theme';

interface AppThemeProviderProps {
  children: ReactNode | ReactNode[];
}

function AppThemeProvider({ children }: AppThemeProviderProps) {
  const { theme } = useAppSelector(appSelector);

  return (
    <ThemeProvider theme={createAppTheme(theme.mode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
