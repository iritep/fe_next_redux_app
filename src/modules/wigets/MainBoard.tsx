import { Box, Paper, useTheme } from '@mui/material';
import { isDarkTheme } from '@/theme';

function WidgetMainBoard() {
  const theme = useTheme();

  return (
    <Box sx={{ flex: 1, pt: 4 }}>
      <Paper
        sx={{ width: '100%', minHeight: '75vh', p: 2, borderRadius: 3 }}
        elevation={0}
        variant={isDarkTheme(theme) ? 'outlined' : 'elevation'}
      >
        Widget Main Board
      </Paper>
    </Box>
  );
}

export default WidgetMainBoard;
