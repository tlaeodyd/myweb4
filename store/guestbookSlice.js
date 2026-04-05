import { createSlice } from '@reduxjs/toolkit';

const guestbookSlice = createSlice({
  name: 'guestbook',
  initialState: {
    guestbookList: [],
  },
  reducers: {
    setGuestbookList: (state, action) => {
      state.guestbookList = action.payload;
    },
  },
});

export const { setGuestbookList } = guestbookSlice.actions;
export default guestbookSlice.reducer;
