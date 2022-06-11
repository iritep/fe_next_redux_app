import { ChangeEvent, useState } from 'react';
import { Stack, Container, Typography } from '@mui/material';
import { AppLayout } from '@/layouts';
import { useAppDispatch } from '@/hooks';
import { UIFlexSpaceBox } from '@/components/UI';
import { CustomThemeSwitch } from '@/components/Custom';
import { toggleThemeMode } from '@/redux/slices';

function Home() {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState<boolean>(true);

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    dispatch(toggleThemeMode());
  };

  return (
    <AppLayout>
      <UIFlexSpaceBox>
        <Typography variant="h5">Home</Typography>
        <CustomThemeSwitch checked={checked} onChange={handleThemeChange} />
      </UIFlexSpaceBox>
      <Stack component={Container} maxWidth="xs" spacing={2} sx={{ my: 5 }}>
        {[...new Array(25)].map((_, index) => (
          <Typography variant="body1" key={index}>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.
          </Typography>
        ))}
      </Stack>
    </AppLayout>
  );
}

export default Home;
