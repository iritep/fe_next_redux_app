import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@/redux/store';
import { PaletteMode } from '@mui/material';
import { ReduxState } from '@/types';

const initialState: ReduxState.AppState = {
  theme: {
    mode: `light`,
    loading: false,
  },
};

const appSlice = createSlice({
  name: `app`,
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
      const { payload } = action;
      state.theme.mode = payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.theme.loading = payload;
    },
  },
});

const { setThemeMode, setLoading } = appSlice.actions;

export const toggleThemeMode = (): AppThunk => (dispatch, getState) => {
  const { mode } = getState().app.theme;
  dispatch(setThemeMode(mode === `light` ? `dark` : `light`));
};

export const setUILoading =
  (loading: boolean): AppThunk =>
  (dispatch) => {
    dispatch(setLoading(loading));
  };

export const appSelector = (state: RootState) => state.app;
export default appSlice.reducer;
