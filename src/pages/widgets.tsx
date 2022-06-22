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
import { WidgetType } from '@/types';

function WidgetPage() {
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
          <WidgetSectionWrapper color="error" title="" type={WidgetType.NULL}>
            No data
          </WidgetSectionWrapper>
          <WidgetSectionWrapper
            color="secondary"
            title="Dispatch"
            type={WidgetType.DISPATCH}
          >
            No data
          </WidgetSectionWrapper>
          <WidgetNotes draggable />
        </WidgetSideWrapper>
      </WidgetPageWrapper>
    </DashboardLayout>
  );
}

export default WidgetPage;
