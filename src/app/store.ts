import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/store/authSlice';
import favoritesReducer from '../features/favorites/store/favoritesSlice';
import eventsReducer from '../features/events/store/eventsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
    events: eventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
