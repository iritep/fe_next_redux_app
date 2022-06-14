import { WidgetItemType } from './common';

export declare namespace WidgetTypes {
  export type Widget = {
    id?: string;
    text?: string;
    avatar?: string;
    x?: number;
    y?: number;
    type?: WidgetItemType;
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
