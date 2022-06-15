/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { AppLayout } from '@/layouts';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { UIFlexSpaceBox, UIFlexWrapBox } from '@/components/UI';
import { CustomThemeSwitch } from '@/components/Custom';
import { toggleThemeMode } from '@/redux/slices';
import { loadVehicles, samsaraSelector } from '@/redux/slices';
import { useAppToast } from '@/providers';
import { VehicleCard } from '@/modules/home';
import { VehicleTypes } from '@/types';

function Home() {
  const appToast = useAppToast();
  const dispatch = useAppDispatch();
  const [vehicles, setVehicles] = useState<VehicleTypes.Vehicle[]>([]);
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
        Samara Vehicles
      </Typography>
      <UIFlexWrapBox>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} data={vehicle} />
        ))}
      </UIFlexWrapBox>
    </AppLayout>
  );
}

export default Home;
