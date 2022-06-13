/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, ElementType } from 'react';
import {
  useTheme,
  Paper,
  Typography,
  Box,
  Stack,
  Divider,
  SvgIconProps,
} from '@mui/material';
import { UIFlexSpaceBox } from '@/components/UI';
import { isDarkTheme } from '@/theme';

interface WrapperProps {
  children: ReactNode | ReactNode[];
}

export const PageWrapper = ({ children }: WrapperProps) => {
  return (
    <UIFlexSpaceBox sx={{ alignItems: 'flex-start' }}>
      {children}
    </UIFlexSpaceBox>
  );
};

export const SideWrapper = ({ children }: WrapperProps) => {
  return (
    <Box sx={{ width: 350, minHeight: '90vh', p: 4 }}>
      <Stack spacing={3}>{children}</Stack>
    </Box>
  );
};

interface SectionProps extends WrapperProps {
  title: string;
  endIcon?: ElementType<SvgIconProps>;
}

export const SectionWrapper = ({ title, endIcon, children }: SectionProps) => {
  const theme = useTheme();
  return (
    <Stack
      component={Paper}
      spacing={0.5}
      elevation={0}
      variant={isDarkTheme(theme) ? 'outlined' : 'elevation'}
      sx={{ borderRadius: 2, px: 3, py: 2 }}
    >
      <UIFlexSpaceBox>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {title || 'Empty Title'}
        </Typography>
        <Box component={endIcon} fontSize="24px" />
      </UIFlexSpaceBox>
      <Divider />
      <Box sx={{ minHeight: 150 }}>{children}</Box>
    </Stack>
  );
};
