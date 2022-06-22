/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragEvent, useEffect, useRef, useState } from 'react';
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
  const draggableRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { draggedWidgets } = useAppSelector(widgetsSelector);
  const [offsetDiv, setOffsetDiv] = useState({ x: 0, y: 0 });

  const generateId = () => Date.now();

  const onDrop = (e: DragEvent<HTMLElement>) => {
    const type = e.dataTransfer.getData('type');
    dispatch(
      addWidgetToDraggedItems({
        id: generateId(),
        x: 0,
        y: 0,
        type,
      })
    );
  };

  useEffect(() => {
    if (draggableRef?.current) {
      setOffsetDiv({
        x: draggableRef?.current.clientWidth / 2 - 160,
        y: draggableRef?.current.clientHeight / 2 - 200,
      });
    }
  }, [draggableRef.current]);

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
      ref={draggableRef}
    >
      <Paper
        sx={{ width: 'auto', minHeight: '75vh', p: 2, borderRadius: 3 }}
        elevation={2}
        variant={isDarkTheme(theme) ? 'outlined' : 'elevation'}
        ref={draggableRef}
      >
        {draggedWidgets.map((item: WidgetTypes.Widget, index: number) => {
          return (
            <Draggable
              key={index}
              axis="both"
              defaultPosition={{ x: offsetDiv.x, y: offsetDiv.y }}
              bounds="parent"
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
