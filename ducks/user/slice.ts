import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginActionPayload } from '@/interfaces';

export type UserState = {
  count: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export const initialState: UserState = {
  count: 0,
  loading: false,
  error: false,
  errorMessage: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginActionPayload>) => ({
      ...state,
      count: state.count,
    })
  },
});

export default userSlice;
