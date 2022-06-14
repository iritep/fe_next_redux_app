export declare namespace WidgetTypes {
  export type Widget = {
    id?: string;
    text?: string;
    x?: number;
    y?: number;
    type?: 'story' | 'conversation' | 'document' | 'note';
  };
}
