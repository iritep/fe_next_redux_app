/* eslint-disable prettier/prettier */
import { PaletteMode } from '@mui/material';

export declare namespace ReduxState {
  export type AppState = {
    theme: {
      mode: PaletteMode;
      loading: boolean;
    };
  };
}
