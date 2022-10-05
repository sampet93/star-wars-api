import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchData, SearchOptions } from "./types";
import axios from "axios";
import { FormikSearchFormValues } from "../components/FormikSearchForm";

export const getData = createAsyncThunk(
  "swapi/getData",
  async (data: FormikSearchFormValues, thunkApi) => {
    try {
      const response = await axios.get<SearchData[]>(
        `https://swapi.dev/api/${data.searchOption}/?search=${data.search}`
      );

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
