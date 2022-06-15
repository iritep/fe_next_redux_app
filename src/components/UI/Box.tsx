import { styled, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { isDarkTheme } from '@/theme';

export const UIFlexWrapBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

export const UIFlexSpaceBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const UIFlexCenterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const UIFlexColumnBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const UILayoutMain = styled('main')(({ theme }) =>
  !isDarkTheme(theme) ? { backgroundColor: grey['100'] } : undefined
);
