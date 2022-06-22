import { WidgetJSON, WidgetType } from '@/types';
import {
  WidgetMiniStories,
  WidgetMiniConvs,
  WidgetMiniDocs,
  WidgetMiniNotes,
  WidgetMiniUsers,
  WidgetMiniDispatch,
} from '@/modules/wigets';

export const miniLeftWidgets: WidgetJSON.Widget[] = [
  {
    draggable: true,
    type: WidgetType.STORY,
    mini: WidgetMiniStories,
  },
  {
    draggable: true,
    type: WidgetType.CONVERSATION,
    mini: WidgetMiniConvs,
  },
  {
    draggable: true,
    type: WidgetType.DOCUMENT,
    mini: WidgetMiniDocs,
  },
];

export const miniRightWidgets: WidgetJSON.Widget[] = [
  {
    type: WidgetType.DISPATCH,
    mini: WidgetMiniDispatch,
  },
  {
    draggable: true,
    type: WidgetType.USER,
    mini: WidgetMiniUsers,
  },
  {
    draggable: true,
    type: WidgetType.NOTE,
    mini: WidgetMiniNotes,
  },
];
