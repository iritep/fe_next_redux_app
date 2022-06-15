export enum ResponseStatus {
  PENDING = `pending`,
  FAILED = `failed`,
  SUCCESS = `success`,
}

export type PaginateParam = {
  page: number;
  size?: number;
  limit?: number;
};

export enum WidgetType {
  STORY = 'story',
  CONVERSATION = 'conversation',
  DOCUMENT = 'document',
  NOTE = 'note',
  DISPATCH = 'dispatch',
  NULL = 'null',
}
