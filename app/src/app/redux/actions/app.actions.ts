import { createAction, props } from '@ngrx/store';
import { CustomCardModel } from 'src/app/card-creator/models/customCard.model';
import { VideoItem } from 'src/app/shared/models/video-item.model';

export const updateSearchResult = createAction(
  '[VIDEO_LIST] Update Search Result',
  props<{ searchResult: VideoItem[] }>(),
);
export const updateCustomUserCards = createAction(
  '[VIDEO_LIST] Update Custom User Cards',
  props<{ customCard: CustomCardModel }>(),
);

export const filterSearchResult = createAction(
  '[VIDEO_LIST] Filter Search Result',
  // props<{ searchResult: VideoItem[] }>(),
);
