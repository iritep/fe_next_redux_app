import { DashboardLayout } from '@/layouts';
import {
  WidgetStories,
  WidgetConvs,
  WidgetDocs,
  WidgetNotes,
  WidgetPageWrapper,
  WidgetSideWrapper,
  WidgetMiniWrapper,
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
          <WidgetMiniWrapper color="error" title="" type={WidgetType.NULL}>
            No data
          </WidgetMiniWrapper>
          <WidgetMiniWrapper
            color="secondary"
            title="Dispatch"
            type={WidgetType.DISPATCH}
          >
            No data
          </WidgetMiniWrapper>
          <WidgetNotes draggable />
        </WidgetSideWrapper>
      </WidgetPageWrapper>
    </DashboardLayout>
  );
}

export default WidgetPage;
