import { Box } from '@mui/material';
import { DashboardLayout } from '@/layouts';
import {
  WidgetPageWrapper,
  WidgetSideWrapper,
  WidgetMainBoard,
} from '@/modules/wigets';
import { useAppSelector } from '@/hooks';
import { widgetSelector } from '@/redux/slices';

function WidgetPage() {
  const { draggableWidgets } = useAppSelector(widgetSelector);

  return (
    <DashboardLayout title="Widgets">
      <WidgetPageWrapper>
        <WidgetSideWrapper>
          {draggableWidgets.left.map((widget) => (
            <Box
              component={widget.mini}
              draggable={widget.draggable}
              key={widget.type}
            />
          ))}
        </WidgetSideWrapper>

        <WidgetMainBoard />

        <WidgetSideWrapper>
          {draggableWidgets.right.map((widget) => (
            <Box
              component={widget.mini}
              draggable={widget.draggable}
              key={widget.type}
            />
          ))}
        </WidgetSideWrapper>
      </WidgetPageWrapper>
    </DashboardLayout>
  );
}

export default WidgetPage;
