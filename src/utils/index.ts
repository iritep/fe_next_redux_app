import { DragEvent } from 'react';
import { WidgetType } from '@/types';

export const onDragStart = (
  e: DragEvent<HTMLSpanElement>,
  type: WidgetType | string
) => {
  e.dataTransfer.setData('type', type);
  e.dataTransfer.effectAllowed = 'copy';
};

export const onDragOver = (e: {
  preventDefault: () => void;
  dataTransfer: { dropEffect: string };
}) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
};
