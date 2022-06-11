import { UIFlexCenterBox } from '@/components/UI';
import { AppLayout } from '@/layouts';
import { Typography } from '@mui/material';

function WidgetPage() {
  return (
    <AppLayout>
      <UIFlexCenterBox sx={{ mt: 5 }}>
        <Typography variant="h3">Home Page</Typography>
      </UIFlexCenterBox>
    </AppLayout>
  );
}

export default WidgetPage;
