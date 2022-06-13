import { ReactNode } from 'react';
import { styled, Toolbar } from '@mui/material';
import { grey } from '@mui/material/colors';
import { UILayoutWrapper } from '@/components/UI';
import { AppSEO, AppNavbar, AppHelper } from '@/components/App';
import { isDarkTheme } from '@/theme';

const StyledMain = styled('main')(
  ({ theme }) =>
    !isDarkTheme(theme) && {
      backgroundColor: grey['100'],
    }
);

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

function DashboardLayout(props: Props) {
  return (
    <UILayoutWrapper>
      <Toolbar />
      <AppSEO title={props.title} description="" />
      <AppNavbar isAuthenticated />
      <StyledMain>{props.children}</StyledMain>
      <AppHelper />
    </UILayoutWrapper>
  );
}

export default DashboardLayout;
