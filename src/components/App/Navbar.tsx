import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default function BackToTop() {
  return (
    <AppBar color="inherit">
      <Toolbar component={Container}>
        <Typography variant="h5" component="div">
          TMS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
