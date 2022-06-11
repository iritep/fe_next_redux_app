import { ReactNode } from 'react';
import { Toolbar } from '@mui/material';
import { UILayoutWrapper } from '@/components/UI';
import { AppSEO, AppNavbar, AppHelper } from '@/components/App';

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
      {props.children}
      <AppHelper />
    </UILayoutWrapper>
  );
}

export default DashboardLayout;
