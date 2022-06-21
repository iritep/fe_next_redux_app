import { DragEvent } from 'react';
import Draggable from 'react-draggable';
import { Box, Paper, useTheme } from '@mui/material';
import { isDarkTheme } from '@/theme';
import { WidgetTypes } from '@/types';
import { WidgetStories, WidgetConvs, WidgetDocs, WidgetNotes } from './Widgets';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addWidgetToDraggedItems } from '@/redux/slices';
import { onDragOver } from '@/utils';
import { widgetsSelector } from '@/redux/slices';

function WidgetMainBoard() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { draggedWidgets } = useAppSelector(widgetsSelector);

  const generateId = () => Date.now();

  const onDrop = (e: DragEvent<HTMLElement>) => {
    const type = e.dataTransfer.getData('type');
    dispatch(
      addWidgetToDraggedItems({
        id: generateId(),
        x: e.pageX,
        y: e.pageY,
        type,
      })
    );
  };

  const widgetProps = {
    bordered: true,
    dropped: true,
  };
  return (
    <Box
      className="container"
      sx={{ flex: 1, mt: 4, position: 'relative', width: '100%' }}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <Paper
        sx={{ width: 'auto', minHeight: '75vh', p: 2, borderRadius: 3 }}
        elevation={0}
        variant={isDarkTheme(theme) ? 'outlined' : 'elevation'}
      >
        {draggedWidgets.map((item: WidgetTypes.Widget, index: number) => {
          return (
            <Draggable
              key={index}
              axis="both"
              defaultPosition={{ x: item.x, y: item.y }}
              bounds="parent"
              // onDrag={(e: any, ui: any) => {
              //   dispatch(setPositionOfDraggedItem(item.id, ui.x, ui.y));
              // }}
            >
              <Box sx={{ display: 'inline-block' }}>
                {item.type === 'story' && (
                  <WidgetStories id={item.id} {...widgetProps} />
                )}
                {item.type === 'conversation' && (
                  <WidgetConvs id={item.id} {...widgetProps} />
                )}
                {item.type === 'document' && (
                  <WidgetDocs id={item.id} {...widgetProps} />
                )}
                {item.type === 'note' && (
                  <WidgetNotes id={item.id} {...widgetProps} />
                )}
              </Box>
            </Draggable>
          );
        })}
      </Paper>
    </Box>
  );
}

export default WidgetMainBoard;
