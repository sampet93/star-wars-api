import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchData, SearchOptions } from "../../types";
import { ApplicationState } from "../../types";
import { getData } from "../../actions";

const initialState: ApplicationState = {
  loading: false,
  data: [],
  error: null,
  searchOption: SearchOptions.PEOPLE,
};

const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state, { meta }) => {
        state.loading = true;
        state.data = [];
        state.searchOption = meta.arg.searchOption;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action: PayloadAction<SearchData[]>) => {
        state.loading = false;
        state.data = (action.payload as any).results;
        state.error = null;
      })
      .addCase(getData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default swapiSlice.reducer;
