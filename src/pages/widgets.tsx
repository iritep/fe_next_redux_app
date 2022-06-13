/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography } from '@mui/material';
import {
  Newspaper as NewspaperIcon,
  Chat as ChatIcon,
  LibraryBooks as LibraryBooksIcon,
  BorderColor as BorderColorIcon,
} from '@mui/icons-material';
import { DashboardLayout } from '@/layouts';
import {
  WidgetPageWrapper,
  WidgetSideWrapper,
  WidgetSectionWrapper,
  WidgetMainBoard,
} from '@/modules/wigets';

function WidgetPage() {
  return (
    <DashboardLayout title="Widgets">
      <WidgetPageWrapper>
        <WidgetSideWrapper>
          <WidgetSectionWrapper
            title="Today's Top Stories"
            endIcon={NewspaperIcon}
          >
            Section 1
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Conversations" endIcon={ChatIcon}>
            Section 2
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Documents" endIcon={LibraryBooksIcon}>
            Section 3
          </WidgetSectionWrapper>
        </WidgetSideWrapper>

        <WidgetMainBoard />

        <WidgetSideWrapper>
          <WidgetSectionWrapper title="">Section 4</WidgetSectionWrapper>
          <WidgetSectionWrapper title="Dispatch">
            Section 5
          </WidgetSectionWrapper>
          <WidgetSectionWrapper title="Notes" endIcon={BorderColorIcon}>
            Section 6
          </WidgetSectionWrapper>
        </WidgetSideWrapper>
      </WidgetPageWrapper>
    </DashboardLayout>
  );
}

export default WidgetPage;
