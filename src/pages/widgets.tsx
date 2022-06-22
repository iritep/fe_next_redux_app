import { Box } from '@mui/material';
import { DashboardLayout } from '@/layouts';
import {
  WidgetPageWrapper,
  WidgetSideWrapper,
  WidgetMainBoard,
  renderMiniWidget,
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
            <Box key={widget.type}>
              {renderMiniWidget(widget.type, widget.draggable)}
            </Box>
          ))}
        </WidgetSideWrapper>

        <WidgetMainBoard />

        <WidgetSideWrapper>
          {draggableWidgets.right.map((widget) => (
            <Box key={widget.type}>
              {renderMiniWidget(widget.type, widget.draggable)}
            </Box>
          ))}
        </WidgetSideWrapper>
      </WidgetPageWrapper>
    </DashboardLayout>
  );
}

export default WidgetPage;
