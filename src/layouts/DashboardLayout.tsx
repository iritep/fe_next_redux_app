import { ReactNode } from 'react';
import { UILayoutWrapper } from '@/components/UI';
import { AppSEO, AppNavbar } from '@/components/App';

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

function DashboardLayout(props: Props) {
  return (
    <UILayoutWrapper>
      <AppSEO title={props.title} description="" />
      <AppNavbar />
      {props.children}
    </UILayoutWrapper>
  );
}

export default DashboardLayout;
