export {
  default as appReducer,
  appSelector,
  toggleThemeMode,
  setUILoading,
} from './app.slice';

export {
  default as samsaraReducer,
  samsaraSelector,
  loadVehicles,
} from './samsara.slice';

export {
  default as widgetsReducer,
  widgetsSelector,
  addWidgetToDraggedItems,
  deleteWidgetFromDraggedItems,
  setPositionOfDraggedItem,
} from './widgets.slice';
