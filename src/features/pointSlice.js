import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPoints = createAsyncThunk('points/getPoints', async () => {
  const response = await axios.get(
    `https://geoserver.mapid.io/layers_new/get_layer?api_key=689c2279e0834a3ba82743432605e746&layer_id=628f1d7c84b953e79a7cd896&project_id=611eafa6be8a2635e15c4afc`
  );
  return response.data.geojson.features;
});

const pointEntity = createEntityAdapter({
  selectId: (point) => point.key,
});

const pointSlice = createSlice({
  name: 'map',
  initialState: pointEntity.getInitialState(),
  extraReducers: {
    [getPoints.fulfilled]: (state, action) => {
      pointEntity.setAll(state, action.payload);
    },
  },
});

export const pointSelectors = pointEntity.getSelectors((state) => state.point);
export default pointSlice.reducer;
