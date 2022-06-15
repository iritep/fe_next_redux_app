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
} from '@/modules/wigets';
import { ResponseStatus, WidgetItemType } from '@/types';
import { onDragOver } from '@/utils';
import { useAppToast } from '@/providers';
import { useStoryData } from '@/hooks';
import {
  widgetStories,
  widgetConvs,
  widgetDocs,
  widgetNotes,
} from '@/constants/mock-data';

type DropWidgetProps = {
  type: WidgetItemType;
  pageX: number;
  pageY: number;
};

function WidgetPage() {
  const appToast = useAppToast();
  const [draggedWidgets, setDraggedWidgets] = useState<DropWidgetProps[]>([]);

  const { loading, data, status } = useStoryData();
  useEffect(() => {
    if (!loading && data) {
      console.log(JSON.stringify(data, null, 2));
    }

    if (status === ResponseStatus.SUCCESS) {
      appToast({
        severity: 'success',
        message: 'Successfully, the stories has been loaded!',
      });
    }
  }, [loading, data, status]);

  const onDrop = (e: {
    dataTransfer: { getData: (arg0: string) => WidgetItemType };
    pageX: number;
    pageY: number;
  }) => {
    const type = e.dataTransfer.getData('type');
    setDraggedWidgets((prev: DropWidgetProps[]): DropWidgetProps[] => [
      ...prev,
      { type, pageX: 0, pageY: 0 },
    ]);
  };

  return (
    <DashboardLayout title="Widgets">
      <WidgetPageWrapper>
        <WidgetSideWrapper>
          <WidgetSectionWrapper
            draggable
            type={WidgetItemType.STORY}
            title="Today's Top Stories"
            endIcon={NewspaperIcon}
          >
            {widgetStories.map((item) => (
              <WidgetMiniItemStory key={item.id} item={item} />
            ))}
          </WidgetSectionWrapper>
          <WidgetSectionWrapper
            draggable
            type={WidgetItemType.CONVERSATION}
            title="Conversations"
            endIcon={ChatIcon}
          >
            {widgetConvs.map((item) => (
              <WidgetMiniItemConv key={item.id} />
            ))}
          </WidgetSectionWrapper>
          <WidgetSectionWrapper
            draggable
            type={WidgetItemType.DOCUMENT}
            title="Documents"
            endIcon={LibraryBooksIcon}
          >
            {widgetDocs.map((item) => (
              <WidgetMiniItemDoc key={item.id} />
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
          <WidgetSectionWrapper
            draggable
            type={WidgetItemType.NOTE}
            title="Notes"
            endIcon={BorderColorIcon}
          >
            {widgetNotes.map((item) => (
              <WidgetMiniItemNote key={item.id} item={item} />
            ))}
          </WidgetSectionWrapper>
        </WidgetSideWrapper>
      </WidgetPageWrapper>
    </DashboardLayout>
  );
}

export default WidgetPage;
