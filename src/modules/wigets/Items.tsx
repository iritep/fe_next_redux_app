/* eslint-disable @typescript-eslint/no-unused-vars */
import { DragEvent, useState } from 'react';
import { Box } from '@mui/material';
import { onDragOver, onDragStart } from '@/utils';
import { WidgetTypes } from '@/types';

type Props = {
  text?: string;
  item: WidgetTypes.Widget;
};

export const ItemStory = ({ text, item }: Props) => {
  return (
    <Box
      component="span"
      draggable
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, item)}
    >
      {text}
    </Box>
  );
};

export const ItemConv = ({ text, item }: Props) => {
  return (
    <Box
      component="span"
      draggable
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, item)}
    >
      {item.text}
    </Box>
  );
};
