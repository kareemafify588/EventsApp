import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { EventItem, GetEventsParams } from '../../../shared/types';
import { getEventByIdApi, getEventsApi } from '../services/eventsApi';

interface EventsState {
  list: EventItem[];
  selectedEvent?: EventItem;
  loading: boolean;
  error?: string;
  searchTerm: string;
}

const initialState: EventsState = {
  list: [],
  loading: false,
  searchTerm: '',
};

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as { events: EventsState };
      return await getEventsApi({ search: state.events.searchTerm });
    } catch (err: any) {
      return rejectWithValue(err.message || 'Failed to load events');
    }
  },
);
export const fetchEventById = createAsyncThunk(
  'events/fetchEventById',
  async (id: string, { rejectWithValue }) => {
    try {
      return await getEventByIdApi(id);
    } catch (err: any) {
      return rejectWithValue(err.message || 'Failed to load event');
    }
  },
);

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    clearSelectedEvent: state => {
      state.selectedEvent = undefined;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, state => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(
        fetchEvents.fulfilled,
        (state, action: PayloadAction<EventItem[]>) => {
          state.loading = false;
          state.list = action.payload;
        },
      )
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchEventById.pending, state => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(
        fetchEventById.fulfilled,
        (state, action: PayloadAction<EventItem>) => {
          state.loading = false;
          state.selectedEvent = action.payload;
        },
      )
      .addCase(fetchEventById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedEvent, setSearchTerm } = eventsSlice.actions;
export default eventsSlice.reducer;
