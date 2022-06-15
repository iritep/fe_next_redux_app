import { PaletteMode } from '@mui/material';
import { WidgetTypes } from './widget';
import { ResponseStatus } from './common';
import { VehicleTypes } from './samsara';

export declare namespace ReduxStateTypes {
  export type CommonReduxData<T> = {
    loading: boolean;
    data: T | null;
    status: ResponseStatus | null;
  };

  export type AppState = {
    theme: {
      mode: PaletteMode;
      loading: boolean;
    };
  };

  export type WidgetState = {
    stories: CommonReduxData<WidgetTypes.Story[]>;
  };

  export type SamsaraState = {
    vehicles: CommonReduxData<VehicleTypes.Vehicle[]>;
  };
}
