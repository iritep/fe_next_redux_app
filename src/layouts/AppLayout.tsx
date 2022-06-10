import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import { AppSEO } from '@/components/App';

const AppLayoutWrapper = styled(Box)({
  width: '100vw',
  minHeight: '100vh',
});

interface AppLayoutProps {
  children: ReactNode | ReactNode[];
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppLayoutWrapper>
      <AppSEO title="" description="" />
      {children}
    </AppLayoutWrapper>
  );
}

export default AppLayout;
