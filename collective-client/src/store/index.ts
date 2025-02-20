// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './ProfileSlice';
import uiReducer from './UiSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['profile/uploadFile'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.file'],
        // Ignore these paths in the state
        ignoredPaths: ['profile.files'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

