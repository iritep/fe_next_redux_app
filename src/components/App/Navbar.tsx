/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { styled, AppBar, Box, Container, Toolbar, Button } from '@mui/material';
import { UIFlexSpaceBox } from '@/components/UI';
import { appImageLoader } from '@/libs/image-loader';

const AppLogoImage = styled(Image)({
  flexGrow: 1,
});

function AppNavbar() {
  const router = useRouter();

  return (
    <AppBar color="inherit">
      <Toolbar component={Container}>
        <AppLogoImage
          src="images/logo.png"
          loader={appImageLoader}
          width={50}
          height={50}
          onClick={() => router.push('/')}
          alt="logo"
        />
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button
          variant="text"
          size="small"
          color="success"
          onClick={() => router.push('/widgets')}
        >
          Widgets
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppNavbar;
