/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Newspaper as NewspaperIcon,
  Chat as ChatIcon,
  LibraryBooks as LibraryBooksIcon,
  BorderColor as BorderColorIcon,
  Group as GroupIcon,
} from '@mui/icons-material';
import {
  widgetStoryItems,
  widgetConvItems,
  widgetDocItems,
  widgetNoteItems,
} from '@/constants/mock-data';
import {
  WidgetMiniItemStory,
  WidgetMiniItemConv,
  WidgetMiniItemDoc,
  WidgetMiniItemNote,
  WidgetWideWrapper,
} from '@/modules/wigets';

export const WidgetWideStories = () => (
  <WidgetWideWrapper color="success" title="Today's Top Stories">
    {widgetStoryItems.map((item) => (
      <WidgetMiniItemStory key={item.id} item={item} />
    ))}
  </WidgetWideWrapper>
);

export const WidgetWideConvs = () => (
  <WidgetWideWrapper color="info" title="Conversations">
    {widgetConvItems.map((item) => (
      <WidgetMiniItemConv key={item.id} />
    ))}
  </WidgetWideWrapper>
);

export const WidgetWideDocs = () => (
  <WidgetWideWrapper color="success" title="Documents">
    {widgetDocItems.map((item) => (
      <WidgetMiniItemDoc key={item.id} />
    ))}
  </WidgetWideWrapper>
);

export const WidgetWideNotes = () => (
  <WidgetWideWrapper color="warning" title="Notes">
    {widgetNoteItems.map((item) => (
      <WidgetMiniItemNote key={item.id} item={item} />
    ))}
  </WidgetWideWrapper>
);

export const WidgetWideDispatch = () => (
  <WidgetWideWrapper color="secondary" title="Dispatch">
    No data
  </WidgetWideWrapper>
);

export const WidgetWideUsers = () => (
  <WidgetWideWrapper color="error" title="Users">
    No data
  </WidgetWideWrapper>
);
