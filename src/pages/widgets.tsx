import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/layouts';
import {
  WidgetStories,
  WidgetConvs,
  WidgetDocs,
  WidgetNotes,
  WidgetPageWrapper,
  WidgetSideWrapper,
  WidgetSectionWrapper,
  WidgetMainBoard,
} from '@/modules/wigets';
import { ResponseStatus, WidgetType, WidgetTypes } from '@/types';
import { onDragOver } from '@/utils';
import { useAppToast } from '@/providers';
import { useStoryData } from '@/hooks';

function WidgetPage() {
  const appToast = useAppToast();
  const [draggedWidgets, setDraggedWidgets] = useState<WidgetTypes.Widget[]>(
    []
  );

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
    dataTransfer: { getData: (arg0: string) => string };
    pageX: number;
    pageY: number;
  }) => {
    const type = e.dataTransfer.getData('type');
    setDraggedWidgets((prev: WidgetTypes.Widget[]): WidgetTypes.Widget[] => [
      ...prev,
      { x: e.pageX, y: e.pageY, type },
    ]);
  };

  return (
    <DashboardLayout title="Widgets">
      <WidgetPageWrapper>
        <WidgetSideWrapper>
          <WidgetStories draggable />
          <WidgetConvs draggable />
          <WidgetDocs draggable />
        </WidgetSideWrapper>

        <WidgetMainBoard
          onDragOver={onDragOver}
          onDrop={onDrop}
          draggedWidgets={draggedWidgets}
        />

        <WidgetSideWrapper>
          <WidgetSectionWrapper title="" type={WidgetType.NULL}>
            No data
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Dispatch" type={WidgetType.DISPATCH}>
            No data
          </WidgetSectionWrapper>
          <WidgetNotes draggable />
        </WidgetSideWrapper>
      </WidgetPageWrapper>
    </DashboardLayout>
  );
}

export default WidgetPage;
