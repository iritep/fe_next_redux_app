import { ReactNode } from 'react';
import { Container, Fab, Toolbar } from '@mui/material';
import { AppSEO, AppNavbar, AppScrollTop } from '@/components/App';
import { UILayoutMain, UILayoutWrapper } from '@/components/UI';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';

interface Props {
  title?: string;
  description?: string;
  children: ReactNode | ReactNode[];
}

function AppLayout(props: Props) {
  return (
    <UILayoutWrapper>
      <AppSEO title={props.title || ''} description={props.description || ''} />
      <AppNavbar />
      <Toolbar id="back-to-top-anchor" />
      <UILayoutMain>
        <Container sx={{ py: 3 }}>{props.children}</Container>
      </UILayoutMain>
      <AppScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </AppScrollTop>
    </UILayoutWrapper>
  );
}

export default AppLayout;
