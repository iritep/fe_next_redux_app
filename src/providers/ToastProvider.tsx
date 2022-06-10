/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useContext, createContext, ReactNode } from 'react';
import { AlertColor } from '@mui/material';
import { AppToast } from '@/components/App';

const AppToastContext = createContext({});
AppToastContext.displayName = `AppToastContext`;

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
