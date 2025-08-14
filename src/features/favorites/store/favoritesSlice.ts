import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventItem } from '../../../shared/types';

interface FavoritesState {
  items: EventItem[];
  itemsIds: string[];
}

const slice = createSlice({
  name: 'favorites',
  initialState: { items: [], itemsIds: [] } as FavoritesState,
  reducers: {
    setFavorites(state, action: PayloadAction<EventItem[]>) {
      state.items = action.payload;
    },
    addFavorite(state, action: PayloadAction<EventItem>) {
      if (!state.items.includes(action.payload))
        state.items.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.items = state.items.filter(x => x.id !== action.payload);
    },
  },
});

export const { setFavorites, addFavorite, removeFavorite } = slice.actions;
export default slice.reducer;
