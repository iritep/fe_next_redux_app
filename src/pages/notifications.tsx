import { UIFlexCenterBox } from '@/components/UI';
import { DashboardLayout } from '@/layouts';
import { Typography } from '@mui/material';

function NotificationPage() {
  return (
    <DashboardLayout title="Notifications">
      <UIFlexCenterBox sx={{ mt: 5 }}>
        <Typography variant="h3">Notification Page</Typography>
      </UIFlexCenterBox>
    </DashboardLayout>
  );
}

export default NotificationPage;
