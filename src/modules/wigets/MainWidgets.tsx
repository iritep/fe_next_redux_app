/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import {
  useTheme,
  Stack,
  Paper,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { UIFlexSpaceBox, UIFlexCenterBox } from '@/components/UI';
import { isDarkTheme } from '@/theme';
import { useAppDispatch } from '@/hooks';
import { resetWidgetState } from '@/redux/slices';

type Props = {
  title?: string;
  color: 'success' | 'error' | 'secondary' | 'info' | 'warning';
};

function MainWidget({ color, title }: Props) {
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
        No Data
      </UIFlexCenterBox>
    </Stack>
  );
}

export default MainWidget;
