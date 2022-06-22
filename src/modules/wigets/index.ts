export {
  PageWrapper as WidgetPageWrapper,
  SideWrapper as WidgetSideWrapper,
  MiniWrapper as WidgetMiniWrapper,
  WideWrapper as WidgetWideWrapper,
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

export {
  WidgetWideStories,
  WidgetWideConvs,
  WidgetWideDocs,
  WidgetWideNotes,
  WidgetWideDispatch,
  WidgetWideUsers,
} from './WideWidgets';

export { miniLeftWidgets, miniRightWidgets, renderMiniWidget } from './logic';
