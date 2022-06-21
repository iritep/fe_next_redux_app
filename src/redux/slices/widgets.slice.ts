import { ReduxStateTypes, WidgetTypes } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

const initialState: ReduxStateTypes.WidgetsState = {
  draggedWidgets: [],
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<WidgetTypes.Widget>) => {
      const { payload } = action;
      state.draggedWidgets = [payload];
    },
    deleteWidget: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      state.draggedWidgets = state.draggedWidgets.filter(
        (widget) => widget.id !== payload
      );
    },
    setPosition: (
      state,
      action: PayloadAction<{ id: number; x: number; y: number }>
    ) => {
      const { x, y, id } = action.payload;

      state.draggedWidgets = state.draggedWidgets.map((widget) => {
        if (widget.id === id) {
          return { ...widget, x, y };
        }
        return widget;
      });
    },
  },
});

const { addWidget, deleteWidget, setPosition } = widgetsSlice.actions;

export const addWidgetToDraggedItems =
  (newWidget: WidgetTypes.Widget): AppThunk =>
  (dispatch) => {
    dispatch(addWidget(newWidget));
  };
export const deleteWidgetFromDraggedItems =
  (id: number): AppThunk =>
  (dispatch) => {
    dispatch(deleteWidget(id));
  };

export const setPositionOfDraggedItem =
  (id: number, x: number, y: number): AppThunk =>
  (dispatch) => {
    dispatch(setPosition({ id, x, y }));
  };

export const widgetsSelector = (state: RootState) => state.widgets;
export default widgetsSlice.reducer;
