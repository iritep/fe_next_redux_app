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

export enum WidgetItemType {
  STORY = 'story',
  CONVERSATION = 'conversation',
  DOCUMENT = 'document',
  NOTE = 'note',
}
