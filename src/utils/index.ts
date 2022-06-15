import { WidgetItemType } from '@/types';
import { DragEvent } from 'react';

export const onDragStart = (
  e: DragEvent<HTMLSpanElement>,
  type: WidgetItemType | undefined
) => {
  e.dataTransfer.setData('type', `${type}`);
  e.dataTransfer.effectAllowed = 'copy';
};

export const onDragOver = (e: {
  preventDefault: () => void;
  dataTransfer: { dropEffect: string };
}) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
};
