import { createAction, props } from '@ngrx/store';
import { AnimeState } from '../reducers/anime.reducer';

export const initAnime = createAction(
  '@anime/init',
  props<{ animes: AnimeState | any }>()
);
