export {
  PageWrapper as WidgetPageWrapper,
  SideWrapper as WidgetSideWrapper,
  MiniWrapper as WidgetMiniWrapper,
} from './Wrappers';

export { default as WidgetMainBoard } from './MainBoard';

export {
  MiniItemConv as WidgetMiniItemConv,
  MiniItemStory as WidgetMiniItemStory,
  MiniItemDoc as WidgetMiniItemDoc,
  MiniItemNote as WidgetMiniItemNote,
} from './MiniItems';

export {
  WidgetMiniStories,
  WidgetMiniConvs,
  WidgetMiniDocs,
  WidgetMiniNotes,
  WidgetMiniDispatch,
  WidgetMiniUsers,
} from './MiniWidgets';

export { miniLeftWidgets, miniRightWidgets } from './logic';

export { default as MainWidget } from './MainWidgets';
