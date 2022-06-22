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
      left: WidgetJSON.Widget[];
      right: WidgetJSON.Widget[];
    };
    droppedWidget: WidgetJSON.Widget | undefined;
  };

  export type SamsaraState = {
    vehicles: CommonReduxData<VehicleJSON.Vehicle[]>;
  };
}
