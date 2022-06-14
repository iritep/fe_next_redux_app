/* eslint-disable @typescript-eslint/no-unused-vars */
import { DragEvent, useState } from 'react';
import { Box } from '@mui/material';
import {
  Newspaper as NewspaperIcon,
  Chat as ChatIcon,
  LibraryBooks as LibraryBooksIcon,
  BorderColor as BorderColorIcon,
} from '@mui/icons-material';
import { DashboardLayout } from '@/layouts';
import {
  WidgetPageWrapper,
  WidgetSideWrapper,
  WidgetSectionWrapper,
  WidgetMainBoard,
} from '@/modules/wigets';
import { WidgetState } from '@/types';
import { onDragOver, onDragStart } from '@/utils';

function WidgetPage() {
  const [draggedWidgets, setDraggedWidgets] = useState<WidgetState.Widget[]>(
    []
  );
  const [storyWidgets] = useState<WidgetState.Widget[]>([
    { id: 's1', text: 'Story #1', x: 0, y: 0, type: 'story' },
    { id: 's2', text: 'Story #2', x: 0, y: 0, type: 'story' },
    { id: 's3', text: 'Story #3', x: 0, y: 0, type: 'story' },
    { id: 's4', text: 'Story #4', x: 0, y: 0, type: 'story' },
  ]);
  const [convWidgets] = useState<WidgetState.Widget[]>([
    { id: 'c1', text: 'Conversation #1', x: 0, y: 0, type: 'conversation' },
    { id: 'c2', text: 'Conversation #2', x: 0, y: 0, type: 'conversation' },
    { id: 'c3', text: 'Conversation #3', x: 0, y: 0, type: 'conversation' },
    { id: 'c4', text: 'Conversation #4', x: 0, y: 0, type: 'conversation' },
  ]);

  const getNewDraggedItem = (
    id: unknown,
    type: unknown
  ): WidgetState.Widget => {
    let newItem = {};
    if (type === 'story') {
      storyWidgets.map((item) => {
        if (item.id === id) newItem = { ...item };
      });
    } else if (type === 'conversation') {
      convWidgets.map((item) => {
        if (item.id === id) newItem = { ...item };
      });
    }
    return newItem;
  };

  const onDrop = (e: {
    dataTransfer: { getData: (arg0: string) => unknown };
    pageX: number;
    pageY: number;
  }) => {
    const id = e.dataTransfer.getData('id');
    const type = e.dataTransfer.getData('type');
    let newDraggedItem: WidgetState.Widget = getNewDraggedItem(id, type);
    setDraggedWidgets((prev: WidgetState.Widget[]): WidgetState.Widget[] => [
      ...prev,
      newDraggedItem,
    ]);
  };

  return (
    <DashboardLayout title="Widgets">
      <WidgetPageWrapper>
        <WidgetSideWrapper>
          <WidgetSectionWrapper
            title="Today's Top Stories"
            endIcon={NewspaperIcon}
          >
            {storyWidgets.map((item) => (
              <Box key={item.id}>
                <Box
                  component="span"
                  draggable
                  onDragStart={(e: DragEvent<HTMLSpanElement>) =>
                    onDragStart(e, item)
                  }
                >
                  {item.text}
                </Box>
              </Box>
            ))}
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Conversations" endIcon={ChatIcon}>
            {convWidgets.map((item) => (
              <Box key={item.id}>
                <Box
                  component="span"
                  draggable
                  onDragStart={(e: DragEvent<HTMLSpanElement>) =>
                    onDragStart(e, item)
                  }
                >
                  {item.text}
                </Box>
              </Box>
            ))}
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Documents" endIcon={LibraryBooksIcon}>
            Section 3
          </WidgetSectionWrapper>
        </WidgetSideWrapper>

        <WidgetMainBoard
          onDragOver={onDragOver}
          onDrop={onDrop}
          draggedWidgets={draggedWidgets}
        />

        <WidgetSideWrapper>
          <WidgetSectionWrapper title="">Section 4</WidgetSectionWrapper>
          <WidgetSectionWrapper title="Dispatch">
            Section 5
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Notes" endIcon={BorderColorIcon}>
            Section 6
          </WidgetSectionWrapper>
        </WidgetSideWrapper>
      </WidgetPageWrapper>
    </DashboardLayout>
  );
}

export default WidgetPage;
