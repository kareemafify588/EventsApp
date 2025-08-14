import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: { uid: string; email?: string } | null;
  loading: boolean;
  error?: string;
}

const initialState: AuthState = { user: null, loading: false };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthState['user']>) {
      state.user = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { setUser, setLoading, setError, logout } = slice.actions;
export default slice.reducer;
