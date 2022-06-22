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
  id?: number;
};

export const WidgetStories = ({ bordered, draggable, dropped, id }: Props) => (
  <SectionWrapper
    color="success"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.STORY}
    title="Today's Top Stories"
    endIcon={NewspaperIcon}
    dropped={dropped}
    id={id}
  >
    {widgetStoryItems.map((item) => (
      <WidgetMiniItemStory key={item.id} item={item} />
    ))}
  </SectionWrapper>
);

export const WidgetConvs = ({ bordered, draggable, dropped, id }: Props) => (
  <WidgetSectionWrapper
    color="info"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.CONVERSATION}
    title="Conversations"
    endIcon={ChatIcon}
    dropped={dropped}
    id={id}
  >
    {widgetConvItems.map((item) => (
      <WidgetMiniItemConv key={item.id} />
    ))}
  </WidgetSectionWrapper>
);

export const WidgetDocs = ({ bordered, draggable, dropped, id }: Props) => (
  <WidgetSectionWrapper
    color="success"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.DOCUMENT}
    title="Documents"
    endIcon={LibraryBooksIcon}
    dropped={dropped}
    id={id}
  >
    {widgetDocItems.map((item) => (
      <WidgetMiniItemDoc key={item.id} />
    ))}
  </WidgetSectionWrapper>
);

export const WidgetNotes = ({ bordered, draggable, dropped, id }: Props) => (
  <WidgetSectionWrapper
    color="warning"
    bordered={bordered}
    draggable={draggable}
    type={WidgetType.NOTE}
    title="Notes"
    endIcon={BorderColorIcon}
    dropped={dropped}
    id={id}
  >
    {widgetNoteItems.map((item) => (
      <WidgetMiniItemNote key={item.id} item={item} />
    ))}
  </WidgetSectionWrapper>
);
