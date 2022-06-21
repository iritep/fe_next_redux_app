import { ReactNode, DragEvent, ElementType } from 'react';
import {
  useTheme,
  Paper,
  Typography,
  Box,
  Stack,
  Divider,
  SvgIconProps,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { isDarkTheme } from '@/theme';
import { onDragStart } from '@/utils';
import { WidgetType } from '@/types';
import { useAppDispatch } from '@/hooks';
import { deleteWidgetFromDraggedItems } from '@/redux/slices';

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
  type: WidgetType | string;
  draggable?: boolean;
  bordered?: boolean;
  endIcon?: ElementType<SvgIconProps>;
  dropped?: boolean;
  id?: number;
}

export const SectionWrapper = ({
  draggable,
  bordered,
  title,
  type,
  endIcon,
  children,
  dropped,
  id,
}: SectionProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  return (
    <Stack
      draggable={draggable}
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, type)}
      component={Paper}
      spacing={0.5}
      elevation={0}
      variant={isDarkTheme(theme) || bordered ? 'outlined' : 'elevation'}
      sx={{
        borderRadius: 2,
        px: 3,
        py: 2,
        maxWidth: 316,
        position: 'relative',
      }}
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
        {dropped && (
          <Box
            onClick={() => {
              if (id) {
                dispatch(deleteWidgetFromDraggedItems(id));
              }
            }}
            component={CloseIcon}
            fontSize="24px"
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              color: 'red',
              cursor: 'pointer',
            }}
          />
        )}
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
