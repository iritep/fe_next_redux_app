import { WidgetType } from './common';

export declare namespace WidgetJSON {
  export type Widget = {
    id: number;
    x: number;
    y: number;
    type: WidgetType | string;
  };

  export type WidgetProps = {
    id?: number;
    bordered?: boolean;
    draggable?: boolean;
    dropped?: boolean;
  };

  export type WidgetElement = {
    type: WidgetType;
    draggable?: boolean;
    component: (props: WidgetJSON.WidgetProps) => JSX.Element;
  };
}
