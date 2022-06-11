import { ReactNode } from 'react';
import { Box, styled, Container, Fab, Toolbar } from '@mui/material';
import { AppSEO, AppNavbar, AppScrollTop } from '@/components/App';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';

const AppLayoutWrapper = styled(Box)({
  width: '100%',
  minHeight: '100vh',
  scrollBehavior: 'smooth',
});

interface Props {
  children: ReactNode | ReactNode[];
}

function AppLayout(props: Props) {
  return (
    <AppLayoutWrapper>
      <AppSEO title="" description="" />
      <AppNavbar />
      <Toolbar id="back-to-top-anchor" />
      <Container sx={{ py: 3 }}>{props.children}</Container>
      <AppScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </AppScrollTop>
    </AppLayoutWrapper>
  );
}

export default AppLayout;
