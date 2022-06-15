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
import { appReducer, widgetReducer, samsaraReducer } from './slices';

const combinedReducer = combineReducers<{
  app: ReduxStateTypes.AppState;
  widget: ReduxStateTypes.WidgetState;
  samsara: ReduxStateTypes.SamsaraState;
}>({
  app: appReducer,
  widget: widgetReducer,
  samsara: samsaraReducer,
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
