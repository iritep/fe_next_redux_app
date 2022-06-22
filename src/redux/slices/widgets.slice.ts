import { ReduxStateTypes } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '@/redux/store';
import { miniLeftWidgets, miniRightWidgets } from '@/modules/wigets';
import { WidgetType } from '@/types';

const initialState: ReduxStateTypes.WidgetState = {
  draggableWidgets: {
    left: miniLeftWidgets,
    right: miniRightWidgets,
  },
  droppedWidget: undefined,
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    dropNewWidget: (state, action: PayloadAction<WidgetType | string>) => {
      const { payload } = action;
      state.draggableWidgets.left = miniLeftWidgets.filter(
        (el) => el.type !== payload
      );
      state.draggableWidgets.right = miniRightWidgets.filter(
        (el) => el.type !== payload
      );
      state.droppedWidget = miniLeftWidgets
        .concat(miniRightWidgets)
        .find((el) => el.type === payload);
    },
    resetState: (state) => {
      state.draggableWidgets.left = miniLeftWidgets;
      state.draggableWidgets.right = miniRightWidgets;
      state.droppedWidget = undefined;
    },
  },
});

const { dropNewWidget, resetState } = widgetsSlice.actions;

export const dropWidget =
  (type: WidgetType | string): AppThunk =>
  (dispatch) => {
    dispatch(dropNewWidget(type));
  };

export const resetWidgetState = (): AppThunk => (dispatch) => {
  dispatch(resetState());
};

export const widgetSelector = (state: RootState) => state.widgets;
export default widgetsSlice.reducer;
