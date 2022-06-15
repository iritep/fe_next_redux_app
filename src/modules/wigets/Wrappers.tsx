/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, ElementType, DragEvent, useState } from 'react';
import {
  useTheme,
  Paper,
  Typography,
  Box,
  Stack,
  Divider,
  SvgIconProps,
} from '@mui/material';
import { onDragStart } from '@/utils';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { isDarkTheme } from '@/theme';
import { WidgetItemType } from '@/types';

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
    <Box sx={{ width: 380, minHeight: '90vh', p: 4 }}>
      <Stack spacing={3}>{children}</Stack>
    </Box>
  );
};

interface SectionProps extends WrapperProps {
  title: string;
  type?: WidgetItemType | undefined;
  draggable?: boolean;
  endIcon?: ElementType<SvgIconProps>;
}

export const SectionWrapper = ({
  title,
  type,
  draggable,
  endIcon,
  children,
}: SectionProps) => {
  const theme = useTheme();
  return (
    <Stack
      component={Paper}
      spacing={0.5}
      elevation={0}
      draggable={draggable}
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, type)}
      variant={isDarkTheme(theme) ? 'outlined' : 'elevation'}
      sx={{ borderRadius: 2, px: 3, py: 2 }}
    >
      <UIFlexSpaceBox>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600 }}
          color={theme.palette.grey['800']}
        >
          {title || 'Empty Title'}
        </Typography>
        <Box
          component={endIcon}
          fontSize="24px"
          color={theme.palette.grey['800']}
        />
      </UIFlexSpaceBox>
      <Divider />
      <UIFlexCenterBox
        sx={{
          pt: 0.5,
          minHeight: 150,
          flexWrap: 'wrap',
        }}
      >
        {children}
      </UIFlexCenterBox>
    </Stack>
  );
};
