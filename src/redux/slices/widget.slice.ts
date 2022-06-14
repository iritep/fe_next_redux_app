import { AxiosError } from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import {
  PaginateParam,
  ResponseStatus,
  ReduxStateTypes,
  WidgetTypes,
} from '@/types';
import { widgetApi } from '@/redux/api';

const initialState: ReduxStateTypes.WidgetState = {
  stories: {
    loading: false,
    data: null,
    status: null,
  },
};

export const loadStories = createAsyncThunk<
  WidgetTypes.Story[],
  PaginateParam,
  { state: RootState }
>(`widgets/loadStories`, async (params, thunkAPI) => {
  try {
    return await widgetApi.retrieveStories(params);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

const widgetSlice = createSlice({
  name: `widget`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadStories.pending, (state) => {
        state.stories.status = ResponseStatus.PENDING;
        state.stories.loading = true;
      })
      .addCase(loadStories.fulfilled, (state, { payload }) => {
        state.stories.status = ResponseStatus.SUCCESS;
        state.stories.data = payload;
        state.stories.loading = false;
      })
      .addCase(loadStories.rejected, (state) => {
        state.stories.status = ResponseStatus.FAILED;
        state.stories.data = null;
        state.stories.loading = false;
      });
  },
});

export const widgetSelector = (state: RootState) => state.widget;
export default widgetSlice.reducer;
