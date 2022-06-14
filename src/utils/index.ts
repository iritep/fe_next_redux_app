import { WidgetTypes } from '@/types';
import { DragEvent } from 'react';

export const onDragStart = (
  e: DragEvent<HTMLSpanElement>,
  item: WidgetTypes.Widget
) => {
  e.dataTransfer.setData('id', `${item.id}`);
  e.dataTransfer.setData('type', `${item.type}`);
  e.dataTransfer.effectAllowed = 'copy';
};

export const onDragOver = (e: {
  preventDefault: () => void;
  dataTransfer: { dropEffect: string };
}) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
};
