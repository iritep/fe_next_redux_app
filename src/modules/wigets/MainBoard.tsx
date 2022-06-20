import Draggable from 'react-draggable';
import { Box, Paper, useTheme } from '@mui/material';
import { isDarkTheme } from '@/theme';
import { WidgetTypes } from '@/types';
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
  handleDelete: (type: string) => void;
};

function WidgetMainBoard({
  onDragOver,
  onDrop,
  draggedWidgets,
  handleDelete,
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
              {item.type === 'story' && (
                <WidgetStories bordered dropped handleDelete={handleDelete} />
              )}
              {item.type === 'conversation' && (
                <WidgetConvs bordered dropped handleDelete={handleDelete} />
              )}
              {item.type === 'document' && (
                <WidgetDocs bordered dropped handleDelete={handleDelete} />
              )}
              {item.type === 'note' && (
                <WidgetNotes bordered dropped handleDelete={handleDelete} />
              )}
            </Box>
          </Draggable>
        ))}
      </Paper>
    </Box>
  );
}

export default WidgetMainBoard;
