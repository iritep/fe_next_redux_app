import { PaletteMode } from '@mui/material';
import { ResponseStatus } from './common';
import { WidgetJSON } from './widget';
import { VehicleJSON } from './samsara';

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
    draggableWidgets: {
      left: WidgetJSON.WidgetElement[];
      right: WidgetJSON.WidgetElement[];
    };
    draggedWidgets: WidgetJSON.Widget[];
  };

  export type SamsaraState = {
    vehicles: CommonReduxData<VehicleJSON.Vehicle[]>;
  };
}
