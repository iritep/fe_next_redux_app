import { AxiosError } from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { ResponseStatus, ReduxStateTypes, VehicleTypes } from '@/types';
import { samsaraApi } from '@/redux/api';

const initialState: ReduxStateTypes.SamsaraState = {
  vehicles: {
    loading: false,
    data: null,
    status: null,
  },
};

export const loadVehicles = createAsyncThunk<
  VehicleTypes.ApiRes,
  undefined,
  { state: RootState }
>(`samsara/loadVehicles`, async (_, thunkAPI) => {
  try {
    return await samsaraApi.retrieveVehicles();
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

const samsaraSlice = createSlice({
  name: `samsara`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadVehicles.pending, (state) => {
        state.vehicles.status = ResponseStatus.PENDING;
        state.vehicles.loading = true;
      })
      .addCase(loadVehicles.fulfilled, (state, { payload }) => {
        state.vehicles.status = ResponseStatus.SUCCESS;
        state.vehicles.data = payload.data;
        state.vehicles.loading = false;
      })
      .addCase(loadVehicles.rejected, (state) => {
        state.vehicles.status = ResponseStatus.FAILED;
        state.vehicles.data = null;
        state.vehicles.loading = false;
      });
  },
});

export const samsaraSelector = (state: RootState) => state.samsara;
export default samsaraSlice.reducer;
