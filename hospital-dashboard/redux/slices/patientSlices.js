import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Async API Fetch
export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    const response = await axios.get(API_URL);

    return response.data;
  }
);

// Async Add Patient
export const addPatient = createAsyncThunk(
  "patients/addPatient",
  async (patient) => {
    const response = await axios.post(API_URL, patient);

    return response.data;
  }
);

const patientSlice = createSlice({
  name: "patients",

  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch Patients
      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add Patient
      .addCase(addPatient.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default patientSlice.reducer;
