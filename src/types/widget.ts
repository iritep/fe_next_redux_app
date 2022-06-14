export declare namespace WidgetTypes {
  export enum WidgetType {
    STORY = 'story',
    CONVERSATION = 'conversation',
    DOCUMENT = 'document',
    NOTE = 'note',
  }

  export type Widget = {
    id?: string;
    text?: string;
    x?: number;
    y?: number;
    type?: WidgetType;
  };
}
