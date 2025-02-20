import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '../types';

const initialState: Profile = {
  title: '',
  bio: '',
  skills: [],
  jobPreferences: {
    type: [],
    availability: [],
    projectLength: [],
    workHours: []
  },
  portfolio: []
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateBasicInfo: (state, action: PayloadAction<{ title: string; bio: string }>) => {
      state.title = action.payload.title;
      state.bio = action.payload.bio;
    },
    updateProfileImage: (state, action: PayloadAction<string>) => {
      state.profileImage = action.payload;
    },
    addSkill: (state, action: PayloadAction<string>) => {
      if (state.skills.length < 20) {
        state.skills.push(action.payload);
      }
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter(skill => skill !== action.payload);
    },
    updateJobPreferences: (state, action: PayloadAction<Partial<Profile['jobPreferences']>>) => {
      state.jobPreferences = { ...state.jobPreferences, ...action.payload };
    }
  }
});

export const { 
  updateBasicInfo, 
  updateProfileImage, 
  addSkill, 
  removeSkill, 
  updateJobPreferences 
} = profileSlice.actions;
export default profileSlice.reducer;