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
  WidgetItemStory,
  WidgetItemConv,
  WidgetItemDoc,
  WidgetPageWrapper,
  WidgetSideWrapper,
  WidgetSectionWrapper,
  WidgetMainBoard,
} from '@/modules/wigets';
import { WidgetTypes } from '@/types';
import { onDragOver, onDragStart } from '@/utils';
import { widgetStories, widgetConvs, widgetDocs } from '@/constants/mock-data';

function WidgetPage() {
  const [draggedWidgets, setDraggedWidgets] = useState<WidgetTypes.Widget[]>(
    []
  );

  const getNewDraggedItem = (id: string, type: string): WidgetTypes.Widget => {
    let newItem = {};
    if (type === 'story') {
      widgetStories.map((item) => {
        if (item.id === id) newItem = { ...item };
      });
    } else if (type === 'conversation') {
      widgetConvs.map((item) => {
        if (item.id === id) newItem = { ...item };
      });
    }
    return newItem;
  };

  const onDrop = (e: {
    dataTransfer: { getData: (arg0: string) => string };
    pageX: number;
    pageY: number;
  }) => {
    const id = e.dataTransfer.getData('id');
    const type = e.dataTransfer.getData('type');
    let newDraggedItem: WidgetTypes.Widget = getNewDraggedItem(id, type);
    setDraggedWidgets((prev: WidgetTypes.Widget[]): WidgetTypes.Widget[] => [
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
            {widgetStories.map((item) => (
              <WidgetItemStory key={item.id} item={item} />
            ))}
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Conversations" endIcon={ChatIcon}>
            {widgetConvs.map((item) => (
              <WidgetItemConv key={item.id} item={item} />
            ))}
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Documents" endIcon={LibraryBooksIcon}>
            {widgetDocs.map((item) => (
              <WidgetItemDoc key={item.id} item={item} />
            ))}
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
