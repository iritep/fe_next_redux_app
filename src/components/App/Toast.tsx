/* eslint-disable no-unused-vars */
import { SyntheticEvent } from 'react';
import {
  ClickAwayListener,
  Snackbar,
  Alert,
  AlertColor,
  SnackbarCloseReason,
} from '@mui/material';

interface AppToastProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose:
    | ((
        event: Event | SyntheticEvent<Element, Event>,
        reason?: SnackbarCloseReason
      ) => void)
    | undefined;
  onClickAway: (event?: MouseEvent | TouchEvent) => void;
}

function AppToast({
  open,
  message,
  severity,
  onClose,
  onClickAway,
}: AppToastProps) {
  return (
    <ClickAwayListener
      onClickAway={() => {
        if (onClickAway) onClickAway();
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={onClose}
          severity={severity}
        >
          {message}
        </Alert>
      </Snackbar>
    </ClickAwayListener>
  );
}

export default AppToast;
