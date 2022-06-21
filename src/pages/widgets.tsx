import { useEffect } from 'react';
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
import { ResponseStatus, WidgetType } from '@/types';
import { useAppToast } from '@/providers';
import { useStoryData } from '@/hooks';

function WidgetPage() {
  const appToast = useAppToast();

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

  return (
    <DashboardLayout title="Widgets">
      <WidgetPageWrapper>
        <WidgetSideWrapper>
          <WidgetStories draggable />
          <WidgetConvs draggable />
          <WidgetDocs draggable />
        </WidgetSideWrapper>

        <WidgetMainBoard />

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
