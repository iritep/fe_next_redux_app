/* eslint-disable @typescript-eslint/no-unused-vars */
import { DragEvent } from 'react';
import Draggable from 'react-draggable';
import { Box, Paper, useTheme } from '@mui/material';
import { isDarkTheme } from '@/theme';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { dropWidget, widgetSelector } from '@/redux/slices';
import { onDragOver } from '@/utils';
import { WidgetType } from '@/types';
import MainWidget from './MainWidgets';

function WidgetMainBoard() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { droppedWidget } = useAppSelector(widgetSelector);

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    const type = e.dataTransfer.getData('type');
    dispatch(dropWidget(type));
  };

  return (
    <Box
      className="container"
      sx={{ flex: 1, mt: 4, position: 'relative', width: '100%' }}
      onDragOver={onDragOver}
      onDrop={handleDrop}
    >
      <Paper
        sx={{ width: 'auto', minHeight: '75vh', p: 2, borderRadius: 3 }}
        elevation={2}
        variant={isDarkTheme(theme) ? 'outlined' : 'elevation'}
      >
        {droppedWidget ? (
          <Draggable
            axis="both"
            defaultPosition={{ x: 0, y: 0 }}
            bounds="parent"
          >
            <Box className="dropped-widget">
              {droppedWidget.type === WidgetType.STORY ? (
                <MainWidget title="Today's Top Stories" color="success" />
              ) : null}
              {droppedWidget.type === WidgetType.CONVERSATION ? (
                <MainWidget title="Conversations" color="info" />
              ) : null}
              {droppedWidget.type === WidgetType.DOCUMENT ? (
                <MainWidget title="Documents" color="success" />
              ) : null}
              {droppedWidget.type === WidgetType.DISPATCH ? (
                <MainWidget title="Dispatch" color="secondary" />
              ) : null}
              {droppedWidget.type === WidgetType.NOTE ? (
                <MainWidget title="Stored Notes" color="warning" />
              ) : null}
              {droppedWidget.type === WidgetType.USER ? (
                <MainWidget title="Users" color="error" />
              ) : null}
            </Box>
          </Draggable>
        ) : null}
      </Paper>
    </Box>
  );
}

export default WidgetMainBoard;
