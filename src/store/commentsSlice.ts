import {createSlice} from '@reduxjs/toolkit';
import {IReview} from '../types/types';
import {fetchComments} from './actions';

interface IComments {
  comments?: IReview[];
}

const initialState: IComments = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {},
  extraReducers:
  (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }

});

export const commentsReducer = commentsSlice.reducer;
