/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, DragEvent, ElementType, useState } from 'react';
import {
  useTheme,
  Paper,
  Typography,
  Box,
  Stack,
  Divider,
  SvgIconProps,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { isDarkTheme } from '@/theme';
import { onDragStart } from '@/utils';
import { WidgetType } from '@/types';
import { useAppDispatch } from '@/hooks';
import { resetWidgetState } from '@/redux/slices';

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

interface MiniProps extends WrapperProps {
  color: 'success' | 'error' | 'secondary' | 'info' | 'warning';
  title: string;
  type: WidgetType;
  draggable?: boolean;
  bordered?: boolean;
  endIcon?: ElementType<SvgIconProps>;
  dropped?: boolean;
}

export const MiniWrapper = ({
  color,
  draggable,
  bordered,
  title,
  type,
  endIcon,
  children,
  dropped,
}: MiniProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleDragStart = (event: DragEvent<HTMLSpanElement>) => {
    onDragStart(event, type);
  };

  const handleRemoveWidget = () => {
    dispatch(resetWidgetState());
  };

  return (
    <Stack
      draggable={draggable}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onDragStart={handleDragStart}
      component={Paper}
      spacing={0.5}
      elevation={draggable ? 4 : 0}
      variant={isDarkTheme(theme) || bordered ? 'outlined' : 'elevation'}
      sx={(theme) => ({
        borderRadius: '4px 4px 8px 8px',
        borderTop: `4px solid ${theme.palette[color].main}`,
        px: 3,
        py: 2,
        maxWidth: 316,
        position: 'relative',
      })}
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
        {dropped && isShown && (
          <Paper
            component={IconButton}
            elevation={0}
            size="small"
            variant={isDarkTheme(theme) || bordered ? 'outlined' : 'elevation'}
            onClick={handleRemoveWidget}
            sx={{
              borderRadius: 34,
              position: 'absolute',
              right: -15,
              top: -15,
              cursor: 'pointer',
            }}
          >
            <CloseIcon />
          </Paper>
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

type Props = {
  title?: string;
  color: 'success' | 'error' | 'secondary' | 'info' | 'warning';
  children: ReactNode | ReactNode[];
};

export const WideWrapper = ({ color, title, children }: Props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleRemoveWidget = () => {
    dispatch(resetWidgetState());
  };
  return (
    <Stack
      spacing={0.5}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      component={Paper}
      variant="outlined"
      sx={{
        borderRadius: '4px 4px 8px 8px',
        borderTop: `4px solid ${theme.palette[color].main}`,
        px: 3,
        py: 2,
        position: 'relative',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 900 }}>
        {title || 'Empty Title'}
      </Typography>
      <UIFlexSpaceBox>
        {isShown ? (
          <Paper
            component={IconButton}
            size="small"
            elevation={5}
            variant={isDarkTheme(theme) ? 'outlined' : 'elevation'}
            onClick={handleRemoveWidget}
            sx={{
              borderRadius: 34,
              position: 'absolute',
              right: -20,
              top: -20,
              cursor: 'pointer',
            }}
          >
            <CloseIcon />
          </Paper>
        ) : null}
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
