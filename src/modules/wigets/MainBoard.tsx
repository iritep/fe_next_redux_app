/* eslint-disable @typescript-eslint/no-unused-vars */
import Draggable from 'react-draggable';
import { Box, Paper, useTheme } from '@mui/material';
import { isDarkTheme } from '@/theme';
import { WidgetTypes } from '@/types';
import {
  WidgetMiniItemStory,
  WidgetMiniItemConv,
  WidgetMiniItemDoc,
  WidgetMiniItemNote,
} from '@/modules/wigets';

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
            defaultPosition={{ x: 0, y: 0 }}
            bounds="parent"
          >
            <Box sx={{ display: 'inline-block' }}>
              {item.type === 'story' && <WidgetMiniItemStory item={item} />}
              {item.type === 'conversation' && (
                <WidgetMiniItemConv item={item} />
              )}
              {item.type === 'note' && <WidgetMiniItemNote item={item} />}
              {item.type === 'document' && <WidgetMiniItemDoc item={item} />}
            </Box>
          </Draggable>
        ))}
      </Paper>
    </Box>
  );
}

export default WidgetMainBoard;
