import { createReducer, on } from '@ngrx/store';
import { updateCustomUserCards, updateSearchResult } from '../actions/app.actions';
import { VideoListStateModel } from '../state.models';

export const initialState: VideoListStateModel = {
  customCards: [],
  searchResult: [],
};

export const reducer = createReducer(
  initialState,
  on(updateSearchResult, (state, { searchResult }) => ({ ...state, searchResult: searchResult })),
  on(updateCustomUserCards, (state, { customCard }) => ({
    ...state,
    customCards: [...state.customCards, customCard],
  })),
);
