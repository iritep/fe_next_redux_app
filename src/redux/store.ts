import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { createWrapper } from 'next-redux-wrapper';
import { ReduxStateTypes } from '@/types';
import storage from './storage';
import { appReducer, samsaraReducer, widgetsReducer } from './slices';

const combinedReducer = combineReducers<{
  app: ReduxStateTypes.AppState;
  samsara: ReduxStateTypes.SamsaraState;
  widgets: ReduxStateTypes.WidgetsState;
}>({
  app: appReducer,
  samsara: samsaraReducer,
  widgets: widgetsReducer,
});

const createStore = () => {
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['app'],
  };

  const persistedReducer = persistReducer(persistConfig, combinedReducer);

  const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  return store;
};

type ConfiguredStore = ReturnType<typeof createStore>;
type StoreGetState = ConfiguredStore['getState'];

export type RootState = ReturnType<StoreGetState>;
export type AppDispatch = ConfiguredStore['dispatch'];
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

const wrapper = createWrapper<ConfiguredStore>(createStore, { debug: true });
export { wrapper, createStore };
