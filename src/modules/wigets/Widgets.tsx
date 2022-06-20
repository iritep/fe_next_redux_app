import {
  Newspaper as NewspaperIcon,
  Chat as ChatIcon,
  LibraryBooks as LibraryBooksIcon,
  BorderColor as BorderColorIcon,
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
  WidgetSectionWrapper,
} from '@/modules/wigets';
import { WidgetType } from '@/types';
import { SectionWrapper } from './Wrappers';

type Props = {
  bordered?: boolean;
  draggable?: boolean;
  dropped?: boolean;
  handleDelete?: (type: string) => void;
};

export const WidgetStories = ({
  bordered,
  draggable,
  dropped,
  handleDelete,
}: Props) => (
  <SectionWrapper
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.STORY}
    title="Today's Top Stories"
    endIcon={NewspaperIcon}
    dropped={dropped}
    handleDelete={handleDelete}
  >
    {widgetStoryItems.map((item) => (
      <WidgetMiniItemStory key={item.id} item={item} />
    ))}
  </SectionWrapper>
);

export const WidgetConvs = ({
  bordered,
  draggable,
  dropped,
  handleDelete,
}: Props) => (
  <WidgetSectionWrapper
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.CONVERSATION}
    title="Conversations"
    endIcon={ChatIcon}
    dropped={dropped}
    handleDelete={handleDelete}
  >
    {widgetConvItems.map((item) => (
      <WidgetMiniItemConv key={item.id} />
    ))}
  </WidgetSectionWrapper>
);

export const WidgetDocs = ({
  bordered,
  draggable,
  dropped,
  handleDelete,
}: Props) => (
  <WidgetSectionWrapper
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.DOCUMENT}
    title="Documents"
    endIcon={LibraryBooksIcon}
    dropped={dropped}
    handleDelete={handleDelete}
  >
    {widgetDocItems.map((item) => (
      <WidgetMiniItemDoc key={item.id} />
    ))}
  </WidgetSectionWrapper>
);

export const WidgetNotes = ({
  bordered,
  draggable,
  dropped,
  handleDelete,
}: Props) => (
  <WidgetSectionWrapper
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.NOTE}
    title="Notes"
    endIcon={BorderColorIcon}
    dropped={dropped}
    handleDelete={handleDelete}
  >
    {widgetNoteItems.map((item) => (
      <WidgetMiniItemNote key={item.id} item={item} />
    ))}
  </WidgetSectionWrapper>
);
