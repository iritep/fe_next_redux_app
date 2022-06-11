import { UIFlexCenterBox } from '@/components/UI';
import { DashboardLayout } from '@/layouts';
import { Typography } from '@mui/material';

function SettingPage() {
  return (
    <DashboardLayout title="Settings">
      <UIFlexCenterBox sx={{ mt: 5 }}>
        <Typography variant="h3">Setting Page</Typography>
      </UIFlexCenterBox>
    </DashboardLayout>
  );
}

export default SettingPage;
