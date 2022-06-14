import { WidgetTypes, WidgetItemType } from '@/types';

import {
  widgetStories,
  widgetConvs,
  widgetDocs,
  widgetNotes,
} from '@/constants/mock-data';

export const getNewDraggedItem = (
  id: string,
  type: WidgetItemType | string
): WidgetTypes.Widget => {
  let newItem = {};
  if (type === 'story') {
    widgetStories.map((item) => {
      if (item.id === id) newItem = { ...item };
    });
  } else if (type === 'conversation') {
    widgetConvs.map((item) => {
      if (item.id === id) newItem = { ...item };
    });
  } else if (type === 'note') {
    widgetNotes.map((item) => {
      if (item.id === id) newItem = { ...item };
    });
  } else if (type === 'document') {
    widgetDocs.map((item) => {
      if (item.id === id) newItem = { ...item };
    });
  }
  return newItem;
};

export const genStoryData = (data: WidgetTypes.Story[]) => {
  if (!data) return [];
  return data.map((el) => ({
    ...el,
    text: el.author,
    avatar: el.download_url,
  }));
};
