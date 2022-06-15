/* eslint-disable @typescript-eslint/no-unused-vars */
import { DragEventHandler } from 'react';
import Draggable from 'react-draggable';
import { Box, Paper, useTheme } from '@mui/material';
import { isDarkTheme } from '@/theme';
import { WidgetTypes, WidgetType } from '@/types';
import { WidgetStories, WidgetConvs, WidgetDocs, WidgetNotes } from './Widgets';

type WidgetMainBoardProps = {
  onDragOver: (e: {
    preventDefault: () => void;
    dataTransfer: { dropEffect: string };
  }) => void;
  onDrop: (e: {
    dataTransfer: { getData: (arg0: string) => string };
    pageX: number;
    pageY: number;
  }) => void;
  draggedWidgets: WidgetTypes.Widget[];
};

function WidgetMainBoard({
  onDragOver,
  onDrop,
  draggedWidgets,
}: WidgetMainBoardProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{ flex: 1, mt: 4, position: 'relative', width: '100%' }}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <Paper
        sx={{ width: 'auto', minHeight: '75vh', p: 2, borderRadius: 3 }}
        elevation={0}
        variant={isDarkTheme(theme) ? 'outlined' : 'elevation'}
      >
        {draggedWidgets.map((item: WidgetTypes.Widget, index: number) => (
          <Draggable
            key={index}
            axis="both"
            // position={{ x: item.x - 350, y: item.y }}
            defaultPosition={{ x: 0, y: 0 }}
            bounds="parent"
          >
            <Box sx={{ display: 'inline-block' }}>
              {item.type === 'story' && <WidgetStories />}
              {item.type === 'conversation' && <WidgetConvs />}
              {item.type === 'document' && <WidgetDocs />}
              {item.type === 'note' && <WidgetNotes />}
            </Box>
          </Draggable>
        ))}
      </Paper>
    </Box>
  );
}

export default WidgetMainBoard;
