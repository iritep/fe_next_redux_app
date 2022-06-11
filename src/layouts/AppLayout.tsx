import { ReactNode } from 'react';
import { Container, Fab, Toolbar } from '@mui/material';
import { AppSEO, AppNavbar, AppScrollTop } from '@/components/App';
import { UILayoutWrapper } from '@/components/UI';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';

interface Props {
  children: ReactNode | ReactNode[];
}

function AppLayout(props: Props) {
  return (
    <UILayoutWrapper>
      <AppSEO title="" description="" />
      <AppNavbar />
      <Toolbar id="back-to-top-anchor" />
      <Container sx={{ py: 3 }}>{props.children}</Container>
      <AppScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </AppScrollTop>
    </UILayoutWrapper>
  );
}

export default AppLayout;
