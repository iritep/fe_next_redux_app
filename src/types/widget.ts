import { WidgetType } from './common';

export declare namespace WidgetTypes {
  export type Widget = {
    id: number;
    x: number;
    y: number;
    type: WidgetType | string;
  };

  export type Story = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  };
}
