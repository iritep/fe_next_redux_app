import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  Button,
  Container,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
} from '@mui/icons-material';
import { appImageLoader } from '@/libs/image-loader';
import { Search, SearchIconWrapper, StyledInputBase } from './ui';
import { MobileMenu, DesktopMenu } from './Menus';

interface Props {
  isAuthenticated?: boolean;
}

function AppNavbar({ isAuthenticated }: Props) {
  const router = useRouter();
  const menuId = 'appbar-desktop-menu';
  const mobileMenuId = 'appbar-mobile-menu';
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit">
        <Toolbar component={isAuthenticated ? Box : Container}>
          <Image
            src="images/logo.png"
            loader={appImageLoader}
            width={50}
            height={50}
            onClick={() => router.push('/')}
            alt="logo"
          />
          {isAuthenticated && (
            <React.Fragment>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => router.push('/settings')}
                >
                  <SettingsIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={() => router.push('/notifications')}
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircleIcon fontSize="large" />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </React.Fragment>
          )}
          {!isAuthenticated && (
            <React.Fragment>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Button
                size="small"
                variant="text"
                color="info"
                onClick={() => router.push('/widgets')}
              >
                Widgets
              </Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      <MobileMenu
        anchorEl={anchorEl}
        menuId={mobileMenuId}
        isMenuOpen={isMobileMenuOpen}
        onClose={handleMenuClose}
        onMainMenuClick={handleProfileMenuOpen}
      />
      <DesktopMenu
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        onClose={handleMenuClose}
      />
    </Box>
  );
}

export default AppNavbar;
