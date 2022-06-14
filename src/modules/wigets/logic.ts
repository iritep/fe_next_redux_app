import { WidgetTypes } from '@/types';

import {
  widgetStories,
  widgetConvs,
  widgetDocs,
  widgetNotes,
} from '@/constants/mock-data';

export const getNewDraggedItem = (
  id: string,
  type: WidgetTypes.WidgetType | string
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
