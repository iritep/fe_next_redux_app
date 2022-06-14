/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, forwardRef, ReactElement, Ref } from 'react';
import {
  Box,
  Fab,
  Zoom,
  useTheme,
  Dialog,
  Slide,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Forum as ForumIcon, Close as CloseIcon } from '@mui/icons-material';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AppHelper() {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => setOpen(!open);

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 30 }}>
      <Zoom
        in
        timeout={{
          enter: theme.transitions.duration.enteringScreen,
          exit: theme.transitions.duration.leavingScreen,
        }}
        style={{
          transitionDelay: `${open ? 500 : 0}ms`,
        }}
        unmountOnExit
      >
        <Fab
          size="large"
          aria-label="app help dialog"
          color="info"
          onClick={handleClick}
        >
          {open ? (
            <CloseIcon fontSize="large" />
          ) : (
            <ForumIcon fontSize="large" />
          )}
        </Fab>
      </Zoom>
      <Dialog
        open={open}
        PaperProps={{
          sx: {
            m: 0,
            position: 'fixed',
            bottom: 110,
            right: 50,
            width: 300,
            height: 480,
            zIndex: 0,
          },
        }}
        TransitionComponent={Transition}
        keepMounted
        onClose={(_, reason) => {
          if (reason !== 'backdropClick') {
            setOpen(!open);
          }
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)}>Disagree</Button>
          <Button onClick={() => setOpen(!open)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AppHelper;
