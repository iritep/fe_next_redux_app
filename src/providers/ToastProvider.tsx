import { useState, useContext, createContext, ReactNode } from 'react';
import { AlertColor } from '@mui/material';
import { AppToast } from '@/components/App';

type ToastContextType = {
  severity?: AlertColor | null;
  message?: string | null;
};

const AppToastContext = createContext<any>(null);
AppToastContext.displayName = `AppToastContext`;

interface AppToastProviderProps {
  children: ReactNode | ReactNode[];
}

function AppToastProvider({ children, ...rest }: AppToastProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [severity, setSeverity] = useState<AlertColor>('success');

  const value = ({ severity, message }: ToastContextType) => {
    setOpen(true);
    setMessage(message || '');
    setSeverity(severity || 'success');
  };

  return (
    <AppToastContext.Provider value={value} {...rest}>
      <AppToast
        open={open}
        message={message}
        severity={severity}
        onClose={() => setOpen(false)}
        onClickAway={() => console.log('away clicked')}
      />
      {children}
    </AppToastContext.Provider>
  );
}

const useAppToast = () => useContext(AppToastContext);

export { AppToastProvider, useAppToast };
