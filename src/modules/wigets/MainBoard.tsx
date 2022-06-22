import { DragEvent } from 'react';
import Draggable from 'react-draggable';
import { Box, Paper, useTheme } from '@mui/material';
import { isDarkTheme } from '@/theme';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { dropWidget, widgetSelector } from '@/redux/slices';
import { onDragOver } from '@/utils';
import { WidgetType } from '@/types';
import {
  WidgetWideStories,
  WidgetWideConvs,
  WidgetWideDocs,
  WidgetWideNotes,
  WidgetWideDispatch,
  WidgetWideUsers,
} from './WideWidgets';

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
                <WidgetWideStories />
              ) : null}
              {droppedWidget.type === WidgetType.CONVERSATION ? (
                <WidgetWideConvs />
              ) : null}
              {droppedWidget.type === WidgetType.DOCUMENT ? (
                <WidgetWideDocs />
              ) : null}
              {droppedWidget.type === WidgetType.DISPATCH ? (
                <WidgetWideDispatch />
              ) : null}
              {droppedWidget.type === WidgetType.NOTE ? (
                <WidgetWideNotes />
              ) : null}
              {droppedWidget.type === WidgetType.USER ? (
                <WidgetWideUsers />
              ) : null}
            </Box>
          </Draggable>
        ) : null}
      </Paper>
    </Box>
  );
}

export default WidgetMainBoard;
