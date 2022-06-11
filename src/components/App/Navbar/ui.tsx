import { styled, alpha, InputBase } from '@mui/material';
import { grey } from '@mui/material/colors';
import { isDarkTheme } from '@/theme';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  margin: theme.spacing(0, 4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: isDarkTheme(theme)
    ? alpha(theme.palette.common.white, 0.15)
    : grey[50],
  '&:hover': {
    backgroundColor: isDarkTheme(theme)
      ? alpha(theme.palette.common.white, 0.25)
      : grey[100],
  },
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
