import { UIFlexCenterBox } from '@/components/UI';
import { DashboardLayout } from '@/layouts';
import { Typography } from '@mui/material';

function WidgetPage() {
  return (
    <DashboardLayout title="Widgets">
      <UIFlexCenterBox sx={{ mt: 5 }}>
        <Typography variant="h3">Widget Page</Typography>
      </UIFlexCenterBox>
    </DashboardLayout>
  );
}

export default WidgetPage;
