import type { AppProps } from 'next/app';
import { useStore } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '@/redux/store';
import { AppThemeProvider } from '@/providers';
import { AppToastProvider } from '@/providers';

function TMSApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <AppThemeProvider>
      <AppToastProvider>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <Component {...pageProps} />
        </PersistGate>
      </AppToastProvider>
    </AppThemeProvider>
  );
}

export default wrapper.withRedux(TMSApp);
