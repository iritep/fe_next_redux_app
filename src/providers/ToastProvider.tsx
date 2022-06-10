/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useContext, createContext, ReactNode } from 'react';
import { AlertColor } from '@mui/material';
import { AppToast } from '@/components/App';

const AppErrorContext = createContext(null);
AppErrorContext.displayName = `AppErrorContext`;

interface AppToastProviderProps {
  children: ReactNode | ReactNode[];
}

function AppToastProvider({ children, ...rest }: AppToastProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [severity, setSeverity] = useState<AlertColor>('success');

  const value = (option: AlertColor, text: string) => {
    setOpen(true);
    setMessage(text);
    setSeverity(option);
  };

  return (
    <AppErrorContext.Provider value={value} {...rest}>
      <AppToast
        open={open}
        message={message}
        severity={severity}
        onClose={() => setOpen(false)}
        onClickAway={() => console.log('away clicked')}
      />
      {children}
    </AppErrorContext.Provider>
  );
}

const useAppToast = () => useContext(AppErrorContext);

export { AppToastProvider, useAppToast };
