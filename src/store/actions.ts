import { createAsyncThunk } from "@reduxjs/toolkit";
import { People } from "./types";
import axios from "axios";

export const getPeople = createAsyncThunk("swapi/getPeople", async (data: string, thunkApi) => {
  try {
    const response = await axios.get<People[]>(`https://swapi.dev/api/people/?search=${data}`);
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});
