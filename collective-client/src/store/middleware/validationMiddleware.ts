import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const validationMiddleware: Middleware<{}, RootState> = 
  store => next => (action: any) => {
    // Pre-process validation
    if (action.type === 'profile/updateBasicInfo') {
      const { title, bio } = action.payload;
      if (title && title.length > 100) {
        return next({
          type: 'ui/setError',
          payload: 'Title must be less than 100 characters'
        });
      }
      if (bio && bio.length > 1000) {
        return next({
          type: 'ui/setError',
          payload: 'Bio must be less than 1000 characters'
        });
      }
    }

    return next(action);
  };