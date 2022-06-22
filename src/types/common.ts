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
  NOTE = 'NOTE',
  USER = 'USER',
  STORY = 'STORY',
  DISPATCH = 'DISPATCH',
  DOCUMENT = 'DOCUMENT',
  CONVERSATION = 'CONVERSATION',
}
