import { Box, Paper, useTheme } from '@mui/material';
import { isDarkTheme } from '@/theme';
import Draggable from 'react-draggable';
import { WidgetState } from '@/types';

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
  draggedWidgets: WidgetState.Widget[];
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
        <>
          {draggedWidgets.map((item: WidgetState.Widget) => (
            <Draggable
              key={item.id}
              axis="both"
              defaultPosition={{ x: 0, y: 0 }}
              bounds="parent"
            >
              <Box sx={{ display: 'inline-block' }}>
                <Box component={'span'} key={item.id}>
                  {item.text}
                </Box>
              </Box>
            </Draggable>
          ))}
        </>
      </Paper>
    </Box>
  );
}

export default WidgetMainBoard;
