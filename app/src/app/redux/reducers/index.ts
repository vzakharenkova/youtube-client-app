import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { VideoListStateModel } from '../state.models';
import { reducer } from './app.reducer';

export interface State {
  videoList: VideoListStateModel;
}

export const reducers: ActionReducerMap<State> = {
  videoList: reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
