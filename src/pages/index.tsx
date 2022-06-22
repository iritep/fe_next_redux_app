import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { AppLayout } from '@/layouts';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { UIFlexSpaceBox, UIFlexWrapBox } from '@/components/UI';
import { CustomThemeSwitch } from '@/components/Custom';
import { toggleThemeMode } from '@/redux/slices';
import { loadVehicles, samsaraSelector } from '@/redux/slices';
import { useAppToast } from '@/providers';
import { VehicleCard } from '@/modules/home';
import { VehicleJSON } from '@/types';

function Home() {
  const appToast = useAppToast();
  const dispatch = useAppDispatch();
  const [vehicles, setVehicles] = useState<VehicleJSON.Vehicle[]>([]);
  const [checked, setChecked] = useState<boolean>(true);
  const {
    vehicles: { loading, data, status },
  } = useAppSelector(samsaraSelector);

  useEffect(() => {
    if (!loading && data) {
      setVehicles(data);
    }

    if (!loading && status === 'failed') {
      appToast('error', 'Failed to load the vechicles on the Samara API!');
    }
  }, [loading, data, status]);

  useEffect(() => {
    dispatch(loadVehicles());
  }, []);

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    dispatch(toggleThemeMode());
  };

  return (
    <AppLayout title="Home">
      <UIFlexSpaceBox>
        <Typography variant="h5">Home</Typography>
        <CustomThemeSwitch checked={checked} onChange={handleThemeChange} />
      </UIFlexSpaceBox>
      <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
        Samsara Vehicles
      </Typography>
      <UIFlexWrapBox>
        {loading &&
          !data &&
          [...new Array(4)].map((_, index) => (
            <Box key={index} sx={{ minWidth: 275 }}>
              <Skeleton variant="rectangular" width={275} height={118} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="90%" />
                <Skeleton width="75%" />
                <Skeleton width="60%" />
              </Box>
            </Box>
          ))}
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} data={vehicle} />
        ))}
      </UIFlexWrapBox>
    </AppLayout>
  );
}

export default Home;
