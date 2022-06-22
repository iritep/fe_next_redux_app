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
  WidgetMiniWrapper,
} from '@/modules/wigets';
import { WidgetJSON, WidgetType } from '@/types';

export const WidgetMiniStories = ({
  id,
  bordered,
  dropped,
  draggable,
}: WidgetJSON.WidgetProps) => (
  <WidgetMiniWrapper
    id={id}
    color="success"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.STORY}
    title="Today's Top Stories"
    endIcon={NewspaperIcon}
    dropped={dropped}
  >
    {widgetStoryItems.map((item) => (
      <WidgetMiniItemStory key={item.id} item={item} />
    ))}
  </WidgetMiniWrapper>
);

export const WidgetMiniConvs = ({
  id,
  bordered,
  draggable,
  dropped,
}: WidgetJSON.WidgetProps) => (
  <WidgetMiniWrapper
    id={id}
    color="info"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.CONVERSATION}
    title="Conversations"
    endIcon={ChatIcon}
    dropped={dropped}
  >
    {widgetConvItems.map((item) => (
      <WidgetMiniItemConv key={item.id} />
    ))}
  </WidgetMiniWrapper>
);

export const WidgetMiniDocs = ({
  bordered,
  draggable,
  dropped,
  id,
}: WidgetJSON.WidgetProps) => (
  <WidgetMiniWrapper
    id={id}
    color="success"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.DOCUMENT}
    title="Documents"
    endIcon={LibraryBooksIcon}
    dropped={dropped}
  >
    {widgetDocItems.map((item) => (
      <WidgetMiniItemDoc key={item.id} />
    ))}
  </WidgetMiniWrapper>
);

export const WidgetMiniNotes = ({
  id,
  bordered,
  draggable,
  dropped,
}: WidgetJSON.WidgetProps) => (
  <WidgetMiniWrapper
    id={id}
    color="warning"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.NOTE}
    title="Notes"
    endIcon={BorderColorIcon}
    dropped={dropped}
  >
    {widgetNoteItems.map((item) => (
      <WidgetMiniItemNote key={item.id} item={item} />
    ))}
  </WidgetMiniWrapper>
);

export const WidgetMiniDispatch = ({
  id,
  bordered,
  draggable,
  dropped,
}: WidgetJSON.WidgetProps) => (
  <WidgetMiniWrapper
    id={id}
    color="secondary"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.DISPATCH}
    title="Dispatch"
    dropped={dropped}
  >
    No data
  </WidgetMiniWrapper>
);

export const WidgetMiniUsers = ({
  id,
  bordered,
  draggable,
  dropped,
}: WidgetJSON.WidgetProps) => (
  <WidgetMiniWrapper
    id={id}
    color="error"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.USER}
    title="Users"
    endIcon={GroupIcon}
    dropped={dropped}
  >
    No data
  </WidgetMiniWrapper>
);
