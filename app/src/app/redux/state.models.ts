import { CustomCardModel } from '../card-creator/models/customCard.model';
import { VideoItem } from '../shared/models/video-item.model';

export interface VideoListStateModel {
  customCards: CustomCardModel[];
  searchResult: VideoItem[];
}
