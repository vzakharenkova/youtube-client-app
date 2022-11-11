import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoListStateModel } from '../state.models';

export const selectVideoState = createFeatureSelector<VideoListStateModel>('videoList');

export const selectSearchResult = createSelector(
  selectVideoState,
  (state: VideoListStateModel) => state.searchResult,
);
