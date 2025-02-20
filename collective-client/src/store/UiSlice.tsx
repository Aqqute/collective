
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  currentStep: number;
  isLoading: boolean;
  error: string | null;
  isDirty: boolean;
}

const initialState: UIState = {
  currentStep: 1,
  isLoading: false,
  error: null,
  isDirty: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setDirty: (state, action: PayloadAction<boolean>) => {
      state.isDirty = action.payload;
    },
  },
});

export const { setCurrentStep, setLoading, setError, setDirty } = uiSlice.actions;
export default uiSlice.reducer;
