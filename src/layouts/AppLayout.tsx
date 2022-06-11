import { MouseEvent, ReactElement } from 'react';
import { Box, styled, Container, Fab, Zoom, Toolbar } from '@mui/material';
import { AppSEO, AppNavbar } from '@/components/App';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AppLayoutWrapper = styled(Box)({
  width: '100vw',
  minHeight: '100vh',
  scrollBehavior: 'smooth',
});

interface Props {
  window?: () => Window;
  children: ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function AppLayout(props: Props) {
  return (
    <AppLayoutWrapper>
      <AppSEO title="" description="" />
      <AppNavbar />
      <Toolbar id="back-to-top-anchor" />
      <Container>{props.children}</Container>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </AppLayoutWrapper>
  );
}

export default AppLayout;
