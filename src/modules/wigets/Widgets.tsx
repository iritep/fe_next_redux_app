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
  draggable?: boolean;
};

export const WidgetStories = ({ draggable }: Props) => (
  <SectionWrapper
    draggable={draggable}
    type={WidgetType.STORY}
    title="Today's Top Stories"
    endIcon={NewspaperIcon}
  >
    {widgetStoryItems.map((item) => (
      <WidgetMiniItemStory key={item.id} item={item} />
    ))}
  </SectionWrapper>
);

export const WidgetConvs = ({ draggable }: Props) => (
  <WidgetSectionWrapper
    draggable={draggable}
    type={WidgetType.CONVERSATION}
    title="Conversations"
    endIcon={ChatIcon}
  >
    {widgetConvItems.map((item) => (
      <WidgetMiniItemConv key={item.id} item={item} />
    ))}
  </WidgetSectionWrapper>
);

export const WidgetDocs = ({ draggable }: Props) => (
  <WidgetSectionWrapper
    draggable={draggable}
    type={WidgetType.DOCUMENT}
    title="Documents"
    endIcon={LibraryBooksIcon}
  >
    {widgetDocItems.map((item) => (
      <WidgetMiniItemDoc key={item.id} item={item} />
    ))}
  </WidgetSectionWrapper>
);

export const WidgetNotes = ({ draggable }: Props) => (
  <WidgetSectionWrapper
    draggable={draggable}
    type={WidgetType.NOTE}
    title="Notes"
    endIcon={BorderColorIcon}
  >
    {widgetNoteItems.map((item) => (
      <WidgetMiniItemNote key={item.id} item={item} />
    ))}
  </WidgetSectionWrapper>
);
