import { WidgetType } from './common';

export declare namespace WidgetJSON {
  export type WidgetProps = {
    bordered?: boolean;
    draggable?: boolean;
    dropped?: boolean;
  };

  export type Widget = {
    type: WidgetType;
    draggable?: boolean;
    component: (props: WidgetJSON.WidgetProps) => JSX.Element;
  };
}
