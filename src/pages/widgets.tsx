import { useEffect, useState } from 'react';
import {
  Newspaper as NewspaperIcon,
  Chat as ChatIcon,
  LibraryBooks as LibraryBooksIcon,
  BorderColor as BorderColorIcon,
} from '@mui/icons-material';
import { DashboardLayout } from '@/layouts';
import {
  WidgetMiniItemStory,
  WidgetMiniItemConv,
  WidgetMiniItemDoc,
  WidgetMiniItemNote,
  WidgetPageWrapper,
  WidgetSideWrapper,
  WidgetSectionWrapper,
  WidgetMainBoard,
  getNewDraggedItem,
  genStoryData,
} from '@/modules/wigets';
import { ResponseStatus, WidgetTypes } from '@/types';
import { onDragOver } from '@/utils';
import { useAppToast } from '@/providers';
import { useStoryData } from '@/hooks';
import {
  widgetStories,
  widgetConvs,
  widgetDocs,
  widgetNotes,
} from '@/constants/mock-data';

function WidgetPage() {
  const appToast = useAppToast();
  const [draggedWidgets, setDraggedWidgets] = useState<WidgetTypes.Widget[]>(
    []
  );

  const { loading, data, status } = useStoryData();
  useEffect(() => {
    if (!loading && data) {
      const tmp = genStoryData(data);
      console.log(tmp);
    }

    if (status === ResponseStatus.SUCCESS) {
      appToast({
        severity: 'success',
        message: 'Successfully, the stories has been loaded!',
      });
    }
  }, [loading, data, status]);

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
              <WidgetMiniItemStory draggable key={item.id} item={item} />
            ))}
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Conversations" endIcon={ChatIcon}>
            {widgetConvs.map((item) => (
              <WidgetMiniItemConv draggable key={item.id} item={item} />
            ))}
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Documents" endIcon={LibraryBooksIcon}>
            {widgetDocs.map((item) => (
              <WidgetMiniItemDoc draggable key={item.id} item={item} />
            ))}
          </WidgetSectionWrapper>
        </WidgetSideWrapper>

        <WidgetMainBoard
          onDragOver={onDragOver}
          onDrop={onDrop}
          draggedWidgets={draggedWidgets}
        />

        <WidgetSideWrapper>
          <WidgetSectionWrapper title="">No data</WidgetSectionWrapper>
          <WidgetSectionWrapper title="Dispatch">No data</WidgetSectionWrapper>
          <WidgetSectionWrapper title="Notes" endIcon={BorderColorIcon}>
            {widgetNotes.map((item) => (
              <WidgetMiniItemNote draggable key={item.id} item={item} />
            ))}
          </WidgetSectionWrapper>
        </WidgetSideWrapper>
      </WidgetPageWrapper>
    </DashboardLayout>
  );
}

export default WidgetPage;
