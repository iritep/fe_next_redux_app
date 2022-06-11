import { Stack, Box, Typography } from '@mui/material';
import { AppLayout } from '@/layouts';

function Home() {
  return (
    <AppLayout>
      <Stack component={Box} spacing={2}>
        {[...new Array(50)].map((_, index) => (
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
