
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading, setError } from '../UiSlice';
import { Profile } from '../../types/profile';

export const saveProfile = createAsyncThunk(
  'profile/save',
  async (profile: Profile, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would normally make an API call to save the profile
      // const response = await api.saveProfile(profile);
      
      dispatch(setLoading(false));
      return profile;
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'An error occurred'));
      dispatch(setLoading(false));
      throw error;
    }
  }
);