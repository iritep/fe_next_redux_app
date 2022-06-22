import { ReduxStateTypes, WidgetJSON } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '@/redux/store';
import { miniLeftWidgets, miniRightWidgets } from '@/modules/wigets';
import { WidgetType } from '@/types';

const initialState: ReduxStateTypes.WidgetState = {
  draggableWidgets: {
    left: miniLeftWidgets,
    right: miniRightWidgets,
  },
  draggedWidgets: [],
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
    },
    addWidget: (state, action: PayloadAction<WidgetJSON.Widget>) => {
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

const { addWidget, deleteWidget, setPosition, dropNewWidget } =
  widgetsSlice.actions;

export const addWidgetToDraggedItems =
  (newWidget: WidgetJSON.Widget): AppThunk =>
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

export const dropWidget =
  (type: WidgetType | string): AppThunk =>
  (dispatch) => {
    dispatch(dropNewWidget(type));
  };

export const widgetSelector = (state: RootState) => state.widgets;
export default widgetsSlice.reducer;
