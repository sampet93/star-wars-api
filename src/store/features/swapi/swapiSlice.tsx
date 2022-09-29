import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { People } from "../../types";
import { ApplicationState } from "../../types";
import { getPeople } from "../../actions";

const initialState: ApplicationState = {
  loading: false,
  data: [],
  error: null,
};

const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPeople.pending, (state, action) => {
        state.loading = true;
        state.data = [];
        state.error = null;
      })
      .addCase(getPeople.fulfilled, (state, action: PayloadAction<People[]>) => {
        state.loading = false;
        state.data = (action.payload as any).results;
        state.error = null;
      })
      .addCase(getPeople.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default swapiSlice.reducer;
