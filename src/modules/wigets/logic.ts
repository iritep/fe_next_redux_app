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
  { type: WidgetType.STORY, component: WidgetMiniStories, draggable: true },
  {
    type: WidgetType.CONVERSATION,
    component: WidgetMiniConvs,
    draggable: true,
  },
  { type: WidgetType.DOCUMENT, component: WidgetMiniDocs, draggable: true },
];

export const miniRightWidgets: WidgetJSON.Widget[] = [
  { type: WidgetType.DISPATCH, component: WidgetMiniDispatch },
  { type: WidgetType.USER, component: WidgetMiniUsers, draggable: true },
  { type: WidgetType.NOTE, component: WidgetMiniNotes, draggable: true },
];
