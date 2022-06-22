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
  },
  {
    draggable: true,
    type: WidgetType.CONVERSATION,
  },
  {
    draggable: true,
    type: WidgetType.DOCUMENT,
  },
];

export const miniRightWidgets: WidgetJSON.Widget[] = [
  {
    draggable: false,
    type: WidgetType.DISPATCH,
  },
  {
    draggable: true,
    type: WidgetType.USER,
  },
  {
    draggable: true,
    type: WidgetType.NOTE,
  },
];

export const renderMiniWidget = (type: WidgetType, draggable?: boolean) => {
  if (type === WidgetType.STORY)
    return <WidgetMiniStories draggable={draggable} />;
  if (type === WidgetType.CONVERSATION)
    return <WidgetMiniConvs draggable={draggable} />;
  if (type === WidgetType.DOCUMENT)
    return <WidgetMiniDocs draggable={draggable} />;
  if (type === WidgetType.USER)
    return <WidgetMiniUsers draggable={draggable} />;
  if (type === WidgetType.DISPATCH)
    return <WidgetMiniDispatch draggable={draggable} />;
  if (type === WidgetType.NOTE)
    return <WidgetMiniNotes draggable={draggable} />;
  return null;
};
