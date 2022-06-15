/* eslint-disable @typescript-eslint/no-unused-vars */
import Draggable from 'react-draggable';
import { Box, Paper, useTheme } from '@mui/material';
import { isDarkTheme } from '@/theme';
import { WidgetTypes, WidgetItemType } from '@/types';
import {
  WidgetMiniItemStory,
  WidgetMiniItemConv,
  WidgetMiniItemDoc,
  WidgetMiniItemNote,
} from '@/modules/wigets';

type DropWidgetProps = {
  type: WidgetItemType;
  pageX: number;
  pageY: number;
};

type WidgetMainBoardProps = {
  onDragOver: (e: {
    preventDefault: () => void;
    dataTransfer: { dropEffect: WidgetItemType };
  }) => void;
  onDrop: (e: {
    dataTransfer: { getData: (arg0: string) => WidgetItemType };
    pageX: number;
    pageY: number;
  }) => void;
  draggedWidgets: DropWidgetProps[];
};

function WidgetMainBoard({
  onDragOver,
  onDrop,
  draggedWidgets,
}: WidgetMainBoardProps) {
  const theme = useTheme();
  return (
    <Box
      onDragOver={onDragOver}
      onDrop={onDrop}
      sx={{ flex: 1, mt: 4, position: 'relative', width: '100%' }}
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
